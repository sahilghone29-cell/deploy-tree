
export class MinHeap {
  constructor(getKey = v => v) {
    this.heap = []
    this.getKey = getKey
  }

  insert(v) { this.heap.push(v); this._bubbleUp(this.heap.length - 1) }

  extractMin() {
    if (!this.heap.length) return null
    const min = this.heap[0]
    const last = this.heap.pop()
    if (this.heap.length) { this.heap[0] = last; this._sinkDown(0) }
    return min
  }

  peekMin() { return this.heap[0] ?? null }

  _bubbleUp(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2)
      if (this.getKey(this.heap[p]) <= this.getKey(this.heap[i])) break
      ;[this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]
      i = p
    }
  }

  _sinkDown(i) {
    const n = this.heap.length
    while (true) {
      let s = i, l = 2 * i + 1, r = 2 * i + 2
      if (l < n && this.getKey(this.heap[l]) < this.getKey(this.heap[s])) s = l
      if (r < n && this.getKey(this.heap[r]) < this.getKey(this.heap[s])) s = r
      if (s === i) break
      ;[this.heap[s], this.heap[i]] = [this.heap[i], this.heap[s]]
      i = s
    }
  }
}
