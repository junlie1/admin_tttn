import React, { useState } from 'react';
import './Overview.css';

const Overview = () => {
  const [partners] = useState([
    { name: 'Phuong Trang', contact: '012345', location: 'TP.HCM', status: 'active' },
    { name: 'A', contact: '000', location: 'Da Lat', status: 'new' },
    { name: 'B', contact: '000', location: 'Kon Tum', status: 'pending' },
    { name: 'C', contact: '000', location: 'Soc Trang', status: 'active' },
    { name: 'D', contact: '000', location: 'Quang Tri', status: 'inactive' },
    { name: 'E', contact: '000', location: 'Quang Nam', status: 'active' },
  ]);

  return (
    <div className="overview-container">
      <div className="overview-header">
        <h1>Partners Overview</h1>
        <div className="search-filter">
          <input 
            type="text" 
            placeholder="Search by name, contact, or location"
            className="search-input"
          />
          <button className="filter-btn">
            Filter: Status ▼
          </button>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Business Contact</th>
              <th>Headquarters</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((partner, index) => (
              <tr key={index}>
                <td>{partner.name}</td>
                <td>{partner.contact}</td>
                <td>{partner.location}</td>
                <td>
                  <span className={`status-badge ${partner.status}`}>
                    {partner.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="action-btn delete">
                      <i className="fas fa-trash"></i>
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

export default Overview; 