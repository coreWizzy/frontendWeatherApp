/**
 * SkyPulse Weather - Next-Gen Weather Intelligence System
 * Core Application Logic & Interactivity
 */

// City Database with detailed weather dynamics
const CITIES_DATA = {
  minsk: {
    name: "Minsk",
    country: "Belarus",
    regionSector: "Eastern Europe Sector • High Resolution Stream",
    condition: "Thunderstorm",
    conditionKey: "storm",
    tempC: 21,
    feelsLikeC: 20,
    windKmh: 13,
    humidity: 24,
    rainChance: 87,
    uvIndex: 3,
    uvLevel: "Moderate",
    uvPercent: 35,
    uvColor: "#f59e0b",
    aqi: 42,
    aqiLevel: "AQI • Good",
    aqiPercent: 25,
    aqiColor: "#10b981",
    barometer: 1014,
    barometerPercent: 60,
    sunrise: "06:12 AM",
    sunset: "08:45 PM",
    daylight: "14h 33m Daylight",
    sunAngle: 42,
    alertTitle: "Severe Thunderstorm Alert",
    alertText: "Heavy rainfall and lightning strikes projected between 11:00 AM and 02:00 PM. Keep an umbrella ready and avoid open elevated zones.",
    radarPin: "Minsk (Storm Center)",
    tomorrow: {
      highC: 20,
      lowC: 17,
      condition: "Rainy - Cloudy",
      windKmh: 9,
      humidity: 31,
      rainChance: 93
    },
    hourly: [
      { time: "10:00", tempC: 23, condition: "Sunny", icon: "sun" },
      { time: "11:00", tempC: 21, condition: "Thunderstorm", icon: "storm", active: true },
      { time: "12:00", tempC: 22, condition: "Rainy", icon: "rain" },
      { time: "01:00", tempC: 19, condition: "Night", icon: "moon" },
      { time: "02:00", tempC: 18, condition: "Overcast", icon: "cloud" },
      { time: "03:00", tempC: 17, condition: "Light Rain", icon: "rain" }
    ],
    sevenDays: [
      { day: "Mon", condition: "Rainy", icon: "rain", highC: 20, lowC: 14 },
      { day: "Tue", condition: "Rainy", icon: "rain-sun", highC: 22, lowC: 16 },
      { day: "Wed", condition: "Storm", icon: "storm", highC: 19, lowC: 13 },
      { day: "Thu", condition: "Cloudy", icon: "cloud", highC: 18, lowC: 12 },
      { day: "Fri", condition: "Thunder", icon: "lightning", highC: 23, lowC: 19 },
      { day: "Sat", condition: "Rainy", icon: "rain", highC: 25, lowC: 17 },
      { day: "Sun", condition: "Storm", icon: "storm", highC: 21, lowC: 18 }
    ]
  },
  tokyo: {
    name: "Tokyo",
    country: "Japan",
    regionSector: "East Asia Sector • Kantō Radar Node",
    condition: "Clear Skies",
    conditionKey: "sun",
    tempC: 24,
    feelsLikeC: 24,
    windKmh: 9,
    humidity: 50,
    rainChance: 5,
    uvIndex: 6,
    uvLevel: "High",
    uvPercent: 65,
    uvColor: "#f59e0b",
    aqi: 32,
    aqiLevel: "AQI • Excellent",
    aqiPercent: 20,
    aqiColor: "#10b981",
    barometer: 1018,
    barometerPercent: 68,
    sunrise: "04:38 AM",
    sunset: "06:48 PM",
    daylight: "14h 10m Daylight",
    sunAngle: 58,
    alertTitle: "Favorable Weather Advisory",
    alertText: "Clear conditions prevailing through the evening. Optimal air quality and low humidity across Greater Tokyo.",
    radarPin: "Tokyo (Optimal)",
    tomorrow: {
      highC: 26,
      lowC: 19,
      condition: "Sunny & Gentle Breeze",
      windKmh: 11,
      humidity: 48,
      rainChance: 10
    },
    hourly: [
      { time: "10:00", tempC: 22, condition: "Sunny", icon: "sun" },
      { time: "11:00", tempC: 24, condition: "Clear", icon: "sun", active: true },
      { time: "12:00", tempC: 25, condition: "Partly Cloudy", icon: "cloud-sun" },
      { time: "01:00", tempC: 26, condition: "Sunny", icon: "sun" },
      { time: "02:00", tempC: 24, condition: "Clear", icon: "sun" },
      { time: "03:00", tempC: 21, condition: "Clear Night", icon: "moon" }
    ],
    sevenDays: [
      { day: "Mon", condition: "Sunny", icon: "sun", highC: 24, lowC: 18 },
      { day: "Tue", condition: "Sunny", icon: "sun", highC: 26, lowC: 19 },
      { day: "Wed", condition: "Clouds", icon: "cloud", highC: 23, lowC: 17 },
      { day: "Thu", condition: "Rainy", icon: "rain", highC: 21, lowC: 16 },
      { day: "Fri", condition: "Sunny", icon: "sun", highC: 25, lowC: 18 },
      { day: "Sat", condition: "Clear", icon: "sun", highC: 27, lowC: 20 },
      { day: "Sun", condition: "Partly", icon: "cloud-sun", highC: 26, lowC: 19 }
    ]
  },
  london: {
    name: "London",
    country: "United Kingdom",
    regionSector: "Western Europe Sector • Thames Radar Node",
    condition: "Light Drizzle",
    conditionKey: "rain",
    tempC: 16,
    feelsLikeC: 15,
    windKmh: 18,
    humidity: 78,
    rainChance: 65,
    uvIndex: 2,
    uvLevel: "Low",
    uvPercent: 20,
    uvColor: "#10b981",
    aqi: 28,
    aqiLevel: "AQI • Good",
    aqiPercent: 18,
    aqiColor: "#10b981",
    barometer: 1016,
    barometerPercent: 62,
    sunrise: "05:42 AM",
    sunset: "08:32 PM",
    daylight: "14h 50m Daylight",
    sunAngle: 36,
    alertTitle: "Drizzle & Fog Advisory",
    alertText: "Sustained light showers and reduced visibility across Central London. Carry a waterproof jacket.",
    radarPin: "London (Shower Cell)",
    tomorrow: {
      highC: 17,
      lowC: 12,
      condition: "Cloudy with Showers",
      windKmh: 15,
      humidity: 72,
      rainChance: 55
    },
    hourly: [
      { time: "10:00", tempC: 14, condition: "Foggy", icon: "cloud" },
      { time: "11:00", tempC: 16, condition: "Drizzle", icon: "rain", active: true },
      { time: "12:00", tempC: 17, condition: "Showers", icon: "rain" },
      { time: "01:00", tempC: 16, condition: "Overcast", icon: "cloud" },
      { time: "02:00", tempC: 15, condition: "Windy", icon: "wind" },
      { time: "03:00", tempC: 13, condition: "Night Rain", icon: "rain" }
    ],
    sevenDays: [
      { day: "Mon", condition: "Drizzle", icon: "rain", highC: 16, lowC: 11 },
      { day: "Tue", condition: "Showers", icon: "rain", highC: 17, lowC: 12 },
      { day: "Wed", condition: "Cloudy", icon: "cloud", highC: 18, lowC: 13 },
      { day: "Thu", condition: "Sunny", icon: "sun", highC: 20, lowC: 14 },
      { day: "Fri", condition: "Rainy", icon: "rain", highC: 17, lowC: 12 },
      { day: "Sat", condition: "Drizzle", icon: "rain", highC: 18, lowC: 13 },
      { day: "Sun", condition: "Partly", icon: "cloud-sun", highC: 19, lowC: 14 }
    ]
  },
  newyork: {
    name: "New York",
    country: "United States",
    regionSector: "North America Sector • Tri-State Radar Array",
    condition: "Partly Cloudy",
    conditionKey: "cloud-sun",
    tempC: 26,
    feelsLikeC: 27,
    windKmh: 12,
    humidity: 46,
    rainChance: 15,
    uvIndex: 7,
    uvLevel: "High",
    uvPercent: 70,
    uvColor: "#f59e0b",
    aqi: 52,
    aqiLevel: "AQI • Moderate",
    aqiPercent: 45,
    aqiColor: "#f59e0b",
    barometer: 1012,
    barometerPercent: 55,
    sunrise: "05:48 AM",
    sunset: "08:12 PM",
    daylight: "14h 24m Daylight",
    sunAngle: 50,
    alertTitle: "Moderate UV Index Warning",
    alertText: "Strong sun intensity midday across Manhattan and Brooklyn. Sunscreen and eye protection recommended.",
    radarPin: "New York (Clear Field)",
    tomorrow: {
      highC: 28,
      lowC: 20,
      condition: "Warm & Breezy",
      windKmh: 14,
      humidity: 42,
      rainChance: 20
    },
    hourly: [
      { time: "10:00", tempC: 23, condition: "Sunny", icon: "sun" },
      { time: "11:00", tempC: 26, condition: "Partly Cloudy", icon: "cloud-sun", active: true },
      { time: "12:00", tempC: 27, condition: "Sunny", icon: "sun" },
      { time: "01:00", tempC: 28, condition: "Sunny", icon: "sun" },
      { time: "02:00", tempC: 26, condition: "Breezy", icon: "wind" },
      { time: "03:00", tempC: 23, condition: "Clear", icon: "moon" }
    ],
    sevenDays: [
      { day: "Mon", condition: "Partly", icon: "cloud-sun", highC: 26, lowC: 19 },
      { day: "Tue", condition: "Warm", icon: "sun", highC: 28, lowC: 20 },
      { day: "Wed", condition: "Storm", icon: "storm", highC: 25, lowC: 18 },
      { day: "Thu", condition: "Clear", icon: "sun", highC: 27, lowC: 19 },
      { day: "Fri", condition: "Sunny", icon: "sun", highC: 29, lowC: 21 },
      { day: "Sat", condition: "Partly", icon: "cloud-sun", highC: 28, lowC: 20 },
      { day: "Sun", condition: "Rainy", icon: "rain", highC: 24, lowC: 18 }
    ]
  },
  paris: {
    name: "Paris",
    country: "France",
    regionSector: "Western Europe Sector • Île-de-France Radar Array",
    condition: "Scattered Clouds",
    conditionKey: "cloud-sun",
    tempC: 22,
    feelsLikeC: 21,
    windKmh: 14,
    humidity: 56,
    rainChance: 22,
    uvIndex: 4,
    uvLevel: "Moderate",
    uvPercent: 42,
    uvColor: "#f59e0b",
    aqi: 38,
    aqiLevel: "AQI • Good",
    aqiPercent: 26,
    aqiColor: "#10b981",
    barometer: 1015,
    barometerPercent: 62,
    sunrise: "06:04 AM",
    sunset: "09:14 PM",
    daylight: "15h 10m Daylight",
    sunAngle: 45,
    alertTitle: "Mild Atmospheric Profile",
    alertText: "Comfortable conditions across Paris with pleasant afternoon temperatures and light westerly breeze.",
    radarPin: "Paris (Mild Cloud)",
    tomorrow: {
      highC: 23,
      lowC: 15,
      condition: "Partly Sunny",
      windKmh: 12,
      humidity: 52,
      rainChance: 15
    },
    hourly: [
      { time: "10:00", tempC: 19, condition: "Cloudy", icon: "cloud" },
      { time: "11:00", tempC: 22, condition: "Scattered", icon: "cloud-sun", active: true },
      { time: "12:00", tempC: 23, condition: "Sunny", icon: "sun" },
      { time: "01:00", tempC: 24, condition: "Sunny", icon: "sun" },
      { time: "02:00", tempC: 22, condition: "Breezy", icon: "wind" },
      { time: "03:00", tempC: 18, condition: "Clear Night", icon: "moon" }
    ],
    sevenDays: [
      { day: "Mon", condition: "Scattered", icon: "cloud-sun", highC: 22, lowC: 14 },
      { day: "Tue", condition: "Sunny", icon: "sun", highC: 23, lowC: 15 },
      { day: "Wed", condition: "Cloudy", icon: "cloud", highC: 21, lowC: 13 },
      { day: "Thu", condition: "Showers", icon: "rain", highC: 20, lowC: 12 },
      { day: "Fri", condition: "Sunny", icon: "sun", highC: 24, lowC: 16 },
      { day: "Sat", condition: "Warm", icon: "sun", highC: 25, lowC: 17 },
      { day: "Sun", condition: "Partly", icon: "cloud-sun", highC: 24, lowC: 15 }
    ]
  },
  dubai: {
    name: "Dubai",
    country: "United Arab Emirates",
    regionSector: "Arabian Gulf Sector • Doppler Horizon System",
    condition: "Sunny & Hot",
    conditionKey: "sun",
    tempC: 38,
    feelsLikeC: 43,
    windKmh: 16,
    humidity: 35,
    rainChance: 0,
    uvIndex: 11,
    uvLevel: "Extreme",
    uvPercent: 95,
    uvColor: "#ef4444",
    aqi: 82,
    aqiLevel: "AQI • Moderate",
    aqiPercent: 68,
    aqiColor: "#f59e0b",
    barometer: 1008,
    barometerPercent: 45,
    sunrise: "05:32 AM",
    sunset: "07:08 PM",
    daylight: "13h 36m Daylight",
    sunAngle: 72,
    alertTitle: "Extreme Heat & UV Warning",
    alertText: "Dangerous heat index and UV values exceeding 11. Minimize direct sun exposure between 11 AM and 4 PM.",
    radarPin: "Dubai (Thermal Peak)",
    tomorrow: {
      highC: 40,
      lowC: 30,
      condition: "Clear & Intense Heat",
      windKmh: 18,
      humidity: 30,
      rainChance: 0
    },
    hourly: [
      { time: "10:00", tempC: 35, condition: "Hot Sun", icon: "sun" },
      { time: "11:00", tempC: 38, condition: "Extreme Sun", icon: "sun", active: true },
      { time: "12:00", tempC: 41, condition: "Intense Heat", icon: "sun" },
      { time: "01:00", tempC: 42, condition: "Peak Heat", icon: "sun" },
      { time: "02:00", tempC: 39, condition: "Sunny", icon: "sun" },
      { time: "03:00", tempC: 34, condition: "Warm Night", icon: "moon" }
    ],
    sevenDays: [
      { day: "Mon", condition: "Hot", icon: "sun", highC: 38, lowC: 29 },
      { day: "Tue", condition: "Intense", icon: "sun", highC: 40, lowC: 30 },
      { day: "Wed", condition: "Sunny", icon: "sun", highC: 41, lowC: 31 },
      { day: "Thu", condition: "Clear", icon: "sun", highC: 39, lowC: 29 },
      { day: "Fri", condition: "Sunny", icon: "sun", highC: 40, lowC: 30 },
      { day: "Sat", condition: "Hot", icon: "sun", highC: 42, lowC: 31 },
      { day: "Sun", condition: "Sunny", icon: "sun", highC: 41, lowC: 30 }
    ]
  },
  sydney: {
    name: "Sydney",
    country: "Australia",
    regionSector: "Pacific Ocean Sector • South Coast Array",
    condition: "Breezy & Sunny",
    conditionKey: "sun",
    tempC: 19,
    feelsLikeC: 18,
    windKmh: 22,
    humidity: 50,
    rainChance: 8,
    uvIndex: 5,
    uvLevel: "Moderate",
    uvPercent: 50,
    uvColor: "#f59e0b",
    aqi: 22,
    aqiLevel: "AQI • Pure",
    aqiPercent: 15,
    aqiColor: "#10b981",
    barometer: 1022,
    barometerPercent: 78,
    sunrise: "06:48 AM",
    sunset: "05:12 PM",
    daylight: "10h 24m Daylight",
    sunAngle: 38,
    alertTitle: "Coastal Wind Advisory",
    alertText: "Moderate south-easterly gusts up to 35 km/h along coastal beaches. Calm inland conditions.",
    radarPin: "Sydney (Ocean Breeze)",
    tomorrow: {
      highC: 21,
      lowC: 14,
      condition: "Crisp & Sunny",
      windKmh: 19,
      humidity: 48,
      rainChance: 5
    },
    hourly: [
      { time: "10:00", tempC: 17, condition: "Sunny", icon: "sun" },
      { time: "11:00", tempC: 19, condition: "Breezy", icon: "sun", active: true },
      { time: "12:00", tempC: 20, condition: "Clear", icon: "sun" },
      { time: "01:00", tempC: 21, condition: "Sunny", icon: "sun" },
      { time: "02:00", tempC: 19, condition: "Cooling", icon: "wind" },
      { time: "03:00", tempC: 15, condition: "Starry Night", icon: "moon" }
    ],
    sevenDays: [
      { day: "Mon", condition: "Breezy", icon: "sun", highC: 19, lowC: 12 },
      { day: "Tue", condition: "Sunny", icon: "sun", highC: 21, lowC: 14 },
      { day: "Wed", condition: "Partly", icon: "cloud-sun", highC: 20, lowC: 13 },
      { day: "Thu", condition: "Showers", icon: "rain", highC: 18, lowC: 11 },
      { day: "Fri", condition: "Sunny", icon: "sun", highC: 22, lowC: 14 },
      { day: "Sat", condition: "Crisp", icon: "sun", highC: 23, lowC: 15 },
      { day: "Sun", condition: "Clear", icon: "sun", highC: 21, lowC: 13 }
    ]
  }
};

// Application State
const State = {
  currentCityKey: 'minsk',
  unit: 'C', // 'C' or 'F'
  activeHourIndex: 1, // 11:00
  radarLayer: 'precipitation', // 'precipitation', 'wind', 'temperature'
  radarPlaying: true,
  radarSpeed: '1x',
  isAudioMuted: true,
  audioCtx: null,
  rainOsc: null,
  rainGain: null,
  mobileActiveView: 'today' // 'today' or '7days'
};

// SVG Icon Helper
function getSvgIcon(iconName, customClass = "w-5 h-5") {
  switch (iconName) {
    case 'sun':
      return `<svg class="${customClass} text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" fill="#ffd600" r="4" stroke="#f59e0b" stroke-width="1.5"></circle>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" stroke="#f59e0b" stroke-linecap="round" stroke-width="2"></path>
      </svg>`;
    case 'storm':
    case 'lightning':
      return `<svg class="${customClass} text-warning" fill="none" viewBox="0 0 24 24">
        <path d="M19 11a4 4 0 0 0-4-4h-.5A5.5 5.5 0 0 0 4 11.5 4.5 4.5 0 0 0 8.5 16h9a3.5 3.5 0 0 0 1.5-6.67V11Z" fill="#ffffff" fill-opacity="0.9"></path>
        <polygon fill="#FFE500" points="12,11 8,17 12,17 10,22 16,15 12,15"></polygon>
      </svg>`;
    case 'rain':
    case 'rain-sun':
      return `<svg class="${customClass} text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" stroke="currentColor" stroke-width="1.8"></path>
        <line stroke="#38bdf8" stroke-linecap="round" stroke-width="2" x1="8" x2="8" y1="18" y2="21"></line>
        <line stroke="#38bdf8" stroke-linecap="round" stroke-width="2" x1="12" x2="12" y1="18" y2="21"></line>
        <line stroke="#38bdf8" stroke-linecap="round" stroke-width="2" x1="16" x2="16" y1="18" y2="21"></line>
      </svg>`;
    case 'cloud':
    case 'cloud-sun':
      return `<svg class="${customClass} text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" stroke="#cbd5e1" stroke-width="1.8" fill="#e2e8f0" fill-opacity="0.3"></path>
      </svg>`;
    case 'moon':
      return `<svg class="${customClass} text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12.8 3a9 9 0 1 0 8.2 8.2 7 7 0 0 1-8.2-8.2z" fill="#93c5fd" stroke="#60a5fa" stroke-width="1.5"></path>
        <circle cx="17" cy="16" fill="#ffffff" r="1.5"></circle>
      </svg>`;
    default:
      return `<svg class="${customClass} text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.5"></circle>
      </svg>`;
  }
}

// Temperature & Speed Conversion Helpers
function formatTemp(celsius, withUnit = true) {
  if (State.unit === 'F') {
    const f = Math.round((celsius * 9) / 5 + 32);
    return withUnit ? `${f}°` : f;
  }
  return withUnit ? `${celsius}°` : celsius;
}

function formatSpeed(kmh) {
  if (State.unit === 'F') {
    const mph = Math.round(kmh * 0.621371);
    return `${mph} mph`;
  }
  return `${kmh} km/h`;
}

// Live Clock Initializer
function startClock() {
  const clockTime = document.getElementById('live-clock-time');
  const clockDate = document.getElementById('live-clock-date');
  const mobileClock = document.getElementById('mobile-status-time');

  function update() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const timeStr = `${displayHours}:${minutes} ${ampm}`;

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dateStr = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]}`;

    if (clockTime) clockTime.textContent = timeStr;
    if (clockDate) clockDate.textContent = dateStr;
    if (mobileClock) mobileClock.textContent = `${displayHours}:${minutes}`;
  }

  update();
  setInterval(update, 1000);
}

// Render Dashboard Data for Active City
function renderDashboard() {
  const city = CITIES_DATA[State.currentCityKey];
  if (!city) return;

  // City Name & Tag
  const elCityName = document.getElementById('hero-city-name');
  const elSearchInput = document.getElementById('city-search-input');
  if (elCityName) elCityName.textContent = city.name;
  if (elSearchInput) elSearchInput.value = `${city.name}, ${city.country}`;

  // Hero Card Metrics
  const elHeroTemp = document.getElementById('hero-temp-val');
  const elHeroUnit = document.getElementById('hero-temp-unit');
  const elHeroCond = document.getElementById('hero-condition-text');
  const elHeroMeta = document.getElementById('hero-condition-meta');
  const elHeroWind = document.getElementById('hero-wind-val');
  const elHeroHumidity = document.getElementById('hero-humidity-val');
  const elHeroRain = document.getElementById('hero-rain-val');

  if (elHeroTemp) elHeroTemp.textContent = formatTemp(city.tempC, false);
  if (elHeroUnit) elHeroUnit.textContent = `°${State.unit}`;
  if (elHeroCond) elHeroCond.textContent = city.condition;
  if (elHeroMeta) elHeroMeta.textContent = `Monday, 17 May • Feels like ${formatTemp(city.feelsLikeC)}`;
  if (elHeroWind) elHeroWind.textContent = formatSpeed(city.windKmh);
  if (elHeroHumidity) elHeroHumidity.textContent = `${city.humidity}%`;
  if (elHeroRain) elHeroRain.textContent = `${city.rainChance}%`;

  // Atmospheric Matrix Cards
  const elUvVal = document.getElementById('atm-uv-val');
  const elUvLevel = document.getElementById('atm-uv-level');
  const elUvBar = document.getElementById('atm-uv-bar');
  if (elUvVal) elUvVal.textContent = city.uvIndex;
  if (elUvLevel) {
    elUvLevel.textContent = city.uvLevel;
    elUvLevel.style.color = city.uvColor;
  }
  if (elUvBar) {
    elUvBar.style.width = `${city.uvPercent}%`;
    elUvBar.style.backgroundColor = city.uvColor;
  }

  const elAqiVal = document.getElementById('atm-aqi-val');
  const elAqiLevel = document.getElementById('atm-aqi-level');
  const elAqiBar = document.getElementById('atm-aqi-bar');
  if (elAqiVal) elAqiVal.textContent = city.aqi;
  if (elAqiLevel) {
    elAqiLevel.textContent = city.aqiLevel;
    elAqiLevel.style.color = city.aqiColor;
  }
  if (elAqiBar) {
    elAqiBar.style.width = `${city.aqiPercent}%`;
    elAqiBar.style.backgroundColor = city.aqiColor;
  }

  const elBarometerVal = document.getElementById('atm-barometer-val');
  const elBarometerBar = document.getElementById('atm-barometer-bar');
  if (elBarometerVal) elBarometerVal.textContent = city.barometer;
  if (elBarometerBar) elBarometerBar.style.width = `${city.barometerPercent}%`;

  // Tomorrow Card
  const elTomHigh = document.getElementById('tomorrow-high-val');
  const elTomLow = document.getElementById('tomorrow-low-val');
  const elTomCond = document.getElementById('tomorrow-condition');
  const elTomWind = document.getElementById('tomorrow-wind');
  const elTomHumid = document.getElementById('tomorrow-humidity');
  const elTomRain = document.getElementById('tomorrow-rain');

  if (elTomHigh) elTomHigh.textContent = formatTemp(city.tomorrow.highC, false);
  if (elTomLow) elTomLow.textContent = `/${formatTemp(city.tomorrow.lowC)}`;
  if (elTomCond) elTomCond.textContent = city.tomorrow.condition;
  if (elTomWind) elTomWind.textContent = formatSpeed(city.tomorrow.windKmh);
  if (elTomHumid) elTomHumid.textContent = `${city.tomorrow.humidity}%`;
  if (elTomRain) elTomRain.textContent = `${city.tomorrow.rainChance}%`;

  // 7 Days List
  render7DayForecast(city.sevenDays);

  // Hourly Timeline Slider & Chart
  renderHourlyForecast(city.hourly);

  // Radar Sector & Pinpoint
  const elRadarSector = document.getElementById('radar-sector-text');
  const elRadarPin = document.getElementById('radar-pinpoint-label');
  if (elRadarSector) elRadarSector.textContent = city.regionSector;
  if (elRadarPin) elRadarPin.textContent = city.radarPin;

  // Sun Path Arc
  const elDaylight = document.getElementById('sun-daylight-text');
  const elSunrise = document.getElementById('sun-sunrise-time');
  const elSunset = document.getElementById('sun-sunset-time');
  const elSunDot = document.getElementById('sun-indicator-dot');
  const elSunSegment = document.getElementById('sun-path-segment');

  if (elDaylight) elDaylight.textContent = city.daylight;
  if (elSunrise) elSunrise.textContent = city.sunrise;
  if (elSunset) elSunset.textContent = city.sunset;

  // Compute sun position along arc
  const cx = 125 + Math.sin((city.sunAngle * Math.PI) / 180) * 10;
  const cy = 28 + Math.cos((city.sunAngle * Math.PI) / 180) * 8;
  if (elSunDot) {
    elSunDot.setAttribute('cx', cx);
    elSunDot.setAttribute('cy', cy);
  }
  if (elSunSegment) {
    elSunSegment.setAttribute('d', `M 20,100 A 130,90 0 0,1 ${cx},${cy}`);
  }

  // AI Alert Banner
  const elAlertTitle = document.getElementById('ai-alert-title');
  const elAlertText = document.getElementById('ai-alert-text');
  if (elAlertTitle) elAlertTitle.textContent = city.alertTitle;
  if (elAlertText) elAlertText.textContent = city.alertText;

  // Update quick pills active state
  document.querySelectorAll('.city-pill').forEach(pill => {
    if (pill.dataset.city === State.currentCityKey) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  // Also update mobile simulator if open
  renderMobileSimulator(city);
}

// Render Hourly Forecast Cards & Dynamic SVG Chart
function renderHourlyForecast(hourlyList) {
  const container = document.getElementById('hourly-cards-container');
  if (!container) return;

  container.innerHTML = '';
  hourlyList.forEach((item, index) => {
    const card = document.createElement('div');
    const isActive = index === State.activeHourIndex;
    card.className = `hourly-card col ${isActive ? 'active' : ''}`;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${item.time} forecast ${item.tempC} degrees`);

    card.innerHTML = `
      <span class="fw-bold fs-6">${formatTemp(item.tempC)}</span>
      <div class="my-2 d-flex align-items-center justify-content-center">
        ${getSvgIcon(item.icon, "w-7 h-7")}
      </div>
      <span class="small fw-semibold opacity-75">${item.time}</span>
    `;

    card.addEventListener('click', () => {
      State.activeHourIndex = index;
      renderHourlyForecast(hourlyList);
      updateWaveHighlight(index, item.tempC);
    });

    container.appendChild(card);
  });

  updateWaveHighlight(State.activeHourIndex, hourlyList[State.activeHourIndex]?.tempC || 21);
}

// Update Active SVG Point on the Temperature Curve
function updateWaveHighlight(index, tempC) {
  const dot = document.getElementById('wave-active-point');
  const ping = document.getElementById('wave-active-ping');
  if (!dot) return;

  const xPositions = [45, 125, 205, 285, 365, 445];
  const targetX = xPositions[index] || 125;
  // map temperature roughly to y: higher temp = higher curve (lower Y coordinate)
  const targetY = Math.max(25, Math.min(85, 110 - tempC * 2.8));

  dot.setAttribute('cx', targetX);
  dot.setAttribute('cy', targetY);
  if (ping) {
    ping.setAttribute('cx', targetX);
    ping.setAttribute('cy', targetY);
  }
}

// Render 7-Day Forecast List
function render7DayForecast(daysList) {
  const container = document.getElementById('seven-days-list-container');
  if (!container) return;

  container.innerHTML = '';
  daysList.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'forecast-row';
    row.innerHTML = `
      <span class="fw-semibold text-secondary" style="width: 44px;">${item.day}</span>
      <div class="d-flex align-items-center justify-content-center gap-2 flex-grow-1">
        ${getSvgIcon(item.icon, "w-4 h-4")}
        <span class="small text-secondary" style="width: 60px;">${item.condition}</span>
      </div>
      <div class="text-end fw-bold">
        <span class="text-white">+${formatTemp(item.highC, false)}°</span>
        <span class="text-secondary small ms-1">+${formatTemp(item.lowC, false)}°</span>
      </div>
    `;

    row.addEventListener('click', () => {
      showToast(`Detailed Forecast: ${item.day}`, `Expected high of +${formatTemp(item.highC)} and low of +${formatTemp(item.lowC)} with ${item.condition}.`);
    });

    container.appendChild(row);
  });
}

// Mobile Simulator Rendering & State
function renderMobileSimulator(city) {
  const mCityName = document.getElementById('m-city-name');
  const mHeroTemp = document.getElementById('m-hero-temp');
  const mHeroCond = document.getElementById('m-hero-condition');
  const mHeroWind = document.getElementById('m-hero-wind');
  const mHeroHumid = document.getElementById('m-hero-humidity');
  const mHeroRain = document.getElementById('m-hero-rain');

  if (mCityName) mCityName.textContent = city.name;
  if (mHeroTemp) mHeroTemp.textContent = formatTemp(city.tempC, false);
  if (mHeroCond) mHeroCond.textContent = city.condition;
  if (mHeroWind) mHeroWind.textContent = formatSpeed(city.windKmh);
  if (mHeroHumid) mHeroHumid.textContent = `${city.humidity}%`;
  if (mHeroRain) mHeroRain.textContent = `${city.rainChance}%`;

  // Mobile Tomorrow Card
  const mTomTemp = document.getElementById('m-tomorrow-temp');
  const mTomCond = document.getElementById('m-tomorrow-cond');
  const mTomWind = document.getElementById('m-tomorrow-wind');
  const mTomHumid = document.getElementById('m-tomorrow-humid');
  const mTomRain = document.getElementById('m-tomorrow-rain');

  if (mTomTemp) mTomTemp.innerHTML = `${formatTemp(city.tomorrow.highC, false)} <span class="fs-6 opacity-75">/${formatTemp(city.tomorrow.lowC)}</span>`;
  if (mTomCond) mTomCond.textContent = city.tomorrow.condition;
  if (mTomWind) mTomWind.textContent = formatSpeed(city.tomorrow.windKmh);
  if (mTomHumid) mTomHumid.textContent = `${city.tomorrow.humidity}%`;
  if (mTomRain) mTomRain.textContent = `${city.tomorrow.rainChance}%`;

  // Mobile 7 Days list
  const mDaysList = document.getElementById('m-7days-list');
  if (mDaysList) {
    mDaysList.innerHTML = '';
    city.sevenDays.forEach(item => {
      const row = document.createElement('div');
      row.className = 'd-flex align-items-center justify-content-between p-2 rounded-3 text-white small';
      row.innerHTML = `
        <span class="fw-semibold text-secondary" style="width: 40px;">${item.day}</span>
        <div class="d-flex align-items-center gap-2">
          ${getSvgIcon(item.icon, "w-4 h-4")}
          <span class="text-secondary small">${item.condition}</span>
        </div>
        <div class="fw-bold">
          <span>+${formatTemp(item.highC, false)}°</span>
          <span class="text-secondary ms-1">+${formatTemp(item.lowC, false)}°</span>
        </div>
      `;
      mDaysList.appendChild(row);
    });
  }
}

// Switch Mobile View Tab (Today vs 7 Days)
function setMobileView(viewName) {
  State.mobileActiveView = viewName;
  const viewToday = document.getElementById('m-view-today');
  const view7Days = document.getElementById('m-view-7days');

  if (viewName === 'today') {
    if (viewToday) {
      viewToday.style.opacity = '1';
      viewToday.style.pointerEvents = 'auto';
      viewToday.style.transform = 'translateX(0)';
    }
    if (view7Days) {
      view7Days.style.opacity = '0';
      view7Days.style.pointerEvents = 'none';
      view7Days.style.transform = 'translateX(100%)';
    }
  } else {
    if (viewToday) {
      viewToday.style.opacity = '0';
      viewToday.style.pointerEvents = 'none';
      viewToday.style.transform = 'translateX(-100%)';
    }
    if (view7Days) {
      view7Days.style.opacity = '1';
      view7Days.style.pointerEvents = 'auto';
      view7Days.style.transform = 'translateX(0)';
    }
  }
}

// Search & Autocomplete
function setupSearch() {
  const input = document.getElementById('city-search-input');
  const dropdown = document.getElementById('search-dropdown');
  if (!input || !dropdown) return;

  function renderSuggestions(query) {
    const q = query.toLowerCase().trim();
    dropdown.innerHTML = '';
    const matches = Object.entries(CITIES_DATA).filter(([key, data]) => {
      return (
        data.name.toLowerCase().includes(q) ||
        data.country.toLowerCase().includes(q) ||
        key.includes(q)
      );
    });

    if (matches.length === 0) {
      dropdown.innerHTML = `<div class="p-3 text-secondary text-center small">No matching cities found for "${query}"</div>`;
      dropdown.classList.add('show');
      return;
    }

    matches.forEach(([key, data]) => {
      const item = document.createElement('div');
      item.className = 'search-result-item';
      item.innerHTML = `
        <div class="d-flex align-items-center gap-2">
          <i class="bi bi-geo-alt-fill text-info"></i>
          <div>
            <div class="fw-bold text-white small">${data.name}</div>
            <div class="text-secondary" style="font-size: 11px;">${data.country}</div>
          </div>
        </div>
        <div class="text-end">
          <span class="badge bg-primary-subtle text-info">${formatTemp(data.tempC)}</span>
          <div class="text-secondary" style="font-size: 10px;">${data.condition}</div>
        </div>
      `;
      item.addEventListener('click', () => {
        selectCity(key);
        dropdown.classList.remove('show');
      });
      dropdown.appendChild(item);
    });
    dropdown.classList.add('show');
  }

  input.addEventListener('input', (e) => {
    if (e.target.value.length > 0) {
      renderSuggestions(e.target.value);
    } else {
      dropdown.classList.remove('show');
    }
  });

  input.addEventListener('focus', () => {
    renderSuggestions(input.value);
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });

  // Global Keyboard Shortcut: Ctrl+K or Cmd+K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      input.focus();
      input.select();
    }
    if (e.key === 'Escape') {
      dropdown.classList.remove('show');
      input.blur();
    }
  });
}

// Select Active City
function selectCity(cityKey) {
  if (!CITIES_DATA[cityKey]) return;
  State.currentCityKey = cityKey;
  renderDashboard();
  showToast("City Updated", `Switched meteorological telemetry to ${CITIES_DATA[cityKey].name}.`);
}

// Unit Switcher (°C / °F)
function setupUnitSwitcher() {
  const btnC = document.getElementById('unit-btn-c');
  const btnF = document.getElementById('unit-btn-f');

  if (btnC && btnF) {
    btnC.addEventListener('click', () => {
      if (State.unit === 'C') return;
      State.unit = 'C';
      btnC.classList.add('active');
      btnF.classList.remove('active');
      renderDashboard();
      showToast("Unit Switched", "Telemetry converted to Metric Celsius (°C).");
    });

    btnF.addEventListener('click', () => {
      if (State.unit === 'F') return;
      State.unit = 'F';
      btnF.classList.add('active');
      btnC.classList.remove('active');
      renderDashboard();
      showToast("Unit Switched", "Telemetry converted to Imperial Fahrenheit (°F).");
    });
  }
}

// Radar Simulation Controls
function setupRadar() {
  const cone = document.getElementById('radar-cone');
  const btnPause = document.getElementById('radar-btn-play');
  const btnSpeed = document.getElementById('radar-btn-speed');
  const cellPrimary = document.getElementById('radar-cell-1');
  const cellSecondary = document.getElementById('radar-cell-2');

  // Layer filter buttons
  const layerButtons = document.querySelectorAll('.radar-layer-btn');
  layerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      layerButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const layer = btn.dataset.layer;
      State.radarLayer = layer;

      if (layer === 'wind') {
        cellPrimary.style.background = 'radial-gradient(circle, rgba(0,210,255,0.7) 0%, rgba(59,130,246,0.5) 50%, transparent 80%)';
        cellSecondary.style.background = 'radial-gradient(circle, rgba(147,197,253,0.6) 0%, rgba(37,99,235,0.4) 60%, transparent 80%)';
        showToast("Radar Stream", "Displaying Atmospheric Wind Stream vectors.");
      } else if (layer === 'temperature') {
        cellPrimary.style.background = 'radial-gradient(circle, rgba(239,68,68,0.8) 0%, rgba(245,158,11,0.6) 50%, rgba(16,185,129,0.3) 80%)';
        cellSecondary.style.background = 'radial-gradient(circle, rgba(245,158,11,0.7) 0%, rgba(16,185,129,0.5) 60%, transparent 80%)';
        showToast("Radar Stream", "Displaying Surface Temperature Heatmap.");
      } else {
        cellPrimary.style.background = 'radial-gradient(circle, rgba(239,68,68,0.75) 0%, rgba(245,158,11,0.65) 45%, rgba(0,132,255,0.45) 85%)';
        cellSecondary.style.background = 'radial-gradient(circle, rgba(245,158,11,0.65) 0%, rgba(0,210,255,0.5) 75%)';
        showToast("Radar Stream", "Displaying Doppler Precipitation Density.");
      }
    });
  });

  // Play/Pause
  if (btnPause && cone) {
    btnPause.addEventListener('click', () => {
      State.radarPlaying = !State.radarPlaying;
      if (State.radarPlaying) {
        cone.classList.remove('paused');
        btnPause.innerHTML = '<i class="bi bi-pause-fill"></i>';
      } else {
        cone.classList.add('paused');
        btnPause.innerHTML = '<i class="bi bi-play-fill"></i>';
      }
    });
  }

  // Speed
  if (btnSpeed && cone) {
    btnSpeed.addEventListener('click', () => {
      if (State.radarSpeed === '1x') {
        State.radarSpeed = '2x';
        cone.classList.add('speed-2x');
        btnSpeed.textContent = '2x';
      } else {
        State.radarSpeed = '1x';
        cone.classList.remove('speed-2x');
        btnSpeed.textContent = '1x';
      }
    });
  }
}

// Ambient Sound Synthesizer via Web Audio API (100% self contained, no external audio files required!)
function setupAudio() {
  const btnAudio = document.getElementById('btn-audio-toggle');
  if (!btnAudio) return;

  btnAudio.addEventListener('click', () => {
    try {
      if (!State.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        State.audioCtx = new AudioContext();
      }

      if (State.audioCtx.state === 'suspended') {
        State.audioCtx.resume();
      }

      if (State.isAudioMuted) {
        // Generate soft ambient rain noise buffer
        const bufferSize = State.audioCtx.sampleRate * 2;
        const noiseBuffer = State.audioCtx.createBuffer(1, bufferSize, State.audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = State.audioCtx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        // Bandpass filter for rain sound
        const filter = State.audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 850;

        const gainNode = State.audioCtx.createGain();
        gainNode.gain.setValueAtTime(0.08, State.audioCtx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(State.audioCtx.destination);
        whiteNoise.start();

        State.rainOsc = whiteNoise;
        State.rainGain = gainNode;
        State.isAudioMuted = false;

        btnAudio.innerHTML = '<i class="bi bi-volume-up-fill text-info"></i>';
        showToast("Ambient Audio", "Atmospheric rainfall ambient sound enabled.");
      } else {
        if (State.rainGain && State.audioCtx) {
          State.rainGain.gain.exponentialRampToValueAtTime(0.0001, State.audioCtx.currentTime + 0.3);
          setTimeout(() => {
            if (State.rainOsc) {
              State.rainOsc.stop();
              State.rainOsc.disconnect();
              State.rainOsc = null;
            }
          }, 350);
        }
        State.isAudioMuted = true;
        btnAudio.innerHTML = '<i class="bi bi-volume-mute text-secondary"></i>';
        showToast("Ambient Audio", "Atmospheric sound muted.");
      }
    } catch (e) {
      console.warn("Web Audio API not supported or blocked:", e);
    }
  });
}

// Lightweight Toast Notification
function showToast(title, message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toastId = 'toast-' + Date.now();
  const toastEl = document.createElement('div');
  toastEl.className = 'toast align-items-center text-white border-0 glass-panel mb-2 show';
  toastEl.id = toastId;
  toastEl.setAttribute('role', 'alert');
  toastEl.setAttribute('aria-live', 'assertive');
  toastEl.setAttribute('aria-atomic', 'true');
  toastEl.style.backgroundColor = 'rgba(8, 17, 34, 0.92)';
  toastEl.style.borderColor = 'rgba(0, 210, 255, 0.3)';

  toastEl.innerHTML = `
    <div class="d-flex">
      <div class="toast-body d-flex align-items-start gap-2">
        <i class="bi bi-info-circle-fill text-info mt-1"></i>
        <div>
          <div class="fw-bold small">${title}</div>
          <div class="text-secondary" style="font-size: 11px;">${message}</div>
        </div>
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;

  container.appendChild(toastEl);
  setTimeout(() => {
    toastEl.remove();
  }, 4000);
}

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  startClock();
  setupUnitSwitcher();
  setupSearch();
  setupRadar();
  setupAudio();

  // Quick City Pills binding
  document.querySelectorAll('.city-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      selectCity(pill.dataset.city);
    });
  });

  // Mobile Simulator controls
  const btnGoto7Days = document.getElementById('m-btn-goto-7days');
  const btnBackToday = document.getElementById('m-btn-back-today');
  if (btnGoto7Days) {
    btnGoto7Days.addEventListener('click', () => setMobileView('7days'));
  }
  if (btnBackToday) {
    btnBackToday.addEventListener('click', () => setMobileView('today'));
  }

  // Initial render
  renderDashboard();
});
