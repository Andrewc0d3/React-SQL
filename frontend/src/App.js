import React from 'react';
import"./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserList from './components/userList';

function App() {
return (
<div>
<h1>React + MySQL Example</h1>

<UserList />
</div>
);
}

export default App;