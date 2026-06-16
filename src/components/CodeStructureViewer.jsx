import { useState } from 'react'
import { buildProjectTree, dfsPreOrder } from '@algorithms/tree'

function TreeNode({ node, depth = 0, searchQuery = '' }) {
  const [expanded, setExpanded] = useState(depth < 2)
  const isFolder = node.type === 'folder'
  const icon = isFolder ? (expanded ? '📂' : '📁') : '📄'
  const matches = searchQuery && node.name.toLowerCase().includes(searchQuery.toLowerCase())

  return (
    <div>
      <div
        className={`tree-item ${isFolder ? '' : 'file'} ${matches ? 'tree-highlight' : ''}`}
        onClick={() => isFolder && setExpanded(e => !e)}
        style={{ paddingLeft: depth * 12 }}
      >
        <span className="tree-toggle">{isFolder ? (expanded ? '▼' : '▶') : ' '}</span>
        <span>{icon}</span>
        <span>{node.name}</span>
        {!isFolder && (
          <span className="tag" style={{ marginLeft: 'auto' }}>
            .{node.name.split('.').pop()}
          </span>
        )}
      </div>
      {isFolder && expanded && node.children?.length > 0 && (
        <div className="tree-children">
          {node.children.map((child, i) => (
            <TreeNode key={i} node={child} depth={depth + 1} searchQuery={searchQuery} />
          ))}
        </div>
      )}
    </div>
  )
}

/**
 * CodeStructureViewer.jsx
 * Purpose: Visualize project directory as an expandable/collapsible tree
 * DSA Used: Tree (N-ary) — DFS Pre-order traversal
 * Time Complexity: O(n) render, O(n) traversal
 * Space Complexity: O(h) recursion depth, O(n) total nodes
 */
export default function CodeStructureViewer({ searchQuery = '' }) {
  const tree = buildProjectTree()
  const traversal = dfsPreOrder(tree)

  return (
    <div>
      <div className="page-title">🌳 Code Structure Viewer</div>
      <div className="page-sub">Recursive Tree Data Structure — Project directory hierarchy</div>

      <div className="dsa-info">
        <strong>🌳 Tree Data Structure</strong>
        <div className="dsa-row">
          <span className="dsa-chip">Purpose: Hierarchical file/folder organization</span>
          <span className="dsa-chip">Traversal: DFS Pre-order</span>
          <span className="dsa-chip">Time: O(n)</span>
          <span className="dsa-chip">Space: O(h) — h = height</span>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <div className="card-title">📁 Project File Tree</div>
          <div className="text-sm" style={{ marginBottom: 8 }}>Click folders to expand/collapse</div>
          <div style={{ fontFamily: 'monospace' }}>
            <TreeNode node={tree} searchQuery={searchQuery} />
          </div>
        </div>

        <div className="card">
          <div className="card-title">🔄 DFS Pre-order Traversal</div>
          <div className="text-sm" style={{ marginBottom: 8 }}>
            Algorithm visits root → left subtree → right subtree recursively
          </div>
          <div className="traversal-list">
            {traversal.map((item, i) => (
              <div key={i} className="traversal-item">
                <span className="traversal-idx">{i + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="divider" />
          <div className="card-title">📘 Complexity</div>
          <table className="dt">
            <thead><tr><th>Operation</th><th>Time</th><th>Space</th></tr></thead>
            <tbody>
              <tr><td>DFS Traversal</td><td>O(n)</td><td>O(h)</td></tr>
              <tr><td>Search Node</td><td>O(n)</td><td>O(1)</td></tr>
              <tr><td>Render Tree</td><td>O(n)</td><td>O(n)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
