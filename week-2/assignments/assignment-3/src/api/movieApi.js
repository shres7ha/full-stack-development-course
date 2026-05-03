const baseUrl = 'https://api.themoviedb.org/3'

const apiKey = import.meta.env.VITE_TMDB_API_KEY

const endpoints = {
  popular: '/movie/popular',
  search: '/search/movie'
}

export { apiKey, baseUrl, endpoints }
