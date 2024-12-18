'use client'

import React, { useState } from 'react';
import Link from 'next/link'; // Importa el componente Link de Next.js
import './estiloscategorias.css'; 

// Datos de ejemplo de categorías
const categorias = [
  { id: 1, titulo: 'Pintura', descripcion: 'Creación en lienzo o papel.', imagen: '/imagen/pintura.jpg' },
  { id: 2, titulo: 'Escultura', descripcion: 'Obras tridimensionales en materiales.', imagen: '/imagen/escultura.jpg' },
  { id: 3, titulo: 'Fotografía', descripcion: 'Captura de imágenes reales.', imagen: '/imagen/fotografia.jpg' },
  { id: 4, titulo: 'Artesanía', descripcion: 'Obras artesanales', imagen: '/imagen/artesania.jpg' },
  { id: 5, titulo: 'Cerámica', descripcion: 'Creación de objetos con arcilla. ', imagen: '/imagen/ceramica.jpg' },
  { id: 6, titulo: 'Arte digital', descripcion: 'Creación visual usando tecnología. ', imagen: '/imagen/artedigital.jpg' },
  { id: 7, titulo: 'Grabado', descripcion: 'Impresión de imágenes en superficies.', imagen: '/imagen/grabado.jpeg' },
  { id: 8, titulo: 'Collage', descripcion: 'Composición con recortes diversos.', imagen: '/imagen/collage.jpg' }
];

const Page = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<number | null>(null);

  // Manejar la selección de la categoría
  const handleSelect = (id: number) => {
    setCategoriaSeleccionada(id);
  };

  return (
    <div className="container-categorias">
      <h1>Elige una categoría</h1>
      <div className="categorias-grid">
        {categorias.map((categoria) => (
          <div
            key={categoria.id}
            className={`categoria-card ${categoriaSeleccionada === categoria.id ? 'seleccionada' : ''}`}
            onClick={() => handleSelect(categoria.id)}
          >
            <img src={categoria.imagen} alt={categoria.titulo} className="imagen-categoria" />
            <div className="categoria-info">
              <h2>{categoria.titulo}</h2>
              <p>{categoria.descripcion}</p>
            </div>
            <div className="radio-button">
              <input
                type="radio"
                name="categoria"
                value={categoria.id}
                checked={categoriaSeleccionada === categoria.id}
                readOnly
              />
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

export default Page;
