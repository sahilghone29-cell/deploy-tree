import React, { useState } from "react";

export default function SmartDashboardWidgets() {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState("Idle");

  const runBuild = () => {
    setProgress(0);
    setStatus("Running");
    setLogs(["Build Started"]);

    let value = 0;

    const interval = setInterval(() => {
      value += 10;

      setProgress(value);

      if (value === 20)
        setLogs((l) => [...l, "Compiling Modules"]);

      if (value === 40)
        setLogs((l) => [...l, "Resolving Dependencies"]);

      if (value === 60)
        setLogs((l) => [...l, "Running Tests"]);

      if (value === 80)
        setLogs((l) => [...l, "Optimizing Assets"]);

      if (value >= 100) {
        setLogs((l) => [...l, "Deployment Successful"]);
        setStatus("Success");
        clearInterval(interval);
      }
    }, 500);
  };

  return (
    <div className="build-card">
      <div className="flex-between">
        <h2>DeployTree Build Center</h2>

        <button
          className="btn btn-primary"
          onClick={runBuild}
        >
          Run Build
        </button>
      </div>

      <div className="grid grid-4" style={{ marginTop: "20px" }}>
        <div className="stat-card">
          <div>
            <div className="stat-label">Modules</div>
            <div className="stat-value">48</div>
          </div>
        </div>

        <div className="stat-card">
          <div>
            <div className="stat-label">Build Tasks</div>
            <div className="stat-value">12</div>
          </div>
        </div>

        <div className="stat-card">
          <div>
            <div className="stat-label">CPU Usage</div>
            <div className="stat-value">67%</div>
          </div>
        </div>

        <div className="stat-card">
          <div>
            <div className="stat-label">Status</div>
            <div className="stat-value">
              {status}
            </div>
          </div>
        </div>
      </div>

      <div className="build-section">
        <h3>Build Progress</h3>

        <div className="build-progress-track">
          <div
            className="build-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="build-percent">
          {progress}% Complete
        </div>
      </div>

      <div className="build-section">
        <h3>System Recommendations</h3>

        <ul>
          <li>Optimize AuthService build order</li>
          <li>Parallelize API module compilation</li>
          <li>Reduce dependency depth in Build Queue</li>
          <li>Review high CPU consumption modules</li>
        </ul>
      </div>

      <div className="build-section">
        <h3>Deployment Console</h3>

        <div className="build-console">
          {logs.length === 0 ? (
            <div className="build-console-line">
              Waiting for build execution...
            </div>
          ) : (
            logs.map((log, index) => (
              <div
                key={index}
                className="build-console-line"
              >
                {log}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}