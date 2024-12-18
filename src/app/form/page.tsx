'use client'

// Importamos React y useRouter
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importamos useRouter desde next/navigation
import './estilosform.css'; // Importamos los estilos globales
import Link from 'next/link';

// Definimos el componente funcional FormArtista
const FormArtista = () => {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [biografia, setBiografia] = useState('');
  const [obras, setObras] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Hook para acceder al enrutador de Next.js
  const router = useRouter(); // Usamos el hook useRouter

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Objeto con los datos del formulario
    const data = {
      nombre,
      biografia,
      obras
    };

    try {
      const response = await fetch('http://localhost:3100/artista', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSuccess('Datos enviados exitosamente.');
        // Limpiar los campos del formulario
        setNombre('');
        setBiografia('');
        setObras('');
        
        // Redirigir al usuario al dashboard después de enviar los datos
        router.push('/dashboard');
      } else {
        setError('Error al enviar los datos.');
      }
    } catch (error) {
      setError('Error de conexión con el servidor.');
    }
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
        <h1>Registro de Artista</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="formGroup">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="biografia">Biografía:</label>
            <textarea
              id="biografia"
              value={biografia}
              onChange={(e) => setBiografia(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="formGroup">
            <label htmlFor="obras">Obras:</label>
            <textarea
              id="obras"
              value={obras}
              onChange={(e) => setObras(e.target.value)}
              required
            ></textarea>
          </div>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <button type="submit">Enviar</button>
        </form>
      </div>
      {/* Botón para regresar a la página principal */}
      <div className="volver-container">
        <Link href="/">
          <button className="volver-boton">Volver a la página principal</button>
        </Link>
      </div>
    </div>
  );
};

// Exportamos el componente
export default FormArtista;
