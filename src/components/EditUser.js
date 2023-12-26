import React, { useState } from 'react';

const EditUser = ({ match, users, updateUser }) => {
  const userId = parseInt(match.params.id);
  const user = users.find(user => user.id === userId);

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = e => {
    e.preventDefault();
    updateUser({ id: userId, username, email });
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default EditUser;