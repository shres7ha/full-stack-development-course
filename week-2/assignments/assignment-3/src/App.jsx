import { useState } from 'react'
import './App.css'
import { MovieCard } from './components/movie-card/MovieCard'
import { SearchBar } from './components/search-bar/SearchBar'
import { popularMoviesService } from './services/popularMoviesService'
import { searchMoviesService } from './services/searchMoviesService'

const App = () => {
  const [movies, setMovies] = useState([])
  const [hasLoadedInitial, setHasLoadedInitial] = useState(false)

  const loadMovies = async (searchQuery = '') => {
    try {
      const data = searchQuery
        ? await searchMoviesService.getByTitle(searchQuery)
        : await popularMoviesService.getDefault()

      setMovies(data.results || [])
    } catch (error) {
      console.error('Load movies error:', error)
    }
  }

  if (!hasLoadedInitial) {
    loadMovies()
    setHasLoadedInitial(true)
  }

  const handleSearch = (searchTerm) => {
    loadMovies(searchTerm)
  }

  return (
    <div className="container">
      <h1 className="logo">🎬 CINEPHILE</h1>

      <SearchBar onSearch={handleSearch} />

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export { App }
