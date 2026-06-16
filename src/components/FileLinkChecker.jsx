import React, { useState, useMemo } from 'react'
import { HashTable } from '@algorithms/hashTable'
import { fileData } from '@data/mockData'

const buildTable = () => {
  const ht = new HashTable(12)
  fileData.forEach(f => ht.set(f.id, f))
  return ht
}

export default function FileLinkChecker() {
  const ht = useMemo(buildTable, [])
  const [query, setQuery] = useState('')

  const q = query.trim().toUpperCase()
  const found    = q ? ht.get(q)      : null
  const foundIdx = q ? ht.getIndex(q) : -1

  return (
    <div>
      <div className="page-title">🔍 File Link Checker</div>
      <div className="page-sub">Hash Table — O(1) average lookup by File ID</div>

      <div className="dsa-info">
        <strong>🔍 Hash Table</strong>
        <div className="dsa-row">
          <span className="dsa-chip">Insert: O(1) avg</span>
          <span className="dsa-chip">Search: O(1) avg</span>
          <span className="dsa-chip">Worst: O(n) — collisions</span>
          <span className="dsa-chip">Hash fn: charCode × 31 % size</span>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <div className="card-title">🔎 Search by File ID</div>
          <label>Enter File ID (e.g. F001, F005, F010)</label>
          <input
            type="text"
            placeholder="Search file ID..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{ fontFamily: 'monospace', marginBottom: 12 }}
          />

          {q && found && (
            <div style={{ background:'#DCFCE7', border:'1px solid var(--success)', borderRadius:10, padding:12, marginBottom:12 }}>
              <div style={{ fontSize:13, fontWeight:700, color:'#16A34A' }}>✅ File Found!</div>
              <div className="grid grid-2" style={{ marginTop:8, gap:6 }}>
                {[['File ID', found.id],['File Name', found.name],['Path', found.path],['Size', `${found.size} KB`],['Hash Index', foundIdx]].map(([k,v]) => (
                  <div key={k}>
                    <span className="text-sm">{k}</span>
                    <div style={{ fontFamily:'monospace', fontWeight:600 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {q && !found && (
            <div style={{ background:'#FEE2E2', border:'1px solid var(--danger)', borderRadius:8, padding:10, color:'var(--danger)', fontSize:13 }}>
              ❌ File ID "{q}" not found
            </div>
          )}

          {!q && <div className="empty">Type a File ID above to search</div>}

          <div className="divider" />
          <div className="card-title">📁 All Files</div>
          <table className="dt">
            <thead><tr><th>ID</th><th>File</th><th>Path</th><th>Size</th></tr></thead>
            <tbody>
              {fileData.map(f => (
                <tr key={f.id} style={{ background: f.id === q ? 'rgba(37,99,235,.08)' : '' }}>
                  <td className="font-mono" style={{ color:'var(--primary)' }}>{f.id}</td>
                  <td>{f.name}</td>
                  <td className="font-mono text-sm">{f.path}</td>
                  <td>{f.size} KB</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <div className="card-title">🗂️ Hash Table Buckets (size = 12)</div>
          <div className="text-sm" style={{ marginBottom:8 }}>Hash fn: Σ(charCode × 31) % 12</div>
          <div className="hash-table">
            {ht.table.map((bucket, i) => (
              <div
                key={i}
                className={`hash-row ${foundIdx === i && q ? 'highlight' : ''}`}
                style={{ opacity: bucket.length === 0 ? 0.4 : 1 }}
              >
                <span className="hash-idx">[{i}]</span>
                <span className="hash-key font-mono">
                  {bucket.length > 0 ? bucket.map(b => b[0]).join(', ') : 'NULL'}
                </span>
                {bucket.length > 0 && (
                  <span className="hash-val">→ {bucket.map(b => b[1].name).join(', ')}</span>
                )}
              </div>
            ))}
          </div>
          <div className="divider" />
          <div className="text-sm">
            <strong style={{ color:'var(--text)' }}>Hash Function:</strong><br />
            hash(key) = Σ(key[i].charCode × 31ⁱ) % tableSize<br />
            Collision handling: Chaining (array per bucket).<br />
            Load factor stays low → avg chain length ≈ O(1).
          </div>
        </div>
      </div>
    </div>
  )
}