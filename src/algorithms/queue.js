/**
 * queue.js — Priority Queue (Min Heap implementation)
 * Purpose: Schedule build tasks by priority level (1 = highest)
 * Time Complexity: enqueue O(log n), dequeue O(log n), peek O(1)
 * Space Complexity: O(n)
 */
export class PriorityQueue {
  constructor() { this.heap = [] }

  enqueue(item, priority) {
    this.heap.push({ ...item, priority })
    this._bubbleUp(this.heap.length - 1)
  }

  dequeue() {
    if (!this.heap.length) return null
    const top = this.heap[0]
    const last = this.heap.pop()
    if (this.heap.length) { this.heap[0] = last; this._sinkDown(0) }
    return top
  }

  _bubbleUp(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2)
      if (this.heap[p].priority <= this.heap[i].priority) break
      ;[this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]
      i = p
    }
  }

  _sinkDown(i) {
    const n = this.heap.length
    while (true) {
      let s = i, l = 2 * i + 1, r = 2 * i + 2
      if (l < n && this.heap[l].priority < this.heap[s].priority) s = l
      if (r < n && this.heap[r].priority < this.heap[s].priority) s = r
      if (s === i) break
      ;[this.heap[s], this.heap[i]] = [this.heap[i], this.heap[s]]
      i = s
    }
  }
}
