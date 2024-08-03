// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="/">Overview</a></li>
        <li><a href="/">Analytics</a></li>
        <li><a href="/">Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
