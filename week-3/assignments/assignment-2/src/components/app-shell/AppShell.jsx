import { Outlet } from 'react-router'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import { Sidebar } from '../sidebar/Sidebar'
import './AppShell.css'

const AppShell = () => {
  return (
    <div className="app-shell">
      <header className="header">
        <Header />
      </header>
      <aside className="aside">
        <Sidebar />
      </aside>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}

export { AppShell }
