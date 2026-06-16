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
🚀 Deploy Tree: https:/deploy-tree.vercel.app
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

## Output Screenshots<img width="1468" height="831" alt="Screenshot 2026-06-14 at 5 17 19 PM" src="https://github.com/user-attachments/assets/2cefef99-7608-4d65-8cab-eaf471f74667" />
<img width="1468" height="831" alt="Screenshot 2026-06-14 at 5 17 19 PM" src="https://github.com/user-attachments/assets/12e54140-0e55-4f7a-87f2-d832e965f2f5" />
<img width="1468" height="831" alt="Screenshot 2026-06-14 at 5 17 16 PM" src="https://github.com/user-attachments/assets/f57eb404-185c-40c1-8638-64430d190f71" />
<img width="1468" height="831" alt="Screenshot 2026-06-14 at 5 17 12 PM" src="https://github.com/user-attachments/assets/6ad72402-c848-421f-ac39-ac1f4a431541" />
<img width="1468" height="831" alt="Screenshot 2026-06-14 at 5 17 07 PM" src="https://github.com/user-attachments/assets/a0a529ae-12ed-4f59-bbee-bd09d3b41374" />
<img width="1468" height="831" alt="Screenshot 2026-06-14 at 5 17 01 PM" src="https://github.com/user-attachments/assets/d54cf20f-a16c-4a4d-a8d9-52b3ddf96c62" />
<img width="1468" height="831" alt="Screenshot 2026-06-14 at 5 16 54 PM" src="https://github.com/user-attachments/assets/d4c4be8f-b0ce-48a2-918a-a6a41c70e92f" />
<img width="1468" height="831" alt="Screenshot 2026-06-14 at 5 16 49 PM" src="https://github.com/user-attachments/assets/3a9cac31-60b9-4af1-b4dc-da856e56e79a" />
<img width="1468" height="831" alt="Screenshot 2026-06-14 at 5 16 44 PM" src="https://github.com/user-attachments/assets/f5e82797-f208-4665-9560-9d33deee7707" />
<img width="1468" height="831" alt="Screenshot 2026-06-14 at 5 16 38 PM" src="https://github.com/user-attachments/assets/ffbe3a42-8d25-452f-9830-e4b14928bed3" />
<img width="1468" height="831" alt="Screenshot 2026-06-14 at 5 16 31 PM" src="https://github.com/user-attachments/assets/18e1b188-1956-439b-b6c7-7efece2281b1" />




