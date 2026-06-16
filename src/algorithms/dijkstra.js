import { PriorityQueue } from './queue'

export function dijkstra(graph, start, onStep = () => {}) {
  const dist = {}
  const prev = {}
  const visited = new Set()

  for (const n of graph.adjList.keys()) {
    dist[n] = Infinity
  }

  dist[start] = 0

  const pq = new PriorityQueue()
  pq.enqueue({ node: start }, 0)

  onStep({
    type: 'init',
    dist: { ...dist },
    prev: { ...prev },
    queue: [...pq.heap]
  })

  while (pq.heap.length) {
    const { node } = pq.dequeue()

    if (visited.has(node)) continue

    visited.add(node)

    onStep({
      type: 'visit',
      current: node,
      visited: [...visited],
      dist: { ...dist },
      queue: [...pq.heap]
    })

    for (const { node: nb, weight } of graph.adjList.get(node) || []) {
      const nd = dist[node] + weight

      if (nd < dist[nb]) {
        dist[nb] = nd
        prev[nb] = node

        pq.enqueue({ node: nb }, nd)

        onStep({
          type: 'relax',
          from: node,
          to: nb,
          newDistance: nd,
          dist: { ...dist },
          prev: { ...prev },
          queue: [...pq.heap]
        })
      }
    }
  }

  return { dist, prev }
}

export function getPath(prev, end) {
  const path = []
  let cur = end

  while (cur) {
    path.unshift(cur)
    cur = prev[cur]
  }

  return path
}