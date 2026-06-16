import {
  taskCompletionData, buildSuccessRate, projectOverview, initialCPUs,
} from '@data/mockData'

const stats = [
  { label: 'Total Modules',  value: 12, icon: '📁', color: '#DBEAFE', sub: '4 folders, 8 modules' },
  { label: 'Build Tasks',    value: 5,  icon: '⚙️', color: '#DCFCE7', sub: 'In priority queue' },
  { label: 'Errors Logged',  value: 5,  icon: '🐛', color: '#FEE2E2', sub: 'In stack' },
  { label: 'Files Tracked',  value: 10, icon: '📄', color: '#FEF3C7', sub: 'Indexed in HashMap' },
  { label: 'Active CPUs',    value: 4,  icon: '💻', color: '#F3E8FF', sub: 'Min-Heap balanced' },
  { label: 'Dependencies',   value: 11, icon: '🔗', color: '#DCFCE7', sub: 'Graph edges mapped' },
]

const dsaModules = [
  { name: 'Code Structure', page: 'tree',     dsa: 'Tree',           icon: '🌳' },
  { name: 'Build Errors',   page: 'stack',    dsa: 'Stack',          icon: '📦' },
  { name: 'Task Queue',     page: 'queue',    dsa: 'Priority Queue', icon: '⚙️' },
  { name: 'File Checker',   page: 'hash',     dsa: 'Hash Table',     icon: '🔍' },
  { name: 'File Sorter',    page: 'sort',     dsa: 'Merge Sort',     icon: '📊' },
  { name: 'Code Link Hub',  page: 'graph',    dsa: 'Graph',          icon: '🕸️' },
  { name: 'Build Finder',   page: 'dijkstra', dsa: 'Dijkstra',       icon: '🗺️' },
  { name: 'CPU Balancer',   page: 'heap',     dsa: 'Min Heap',       icon: '💻' },
]

const recentBuilds = [
  { id: 'B005', status: 'success', msg: 'Build completed successfully',         module: 'src/App.jsx',             time: '10:30' },
  { id: 'B004', status: 'danger',  msg: 'TypeError: Cannot read property',      module: 'src/components/Header',   time: '10:28' },
  { id: 'B003', status: 'success', msg: 'ESLint passed - no errors',            module: 'src/styles/',             time: '10:25' },
  { id: 'B002', status: 'warning', msg: 'Warning: Missing dependency array',    module: 'src/hooks/useData.js',    time: '10:20' },
  { id: 'B001', status: 'danger',  msg: 'SyntaxError: Unexpected token in JSX',  module: 'src/components/Card.jsx', time: '10:15' },
]

const statusIcon = { success: '✅', danger: '❌', warning: '⚠️' }
const maxTasks = Math.max(...taskCompletionData.map(d => d.completed + d.pending))

/**
 * DashboardHome.jsx
 * Purpose: Project overview with statistics, charts, and DSA module navigation
 * DSA Used: None (displays aggregated mock data)
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
export default function DashboardHome({ setPage }) {
  const { success, warning, failed } = buildSuccessRate

  return (
    <div>
      <div className="page-title">🚀 {projectOverview.title} Dashboard</div>
      <div className="page-sub">{projectOverview.subtitle} — {projectOverview.semester}</div>

      {/* Project Overview */}
      <div className="card overview-card" style={{ marginBottom: 16 }}>
        <div className="card-title">📋 Project Overview</div>
        <p className="text-sm" style={{ marginBottom: 12, lineHeight: 1.6 }}>{projectOverview.description}</p>
        <div className="flex" style={{ flexWrap: 'wrap', gap: 8 }}>
          {projectOverview.techStack.map(t => (
            <span key={t} className="badge badge-info">{t}</span>
          ))}
          <span className="badge badge-success">{projectOverview.features} DSA Features</span>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-3" style={{ marginBottom: 16 }}>
        {stats.map(s => (
          <div key={s.label} className="stat-card">
            <div className="stat-icon" style={{ background: s.color }}>{s.icon}</div>
            <div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-value">{s.value}</div>
              <div className="text-sm">{s.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-2">
        {/* CPU Usage */}
        <div className="card">
          <div className="card-title">💻 CPU Usage</div>
          {initialCPUs.map(c => (
            <div key={c.id}>
              <div className="flex-between" style={{ marginBottom: 4 }}>
                <span className="text-sm">CPU {c.id}</span>
                <span className="text-sm">{c.load}%</span>
              </div>
              <div className="progress" style={{ marginBottom: 10 }}>
                <div
                  className="progress-bar"
                  style={{
                    width: `${c.load}%`,
                    background: c.load > 70 ? 'var(--danger)' : c.load > 40 ? 'var(--warning)' : 'var(--success)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Build Success Rate */}
        <div className="card">
          <div className="card-title">📈 Build Success Rate</div>
          <div className="rate-bar">
            <div style={{ width: `${success}%`, background: 'var(--success)' }}>{success}%</div>
            <div style={{ width: `${warning}%`, background: 'var(--warning)' }}>{warning}%</div>
            <div style={{ width: `${failed}%`, background: 'var(--danger)' }}>{failed}%</div>
          </div>
          <div style={{ fontSize: 12, marginTop: 8 }}>
            <span style={{ marginRight: 12 }}>🟢 Success {success}%</span>
            <span style={{ marginRight: 12 }}>🟡 Warning {warning}%</span>
            <span>🔴 Failed {failed}%</span>
          </div>
        </div>

        {/* Task Completion Chart */}
        <div className="card">
          <div className="card-title">✅ Task Completion (Weekly)</div>
          <div className="chart-bars">
            {taskCompletionData.map(d => (
              <div key={d.day} className="chart-col">
                <div className="chart-stack" style={{ height: 120 }}>
                  <div
                    className="chart-seg pending"
                    style={{ height: `${(d.pending / maxTasks) * 100}%` }}
                    title={`Pending: ${d.pending}`}
                  />
                  <div
                    className="chart-seg completed"
                    style={{ height: `${(d.completed / maxTasks) * 100}%` }}
                    title={`Completed: ${d.completed}`}
                  />
                </div>
                <span className="text-sm">{d.day}</span>
              </div>
            ))}
          </div>
          <div className="flex" style={{ gap: 12, marginTop: 8, fontSize: 12 }}>
            <span>🟦 Completed</span>
            <span>🟨 Pending</span>
          </div>
        </div>

        {/* DSA Modules */}
        <div className="card">
          <div className="card-title">🗂️ DSA Modules</div>
          <div className="module-grid">
            {dsaModules.map(m => (
              <div key={m.page} className="module-card" onClick={() => setPage?.(m.page)}>
                <span style={{ fontSize: 22 }}>{m.icon}</span>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>{m.name}</div>
                  <span className="badge badge-info">{m.dsa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Builds */}
        <div className="card" style={{ gridColumn: '1 / -1' }}>
          <div className="card-title">🕒 Recent Build Timeline</div>
          <div className="grid grid-2">
            {recentBuilds.map(e => (
              <div key={e.id} className="flex" style={{ marginBottom: 12 }}>
                <span style={{ fontSize: 18 }}>{statusIcon[e.status]}</span>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>{e.id} — {e.msg}</div>
                  <div className="text-sm">{e.module} · {e.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
