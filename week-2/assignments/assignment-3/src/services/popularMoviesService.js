import { apiKey, baseUrl, endpoints } from '../api/movieApi'

const popularMoviesService = {
  getDefault: async () => {
    try {
      const response = await fetch(
        `${baseUrl}${endpoints.popular}?api_key=${apiKey}`
      )

      if (!response.ok)
        throw new Error('Something went wrong. Please try again.')

      return response.json()
    } catch (error) {
      console.error(`Popular movies service error: ${error.message}`)

      throw error
    }
  }
}

export { popularMoviesService }
