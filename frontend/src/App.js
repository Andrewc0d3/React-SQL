import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login.js';
import UserList from './components/userList.js';            

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
    </Routes>
  );
}

export default App;
