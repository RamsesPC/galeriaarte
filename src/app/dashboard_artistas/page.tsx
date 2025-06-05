'use client'

// Importamos React y useRouter
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './estilostablaartistas.css'; // Importamos los estilos del dashboard

// Definimos el tipo de objeto Artista
interface Artista {
  id: number;
  usuario_id: number;
  nombre_artistico: string;
  biografia: string;
  telefono: string;
  sitio_web: string;
  direccion: string;
  especialidad: string;
}

// Definimos el componente funcional DashboardArtistas
const DashboardArtistas = () => {
  const [artistas, setArtistas] = useState<Artista[]>([]);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const fetchArtistas = async () => {
      try {
        const response = await fetch('http://localhost:3100/artistas'); // Ajusta esta ruta a tu backend real

        if (response.ok) {
          const data = await response.json();
          console.log("Datos obtenidos de artistas:", data);
          setArtistas(data);
        } else {
          setError('Error al obtener los datos de los artistas.');
        }
      } catch (error) {
        setError('Error de conexión con el servidor.');
        console.error("Error de conexión:", error);
      }
    };

    fetchArtistas();
  }, []);

  const handleHomeButtonClick = () => {
    router.push('/');
  };

  return (
    <div>
      {/* 👇 Aquí insertas la codificación de caracteres */}
      <head>
        <meta charSet="UTF-8" />
        <title>Dashboard de Artistas</title>
      </head>

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
        <h1>Dashboard de Artistas</h1>
        {error && <p className="error">{error}</p>}
        {artistas.length > 0 ? (
          <table className="artist-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario ID</th>
                <th>Nombre Artístico</th>
                <th>Biografía</th>
                <th>Teléfono</th>
                <th>Sitio Web</th>
                <th>Dirección</th>
                <th>Especialidad</th>
              </tr>
            </thead>
            <tbody>
              {artistas.map((artista) => (
                <tr key={artista.id}>
                  <td>{artista.id}</td>
                  <td>{artista.usuario_id}</td>
                  <td>{artista.nombre_artistico}</td>
                  <td>{artista.biografia}</td>
                  <td>{artista.telefono}</td>
                  <td>{artista.sitio_web}</td>
                  <td>{artista.direccion}</td>
                  <td>{artista.especialidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay artistas disponibles.</p>
        )}
        <div className="button-container">
          <button onClick={handleHomeButtonClick}>Regresar al Home</button>
        </div>
      </div>
    </div>
  );
};

// Exportamos el componente
export default DashboardArtistas;
