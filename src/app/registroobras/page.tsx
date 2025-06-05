'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './estilosregistroobras.css';
import Link from 'next/link';

const RegistroObras = () => {
  const [artistaId, setArtistaId] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tecnica, setTecnica] = useState('');
  const [dimensiones, setDimensiones] = useState('');
  const [precio, setPrecio] = useState('');
  const [fechaCreacion, setFechaCreacion] = useState('');
  const [imagenUrl, setImagenUrl] = useState('');
  const [disponible, setDisponible] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const obra = {
      artista_id: parseInt(artistaId),
      titulo,
      descripcion,
      tecnica,
      dimensiones,
      precio: parseFloat(precio),
      fecha_creacion: fechaCreacion,
      imagen_url: imagenUrl,
      disponible,
    };

    try {
      const response = await fetch('http://localhost:3100/obras', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obra),
      });

      if (response.ok) {
        setSuccess('Obra registrada exitosamente.');
        setArtistaId('');
        setTitulo('');
        setDescripcion('');
        setTecnica('');
        setDimensiones('');
        setPrecio('');
        setFechaCreacion('');
        setImagenUrl('');
        setDisponible(true);
        router.push('/dashboard');
      } else {
        setError('Error al registrar la obra.');
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
        <h1>Registro de Obras</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="formGroup">
            <label htmlFor="artistaId">ID del Artista:</label>
            <input type="number" id="artistaId" value={artistaId} onChange={(e) => setArtistaId(e.target.value)} required />
          </div>
          <div className="formGroup">
            <label htmlFor="titulo">Título:</label>
            <input type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
          </div>
          <div className="formGroup">
            <label htmlFor="descripcion">Descripción:</label>
            <textarea id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required></textarea>
          </div>
          <div className="formGroup">
            <label htmlFor="tecnica">Técnica:</label>
            <input type="text" id="tecnica" value={tecnica} onChange={(e) => setTecnica(e.target.value)} />
          </div>
          <div className="formGroup">
            <label htmlFor="dimensiones">Dimensiones:</label>
            <input type="text" id="dimensiones" value={dimensiones} onChange={(e) => setDimensiones(e.target.value)} />
          </div>
          <div className="formGroup">
            <label htmlFor="precio">Precio:</label>
            <input type="number" step="0.01" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
          </div>
          <div className="formGroup">
            <label htmlFor="fechaCreacion">Fecha de Creación:</label>
            <input type="date" id="fechaCreacion" value={fechaCreacion} onChange={(e) => setFechaCreacion(e.target.value)} required />
          </div>
          <div className="formGroup">
            <label htmlFor="imagenUrl">URL de la Imagen:</label>
            <input type="text" id="imagenUrl" value={imagenUrl} onChange={(e) => setImagenUrl(e.target.value)} />
          </div>
          <div className="formGroup">
            <label htmlFor="disponible">Disponible:</label>
            <select id="disponible" value={disponible.toString()} onChange={(e) => setDisponible(e.target.value === 'true')}>
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <button type="submit">Registrar Obra</button>
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

export default RegistroObras;
