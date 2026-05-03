import './MovieCard.css'

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Poster'

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span className="date">{movie.release_date}</span>
        <p>{movie.overview?.substring(0, 100)}...</p>
      </div>
    </div>
  )
}

export { MovieCard }
