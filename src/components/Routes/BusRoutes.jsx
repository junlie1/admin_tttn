import React, { useState } from 'react';
import './BusRoutes.css';

const BusRoutes = () => {
  const [routes] = useState([
    {
      id: 'R001',
      name: 'TP.HCM - Đà Lạt',
      startPoint: 'Bến xe Miền Đông',
      endPoint: 'Bến xe Đà Lạt',
      distance: '310km',
      duration: '8 giờ',
      price: '300,000đ',
      status: 'active'
    },
    {
      id: 'R002',
      name: 'TP.HCM - Nha Trang',
      startPoint: 'Bến xe Miền Đông',
      endPoint: 'Bến xe Nha Trang',
      distance: '440km',
      duration: '10 giờ',
      price: '400,000đ',
      status: 'active'
    },
    {
      id: 'R003',
      name: 'TP.HCM - Cần Thơ',
      startPoint: 'Bến xe Miền Tây',
      endPoint: 'Bến xe Cần Thơ',
      distance: '170km',
      duration: '4 giờ',
      price: '150,000đ',
      status: 'active'
    },
    {
      id: 'R004',
      name: 'TP.HCM - Đà Nẵng',
      startPoint: 'Bến xe Miền Đông',
      endPoint: 'Bến xe Đà Nẵng',
      distance: '980km',
      duration: '20 giờ',
      price: '600,000đ',
      status: 'inactive'
    }
  ]);

  return (
    <div className="routes-container">
      <div className="routes-header">
        <h1>Quản Lý Tuyến Xe</h1>
        <div className="search-filter">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input 
              type="text" 
              placeholder="Tìm kiếm tuyến xe..."
              className="search-input"
            />
          </div>
          <div className="filter-actions">
            <button className="add-btn">
              <i className="fas fa-plus"></i>
              Thêm Tuyến Mới
            </button>
            <div className="filter-text">
              Sắp xếp: <a href="#" className="filter-link">Khoảng cách</a>
            </div>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Mã Tuyến</th>
              <th>Tên Tuyến</th>
              <th>Điểm Đi</th>
              <th>Điểm Đến</th>
              <th>Khoảng Cách</th>
              <th>Thời Gian</th>
              <th>Giá Vé</th>
              <th>Trạng Thái</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route) => (
              <tr key={route.id}>
                <td>{route.id}</td>
                <td>{route.name}</td>
                <td>{route.startPoint}</td>
                <td>{route.endPoint}</td>
                <td>{route.distance}</td>
                <td>{route.duration}</td>
                <td>{route.price}</td>
                <td>
                  <span className={`status-badge ${route.status}`}>
                    {route.status === 'active' ? 'Đang chạy' : 'Tạm ngưng'}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit" title="Chỉnh sửa">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="action-btn view" title="Xem chi tiết">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="action-btn schedule" title="Lịch trình">
                      <i className="fas fa-clock"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusRoutes; 