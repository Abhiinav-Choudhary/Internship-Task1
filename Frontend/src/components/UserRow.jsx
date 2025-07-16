import React from 'react';

const UserRow = ({ rank, user }) => {
  return (
    <div className="user-row">
      <div className="rank">{rank}</div>
      <img src={user.avatar || 'https://i.pravatar.cc/150?u=' + user.name} alt={user.name} className="avatar-small" />
      <div className="name">{user.name}</div>
      <div className="points">{user.totalPoints.toLocaleString()}</div>
    </div>
  );
};

export default UserRow;