import { apiKey, baseURL, endpoints } from '../api/weatherApi'

const currentWeatherService = {
  getByCity: async (city) => {
    try {
      const response = await fetch(
        `${baseURL}${endpoints.current}?q=${city}&units=metric&appid=${apiKey}`
      )

      if (response.status === 404) {
        throw new Error('City not found. Please check your spelling.')
      }

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again later.')
      }

      return response.json()
    } catch (error) {
      console.error(`Get by city error: ${error.message}`)

      throw error
    }
  }
}

export { currentWeatherService }
