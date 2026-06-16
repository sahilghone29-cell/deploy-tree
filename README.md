# DeployTree — Build & Compilation Management Dashboard

**B.Tech CSE — Semester II Project**

A frontend-only React dashboard that simulates how large software projects are managed, built, compiled, tested, and deployed — with **8 interactive Data Structure & Algorithm modules**.

---

## Tech Stack

| Technology | Usage |
|---|---|
| React.js | UI Framework |
| JavaScript | Programming Language |
| CSS | Styling (no Tailwind/Bootstrap) |
| React Hooks | State Management |
| Vite | Build Tool |

> No backend · No database · No TypeScript

---

## How to Run

```bash
cd deploytree
npm install
npm run dev
```

Open **http://localhost:5173** in your browser.
🚀 Deploy Tree: deploy-tree.vercel.app
```bash
npm run build    # Production build
npm run preview  # Preview production build
```

---

## Project Structure

```
src/
├── components/          # React UI components (11 files)
├── algorithms/          # Pure DSA implementations (8 files)
├── data/mockData.js     # Mock datasets
├── styles/dashboard.css # Global styles + theme
├── App.jsx              # Root orchestrator
└── main.jsx             # React entry point
```

---

## DSA Feature Mapping

| # | Feature | Component | DSA | Time | Space |
|---|---|---|---|---|---|
| 1 | Code Structure Viewer | CodeStructureViewer.jsx | Tree (DFS) | O(n) | O(h) |
| 2 | Build Error History | BuildErrorHistory.jsx | Stack (LIFO) | push/pop O(1) | O(n) |
| 3 | Build Task Queue | BuildTaskQueue.jsx | Priority Queue | O(log n) | O(n) |
| 4 | File Link Checker | FileLinkChecker.jsx | Hash Table | O(1) avg | O(n) |
| 5 | File Size Sorter | FileSizeSorter.jsx | Merge Sort | O(n log n) | O(n) |
| 6 | Code Link Hub | CodeLinkHub.jsx | Graph | O(V+E) | O(V+E) |
| 7 | Quickest Build Finder | QuickestBuildTimeFinder.jsx | Dijkstra | O((V+E) log V) | O(V) |
| 8 | CPU Workload Balancer | MockCPUWorkloadBalancer.jsx | Min Heap | O(log n) | O(n) |

---

## Extra Features

- Sidebar navigation with DSA badges
- Dark mode toggle
- Global search bar
- Toast notifications
- Loading animation on page switch
- Responsive layout
- Statistics cards and charts
- Project overview page

---

## Color Theme

| Token | Hex |
|---|---|
| Primary | #2563EB |
| Secondary | #1E293B |
| Background | #F8FAFC |
| Cards | #FFFFFF |
| Success | #22C55E |
| Warning | #F59E0B |
| Danger | #EF4444 |
