import React, { useState } from 'react';
import './Schedules.css';

const Schedules = () => {
  const [schedules] = useState([
    {
      id: 'SCH001',
      route: 'TP.HCM - Đà Lạt',
      busNumber: 'B001',
      driver: 'Nguyễn Văn A',
      departureTime: '06:00',
      arrivalTime: '14:00',
      availableSeats: '25/45',
      date: '15/01/2024',
      status: 'upcoming'
    },
    {
      id: 'SCH002',
      route: 'TP.HCM - Nha Trang',
      busNumber: 'B002',
      driver: 'Trần Văn B',
      departureTime: '20:00',
      arrivalTime: '06:00',
      availableSeats: '30/45',
      date: '15/01/2024',
      status: 'ongoing'
    },
    {
      id: 'SCH003',
      route: 'TP.HCM - Cần Thơ',
      busNumber: 'B003',
      driver: 'Phạm Văn C',
      departureTime: '13:00',
      arrivalTime: '17:00',
      availableSeats: '0/45',
      date: '15/01/2024',
      status: 'full'
    },
    {
      id: 'SCH004',
      route: 'TP.HCM - Đà Nẵng',
      busNumber: 'B004',
      driver: 'Lê Văn D',
      departureTime: '18:00',
      arrivalTime: '14:00',
      availableSeats: '15/45',
      date: '16/01/2024',
      status: 'upcoming'
    }
  ]);

  return (
    <div className="schedules-container">
      <div className="schedules-header">
        <h1>Quản Lý Lịch Trình</h1>
        <div className="search-filter">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input 
              type="text" 
              placeholder="Tìm kiếm lịch trình..."
              className="search-input"
            />
          </div>
          <div className="filter-actions">
            <button className="add-btn">
              <i className="fas fa-plus"></i>
              Thêm Lịch Trình
            </button>
            <div className="date-filter">
              <i className="fas fa-calendar"></i>
              <input type="date" className="date-input" />
            </div>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Mã Lịch Trình</th>
              <th>Tuyến Xe</th>
              <th>Số Xe</th>
              <th>Tài Xế</th>
              <th>Giờ Xuất Bến</th>
              <th>Giờ Đến</th>
              <th>Chỗ Trống</th>
              <th>Ngày</th>
              <th>Trạng Thái</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule) => (
              <tr key={schedule.id}>
                <td>{schedule.id}</td>
                <td>{schedule.route}</td>
                <td>{schedule.busNumber}</td>
                <td>{schedule.driver}</td>
                <td>{schedule.departureTime}</td>
                <td>{schedule.arrivalTime}</td>
                <td>{schedule.availableSeats}</td>
                <td>{schedule.date}</td>
                <td>
                  <span className={`status-badge ${schedule.status}`}>
                    {schedule.status === 'upcoming' && 'Sắp chạy'}
                    {schedule.status === 'ongoing' && 'Đang chạy'}
                    {schedule.status === 'full' && 'Hết vé'}
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
                    <button className="action-btn ticket" title="Quản lý vé">
                      <i className="fas fa-ticket-alt"></i>
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

export default Schedules; 