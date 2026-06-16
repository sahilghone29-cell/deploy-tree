import React from 'react'
import { Graph } from '@algorithms/graph'
import { depGraphEdges } from '@data/mockData'

const buildDepGraph = () => {
  const g = new Graph()
  depGraphEdges.forEach(([a, b, w]) => g.addEdge(a, b, w))
  return g
}

const nodePos = {
  App:          [260, 40],  Sidebar:     [100, 110],
  Header:       [260, 110], Dashboard:   [420, 110],
  BuildErrors:  [100, 200], TaskQueue:   [260, 200],
  FileSorter:   [420, 200], CodeHub:     [160, 290],
  Dijkstra:     [360, 290], CPUBalancer: [260, 370],
}

export default function CodeLinkHub() {
  const graph = buildDepGraph()

  const uniqueEdges = []
  graph.adjList.forEach((nbrs, node) => {
    nbrs.forEach(({ node: nb, weight }) => {
      if (node < nb) uniqueEdges.push([node, nb, weight])
    })
  })

  const nodes = Object.keys(nodePos)

  return (
    <div>
      <div className="page-title">🕸️ Code Link Hub</div>
      <div className="page-sub">Graph — Module dependency visualization as nodes and edges</div>

      <div className="dsa-info">
        <strong>🕸️ Graph — Adjacency List</strong>
        <div className="dsa-row">
          <span className="dsa-chip">Type: Undirected Weighted</span>
          <span className="dsa-chip">BFS/DFS: O(V+E)</span>
          <span className="dsa-chip">Space: O(V+E)</span>
          <span className="dsa-chip">V={graph.adjList.size} E={uniqueEdges.length}</span>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <div className="card-title">🗺️ Dependency Graph</div>
          <svg viewBox="0 0 540 420" style={{ width:'100%', background:'var(--bg)', borderRadius:8, border:'1px solid var(--border)' }}>
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#94A3B8" />
              </marker>
            </defs>
            {uniqueEdges.map(([a, b, w], i) => (
              <g key={i}>
                <line
                  x1={nodePos[a][0]} y1={nodePos[a][1]}
                  x2={nodePos[b][0]} y2={nodePos[b][1]}
                  stroke="#CBD5E1" strokeWidth={1.5}
                  markerEnd="url(#arrow)"
                />
                <text
                  x={(nodePos[a][0] + nodePos[b][0]) / 2}
                  y={(nodePos[a][1] + nodePos[b][1]) / 2}
                  fill="#94A3B8" fontSize={10} textAnchor="middle"
                >{w}</text>
              </g>
            ))}
            {nodes.map(n => (
              <g key={n}>
                <circle
                  cx={nodePos[n][0]} cy={nodePos[n][1]} r={26}
                  fill={n === 'App' ? '#2563EB' : '#F1F5F9'}
                  stroke={n === 'App' ? '#1D4ED8' : '#CBD5E1'} strokeWidth={1.5}
                />
                <text
                  x={nodePos[n][0]} y={nodePos[n][1] + 4}
                  textAnchor="middle" fontSize={9} fontWeight={600}
                  fill={n === 'App' ? '#fff' : '#1E293B'}
                >
                  {n.length > 8 ? n.slice(0, 8) + '..' : n}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="card" style={{ overflowY: 'auto' }}>
          <div className="card-title">📋 Adjacency List</div>
          <div style={{ fontFamily:'monospace', fontSize:12 }}>
            {Array.from(graph.adjList.entries()).map(([node, nbrs]) => (
              <div key={node} style={{ marginBottom:6 }}>
                <span style={{ color:'var(--primary)', fontWeight:700 }}>{node}</span>
                <span style={{ color:'var(--text2)' }}> → </span>
                {nbrs.map(n => (
                  <span key={n.node} style={{ background:'rgba(37,99,235,.1)', color:'var(--primary)', padding:'1px 6px', borderRadius:4, marginRight:3 }}>
                    {n.node}({n.weight})
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="divider" />
          <div className="card-title">📊 Graph Statistics</div>
          <table className="dt">
            <thead><tr><th>Property</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>Vertices (V)</td><td>{graph.adjList.size}</td></tr>
              <tr><td>Edges (E)</td><td>{uniqueEdges.length}</td></tr>
              <tr><td>Type</td><td>Undirected, Weighted</td></tr>
              <tr><td>BFS/DFS Time</td><td>O(V+E)</td></tr>
              <tr><td>Space</td><td>O(V+E)</td></tr>
              <tr><td>Root</td><td>App</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}