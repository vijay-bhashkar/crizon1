import React from "react";

export function DashboardBox({ children, className }) {
  return (
    <div className={className ? `dashboard-box ${className}` : "dashboard-box"}>
      {children}
    </div>
  );
}
export function DashboardChart({ children, className }) {
  return (
    <div className={className ? `dashboard-chart dashboard-box ${className}` : "dashboard-chart dashboard-box"}>
      {children}
    </div>
  );
}
export function DashboardTable({ children, className }) {
  return (
    <div className={className ? `dashboard-table dashboard-box ${className}` : "dashboard-table dashboard-box"}>
      {children}
    </div>
  );
}
