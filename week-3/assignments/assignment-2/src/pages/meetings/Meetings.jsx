import { NavLink, Outlet, useParams } from 'react-router'
import { UPCOMING_MEETINGS } from '../../utils/data'
import './Meetings.css'

const Meetings = () => {
  const { meetingId } = useParams()

  const meeting = UPCOMING_MEETINGS.find((m) => m.id === meetingId)

  return (
    <div className="meetings">
      <section>
        <h1>{meeting ? meeting.title : 'Meeting Not Found'}</h1>
      </section>
      <nav className="meetings-nav">
        <NavLink className="details" to="details">
          Details
        </NavLink>
        <NavLink className="participants" to="participants">
          Participants
        </NavLink>
      </nav>
      <div className="meeting-content">
        <Outlet />
      </div>
    </div>
  )
}

export { Meetings }
