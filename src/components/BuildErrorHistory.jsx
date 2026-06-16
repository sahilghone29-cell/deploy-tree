import React, { useState } from 'react'
import { Stack } from '@algorithms/stack'
import { initialErrors } from '@data/mockData'

const initStack = () => {
  const s = new Stack()
  initialErrors.forEach(e => s.push(e))
  return s
}

let buildCounter = 6

export default function BuildErrorHistory({ showToast }) {
  const [stack, setStack] = useState(initStack)
  const [, forceUpdate] = useState(0)

  const refresh = () => forceUpdate(n => n + 1)

  const push = () => {
    const statuses = ['success', 'danger', 'warning']
    const msgs = ['Build completed', 'Compilation error', 'Missing peer dependency', 'Type mismatch in prop']
    const mods = ['src/App.jsx', 'src/components/Card.jsx', 'src/hooks/', 'src/utils/helpers.js']
    const s = statuses[Math.floor(Math.random() * 3)]
    stack.push({
      id: `B00${buildCounter++}`,
      status: s,
      msg: msgs[Math.floor(Math.random() * msgs.length)],
      time: new Date().toLocaleTimeString().slice(0, 5),
      module: mods[Math.floor(Math.random() * mods.length)],
    })
    showToast('Build pushed to stack', 'info')
    refresh()
  }

  const pop = () => {
    if (stack.isEmpty()) { showToast('Stack is empty!', 'danger'); return }
    const e = stack.pop()
    showToast(`Popped: ${e.id}`, 'info')
    refresh()
  }

  const colors  = { success: '#DCFCE7', danger: '#FEE2E2', warning: '#FEF3C7' }
  const borders = { success: 'var(--success)', danger: 'var(--danger)', warning: 'var(--warning)' }
  const items   = [...stack.items].reverse()

  return (
    <div>
      <div className="page-title">📦 Build Error History</div>
      <div className="page-sub">Stack (LIFO) — Last In, First Out error tracking</div>

      <div className="dsa-info">
        <strong>📦 Stack — LIFO</strong>
        <div className="dsa-row">
          <span className="dsa-chip">Push: O(1)</span>
          <span className="dsa-chip">Pop: O(1)</span>
          <span className="dsa-chip">Peek: O(1)</span>
          <span className="dsa-chip">Space: O(n)</span>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <div className="flex-between" style={{ marginBottom: 12 }}>
            <div className="card-title" style={{ margin: 0 }}>📋 Build Stack</div>
            <div className="flex">
              <button className="btn btn-primary btn-sm" onClick={push}>⬆ Push</button>
              <button className="btn btn-danger btn-sm"  onClick={pop}>⬇ Pop</button>
            </div>
          </div>
          <div className="text-sm" style={{ marginBottom: 6 }}>⬆ TOP OF STACK (most recent)</div>
          <div className="stack-viz">
            {items.length === 0
              ? <div className="empty">Stack is empty</div>
              : items.map((e, i) => (
                <div
                  key={e.id}
                  className="stack-item"
                  style={{ background: colors[e.status], borderLeft: `4px solid ${borders[e.status]}` }}
                >
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600 }}>{e.id} {i === 0 ? '← TOP' : ''}</div>
                    <div className="text-sm">{e.msg}</div>
                    <div style={{ fontSize: 10, color: 'var(--text2)' }}>{e.module} · {e.time}</div>
                  </div>
                  <span className={`badge badge-${e.status}`} style={{ marginLeft: 'auto' }}>{e.status}</span>
                </div>
              ))}
          </div>
          <div className="text-sm" style={{ marginTop: 6 }}>⬇ BOTTOM OF STACK (oldest)</div>
        </div>

        <div className="card">
          <div className="card-title">📊 Stack Statistics</div>
          <div className="grid grid-2" style={{ marginBottom: 12 }}>
            {[
              { label: 'Total Builds', value: stack.size(), color: 'var(--text)' },
              { label: 'Successful',   value: stack.items.filter(e => e.status === 'success').length, color: 'var(--success)' },
              { label: 'Errors',       value: stack.items.filter(e => e.status === 'danger').length,  color: 'var(--danger)'  },
              { label: 'Warnings',     value: stack.items.filter(e => e.status === 'warning').length, color: 'var(--warning)' },
            ].map(s => (
              <div key={s.label} style={{ background:'var(--bg)',border:'1px solid var(--border)',borderRadius:8,padding:10,textAlign:'center' }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: s.color }}>{s.value}</div>
                <div className="text-sm">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="divider" />
          <div className="card-title">🔍 Complexity</div>
          <table className="dt">
            <thead><tr><th>Operation</th><th>Time</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>push()</td><td>O(1)</td><td>Add to top</td></tr>
              <tr><td>pop()</td><td>O(1)</td><td>Remove from top</td></tr>
              <tr><td>peek()</td><td>O(1)</td><td>View top</td></tr>
              <tr><td>isEmpty()</td><td>O(1)</td><td>Check empty</td></tr>
              <tr><td>size()</td><td>O(1)</td><td>Count items</td></tr>
            </tbody>
          </table>
          <div className="divider" />
          <div className="text-sm">
            <strong style={{ color: 'var(--text)' }}>Real Use:</strong> Browser back-button history,
            Ctrl+Z undo operations, function call stack, expression evaluation in compilers.
          </div>
        </div>
      </div>
    </div>
  )
}