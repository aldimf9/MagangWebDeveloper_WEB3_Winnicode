import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

const CreateApplication = ({ token }) => {
  const {id} = useParams();
  const [zipFile, setZipFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setZipFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id_user',id)
    formData.append('zipFile', zipFile);

    try {
      await axios.post(`http://localhost:5000/api/applications/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      navigate(`/notification/${id}`);
      alert('Application submitted successfully!');
    } catch (error) {
      alert('Application submission failed: ' + error.message);
    }
  };

  const handleLogout = () => {
    // Hapus token dari localStorage
    localStorage.removeItem('token');
    // Redirect ke halaman login
    navigate('/login');
  };
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h2>Create Application</h2>
      <div>
        <label>Upload ZIP File:</label>
        <input type="file" accept=".zip" onChange={handleFileChange} required />
      </div>
      <button type="submit">Submit Application</button>
    </form>
    <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default CreateApplication;
