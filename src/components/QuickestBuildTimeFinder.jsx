import React, { useState } from 'react'
import { Graph } from '@algorithms/graph'
import { dijkstra, getPath } from '@algorithms/dijkstra'
import { buildGraphEdges } from '@data/mockData'

const buildGraph = () => {
  const g = new Graph()
  buildGraphEdges.forEach(([a, b, w]) => g.addEdge(a, b, w))
  return g
}

const nodePos = {
  START: [50, 140],
  Compile: [160, 80],
  Lint: [270, 40],
  Test: [270, 180],
  Bundle: [370, 110],
  Deploy: [470, 60],
  END: [540, 140],
}

export default function QuickestBuildTimeFinder({ showToast }) {
  const graph = buildGraph()

  const [result, setResult] = useState(null)
  const [currentNode, setCurrentNode] = useState(null)
  const [visitedNodes, setVisitedNodes] = useState([])
  const [queueState, setQueueState] = useState([])

  const run = async () => {
    setCurrentNode(null)
    setVisitedNodes([])
    setQueueState([])
    setResult(null)

    const steps = []

    const { dist, prev } = dijkstra(
      graph,
      'START',
      step => steps.push(step)
    )

    for (const step of steps) {
      if (step.type === 'visit') {
        setCurrentNode(step.current)
        setVisitedNodes(step.visited || [])
      }

      if (step.queue) {
        setQueueState([...step.queue])
      }

      await new Promise(resolve =>
        setTimeout(resolve, 700)
      )
    }

    const path = getPath(prev, 'END')

    setResult({
      dist,
      prev,
      path,
      total: dist.END
    })

    showToast(
      `Shortest path: ${dist.END} units`,
      'success'
    )
  }

  const pathSet = result
    ? new Set(result.path)
    : new Set()

  const isPathEdge = (a, b) =>
    result &&
    result.path.includes(a) &&
    result.path.includes(b) &&
    Math.abs(
      result.path.indexOf(a) -
      result.path.indexOf(b)
    ) === 1

  return (
    <div>
      <div className="page-title">
        Quickest Build Time Finder
      </div>

      <div className="page-sub">
        Dijkstra's Algorithm — Shortest path through build pipeline
      </div>

      <div className="dsa-info">
        <strong>
          Dijkstra's Shortest Path Algorithm
        </strong>

        <div className="dsa-row">
          <span className="dsa-chip">
            Time: O((V+E) log V)
          </span>

          <span className="dsa-chip">
            Space: O(V)
          </span>

          <span className="dsa-chip">
            Greedy Algorithm
          </span>

          <span className="dsa-chip">
            Uses Priority Queue
          </span>
        </div>
      </div>

      <div className="grid grid-2">

        <div className="card">

          <div
            className="flex-between"
            style={{ marginBottom: 12 }}
          >
            <div
              className="card-title"
              style={{ margin: 0 }}
            >
              Build Pipeline
            </div>

            <button
              className="btn btn-primary btn-sm"
              onClick={run}
            >
              Find Shortest Path
            </button>
          </div>

          <svg
            viewBox="0 0 600 240"
            style={{
              width: '100%',
              background: 'var(--bg)',
              borderRadius: 8,
              border: '1px solid var(--border)'
            }}
          >

            {buildGraphEdges.map(([a, b, w], i) => (
              <g key={i}>
                <line
                  x1={nodePos[a][0]}
                  y1={nodePos[a][1]}
                  x2={nodePos[b][0]}
                  y2={nodePos[b][1]}
                  stroke={
                    isPathEdge(a, b) ||
                    isPathEdge(b, a)
                      ? '#22C55E'
                      : '#CBD5E1'
                  }
                  strokeWidth={
                    isPathEdge(a, b) ||
                    isPathEdge(b, a)
                      ? 3
                      : 1.5
                  }
                />

                <text
                  x={(nodePos[a][0] + nodePos[b][0]) / 2}
                  y={(nodePos[a][1] + nodePos[b][1]) / 2 - 4}
                  fill="#94A3B8"
                  fontSize={11}
                  textAnchor="middle"
                >
                  {w}
                </text>
              </g>
            ))}

            {Object.entries(nodePos).map(([n, [x, y]]) => (
              <g key={n}>
                <circle
                  cx={x}
                  cy={y}
                  r={24}
                  fill={
                    currentNode === n
                      ? '#F59E0B'
                      : pathSet.has(n)
                      ? '#22C55E'
                      : (n === 'START' || n === 'END')
                      ? '#2563EB'
                      : '#F1F5F9'
                  }
                  stroke={
                    currentNode === n
                      ? '#D97706'
                      : pathSet.has(n)
                      ? '#16A34A'
                      : (n === 'START' || n === 'END')
                      ? '#1D4ED8'
                      : '#CBD5E1'
                  }
                  strokeWidth={2}
                />

                <text
                  x={x}
                  y={y + 4}
                  textAnchor="middle"
                  fontSize={9}
                  fontWeight={700}
                  fill={
                    currentNode === n ||
                    pathSet.has(n) ||
                    n === 'START' ||
                    n === 'END'
                      ? '#fff'
                      : '#1E293B'
                  }
                >
                  {n}
                </text>
              </g>
            ))}
          </svg>

          {result && (
            <div
              style={{
                background: '#DCFCE7',
                border: '1px solid var(--success)',
                borderRadius: 10,
                padding: 12,
                marginTop: 8
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  color: '#16A34A'
                }}
              >
                Shortest Path Found
              </div>

              <div
                style={{
                  fontFamily: 'monospace',
                  margin: '6px 0'
                }}
              >
                {result.path.join(' → ')}
              </div>

              <div
                style={{
                  color: '#16A34A',
                  fontWeight: 600
                }}
              >
                Total Build Time: {result.total}
              </div>
            </div>
          )}
        </div>

        <div className="card">

          <div className="card-title">
            Live Algorithm State
          </div>

          <div className="text-sm">
            Current Node:
            <strong> {currentNode || 'None'} </strong>
          </div>

          <div style={{ marginTop: 10 }}>
            {visitedNodes.map(node => (
              <span
                key={node}
                className="badge badge-info"
                style={{ marginRight: 6 }}
              >
                {node}
              </span>
            ))}
          </div>

          <div className="divider" />

          <div className="card-title">
            Priority Queue
          </div>

          {queueState.length === 0 ? (
            <div className="text-sm">
              Queue Empty
            </div>
          ) : (
            queueState.map((item, index) => (
              <div
                key={index}
                className="hash-row"
              >
                {JSON.stringify(item)}
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  )
}