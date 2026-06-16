/**
 * tree.js — N-ary Tree Data Structure
 * Purpose: Model hierarchical project file/folder structure
 * DSA Used: Tree (N-ary)
 * Time Complexity: DFS traversal O(n), Search O(n)
 * Space Complexity: O(n) for tree, O(h) for recursion stack
 */
export class TreeNode {
  constructor(name, type, children = []) {
    this.name = name
    this.type = type
    this.children = children
  }
}

export function buildProjectTree() {
  return new TreeNode('deploytree', 'folder', [
    new TreeNode('src', 'folder', [
      new TreeNode('components', 'folder', [
        new TreeNode('Sidebar.jsx', 'file'),
        new TreeNode('Header.jsx', 'file'),
        new TreeNode('DashboardHome.jsx', 'file'),
        new TreeNode('CodeStructureViewer.jsx', 'file'),
        new TreeNode('BuildErrorHistory.jsx', 'file'),
        new TreeNode('BuildTaskQueue.jsx', 'file'),
        new TreeNode('FileLinkChecker.jsx', 'file'),
        new TreeNode('FileSizeSorter.jsx', 'file'),
        new TreeNode('CodeLinkHub.jsx', 'file'),
        new TreeNode('QuickestBuildTimeFinder.jsx', 'file'),
        new TreeNode('MockCPUWorkloadBalancer.jsx', 'file'),
      ]),
      new TreeNode('algorithms', 'folder', [
        new TreeNode('stack.js', 'file'),
        new TreeNode('queue.js', 'file'),
        new TreeNode('hashTable.js', 'file'),
        new TreeNode('mergeSort.js', 'file'),
        new TreeNode('graph.js', 'file'),
        new TreeNode('dijkstra.js', 'file'),
        new TreeNode('tree.js', 'file'),
        new TreeNode('minHeap.js', 'file'),
      ]),
      new TreeNode('styles', 'folder', [new TreeNode('dashboard.css', 'file')]),
      new TreeNode('data', 'folder', [new TreeNode('mockData.js', 'file')]),
      new TreeNode('App.jsx', 'file'),
      new TreeNode('main.jsx', 'file'),
    ]),
    new TreeNode('public', 'folder', [new TreeNode('index.html', 'file')]),
    new TreeNode('package.json', 'file'),
    new TreeNode('README.md', 'file'),
  ])
}

/** DFS Pre-order traversal — returns ordered list of node names */
export function dfsPreOrder(node, result = []) {
  if (!node) return result
  result.push(`${node.type === 'folder' ? '📁' : '📄'} ${node.name}`)
  if (node.children) node.children.forEach(child => dfsPreOrder(child, result))
  return result
}
