'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import './estilosservicios.css'; // Importamos los estilos del componente de servicios
import Link from 'next/link';

// Definimos el componente funcional Servicios
const Servicios = () => {
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
          <li><a href="/prueba">Artistas</a></li>
          <li><a href="/PaginaInicio">Tienda</a></li>
          <li><a href="/servicios">Servicios</a></li>
          <li><a href="/conocenos">Nosotros</a></li>
        </ul>
      </nav>

      {/* Contenido del componente Servicios */}
      <div id="servicios" className="container-servicios">
        <h2>Nuestros Servicios</h2>
        <p>
          En nuestra plataforma, ofrecemos una amplia variedad de servicios tanto para compradores como para artistas:
        </p>
        <div className="servicios-lista">
          <div className="servicio">
            <h3>Compra de Obras de Arte</h3>
            <p>
              Explora una amplia gama de obras de arte creadas por artistas locales. Facilitamos la compra directa desde la plataforma, con la seguridad y garantía de calidad.
            </p>
            <img src="/imagen/ImagenInicio_1.jpg" alt="Ejemplo de obra de arte a la venta" className="imagen-servicio" />
          </div>

          <div className="servicio">
            <h3>Venta de Obras de Arte</h3>
            <p>
              Si eres artista, podrás vender tus obras en nuestro marketplace, alcanzando a coleccionistas y entusiastas del arte en todo el mundo. Nos encargamos de todo el proceso.
            </p>
            <img src="/imagen/ImagenInicio_2.jpeg" alt="Ejemplo de obra de arte en venta" className="imagen-servicio" />
          </div>

          <div className="servicio">
            <h3>Comisiones Personalizadas</h3>
            <p>
              Además de las ventas directas, ofrecemos la posibilidad de que los compradores soliciten comisiones personalizadas a nuestros artistas, asegurando una obra única.
            </p>
            <img src="/imagen/ImagenInicio_3.jpeg" alt="Ejemplo de obra personalizada" className="imagen-servicio" />
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

export default Servicios;
