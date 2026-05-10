import { BrowserRouter, Route, Routes } from 'react-router'
import { AppShell } from './components/app-shell/AppShell'
import { Calendar } from './pages/calendar/Calendar'
import { Dashboard } from './pages/dashboard/Dashboard'
import { Details } from './pages/meetings/details/Details'
import { Meetings } from './pages/meetings/Meetings'
import { Participants } from './pages/meetings/participants/Participants'
import { NewMeeting } from './pages/new-meeting/NewMeeting'
import { NotFound } from './pages/not-found/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<Dashboard />} />
          <Route path="new-meeting" element={<NewMeeting />} />
          <Route path="calendar" element={<Calendar />} />

          <Route path="meetings/:meetingId" element={<Meetings />}>
            <Route path="details" element={<Details />} />
            <Route path="participants" element={<Participants />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export { App }
