const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

export const fetchWeather = async (city) => {
  const response = await fetch(
    `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`
  )

  if (!response.ok) {
    throw new Error(
      response.status === 404
        ? 'City not found.'
        : 'Something went wrong. Please try again later.'
    )
  }

  return response.json()
}
