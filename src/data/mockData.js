export const fileData = [
  { id: 'F001', name: 'App.jsx',        size: 42, path: '/src' },
  { id: 'F002', name: 'Sidebar.jsx',    size: 18, path: '/src/components' },
  { id: 'F003', name: 'Header.jsx',     size: 12, path: '/src/components' },
  { id: 'F004', name: 'dashboard.css',  size:  8, path: '/src/styles' },
  { id: 'F005', name: 'mockData.js',    size:  5, path: '/src/data' },
  { id: 'F006', name: 'stack.js',       size:  3, path: '/src/algorithms' },
  { id: 'F007', name: 'graph.js',       size:  6, path: '/src/algorithms' },
  { id: 'F008', name: 'dijkstra.js',    size:  4, path: '/src/algorithms' },
  { id: 'F009', name: 'mergeSort.js',   size:  2, path: '/src/algorithms' },
  { id: 'F010', name: 'minHeap.js',     size:  3, path: '/src/algorithms' },
]

export const initialErrors = [
  { id: 'B005', status: 'success', msg: 'Build completed successfully',           time: '10:30', module: 'src/App.jsx' },
  { id: 'B004', status: 'danger',  msg: 'TypeError: Cannot read property',        time: '10:28', module: 'src/components/Header.jsx' },
  { id: 'B003', status: 'success', msg: 'ESLint passed - no errors',              time: '10:25', module: 'src/styles/' },
  { id: 'B002', status: 'warning', msg: 'Warning: Missing dependency array',      time: '10:20', module: 'src/hooks/useData.js' },
  { id: 'B001', status: 'danger',  msg: 'SyntaxError: Unexpected token in JSX',   time: '10:15', module: 'src/components/Card.jsx' },
]

export const initialTasks = [
  { name: 'Deploy to Production', id: 'T001', priority: 1 },
  { name: 'Run Unit Tests',       id: 'T002', priority: 2 },
  { name: 'Code Linting',         id: 'T003', priority: 3 },
  { name: 'Bundle Optimization',  id: 'T004', priority: 4 },
  { name: 'Database Migration',   id: 'T005', priority: 5 },
]

export const initialCPUs = [
  { id: 0, load: 20, tasks: ['Webpack build'] },
  { id: 1, load: 55, tasks: ['Babel compile', 'ESLint'] },
  { id: 2, load: 10, tasks: ['Unit tests'] },
  { id: 3, load: 75, tasks: ['TypeScript check', 'Bundle', 'Deploy'] },
]

export const buildGraphEdges = [
  ['START', 'Compile', Math.floor(Math.random() * 6) + 3],
  ['Compile', 'Lint', Math.floor(Math.random() * 5) + 2],
  ['Compile', 'Test', Math.floor(Math.random() * 5) + 2],
  ['Lint', 'Bundle', Math.floor(Math.random() * 4) + 1],
  ['Test', 'Bundle', Math.floor(Math.random() * 4) + 1],
  ['Bundle', 'Deploy', Math.floor(Math.random() * 5) + 2],
  ['Deploy', 'END', Math.floor(Math.random() * 5) + 2]
]

export const depGraphEdges = [
  ['App', 'Sidebar',    1], ['App', 'Header',     1], ['App', 'Dashboard',   1],
  ['Dashboard', 'BuildErrors', 2], ['Dashboard', 'TaskQueue', 2],
  ['Dashboard', 'FileSorter',  2], ['BuildErrors', 'TaskQueue', 3],
  ['TaskQueue', 'FileSorter',  3], ['FileSorter', 'CodeHub',   2],
  ['CodeHub', 'Dijkstra', 1],     ['Dijkstra', 'CPUBalancer', 2],
]

export const taskCompletionData = [
  { day: 'Mon', completed: 12, pending: 3 },
  { day: 'Tue', completed: 18, pending: 5 },
  { day: 'Wed', completed: 15, pending: 2 },
  { day: 'Thu', completed: 22, pending: 4 },
  { day: 'Fri', completed: 20, pending: 1 },
  { day: 'Sat', completed: 8,  pending: 0 },
  { day: 'Sun', completed: 5,  pending: 0 },
]

export const buildSuccessRate = { success: 68, warning: 18, failed: 14 }

export const projectOverview = {
  title: 'DeployTree',
  subtitle: 'Build & Compilation Management Dashboard',
  semester: 'B.Tech CSE — Semester II',
  description: 'A frontend-only React dashboard that simulates how large software projects are managed, built, compiled, tested, and deployed — with 8 interactive DSA modules.',
  techStack: ['React.js', 'JavaScript', 'CSS', 'React Hooks', 'Vite'],
  features: 8,
  algorithms: ['Tree', 'Stack', 'Priority Queue', 'Hash Table', 'Merge Sort', 'Graph', 'Dijkstra', 'Min Heap'],
}
