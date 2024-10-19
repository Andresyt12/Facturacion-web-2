
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 5000); // Redirigir después de 5 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador cuando el componente se desmonte
  }, [navigate]);

  return (
    <div className="home-container">
      <img src="/public/img/loginPro.jpeg" alt="Logo" className="logo" /> {/* No import, just use relative path */}
    </div>
  );
};

export default Home;

