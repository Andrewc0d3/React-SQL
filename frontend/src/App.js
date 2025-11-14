import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login.js';
import UserList from './components/userList.js';            
import Register from './components/register.js';
import Home from './components/Home.js';
import UpdateData from './components/updateData.js';
import Delete from './components/Delete.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path='/inicio' element={<Home />} />
      <Route path='/actualizar' element={<UpdateData />} />
      <Route path="/eliminar" element={<Delete />} />
    </Routes>
  );
}

export default App;
