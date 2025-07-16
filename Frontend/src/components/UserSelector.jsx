import React, { useState } from 'react';
import { addUser, claimPoints } from '../services/api.js';
import './UserSelector.css';

const UserSelector = ({ users, selectedUser, setSelectedUser, setRefresh }) => {
  const [newUser, setNewUser] = useState('');
  const [message, setMessage] = useState('');

  const handleAdd = async () => {
    if (!newUser.trim()) return;
    await addUser(newUser);
    setNewUser('');
    setRefresh(r => !r);
  };

  const handleClaim = async () => {
    if (!selectedUser) return;
    const res = await claimPoints(selectedUser);
    setMessage(`${res.data.user.name} got ${res.data.points} points!`);
    setRefresh(r => !r);
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div className="user-selector-container">
      <select
        className="select-user"
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">Select user</option>
        {users.map(u => (
          <option key={u._id} value={u._id}>{u.name}</option>
        ))}
      </select>
      <div>
        <input
          type="text"
          placeholder="Add user"
          className="input-add"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button className="button-add" onClick={handleAdd}>Add</button>
        <button className="button-add" onClick={handleClaim}>Claim</button>
      </div>
      {message && <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>}
    </div>
  );
};

export default UserSelector;
