'use client'

// Importamos React y useRouter
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './estilosdashboard.css'; // Importamos los estilos del dashboard

// Definimos el tipo de objeto Usuario
interface Usuario {
  id: number;
  correo: string;
  tipo_usuario: 'comprador' | 'artista';
}

// Definimos el componente funcional DashboardUsuarios
const Dashboard = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]); // Especificamos el tipo de usuarios
  const [error, setError] = useState<string>(''); // Especificamos el tipo de error como string
  const router = useRouter();

  useEffect(() => {
    // Función para obtener los datos de los usuarios
    const fetchUsuarios = async () => {
      try {
        // Cambia la ruta según el nombre de la API para obtener usuarios
        const response = await fetch('http://localhost:3100/usuarios');
        
        if (response.ok) {
          const data = await response.json();
          console.log("Datos obtenidos de usuarios:", data); // Verifica que los datos sean correctos
          setUsuarios(data);
        } else {
          setError('Error al obtener los datos de los usuarios.');
        }
      } catch (error) {
        setError('Error de conexión con el servidor.');
        console.error("Error de conexión:", error); // Log del error en consola
      }
    };

    fetchUsuarios();
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
          <li><a href="/obras">Obras</a></li>
          <li><a href="/dashboard">Artistas</a></li>
          <li><a href="/PaginaInicio">Tienda</a></li>
          <li><a href="/servicios">Servicios</a></li>
          <li><a href="/conocenos">Nosotros</a></li>
        </ul>
      </nav>
      <div className="container">
        <h1>Dashboard de Usuarios</h1>
        {error && <p className="error">{error}</p>}
        {/* Verificamos si hay datos antes de mostrar la tabla */}
        {usuarios.length > 0 ? (
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Correo</th>
                <th>Tipo de Usuario</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.correo}</td>
                  <td>{usuario.tipo_usuario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay usuarios disponibles.</p>
        )}
        <div className="button-container">
          <button onClick={handleHomeButtonClick}>Regresar al Home</button>
        </div>
      </div>
    </div>
  );
};

// Exportamos el componente
export default Dashboard;
