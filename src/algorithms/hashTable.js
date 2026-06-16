/**
 * hashTable.js — Hash Table with Chaining
 * Purpose: O(1) average lookup of files by ID
 * Time Complexity: set/get O(1) avg, O(n) worst (collisions)
 * Space Complexity: O(n)
 */
export class HashTable {
  constructor(size = 16) {
    this.size = size
    this.table = new Array(size).fill(null).map(() => [])
  }

  _hash(key) {
    let h = 0
    for (let c of String(key)) h = (h + c.charCodeAt(0) * 31) % this.size
    return h
  }

  set(k, v) {
    const i = this._hash(k)
    const bucket = this.table[i]
    const entry = bucket.find(x => x[0] === k)
    if (entry) entry[1] = v
    else bucket.push([k, v])
  }

  get(k) {
    const i = this._hash(k)
    return this.table[i].find(x => x[0] === k)?.[1]
  }

  getIndex(k) { return this._hash(k) }
}
