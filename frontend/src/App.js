import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import SignIn from './components/signin';
import Login from './components/login';
import Notification from './components/notif';
import Apply from './components/apply';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/signin" />} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/apply/:id" element={<Apply/>} />
                <Route path="/notification/:id" element={<Notification/>} />
            </Routes>
        </Router>
    );
}

export default App;
