'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './estilosartistas.css';
import Link from 'next/link';

const RegistroArtistas = () => {
  const [usuarioId, setUsuarioId] = useState(''); // Temporal
  const [nombreArtistico, setNombreArtistico] = useState('');
  const [biografia, setBiografia] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sitioWeb, setSitioWeb] = useState('');
  const [direccion, setDireccion] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const data = {
      usuario_id: parseInt(usuarioId),
      nombre_artistico: nombreArtistico,
      biografia,
      telefono,
      sitio_web: sitioWeb,
      direccion,
      especialidad,
    };

    try {
      const response = await fetch('http://localhost:3100/artistas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess('Registro exitoso.');
        setUsuarioId('');
        setNombreArtistico('');
        setBiografia('');
        setTelefono('');
        setSitioWeb('');
        setDireccion('');
        setEspecialidad('');
        router.push('/dashboard_artistas');
      } else {
        setError('Error al registrar al artista.');
      }
    } catch (err) {
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
            <label htmlFor="usuarioId">ID del Usuario (temporal):</label>
            <input
              type="number"
              id="usuarioId"
              value={usuarioId}
              onChange={(e) => setUsuarioId(e.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="nombreArtistico">Nombre artístico:</label>
            <input
              type="text"
              id="nombreArtistico"
              value={nombreArtistico}
              onChange={(e) => setNombreArtistico(e.target.value)}
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
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="text"
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="sitioWeb">Sitio web:</label>
            <input
              type="url"
              id="sitioWeb"
              value={sitioWeb}
              onChange={(e) => setSitioWeb(e.target.value)}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="direccion">Dirección:</label>
            <input
              type="text"
              id="direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="especialidad">Especialidad:</label>
            <input
              type="text"
              id="especialidad"
              value={especialidad}
              onChange={(e) => setEspecialidad(e.target.value)}
              required
            />
          </div>

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <button type="submit">Registrar</button>
        </form>

        <div className="volver-container">
          <Link href="/">
            <button className="volver-boton">Volver a la página principal</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistroArtistas;
