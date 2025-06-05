'use client'

// Importamos React y useRouter
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './estilostablacompradores.css'; // Importamos los estilos del dashboard

// Definimos el tipo de objeto Comprador
interface Comprador {
  id: number;
  usuario_id: number;
  nombre: string;
  fecha_nacimiento: string; // ISO string desde el backend
  celular: string;
  domicilio: string;
  estado: string;
  ciudad: string;
  cp: string;
  metodo_pago: string;
  direccion_facturacion: string;
}

// Definimos el componente funcional DashboardCompradores
const DashboardCompradores = () => {
  const [compradores, setCompradores] = useState<Comprador[]>([]);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const fetchCompradores = async () => {
      try {
        const response = await fetch('http://localhost:3100/comprador'); // Ajusta esta ruta a tu backend

        if (response.ok) {
          const data = await response.json();
          console.log("Datos obtenidos de compradores:", data);
          setCompradores(data);
        } else {
          setError('Error al obtener los datos de los compradores.');
        }
      } catch (error) {
        setError('Error de conexión con el servidor.');
        console.error("Error de conexión:", error);
      }
    };

    fetchCompradores();
  }, []);

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
        <h1>Dashboard de Compradores</h1>
        {error && <p className="error">{error}</p>}
        {compradores.length > 0 ? (
          <table className="artist-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario ID</th>
                <th>Nombre</th>
                <th>Fecha Nacimiento</th>
                <th>Celular</th>
                <th>Domicilio</th>
                <th>Estado</th>
                <th>Ciudad</th>
                <th>C.P.</th>
                <th>Método de Pago</th>
                <th>Dirección de Facturación</th>
              </tr>
            </thead>
            <tbody>
              {compradores.map((comprador) => (
                <tr key={comprador.id}>
                  <td>{comprador.id}</td>
                  <td>{comprador.usuario_id}</td>
                  <td>{comprador.nombre}</td>
                  <td>{new Date(comprador.fecha_nacimiento).toLocaleDateString()}</td>
                  <td>{comprador.celular}</td>
                  <td>{comprador.domicilio}</td>
                  <td>{comprador.estado}</td>
                  <td>{comprador.ciudad}</td>
                  <td>{comprador.cp}</td>
                  <td>{comprador.metodo_pago}</td>
                  <td>{comprador.direccion_facturacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay compradores disponibles.</p>
        )}
        <div className="button-container">
          <button onClick={handleHomeButtonClick}>Regresar al Home</button>
        </div>
      </div>
    </div>
  );
};

// Exportamos el componente
export default DashboardCompradores;
