import React, { useState } from 'react';
import './Tickets.css';

const Tickets = () => {
  const [tickets] = useState([
    {
      id: 'T001',
      scheduleId: 'SCH001',
      route: 'TP.HCM - Đà Lạt',
      customerName: 'Nguyễn Thị A',
      phone: '0901234567',
      seatNumber: 'A01',
      price: '350000',
      bookingDate: '14/01/2024',
      status: 'confirmed'
    },
    {
      id: 'T002',
      scheduleId: 'SCH001',
      route: 'TP.HCM - Đà Lạt',
      customerName: 'Trần Văn B',
      phone: '0907654321',
      seatNumber: 'A02',
      price: '350000',
      bookingDate: '14/01/2024',
      status: 'pending'
    },
    {
      id: 'T003',
      scheduleId: 'SCH002',
      route: 'TP.HCM - Nha Trang',
      customerName: 'Lê Thị C',
      phone: '0909876543',
      seatNumber: 'B03',
      price: '400000',
      bookingDate: '13/01/2024',
      status: 'cancelled'
    }
  ]);

  return (
    <div className="tickets-container">
      <div className="tickets-header">
        <h1>Quản Lý Vé</h1>
        <div className="search-filter">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input 
              type="text" 
              placeholder="Tìm kiếm vé..."
              className="search-input"
            />
          </div>
          <div className="filter-actions">
            <button className="add-btn">
              <i className="fas fa-plus"></i>
              Đặt Vé Mới
            </button>
            <div className="status-filter">
              <select className="status-select">
                <option value="all">Tất cả trạng thái</option>
                <option value="confirmed">Đã xác nhận</option>
                <option value="pending">Chờ xác nhận</option>
                <option value="cancelled">Đã hủy</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Mã Vé</th>
              <th>Mã Chuyến</th>
              <th>Tuyến Đường</th>
              <th>Tên Khách</th>
              <th>Số Điện Thoại</th>
              <th>Số Ghế</th>
              <th>Giá Vé</th>
              <th>Ngày Đặt</th>
              <th>Trạng Thái</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.scheduleId}</td>
                <td>{ticket.route}</td>
                <td>{ticket.customerName}</td>
                <td>{ticket.phone}</td>
                <td>{ticket.seatNumber}</td>
                <td>{ticket.price}đ</td>
                <td>{ticket.bookingDate}</td>
                <td>
                  <span className={`status-badge ${ticket.status}`}>
                    {ticket.status === 'confirmed' && 'Đã xác nhận'}
                    {ticket.status === 'pending' && 'Chờ xác nhận'}
                    {ticket.status === 'cancelled' && 'Đã hủy'}
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
                    <button className="action-btn print" title="In vé">
                      <i className="fas fa-print"></i>
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

export default Tickets; 