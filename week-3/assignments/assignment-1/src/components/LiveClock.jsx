import { useEffect, useState } from 'react'
import './LiveClock.css'

const LiveClock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  return (
    <div className="clock">
      <div className="day">
        {time.toLocaleDateString('en-US', { weekday: 'long' })}
      </div>
      <div className="time">{time.toLocaleTimeString('en-GB')}</div>
      <div className="date">{time.toLocaleDateString()}</div>
    </div>
  )
}

export default LiveClock
