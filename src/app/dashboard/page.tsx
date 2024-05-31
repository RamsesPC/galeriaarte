'use client'
// Importamos React y useRouter
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './estilosdashboard.css'; // Importamos los estilos del dashboard

// Definimos el tipo de objeto Artista
interface Artista {
  nombre: string;
  biografia: string;
  obras: string;
}

// Definimos el componente funcional Dashboard
const Dashboard = () => {
  const [artists, setArtists] = useState<Artista[]>([]); // Especificamos el tipo de artistas
  const [error, setError] = useState<string>(''); // Especificamos el tipo de error como string
  const router = useRouter();

  useEffect(() => {
    // Función para obtener los datos de los artistas
    const fetchArtists = async () => {
      try {
        const response = await fetch('https://proyecto-mf2dihls1-ramses-patinos-projects.vercel.app/');
        if (response.ok) {
          const data = await response.json();
          setArtists(data);
        } else {
          setError('Error al obtener los datos de los artistas.');
        }
      } catch (error) {
        setError('Error de conexión con el servidor.');
      }
    };

    fetchArtists();
  }, []);

  // Función para manejar el regreso al home y recargar la página
  const handleHomeButtonClick = () => {
    router.push('/');
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
        <h1>Dashboard</h1>
        {error && <p className="error">{error}</p>}
        <table className="artist-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Biografía</th>
              <th>Obras</th> 
              
            </tr>
          </thead>
          <tbody>
            {artists.map((artist, index) => (
              <tr key={index}>
                <td>{artist.nombre}</td>
                <td>{artist.biografia}</td>
                <td>{artist.obras}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-container">
          <button onClick={handleHomeButtonClick}>Regresar al Home</button>
        </div>
      </div>
    </div>
  );
};

// Exportamos el componente
export default Dashboard;
