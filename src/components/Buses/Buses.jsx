import React, { useState } from 'react';
import './Buses.css';

const Buses = () => {
  const [buses] = useState([
    {
      id: 'B001',
      number: '51B-12345',
      type: 'Giường nằm',
      capacity: 45,
      manufacturer: 'Thaco',
      year: 2022,
      driver: 'Nguyễn Văn A',
      lastMaintenance: '10/01/2024',
      status: 'active'
    },
    {
      id: 'B002',
      number: '51B-54321',
      type: 'Giường nằm',
      capacity: 45,
      manufacturer: 'Thaco',
      year: 2023,
      driver: 'Trần Văn B',
      lastMaintenance: '12/01/2024',
      status: 'maintenance'
    },
    {
      id: 'B003',
      number: '51B-67890',
      type: 'Ghế ngồi',
      capacity: 35,
      manufacturer: 'Hyundai',
      year: 2021,
      driver: 'Phạm Văn C',
      lastMaintenance: '05/01/2024',
      status: 'active'
    },
    {
      id: 'B004',
      number: '51B-09876',
      type: 'Limousine',
      capacity: 22,
      manufacturer: 'Ford',
      year: 2023,
      driver: 'Lê Văn D',
      lastMaintenance: '08/01/2024',
      status: 'inactive'
    }
  ]);

  return (
    <div className="buses-container">
      <div className="buses-header">
        <h1>Quản Lý Xe</h1>
        <div className="search-filter">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input 
              type="text" 
              placeholder="Tìm kiếm xe..."
              className="search-input"
            />
          </div>
          <div className="filter-actions">
            <button className="add-btn">
              <i className="fas fa-plus"></i>
              Thêm Xe Mới
            </button>
            <div className="filter-text">
              Loại xe: 
              <select className="type-select">
                <option value="all">Tất cả</option>
                <option value="sleeper">Giường nằm</option>
                <option value="seater">Ghế ngồi</option>
                <option value="limousine">Limousine</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Mã Xe</th>
              <th>Biển Số</th>
              <th>Loại Xe</th>
              <th>Số Chỗ</th>
              <th>Hãng Xe</th>
              <th>Năm SX</th>
              <th>Tài Xế</th>
              <th>Bảo Dưỡng</th>
              <th>Trạng Thái</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr key={bus.id}>
                <td>{bus.id}</td>
                <td>{bus.number}</td>
                <td>{bus.type}</td>
                <td>{bus.capacity}</td>
                <td>{bus.manufacturer}</td>
                <td>{bus.year}</td>
                <td>{bus.driver}</td>
                <td>{bus.lastMaintenance}</td>
                <td>
                  <span className={`status-badge ${bus.status}`}>
                    {bus.status === 'active' && 'Hoạt động'}
                    {bus.status === 'maintenance' && 'Đang bảo dưỡng'}
                    {bus.status === 'inactive' && 'Tạm ngưng'}
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
                    <button className="action-btn maintenance" title="Lịch bảo dưỡng">
                      <i className="fas fa-tools"></i>
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

export default Buses; 