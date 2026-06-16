
const navItems = [
  { page: 'home',     icon: '🏠', label: 'Dashboard',      badge: null },
  { page: 'tree',     icon: '🌳', label: 'Code Structure',  badge: 'Tree' },
  { page: 'stack',    icon: '📦', label: 'Build Errors',    badge: 'Stack' },
  { page: 'queue',    icon: '⚙️', label: 'Task Queue',      badge: 'P.Queue' },
  { page: 'hash',     icon: '🔍', label: 'File Checker',    badge: 'HashMap' },
  { page: 'sort',     icon: '📊', label: 'File Sorter',     badge: 'MergeSort' },
  { page: 'graph',    icon: '🕸️', label: 'Code Link Hub',   badge: 'Graph' },
  { page: 'dijkstra', icon: '🗺️', label: 'Build Finder',    badge: 'Dijkstra' },
  { page: 'heap',     icon: '💻', label: 'CPU Balancer',    badge: 'MinHeap' },
]

export default function Sidebar({ page, setPage, open }) {
  return (
    <aside className={`sidebar ${open ? '' : 'collapsed'}`}>
      <div className="sidebar-logo">
        <span>🚀</span>
        {open && <span>DeployTree</span>}
      </div>

      {open && <div className="nav-section">MAIN</div>}
      <div
        className={`nav-item ${page === 'home' ? 'active' : ''}`}
        onClick={() => setPage('home')}
        title="Dashboard"
      >
        <span className="nav-icon">🏠</span>
        {open && <span>Dashboard</span>}
      </div>

      {open && <div className="nav-section">DSA MODULES</div>}
      {navItems.slice(1).map(item => (
        <div
          key={item.page}
          className={`nav-item ${page === item.page ? 'active' : ''}`}
          onClick={() => setPage(item.page)}
          title={item.label}
        >
          <span className="nav-icon">{item.icon}</span>
          {open && <span className="nav-label-text">{item.label}</span>}
          {open && item.badge && <span className="dsa-badge">{item.badge}</span>}
        </div>
      ))}
    </aside>
  )
}