const API_KEY = "ff136f2f14d741bc9c6e4dbc2e71d022"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

/**
 * Fetch current weather for a city
 * @param {string} city - City name
 * @returns {Promise<object>} - Current weather data
 */
export async function getCurrentWeather(city) {
  const res = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`)
  if (!res.ok) throw new Error("City not found")
  return res.json()
}

/**
 * Fetch 7-day forecast for a city (optional)
 * @param {string} city - City name
 * @returns {Promise<object>} - Forecast data
 */
export async function getForecast(city) {
  // Note: OpenWeatherMap free tier may not support daily forecast endpoint,
  // you might need One Call API for 7-day forecast
  const res = await fetch(`${BASE_URL}/forecast/daily?q=${city}&cnt=7&units=metric&appid=${API_KEY}`)
  if (!res.ok) throw new Error("Forecast not available")
  return res.json()
}
