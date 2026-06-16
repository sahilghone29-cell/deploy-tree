import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import DashboardHome from './components/DashboardHome'
import CodeStructureViewer from './components/CodeStructureViewer'
import BuildErrorHistory from './components/BuildErrorHistory'
import BuildTaskQueue from './components/BuildTaskQueue'
import FileLinkChecker from './components/FileLinkChecker'
import FileSizeSorter from './components/FileSizeSorter'
import CodeLinkHub from './components/CodeLinkHub'
import QuickestBuildTimeFinder from './components/QuickestBuildTimeFinder'
import MockCPUWorkloadBalancer from './components/MockCPUWorkloadBalancer'
import SmartDashboardWidgets from './components/SmartDashboardWidgets'

export default function App() {
  const [page, setPage] = useState('home')
  const [dark, setDark] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [toasts, setToasts] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const [buildProgress, setBuildProgress] = useState(0)
  const [buildLogs, setBuildLogs] = useState([])

  useEffect(() => {
    document.body.classList.toggle('dark', dark)
  }, [dark])

  const showToast = (msg, type = 'info') => {
    const id = Date.now()

    setToasts(prev => [...prev, { id, msg, type }])

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 3000)
  }

  const navigate = (target) => {
    if (target === page) return

    setLoading(true)
    setSearchQuery('')

    setTimeout(() => {
      setPage(target)
      setLoading(false)
    }, 350)
  }

  const pages = {
   home: (
  <DashboardHome
    showToast={showToast}
    setPage={navigate}
    buildProgress={buildProgress}
    buildLogs={buildLogs}
  />
),

    tree: <CodeStructureViewer searchQuery={searchQuery} />,
    stack: <BuildErrorHistory showToast={showToast} />,
    queue: <BuildTaskQueue showToast={showToast} />,
    hash: <FileLinkChecker searchQuery={searchQuery} />,
    sort: <FileSizeSorter showToast={showToast} />,
    graph: <CodeLinkHub />,
    dijkstra: <QuickestBuildTimeFinder showToast={showToast} />,
    heap: <MockCPUWorkloadBalancer showToast={showToast} />,
  }

  return (
    <div className={`app ${dark ? 'dark' : ''}`}>
      <div className="toast-container">
        {toasts.map(t => (
          <div key={t.id} className={`toast toast-${t.type}`}>
            <span>{t.msg}</span>
          </div>
        ))}
      </div>

      <Sidebar
        page={page}
        setPage={navigate}
        open={sidebarOpen}
      />

      <div className={`main ${sidebarOpen ? '' : 'sidebar-collapsed'}`}>
        <Header
          page={page}
          dark={dark}
          setDark={setDark}
          toggleSidebar={() => setSidebarOpen(o => !o)}
          showToast={showToast}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={navigate}
          setBuildProgress={setBuildProgress}
          setBuildLogs={setBuildLogs}
        />

        <div className="content">
          {loading ? (
            <div className="loading-screen">
              <div className="spinner" />
              <p>Loading module...</p>
            </div>
          ) : (
            pages[page]
          )}
        </div>
      </div>
    </div>
  )
}