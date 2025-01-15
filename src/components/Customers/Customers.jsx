import React, { useState } from 'react';
import './Customers.css';

const Customers = () => {
  const [customers] = useState([
    {
      id: 'C001',
      name: 'Nguyễn Thị A',
      phone: '0901234567',
      email: 'nguyena@email.com',
      address: '123 Nguyễn Văn Linh, Q.7, TP.HCM',
      totalTrips: 5,
      membershipLevel: 'gold',
      lastTrip: '14/01/2024'
    },
    {
      id: 'C002',
      name: 'Trần Văn B',
      phone: '0907654321',
      email: 'tranb@email.com',
      address: '456 Lê Văn Việt, Q.9, TP.HCM',
      totalTrips: 3,
      membershipLevel: 'silver',
      lastTrip: '10/01/2024'
    },
    {
      id: 'C003',
      name: 'Lê Thị C',
      phone: '0909876543',
      email: 'lec@email.com',
      address: '789 Võ Văn Tần, Q.3, TP.HCM',
      totalTrips: 1,
      membershipLevel: 'bronze',
      lastTrip: '05/01/2024'
    }
  ]);

  return (
    <div className="customers-container">
      <div className="customers-header">
        <h1>Quản Lý Khách Hàng</h1>
        <div className="search-filter">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input 
              type="text" 
              placeholder="Tìm kiếm khách hàng..."
              className="search-input"
            />
          </div>
          <div className="filter-actions">
            <button className="add-btn">
              <i className="fas fa-plus"></i>
              Thêm Khách Hàng
            </button>
            <div className="membership-filter">
              <select className="membership-select">
                <option value="all">Tất cả hạng thành viên</option>
                <option value="gold">Vàng</option>
                <option value="silver">Bạc</option>
                <option value="bronze">Đồng</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Mã KH</th>
              <th>Họ Tên</th>
              <th>Số Điện Thoại</th>
              <th>Email</th>
              <th>Địa Chỉ</th>
              <th>Số Chuyến</th>
              <th>Hạng Thành Viên</th>
              <th>Chuyến Gần Nhất</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
                <td>{customer.totalTrips}</td>
                <td>
                  <span className={`membership-badge ${customer.membershipLevel}`}>
                    {customer.membershipLevel === 'gold' && 'Vàng'}
                    {customer.membershipLevel === 'silver' && 'Bạc'}
                    {customer.membershipLevel === 'bronze' && 'Đồng'}
                  </span>
                </td>
                <td>{customer.lastTrip}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit" title="Chỉnh sửa">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="action-btn view" title="Xem chi tiết">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="action-btn history" title="Lịch sử đặt vé">
                      <i className="fas fa-history"></i>
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

export default Customers; 