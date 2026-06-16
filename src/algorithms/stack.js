/**
 * stack.js — Stack Data Structure (LIFO)
 * Purpose: Track build results in Last-In-First-Out order
 * Time Complexity: push O(1), pop O(1), peek O(1)
 * Space Complexity: O(n)
 */
export class Stack {
  constructor() { this.items = [] }
  push(e) { this.items.push(e) }
  pop() { return this.items.pop() }
  peek() { return this.items[this.items.length - 1] }
  isEmpty() { return this.items.length === 0 }
  size() { return this.items.length }
}
