import { Calendar, Clock, House, Link2, Play, User } from 'lucide-react'
import { NavLink } from 'react-router'
import meeting from '../../assets/meeting.png'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo">
        <div className="logo-image-container">
          <img className="logo-image" src={meeting} alt="Logo" />
        </div>
        <span className="logo-text">Meeting Basum</span>
      </div>
      <nav className="nav">
        <NavLink className="navlink" to="/">
          <House />
          Dashboard
        </NavLink>
        <NavLink className="navlink" to="/new-meeting">
          <Play />
          New Meeting
        </NavLink>
        <NavLink className="navlink" to="/join-meeting">
          <Link2 />
          Join Meeting
        </NavLink>
        <NavLink className="navlink" to="/calendar">
          <Calendar />
          Calendar
        </NavLink>
        <NavLink className="navlink" to="/schedule-meeting">
          <Clock />
          Schedule Meeting
        </NavLink>
        <NavLink className="navlink" to="/profile-settings">
          <User />
          Profile Settings
        </NavLink>
      </nav>
    </div>
  )
}

export { Sidebar }
