'use client';
import React from 'react';
import Link from 'next/link'; // Importa el componente Link de Next.js
import { useRouter } from 'next/navigation';
import './estilosconocenos.css'; // Importamos los estilos específicos para la sección Conócenos

const Conocenos = () => {
  const router = useRouter();

  // Funciones para redirigir a las distintas páginas
  const irRegistroArtista = () => router.push('/registroartistas');
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

      {/* Contenido del componente Conócenos */}
      <div id="conocenos" className="container-conocenos">
        <h2>Conócenos</h2>
        <p>
          Somos una plataforma dedicada a la compra y venta de obras de arte, con el objetivo de conectar a artistas locales con coleccionistas y amantes del arte de todo el mundo. Creemos en el poder del arte para transformar vidas y culturas, y nuestra misión es crear un espacio donde los artistas puedan compartir su talento y creatividad.
        </p>
        <div className="info-contacto">
          <h3>Información de Contacto</h3>
          <p><strong>Teléfono:</strong> +52 123 456 7890</p>
          <p><strong>Correo Electrónico:</strong> contacto@artelocal.com</p>
          <p><strong>Nuestra Intención:</strong> Facilitar la difusión del arte y proporcionar una plataforma segura para que los artistas puedan vender sus obras, mientras conectamos a compradores con piezas únicas y de gran valor cultural.</p>
        </div>

        <div className="redes-sociales">
          <h3>Redes Sociales</h3>
          <p>Síguenos en nuestras redes para estar al tanto de novedades y eventos:</p>
          <ul className="lista-redes">
            <li><a href="https://www.facebook.com/artelocal" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/artelocal" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.twitter.com/artelocal" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
          {/* Botón para regresar a la página principal */}
      <div className="volver-container">
        <Link href="/">
          <button className="volver-boton">Volver a la página principal</button>
        </Link>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Conocenos;
