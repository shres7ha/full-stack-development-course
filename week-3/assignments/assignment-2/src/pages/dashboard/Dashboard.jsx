import { ArrowRight, CalendarClock, Users, Video } from 'lucide-react'
import { useNavigate } from 'react-router'
import { UPCOMING_MEETINGS } from '../../utils/data'
import './Dashboard.css'

const Dashboard = () => {
  const navigate = useNavigate()

  const handleJoinMeeting = (id) => {
    navigate(`/meetings/${id}`)
  }

  return (
    <div className="dashboard">
      <section>
        <h1>Good Morning, Rahul Shrestha 👋</h1>

        <p className="dashboard-description">
          Here's what's happening with you meetings today.
        </p>
      </section>

      <section className="quick-actions">
        <div className="card">
          <div className="icon-background start">
            <Video color="white" />
          </div>

          <h2 className="card-title">Start New Meeting</h2>

          <p className="card-description">Start an instant meeting</p>

          <button className="button quick-actions-button start-button">
            Start Now
            <ArrowRight size={16} />
          </button>
        </div>
        <div className="card">
          <div className="icon-background join">
            <Users color="white" />
          </div>

          <h2 className="card-title">Join with Code</h2>

          <p className="card-description">Join a meeting with code</p>

          <button className="button quick-actions-button join-button">
            Join Meeting
            <ArrowRight size={16} />
          </button>
        </div>
        <div className="card">
          <div className="icon-background schedule">
            <CalendarClock color="white" />
          </div>

          <h2 className="card-title">Schedule Meeting</h2>

          <p className="card-description">Plan your meeting</p>

          <button className="button quick-actions-button schedule-button">
            Schedule Now
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
      <section>
        <div className="upcoming-meetings">
          <h2>Upcoming Meetings</h2>
          <span className="view-all">View All</span>
        </div>

        {UPCOMING_MEETINGS.map((meeting) => (
          <div key={meeting.id} className="card upcoming-meeting">
            <div className="upcoming-meeting-left">
              <div className={`icon-background ${meeting.type}`}>
                <Users color="white" />
              </div>
              <div>
                <h3 className="upcoming-meeting-card-title">{meeting.title}</h3>
                <p className="upcoming-meeting-card-description">
                  Host: {meeting.host}
                </p>
              </div>
            </div>

            <div className="upcoming-meeting-right">
              <span className="meeting-time">{meeting.time}</span>
              <button
                onClick={() => handleJoinMeeting(meeting.id)}
                className="button join-upcoming-button"
              >
                Join
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export { Dashboard }
