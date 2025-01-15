import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Cài Đặt Hệ Thống</h1>
      </div>

      <div className="settings-grid">
        <div className="settings-card">
          <div className="card-header">
            <i className="fas fa-user-shield"></i>
            <h2>Quản Lý Tài Khoản</h2>
          </div>
          <div className="card-content">
            <div className="setting-item">
              <label>Email</label>
              <input type="email" placeholder="admin@example.com" />
            </div>
            <div className="setting-item">
              <label>Mật khẩu hiện tại</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <div className="setting-item">
              <label>Mật khẩu mới</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <div className="setting-item">
              <label>Xác nhận mật khẩu mới</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <button className="save-btn">Cập Nhật Tài Khoản</button>
          </div>
        </div>

        <div className="settings-card">
          <div className="card-header">
            <i className="fas fa-bell"></i>
            <h2>Thông Báo</h2>
          </div>
          <div className="card-content">
            <div className="setting-item checkbox">
              <label>
                <input type="checkbox" defaultChecked />
                Thông báo đặt vé mới
              </label>
            </div>
            <div className="setting-item checkbox">
              <label>
                <input type="checkbox" defaultChecked />
                Thông báo hủy vé
              </label>
            </div>
            <div className="setting-item checkbox">
              <label>
                <input type="checkbox" defaultChecked />
                Thông báo bảo trì xe
              </label>
            </div>
            <div className="setting-item checkbox">
              <label>
                <input type="checkbox" />
                Thông báo khuyến mãi
              </label>
            </div>
            <button className="save-btn">Lưu Cài Đặt</button>
          </div>
        </div>

        <div className="settings-card">
          <div className="card-header">
            <i className="fas fa-ticket-alt"></i>
            <h2>Cài Đặt Vé</h2>
          </div>
          <div className="card-content">
            <div className="setting-item">
              <label>Thời gian giữ vé (phút)</label>
              <input type="number" defaultValue="15" min="5" max="60" />
            </div>
            <div className="setting-item">
              <label>Thời gian hủy vé trước giờ khởi hành (giờ)</label>
              <input type="number" defaultValue="24" min="1" max="72" />
            </div>
            <div className="setting-item">
              <label>Phí hủy vé (%)</label>
              <input type="number" defaultValue="10" min="0" max="100" />
            </div>
            <button className="save-btn">Lưu Cài Đặt</button>
          </div>
        </div>

        <div className="settings-card">
          <div className="card-header">
            <i className="fas fa-database"></i>
            <h2>Sao Lưu Dữ Liệu</h2>
          </div>
          <div className="card-content">
            <div className="setting-item checkbox">
              <label>
                <input type="checkbox" defaultChecked />
                Tự động sao lưu hàng ngày
              </label>
            </div>
            <div className="setting-item">
              <label>Thời gian sao lưu</label>
              <input type="time" defaultValue="00:00" />
            </div>
            <div className="setting-item">
              <label>Lưu trữ sao lưu (ngày)</label>
              <input type="number" defaultValue="30" min="7" max="90" />
            </div>
            <div className="backup-actions">
              <button className="backup-btn">
                <i className="fas fa-download"></i>
                Sao Lưu Ngay
              </button>
              <button className="restore-btn">
                <i className="fas fa-upload"></i>
                Phục Hồi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 