const form = document.getElementById("search-form");
const input = document.getElementById("city-search-input");

form.addEventListener('submit', async(e)=> {
    e.preventDefault();
    const city = input.value.trim();

    if(!city){
        alert('Provide a city');
        return;
    }

    try{
        const url = `https://backend-weather-app-pto7.onrender.com`
        const response = await fetch(`${url}/api/weather?city=${encodeURIComponent(city)}`);     
        const data = await response.json();

        if (!response.ok) {
            alert(data.message || 'Error fetching weather data');
            return;
        }
        showWeather(data);
    } catch (error) {
        console.log(error.message);
    }
});

function showWeather(data){
    // document.getElementById("hero-city-name").textContent = `${data.city}, ${data.country}`;
    
    // if (data.temp !== undefined) {
    //     document.getElementById("hero-temp-val").textContent = Math.round(data.temp);
    // }
    
    // if (data.feels_like !== undefined) {
    //     document.getElementById("hero-condition-meta").textContent = `Feels like ${Math.round(data.feels_like)}°C`;
    // }
    
    // if (data.humidity !== undefined) {
    //     document.getElementById("hero-humidity-val").textContent = `${data.humidity}%`;
    // }

    document.getElementById('weatherCity').textContent = `${data.city}, ${data.country}`;
    document.getElementById('weatherTemp').textContent = `${data.temp}°`
    document.getElementById('weatherFeels_like').textContent = `${data.feels_like}°`
    document.getElementById('weatherHumidity').textContent = `${data.humidity}`
    document.getElementById('locationID').textContent = `Location ID: ${data.id}`;
}