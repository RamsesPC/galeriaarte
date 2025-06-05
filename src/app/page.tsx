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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Realizamos la petición a la API para verificar las credenciales
      const response = await fetch('http://localhost:3100/usuarios');
      if (response.ok) {
        const data = await response.json();
        // Buscar al usuario en los datos obtenidos
        const user = data.find((u: any) => u.correo === username && u.password === password);
        
        if (user) {
          router.push('/PaginaInicio'); // Redirigir si las credenciales son correctas
        } else {
          setError('Usuario o contraseña incorrectos');
        }
      } else {
        setError('Error al conectar con el servidor');
      }
    } catch (error) {
      setError('Error de conexión con el servidor.');
    }
  };

  // Función para manejar el registro de nuevos usuarios
  const handleCreateAccount = () => {
    router.push('/registro'); // Redirigir a la página de creación de cuenta
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/Logo.png" className="logo" alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="/obras">Obras</a></li>
          <li><a href="/dashboard">Artistas</a></li>
          <li><a href="/PaginaInicio">Tienda</a></li>
          <li><a href="/servicios">Servicios</a></li>
          <li><a href="/conocenos">Nosotros</a></li>
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
        <div className="create-account">
          <p>¿No tienes cuenta?</p>
          <button onClick={handleCreateAccount}>Crear Cuenta</button>
        </div>
      </div>
    </div>
  );
};

// Exportamos el componente
export default Home;
