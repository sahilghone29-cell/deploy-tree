import React, { useState } from 'react'
import { PriorityQueue } from '@algorithms/queue'
import { initialTasks } from '@data/mockData'

const initQueue = () => {
  const q = new PriorityQueue()
  initialTasks.forEach(t => q.enqueue(t, t.priority))
  return q
}

let taskCounter = 6
const priColors  = { 1:'var(--danger)', 2:'#F97316', 3:'var(--warning)', 4:'var(--primary)', 5:'var(--text2)' }
const priLabels  = { 1:'Critical', 2:'High', 3:'Medium', 4:'Low', 5:'Minimal' }
const taskNames  = ['Security Scan','Performance Audit','Code Coverage','Docker Build','Cache Invalidation','Smoke Test','Load Test']

export default function BuildTaskQueue({ showToast }) {
  const [queue, setQueue] = useState(initQueue)
  const [priority, setPriority] = useState(3)
  const [, forceUpdate] = useState(0)

  const refresh = () => forceUpdate(n => n + 1)

  const addTask = () => {
    const name = taskNames[Math.floor(Math.random() * taskNames.length)]
    queue.enqueue({ name, id: `T00${taskCounter++}`, status: 'pending' }, priority)
    showToast(`Task added with priority ${priority}`, 'success')
    refresh()
  }

  const executeTask = () => {
    const t = queue.dequeue()
    if (!t) { showToast('Queue is empty!', 'danger'); return }
    showToast(`Executing: ${t.name}`, 'success')
    refresh()
  }

  const items = [...queue.heap]

  return (
    <div>
      <div className="page-title">⚙️ Build Task Queue</div>
      <div className="page-sub">Priority Queue (Min-Heap) — Tasks sorted by priority level</div>

      <div className="dsa-info">
        <strong>⚙️ Priority Queue — Min Heap</strong>
        <div className="dsa-row">
          <span className="dsa-chip">Enqueue: O(log n)</span>
          <span className="dsa-chip">Dequeue: O(log n)</span>
          <span className="dsa-chip">Peek Min: O(1)</span>
          <span className="dsa-chip">Space: O(n)</span>
          <span className="dsa-chip">Priority 1 = Highest</span>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <div className="flex-between" style={{ marginBottom: 12 }}>
            <div className="card-title" style={{ margin: 0 }}>📋 Task Queue</div>
            <div className="flex">
              <select
                value={priority}
                onChange={e => setPriority(Number(e.target.value))}
                style={{ width: 130, padding: '5px 8px', fontSize: 12 }}
              >
                {[1,2,3,4,5].map(p => (
                  <option key={p} value={p}>P{p} - {priLabels[p]}</option>
                ))}
              </select>
              <button className="btn btn-primary btn-sm" onClick={addTask}>+ Add</button>
              <button className="btn btn-success btn-sm" onClick={executeTask}>▶ Execute</button>
            </div>
          </div>

          <div className="text-sm" style={{ marginBottom: 6, color: 'var(--primary)', fontWeight: 600 }}>
            ← NEXT TO EXECUTE (priority 1 first)
          </div>
          <div className="queue-viz">
            {items.length === 0
              ? <div className="empty" style={{ width: '100%' }}>Queue is empty</div>
              : items.map((t, i) => (
                <div
                  key={t.id}
                  className="queue-item"
                  style={{
                    background: `${priColors[t.priority]}22`,
                    border: `1px solid ${priColors[t.priority]}`,
                    minWidth: 110,
                  }}
                >
                  <span style={{ fontSize: 10, color: priColors[t.priority], fontWeight: 700 }}>
                    P{t.priority} {priLabels[t.priority]}
                  </span>
                  <span style={{ fontSize: 11, fontWeight: 600 }}>{t.id}</span>
                  <span className="text-sm" style={{ textAlign: 'center' }}>{t.name}</span>
                  {i === 0 && <span style={{ fontSize: 9, color: 'var(--primary)' }}>▶ NEXT</span>}
                </div>
              ))}
          </div>
        </div>

        <div className="card">
          <div className="card-title">🌐 Heap Array</div>
          <div className="text-sm" style={{ marginBottom: 6 }}>Internal heap representation:</div>
          <div style={{ fontFamily: 'monospace', fontSize: 12, background: 'var(--bg)', padding: 8, borderRadius: 6, border: '1px solid var(--border)' }}>
            [{items.map((t, i) => (
              <span key={i} style={{ color: i === 0 ? 'var(--primary)' : 'var(--text)' }}>
                P{t.priority}{i < items.length - 1 ? ', ' : ''}
              </span>
            ))}]
          </div>
          <div className="text-sm" style={{ marginTop: 4 }}>Index [0] = minimum priority</div>
          <div className="divider" />
          <table className="dt">
            <thead><tr><th>Operation</th><th>Complexity</th></tr></thead>
            <tbody>
              <tr><td>Enqueue</td><td>O(log n) — bubble up</td></tr>
              <tr><td>Dequeue</td><td>O(log n) — sink down</td></tr>
              <tr><td>Peek Min</td><td>O(1)</td></tr>
              <tr><td>Build Heap</td><td>O(n)</td></tr>
              <tr><td>Space</td><td>O(n)</td></tr>
            </tbody>
          </table>
          <div className="divider" />
          <div className="text-sm">
            <strong style={{ color: 'var(--text)' }}>Real Use:</strong> OS task schedulers,
            CI/CD pipelines, hospital emergency queues, Dijkstra's algorithm, A* pathfinding.
          </div>
        </div>
      </div>
    </div>
  )
}