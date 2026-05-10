import { Bell, CalendarDays, ChevronDown, Clock11 } from 'lucide-react'
import me from '../../assets/me.jpg'
import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <div className="info">
          <CalendarDays size={18} />
          <span>Sunday, May 10, 2026</span>
        </div>
        <div className="info">
          <Clock11 size={18} />
          <span>11:00 AM</span>
        </div>
      </div>
      <div className="header-right">
        <Bell size={24} />
        <div className="profile">
          <div className="avatar-container">
            <img className="avatar" src={me} alt="Profile Picture" />
          </div>
          <span className="user-name">Rahul Shrestha</span>
          <ChevronDown size={20} />
        </div>
      </div>
    </div>
  )
}

export { Header }
