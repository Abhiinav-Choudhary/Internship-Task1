import React, { useEffect, useState } from 'react';
import Leaderboard from './components/Leaderboard';
import UserSelector from './components/UserSelector';
import { getUsers, addUser, claimPoints } from './services/api.js';
import './index.css';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getUsers();
      setUsers(res.data);
    };
    fetchUsers();
  }, [refresh]);

  return (
    <div className="app-container">
      <h1 className="header">Live Ranking</h1>
      <UserSelector 
        users={users} 
        selectedUser={selectedUser} 
        setSelectedUser={setSelectedUser} 
        setRefresh={setRefresh} 
      />
      <Leaderboard users={users} />
    </div>
  );
}

export default App;
