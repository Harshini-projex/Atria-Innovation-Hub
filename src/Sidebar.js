import React, { useState } from "react";

function Sidebar({ active, setActive }) {
  const [open, setOpen] = useState(true);

  return (
    <div className={`sidebar ${open ? "open" : "closed"}`}>
      <h2 onClick={() => setOpen(!open)}>☰ Atria-Innovation-Hub</h2>

      <ul>
        <li className={active === "dashboard" ? "active" : ""} onClick={() => setActive("dashboard")}>
          ◀ Dashboard
        </li>
        <li onClick={() => setActive("reviews")}>◀ My Reviews</li>
        <li onClick={() => setActive("community")}>◀ Community</li>
      </ul>

      <ul className="bottom">
        <li>👤 Profile</li>
        <li>⚙️ Settings</li>
        <li>🌐 Connect With Us</li>
      </ul>
    </div>
  );
}

export default Sidebar;
