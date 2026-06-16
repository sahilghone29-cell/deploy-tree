const titles = {
  home: 'Dashboard Overview',
  tree: 'Code Structure Viewer — Tree',
  stack: 'Build Error History — Stack',
  queue: 'Build Task Queue — Priority Queue',
  hash: 'File Link Checker — Hash Table',
  sort: 'File Size Sorter — Merge Sort',
  graph: 'Code Link Hub — Graph',
  dijkstra: 'Quickest Build Finder — Dijkstra',
  heap: 'CPU Workload Balancer — Min Heap',
}

const searchPages = {
  tree: 'tree',
  stack: 'stack',
  queue: 'queue',
  hash: 'hash',
  sort: 'sort',
  graph: 'graph',
  dijkstra: 'dijkstra',
  heap: 'heap',
  home: 'home',
  dashboard: 'home',
  file: 'hash',
  error: 'stack',
  cpu: 'heap',
  build: 'dijkstra',
  link: 'graph',
  sorter: 'sort',
}

export default function Header({
  page,
  dark,
  setDark,
  toggleSidebar,
  showToast,
  searchQuery,
  setSearchQuery,
  setPage,
  setBuildProgress,
  setBuildLogs,
}) {
  const handleSearch = (e) => {
    e.preventDefault()

    const q = searchQuery.trim().toLowerCase()

    if (!q) return

    const target =
      searchPages[q] ||
      Object.entries(searchPages).find(([k]) => q.includes(k))?.[1]

    if (target) {
      setPage(target)
      showToast(`Navigated to ${titles[target]}`, 'info')
    } else {
      showToast(`No module found for "${searchQuery}"`, 'danger')
    }
  }

  const handleBuild = () => {
    setBuildProgress(0)
    setBuildLogs(['Build Started'])

    showToast('Build Started', 'info')

    let progress = 0

    const interval = setInterval(() => {
      progress += 10

      setBuildProgress(progress)

      if (progress === 20) {
        setBuildLogs(l => [...l, 'Compiling Modules'])
      }

      if (progress === 50) {
        setBuildLogs(l => [...l, 'Running Tests'])
      }

      if (progress === 80) {
        setBuildLogs(l => [...l, 'Optimizing Assets'])
      }

      if (progress >= 100) {
        setBuildLogs(l => [...l, 'Deployment Successful'])
        showToast('Deployment Successful', 'success')
        clearInterval(interval)
      }
    }, 500)
  }

  return (
    <div className="header">
      <button
        className="btn btn-sm"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        ☰
      </button>

      <div className="header-title">
        {titles[page]}
      </div>

      <form
        className="header-search"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          placeholder="Search modules..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      <button
        className={`btn btn-sm ${dark ? 'btn-primary' : ''}`}
        onClick={() => setDark(d => !d)}
      >
        {dark ? 'Light' : 'Dark'}
      </button>

      <button
        className="btn btn-primary btn-sm"
        onClick={handleBuild}
      >
        Run Build
      </button>
    </div>
  )
}