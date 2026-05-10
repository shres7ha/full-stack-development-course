import './App.css'
import LiveClock from './components/LiveClock'

const App = () => {
  return (
    <div className="app">
      <div className="card">
        <header>
          <h1 className="title">Digital Clock</h1>
        </header>

        <main>
          <LiveClock />
        </main>

        <footer className="footer">
          <p className="copyright">
            <small>&copy; 2026 shres7ha</small>
          </p>
        </footer>
      </div>
    </div>
  )
}

export { App }
