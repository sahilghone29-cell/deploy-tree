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

<img width="1469" height="841" alt="Screenshot 2026-06-17 at 6 15 47 PM" src="https://github.com/user-attachments/assets/3709656c-8a3f-4657-82c8-4dca51ec458b" />
<img width="1469" height="841" alt="Screenshot 2026-06-17 at 6 07 53 PM" src="https://github.com/user-attachments/assets/0605aa18-0aa5-4f41-87ea-f19fae36b6fd" />
<img width="1469" height="841" alt="Screenshot 2026-06-17 at 6 07 28 PM" src="https://github.com/user-attachments/assets/ba83d003-56f9-4059-a111-e1c6f3d7db1b" />
<img width="1469" height="841" alt="Screenshot 2026-06-17 at 6 07 20 PM" src="https://github.com/user-attachments/assets/f458da48-4a43-41ca-9873-febc809c1818" />
<img width="1469" height="841" alt="Screenshot 2026-06-17 at 6 06 59 PM" src="https://github.com/user-attachments/assets/ffc7ac28-2620-4d70-a3f1-b18d0667205f" />
<img width="1469" height="841" alt="Screenshot 2026-06-17 at 5 00 51 PM" src="https://github.com/user-attachments/assets/be3de423-47ef-4c1a-a501-7f1094c658e8" />
<img width="1469" height="841" alt="Screenshot 2026-06-17 at 4 59 49 PM" src="https://github.com/user-attachments/assets/7091780a-7bc9-4859-9a6d-82367f2a594d" />
<img width="1469" height="841" alt="Screenshot 2026-06-17 at 4 59 22 PM" src="https://github.com/user-attachments/assets/7c4556f0-6573-4712-8a5b-5fff3567e431" />
<img width="1469" height="841" alt="Screenshot 2026-06-17 at 4 54 17 PM" src="https://github.com/user-attachments/assets/0367d9f2-4b77-4246-9f36-1c2efab3687a" />




