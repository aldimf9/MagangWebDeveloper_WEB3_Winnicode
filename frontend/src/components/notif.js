import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

const GetNotifications = ({ token }) => {
  const [notification, setNotification] = useState([]);
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/notifications/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });  
        setNotification(response.data.notifications);
      } catch (error) {
        alert('Failed to fetch notifications: ' + error.response.data.message);
      }
    };
    fetchNotifications();
  }, [token, id]);

  const handleLogout = () => {
    // Hapus token dari localStorage
    localStorage.removeItem('token');
    // Redirect ke halaman login
    navigate('/login');
  };

  return (
    <div>
      <button onClick={handleLogout}>Log Out</button>
      <h2>Notifications</h2>
      <h3>{notification.status}</h3>
      <p>{notification.keterangan}</p>
    </div>
  );
};

export default GetNotifications;
