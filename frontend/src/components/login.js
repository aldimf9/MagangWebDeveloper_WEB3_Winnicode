import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e,err) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/login`, {
        username,
        password,
      });
      const { token,user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('id',user.id); // Simpan token di state atau localStorage
      const cek = await axios.get(`http://localhost:5000/api/notifications/${user.id}`)
      if (err) {
        console.error(err.message);
      }else if (cek.data.notifications == null) {
        navigate(`/apply/${user.id}`);
        alert('Login successful!');
      } else {
        navigate(`/notification/${user.id}`);
        alert('Login successful!');
      }
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  const handleSignIn = () =>{
    navigate(`/signin`);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
    </form>
    <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default Login;
