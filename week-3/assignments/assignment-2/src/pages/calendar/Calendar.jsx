import { useSearchParams } from 'react-router'
import './Calendar.css'

const Calendar = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentView = searchParams.get('view') || 'month'

  return (
    <div className="calendar">
      <h1>Calendar</h1>

      <div className="view-buttons">
        <button
          className={`view-button ${currentView === 'month' ? 'active' : ''}`}
          onClick={() => setSearchParams({ view: 'month' })}
        >
          Month View
        </button>

        <button
          className={`view-button ${currentView === 'week' ? 'active' : ''}`}
          onClick={() => setSearchParams({ view: 'week' })}
        >
          Week View
        </button>
      </div>

      <div className="view">
        {currentView === 'month' ? <p>Month View</p> : <p>Week View</p>}
      </div>
    </div>
  )
}

export { Calendar }
