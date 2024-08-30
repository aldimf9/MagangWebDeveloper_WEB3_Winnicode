import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [no_telp , setNoTelp] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', {
        username,
        email,
        password,
        no_telp,
      });
      navigate(`/login`);
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed: ' + error.message);
    }
  };

  const handleLogin = () =>{
    navigate(`/login`);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div>
              <label>Username:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div>
              <label>No.Telphone:</label>
              <input type="number" value={no_telp} onChange={(e) => setNoTelp(e.target.value)} required />
          </div>
          <button type="submit">Register</button>
        </form>
        <button onClick={handleLogin}>Login</button>
      </div>
  );
};

export default Register;
