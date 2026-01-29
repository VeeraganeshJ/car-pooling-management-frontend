import React, { useState } from 'react';
import './App.css';
import UserManagement from './components/UserManagement';
import RideManagement from './components/RideManagement';
import BookingManagement from './components/BookingManagement';

function App() {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚗 Car-Pooling Management System</h1>
        <p>Manage your rides and bookings efficiently</p>
      </header>

      <nav className="App-nav">
        <button
          className={`nav-btn ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          Users
        </button>
        <button
          className={`nav-btn ${activeTab === 'rides' ? 'active' : ''}`}
          onClick={() => setActiveTab('rides')}
        >
          Rides
        </button>
        <button
          className={`nav-btn ${activeTab === 'bookings' ? 'active' : ''}`}
          onClick={() => setActiveTab('bookings')}
        >
          Bookings
        </button>
      </nav>

      <main className="App-main">
        {activeTab === 'users' && <UserManagement />}
        {activeTab === 'rides' && <RideManagement />}
        {activeTab === 'bookings' && <BookingManagement />}
      </main>

      <footer className="App-footer">
        <p>&copy; 2026 Car-Pooling Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
