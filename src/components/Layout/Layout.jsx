import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="admin-layout">
      <aside className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <h2>Quản Lý Nhà Xe</h2>
          <button 
            className="collapse-btn"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          >
            {isSidebarCollapsed ? '→' : '←'}
          </button>
        </div>
        <nav className="sidebar-nav">
          <Link to="/dashboard" className="nav-item">
            <i className="fas fa-home"></i>
            <span>Tổng Quan</span>
          </Link>
          <Link to="/routes" className="nav-item">
            <i className="fas fa-route"></i>
            <span>Tuyến Xe</span>
          </Link>
          <Link to="/schedules" className="nav-item">
            <i className="fas fa-clock"></i>
            <span>Lịch Trình</span>
          </Link>
          <Link to="/buses" className="nav-item">
            <i className="fas fa-bus"></i>
            <span>Danh Sách Xe</span>
          </Link>
          <Link to="/tickets" className="nav-item">
            <i className="fas fa-ticket-alt"></i>
            <span>Quản Lý Vé</span>
          </Link>
          <Link to="/cities" className="nav-item">
            <i className="fas fa-city"></i>
            <span>Điểm Đón/Trả</span>
          </Link>
          <Link to="/customers" className="nav-item">
            <i className="fas fa-users"></i>
            <span>Khách Hàng</span>
          </Link>
          <Link to="/reports" className="nav-item">
            <i className="fas fa-chart-line"></i>
            <span>Báo Cáo</span>
          </Link>
          <Link to="/settings" className="nav-item">
            <i className="fas fa-cog"></i>
            <span>Cài Đặt</span>
          </Link>
        </nav>
      </aside>
      
      <main className="main-content">
        <header className="main-header">
          <div className="header-search">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Tìm kiếm..." />
          </div>
          <div className="header-actions">
            <button className="notification-btn">
              <i className="fas fa-bell"></i>
              <span className="notification-badge">3</span>
            </button>
            <div className="user-profile">
              <img src="https://via.placeholder.com/32" alt="User" />
              <span>Admin</span>
            </div>
          </div>
        </header>
        <div className="content-wrapper">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout; 