'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './estilos_dashboard.css'; // Asegúrate de crear o adaptar este archivo CSS

const OpcionesDashboard = () => {
  const router = useRouter();

  // Funciones para redirigir a cada dashboard
  const irDashboardArtistas = () => router.push('/dashboard_artistas');
  const irDashboardUsuarios = () => router.push('/dashboard_usuarios');
  const irDashboardCompradores = () => router.push('/dashboard_compradores');

  return (
    <div>
      {/* Barra de navegación */}
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

      {/* Contenido de opciones */}
      <div className="container">
        <h1>Paneles de Administración</h1>
        <p>Selecciona el dashboard que deseas visualizar:</p>

        <div className="opciones-dashboard">
          <button className="btn" onClick={irDashboardArtistas}>Dashboard de Artistas</button>
          <button className="btn" onClick={irDashboardUsuarios}>Dashboard de Usuarios</button>
          <button className="btn" onClick={irDashboardCompradores}>Dashboard de Compradores</button>
        </div>

        {/* Botón para regresar a la página principal */}
        <div className="volver-container">
          <Link href="/">
            <button className="volver-boton">Volver a la página principal</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpcionesDashboard;
