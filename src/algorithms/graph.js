/**
 * graph.js — Graph Data Structure (Adjacency List)
 * Purpose: Represent module dependencies and build pipeline networks
 * DSA Used: Graph (Adjacency List)
 * Time Complexity: addEdge O(1), BFS/DFS O(V+E)
 * Space Complexity: O(V+E)
 */
export class Graph {
  constructor() { this.adjList = new Map() }

  addNode(n) {
    if (!this.adjList.has(n)) this.adjList.set(n, [])
  }

  addEdge(a, b, w = 1, directed = false) {
    this.addNode(a)
    this.addNode(b)
    this.adjList.get(a).push({ node: b, weight: w })
    if (!directed) this.adjList.get(b).push({ node: a, weight: w })
  }
}
