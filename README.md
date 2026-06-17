<img width="1469" height="841" alt="dashboard" src="https://github.com/user-attachments/assets/daaf2860-17d3-451b-84d6-cbd04efc0467" />
<img width="1469" height="841" alt="task-queue" src="https://github.com/user-attachments/assets/64248491-5bce-4979-92ea-3d58cba01d78" />
<img width="1469" height="841" alt="file-sorter" src="https://github.com/user-attachments/assets/b35d8657-0c51-4a31-9b8f-b51027f7a51f" />
<img width="1469" height="841" alt="file-checker" src="https://github.com/user-attachments/assets/71f73262-36d9-4db8-a067-a49eaf2566d8" />

<img width="1469" height="841" alt="code-structure" src="https://github.com/user-attachments/assets/5e538073-d8ce-47d7-a38d-deda3f555e67" />
<img width="1469" height="841" alt="code-link-hub" src="https://github.com/user-attachments/assets/8c342516-e7f2-47fc-8a32-9513dafc245f" />
<img width="1469" height="841" alt="build-finder" src="https://github.com/user-attachments/assets/24a53d6c-8e4d-49a8-ac48-7fd07ecddd65" />
<img width="1469" height="841" alt=" cpu-balancer" src="https://github.com/user-attachments/assets/36ca22e8-ba9f-4be4-9dea-7fe9eab816d5" />
<img width="1469" height="841" alt=" build-errors" src="https://github.com/user-attachments/assets/3fe8fffd-19aa-4d03-8f72-0d2054fd2bdd" />
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
https://deploy-tree.vercel.app/
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





