import { NavLink } from 'react-router'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <NavLink className="back-to-home" to="/">
        Back to Home
      </NavLink>
    </div>
  )
}

export { NotFound }
