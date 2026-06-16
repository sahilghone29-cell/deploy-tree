import React, { useState } from 'react'
import { mergeSort } from '@algorithms/mergeSort'
import { fileData } from '@data/mockData'

const barColors = ['#2563EB','#7C3AED','#059669','#D97706','#DC2626','#0891B2','#9333EA','#16A34A','#EA580C','#0284C7']

export default function FileSizeSorter({ showToast }) {
  const original = fileData.map(f => ({ ...f, sizekb: f.size }))
  const [sorted, setSorted] = useState([...original])
  const [order, setOrder]   = useState(null)

  const doSort = (dir) => {
    let result = mergeSort([...original], 'sizekb')
    if (dir === 'desc') result = result.reverse()
    setSorted(result)
    setOrder(dir)
    showToast(`Sorted ${dir === 'asc' ? 'ascending' : 'descending'}`, 'success')
  }

  const reset = () => { setSorted([...original]); setOrder(null) }

  const maxOrig   = Math.max(...original.map(f => f.sizekb))
  const maxSorted = Math.max(...sorted.map(f => f.sizekb))

  return (
    <div>
      <div className="page-title">📊 File Size Sorter</div>
      <div className="page-sub">Merge Sort — O(n log n) stable divide-and-conquer sort</div>

      <div className="dsa-info">
        <strong>📊 Merge Sort</strong>
        <div className="dsa-row">
          <span className="dsa-chip">Best/Avg/Worst: O(n log n)</span>
          <span className="dsa-chip">Space: O(n)</span>
          <span className="dsa-chip">Stable: Yes</span>
          <span className="dsa-chip">Divide & Conquer</span>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <div className="flex-between" style={{ marginBottom: 12 }}>
            <div className="card-title" style={{ margin: 0 }}>📁 File Size Chart</div>
            <div className="flex">
              <button className="btn btn-primary btn-sm" onClick={() => doSort('asc')}>↑ Asc</button>
              <button className="btn btn-sm" onClick={() => doSort('desc')}>↓ Desc</button>
              <button className="btn btn-sm" onClick={reset}>⟳ Reset</button>
            </div>
          </div>

          <div className="text-sm" style={{ marginBottom:6 }}>Original order:</div>
          <div className="sort-bars">
            {original.map((f, i) => (
              <div
                key={f.id}
                className="bar"
                style={{ height: Math.max(20, (f.sizekb / maxOrig) * 140), background: barColors[i % barColors.length] }}
                title={`${f.name}: ${f.sizekb} KB`}
              >
                {f.sizekb}
              </div>
            ))}
          </div>

          <div className="text-sm" style={{ marginTop:10, marginBottom:6 }}>
            After Merge Sort {order ? `(${order === 'asc' ? 'Ascending ↑' : 'Descending ↓'})` : '(not sorted yet)'}:
          </div>
          <div className="sort-bars">
            {sorted.map((f, i) => (
              <div
                key={f.id}
                className="bar"
                style={{ height: Math.max(20, (f.sizekb / maxSorted) * 140), background: barColors[i % barColors.length] }}
                title={`${f.name}: ${f.sizekb} KB`}
              >
                {f.sizekb}
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-title">📋 Sorted File List</div>
          <table className="dt">
            <thead><tr><th>Rank</th><th>File</th><th>Size</th><th>Path</th></tr></thead>
            <tbody>
              {sorted.map((f, i) => (
                <tr key={f.id}>
                  <td style={{ color:'var(--primary)', fontWeight:700 }}>#{i + 1}</td>
                  <td>{f.name}</td>
                  <td>
                    <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                      <div style={{ width: `${(f.sizekb / maxSorted) * 60}px`, height:6, borderRadius:3, background:'var(--primary)' }} />
                      {f.sizekb} KB
                    </div>
                  </td>
                  <td className="font-mono text-sm">{f.path}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="divider" />
          <div className="card-title">🔁 Merge Sort Steps</div>
          <div className="text-sm">
            <div style={{ marginBottom:6 }}><strong style={{ color:'var(--text)' }}>Divide:</strong> Split into halves recursively until size = 1</div>
            <div style={{ marginBottom:6 }}><strong style={{ color:'var(--text)' }}>Merge:</strong> Compare & merge two halves in sorted order</div>
            <div style={{ marginBottom:6 }}><strong style={{ color:'var(--text)' }}>Repeat:</strong> Continue until full array is rebuilt</div>
            <div style={{ fontFamily:'monospace', fontSize:11, background:'var(--bg)', padding:8, borderRadius:6, border:'1px solid var(--border)', marginTop:8 }}>
              [42,18,12,8] → [42,18] [12,8]<br />
              → [42] [18] [12] [8]<br />
              → [18,42] [8,12]<br />
              → [8,12,18,42] ✅
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}