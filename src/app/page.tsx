'use client'
// Importamos React y useRouter
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './globals.css'; // Importamos los estilos globales

// Definimos el componente funcional Home
const Home = () => {
  // Obtenemos el enrutador de Next.js
  const router = useRouter();

  // Estados para usuario y contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validar las credenciales (puedes personalizar esto según tus necesidades)
    if (username === 'admin' && password === 'password') {
      router.push('/form');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/Logo.png" className="logo" alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="#obras">Obras</a></li>
          <li><a href="/dashboard">Artistas</a></li>
          <li><a href="#tienda">Tienda</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contactanos">Contáctanos</a></li>
        </ul>
      </nav>
      <div className="container">
        <h1>Inicio de Sesión</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="formGroup">
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Confirmar</button>
        </form>
      </div>
    </div>
  );
};

// Exportamos el componente
export default Home;
