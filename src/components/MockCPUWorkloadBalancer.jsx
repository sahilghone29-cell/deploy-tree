import { useState } from 'react'
import { MinHeap } from '@algorithms/minHeap'
import { initialCPUs } from '@data/mockData'

const taskNames = ['Webpack', 'Babel', 'ESLint', 'Jest', 'TypeCheck', 'Prettier', 'Bundler', 'CSS Build']
let taskCounter = 10

function buildHeap(cpus) {
  const heap = new MinHeap(c => c.load)
  cpus.forEach(c => heap.insert({ id: c.id, load: c.load }))
  return heap
}

/**
 * MockCPUWorkloadBalancer.jsx
 * Purpose: Distribute build tasks across 4 virtual CPUs using Min Heap
 * DSA Used: Min Heap
 * Time Complexity: insert O(log n), extractMin O(log n), peekMin O(1)
 * Space Complexity: O(n)
 */
export default function MockCPUWorkloadBalancer({ showToast }) {
  const [cpus, setCPUs] = useState(initialCPUs.map(c => ({ ...c, tasks: [...c.tasks] })))

  const assignTask = () => {
    const name = `${taskNames[Math.floor(Math.random() * taskNames.length)]} #${taskCounter++}`
    const cost = Math.floor(Math.random() * 20) + 10

    setCPUs(prev => {
      const heap = buildHeap(prev)
      const min = heap.extractMin()
      const next = prev.map(c => ({ ...c, tasks: [...c.tasks] }))
      const target = next.find(c => c.id === min.id)
      target.tasks.push(name)
      target.load = Math.min(100, target.load + cost)
      showToast(`Assigned to CPU ${target.id} via Min Heap (load: ${min.load}%)`, 'success')
      return next
    })
  }

  const reset = () => setCPUs(initialCPUs.map(c => ({ ...c, tasks: [...c.tasks] })))

  const heap = buildHeap(cpus)
  const minLoad = heap.peekMin()?.load ?? 0
  const heapArr = [...cpus].sort((a, b) => a.load - b.load)

  return (
    <div>
      <div className="page-title">💻 Mock CPU Workload Balancer</div>
      <div className="page-sub">Min Heap — Always assign tasks to least-loaded CPU</div>

      <div className="dsa-info">
        <strong>💻 Min Heap — Load Balancing</strong>
        <div className="dsa-row">
          <span className="dsa-chip">Find Min: O(1) peek</span>
          <span className="dsa-chip">Extract Min: O(log n)</span>
          <span className="dsa-chip">Insert: O(log n)</span>
          <span className="dsa-chip">Space: O(n)</span>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <div className="flex-between" style={{ marginBottom: 12 }}>
            <div className="card-title" style={{ margin: 0 }}>🖥️ Virtual CPUs (4 cores)</div>
            <div className="flex">
              <button className="btn btn-primary btn-sm" onClick={assignTask}>+ Assign Task</button>
              <button className="btn btn-sm" onClick={reset}>⟳ Reset</button>
            </div>
          </div>

          <div className="heap-grid">
            {cpus.map(c => {
              const isMin = c.load === minLoad
              const barColor = c.load > 70 ? 'var(--danger)' : c.load > 40 ? 'var(--warning)' : 'var(--success)'
              return (
                <div key={c.id} className="cpu-card" style={{ border: isMin ? '2px solid var(--primary)' : '1px solid var(--border)' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: isMin ? 'var(--primary)' : 'var(--text)' }}>
                    CPU {c.id}{isMin ? ' ← MIN HEAP ROOT' : ''}
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: barColor }}>{c.load}%</div>
                  <div className="cpu-bar-wrap">
                    <div className="cpu-bar" style={{ width: `${c.load}%`, background: barColor }} />
                  </div>
                  <div className="text-sm" style={{ marginBottom: 4 }}>{c.tasks.length} tasks</div>
                  <div className="cpu-tasks">
                    {c.tasks.map((t, i) => (
                      <div key={i} className="cpu-task">{t}</div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="card">
          <div className="card-title">📊 Min Heap Array (by load)</div>
          <div className="flex" style={{ gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
            {heapArr.map((c, i) => (
              <div key={c.id} style={{
                textAlign: 'center',
                background: i === 0 ? 'rgba(37,99,235,.1)' : 'var(--bg)',
                border: `${i === 0 ? '2px' : '1px'} solid ${i === 0 ? 'var(--primary)' : 'var(--border)'}`,
                borderRadius: 8, padding: '8px 12px',
              }}>
                <div className="text-sm">[{i}] CPU {c.id}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: i === 0 ? 'var(--primary)' : 'var(--text)' }}>{c.load}%</div>
              </div>
            ))}
          </div>
          <div className="text-sm" style={{ marginBottom: 12 }}>
            Root [0] = minimum load → next task assigned here via extractMin()
          </div>

          <div className="divider" />
          <div className="card-title">📈 CPU Utilization</div>
          {cpus.map(c => {
            const barColor = c.load > 70 ? 'var(--danger)' : c.load > 40 ? 'var(--warning)' : 'var(--success)'
            return (
              <div key={c.id} className="flex-between" style={{ marginBottom: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 600, minWidth: 45 }}>CPU {c.id}</span>
                <div style={{ flex: 1, margin: '0 10px' }}>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: `${c.load}%`, background: barColor }} />
                  </div>
                </div>
                <span style={{ fontSize: 12, minWidth: 35, textAlign: 'right' }}>{c.load}%</span>
              </div>
            )
          })}

          <div className="divider" />
          <table className="dt">
            <thead><tr><th>Operation</th><th>Complexity</th></tr></thead>
            <tbody>
              <tr><td>peekMin()</td><td>O(1)</td></tr>
              <tr><td>extractMin()</td><td>O(log n)</td></tr>
              <tr><td>insert()</td><td>O(log n)</td></tr>
              <tr><td>Space</td><td>O(n)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
