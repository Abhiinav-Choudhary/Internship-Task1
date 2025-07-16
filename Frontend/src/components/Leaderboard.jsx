import React from 'react';
import TopThreeUsers from './TopThreeUsers';
import UserRow from './UserRow';
import './TopThreeUsers.css';
import './UserRow.css';

const Leaderboard = ({ users }) => {
  const sorted = [...users].sort((a, b) => b.totalPoints - a.totalPoints);
  const topThree = sorted.slice(0, 3);
  const rest = sorted.slice(3);

  return (
    <div className="leaderboard">
      <TopThreeUsers users={topThree} />
      <div className="user-rows">
        {rest.map((user, index) => (
          <UserRow key={user._id} rank={index + 4} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
