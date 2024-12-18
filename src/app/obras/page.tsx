'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import './estilosobras.css'; // Importamos los estilos específicos para la galería
import Link from 'next/link';

const Obras = () => {
  const router = useRouter();

  // Funciones para redirigir a las distintas páginas
  const irRegistroArtista = () => router.push('/registroartistas');
  const irDashboard = () => router.push('/dashboard');
  const irRegistroComprador = () => router.push('/registrocomprador');

  const categoriasObras = [
    {
      categoria: 'Pintura',
      obras: [
        { titulo: 'Atardecer en el Campo', artista: 'Juan Pérez', imagen: '/Imagen/ImagenInicio_2.jpeg' },
        { titulo: 'Retrato de una Mujer', artista: 'Ana López', imagen: '/Imagen/ImagenInicio_2.jpeg' }
      ]
    },
    {
      categoria: 'Escultura',
      obras: [
        { titulo: 'La Figura del Tiempo', artista: 'Carlos García', imagen: '/Imagen/ImagenInicio_2.jpeg' },
        { titulo: 'El Guardián', artista: 'María Rodríguez', imagen: '/Imagen/ImagenInicio_2.jpeg' }
      ]
    },
    // Añadir el resto de categorías como antes...
  ];

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

      {/* Galería de Obras */}
      <div id="galeria" className="container-galeria">
        <h2>Galería de Obras</h2>
        {categoriasObras.map((categoria, index) => (
          <div key={index} className="categoria">
            <h3>{categoria.categoria}</h3>
            <div className="obras">
              {categoria.obras.map((obra, i) => (
                <div key={i} className="obra-item">
                  <img src={obra.imagen} alt={obra.titulo} className="imagen-obra" />
                  <div className="info-obra">
                    <h4>{obra.titulo}</h4>
                    <p>{obra.artista}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
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

export default Obras;
