import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import Cities from './components/Cities/Cities';
import BusRoutes from './components/Routes/BusRoutes';
import Schedules from './components/Schedules/Schedules';
import Buses from './components/Buses/Buses';
import Tickets from './components/Tickets/Tickets';
import Customers from './components/Customers/Customers';
import Reports from './components/Reports/Reports';
import Settings from './components/Settings/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/routes" element={<BusRoutes />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/buses" element={<Buses />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App; 