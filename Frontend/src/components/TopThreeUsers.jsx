import React from 'react';

const medalEmojis = ['🥇', '🥈', '🥉'];

const TopThreeUsers = ({ users }) => {
  return (
    <div className="top-three">
      {users.map((user, index) => (
        <div key={user._id} className={`top-user rank-${index + 1}`}>
          <div className="medal">{medalEmojis[index]}</div>
          <img src={user.avatar || 'https://i.pravatar.cc/150?img=' + index} alt={user.name} className="avatar" />
          <div className="name">{user.name}</div>
          <div className="points">{user.totalPoints.toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
};

export default TopThreeUsers;