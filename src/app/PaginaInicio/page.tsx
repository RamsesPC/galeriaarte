'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import './estilosinicio.css'; // Importamos los estilos globales
import Link from 'next/link';

// Definimos el componente funcional Inicio
const Inicio = () => {
  const router = useRouter();

  // Funciones para redirigir a las distintas páginas
  const irRegistroArtista = () => router.push('/registroartistas');
  const irRegistroObras = () => router.push('/registroobras');
  const irDashboard = () => router.push('/dashboard');
  const irRegistroComprador = () => router.push('/registrocomprador');

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

      {/* Contenido de la página de bienvenida */}
      <div className="container">
        <h1>¡Bienvenido a la plataforma de Arte Local!</h1>
        <p>Explora, conecta y vende tus obras.</p>
        
        {/* Botones de acceso a las funcionalidades */}
        <div className="opciones">
          <h2>Explora nuestras opciones</h2>
          <button className="btn" onClick={irRegistroArtista}>Registro de Artista</button>
          <button className="btn" onClick={irRegistroObras}>Registro de Obras</button>
          <button className="btn" onClick={irDashboard}>Dashboard</button>
          <button className="btn" onClick={irRegistroComprador}>Registro de Comprador</button>
        </div>

        {/* Sección de imágenes para mejorar la visualización */}
        <div className="imagenes-destacadas">
          <h2>Arte Destacado</h2>
          <div className="imagenes">
            <img src='/Imagen/ImagenInicio_1.jpeg' alt="Arte 1" />
            <img src="/imagen/ImagenInicio_2.jpeg" alt="Arte 2" />
            <img src="/imagen/ImagenInicio_3.jpeg" alt="Arte 3" />
          </div>
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

export default Inicio;
