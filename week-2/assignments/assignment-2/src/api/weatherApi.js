const baseURL = 'https://api.openweathermap.org/data/2.5'
const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY

const endpoints = {
  current: '/weather'
}

export { apiKey, baseURL, endpoints }
