// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ListUsers from './components/ListUsers';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'user1', email: 'user1@example.com' },
    { id: 2, username: 'user2', email: 'user2@example.com' },
  ]);

  const createUser = newUser => {
    newUser.id = users.length + 1;
    setUsers([...users, newUser]);
  };

  const updateUser = updatedUser => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const deleteUser = userId => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <Router>
      <div>
        <h1>CRUD Dashboard</h1>
        <nav>
          <Link to="/users">List Users</Link> |{' '}
          <Link to="/create-user">Create User</Link> |{' '}
          <Link to="/edit-user/1">Edit User (example)</Link>
        </nav>
        <Route
          path="/users"
          exact
          render={() => <ListUsers users={users} deleteUser={deleteUser} />}
        />
        <Route
          path="/create-user"
          render={() => <CreateUser createUser={createUser} />}
        />
        <Route
          path="/edit-user/:id"
          render={({ match }) => (
            <EditUser match={match} users={users} updateUser={updateUser} />
          )}
        />
      </div>
    </Router>
  );
};

export default App;
