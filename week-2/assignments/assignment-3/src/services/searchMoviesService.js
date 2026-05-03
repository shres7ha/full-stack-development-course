import { apiKey, baseUrl, endpoints } from '../api/movieApi'

const searchMoviesService = {
  getByTitle: async (query) => {
    try {
      const response = await fetch(
        `${baseUrl}${endpoints.search}?api_key=${apiKey}&query=${encodeURIComponent(query)}`
      )

      if (!response.ok)
        throw new Error('Something went wrong. Please try again.')

      return response.json()
    } catch (error) {
      console.error(`Search movies service error: ${error.message}`)

      throw error
    }
  }
}

export { searchMoviesService }
