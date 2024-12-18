'use client'

// Importamos React y useRouter
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importamos useRouter desde next/navigation
import './estilosregistroobras.css'; // Importamos los estilos para el registro de obras
import Link from 'next/link';

// Definimos el componente funcional RegistroObras
const RegistroObras = () => {
  // Estados para los campos del formulario
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [anoCreacion, setAnoCreacion] = useState('');
  const [dimensiones, setDimensiones] = useState('');
  const [tecnica, setTecnica] = useState('');
  const [fotoObra, setFotoObra] = useState<File | null>(null);
  const [certificado, setCertificado] = useState<File | null>(null);
  const [estado, setEstado] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Hook para acceder al enrutador de Next.js
  const router = useRouter();

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Crear un FormData para enviar datos y archivos
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descripcion', descripcion);
    formData.append('categoria', categoria);
    formData.append('precio', precio);
    formData.append('anoCreacion', anoCreacion);
    formData.append('dimensiones', dimensiones);
    formData.append('tecnica', tecnica);
    if (fotoObra) formData.append('fotoObra', fotoObra);
    if (certificado) formData.append('certificado', certificado);
    formData.append('estado', estado);

    try {
      const response = await fetch('http://localhost:3100/obras', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setSuccess('Datos enviados exitosamente.');
        // Limpiar los campos del formulario
        setTitulo('');
        setDescripcion('');
        setCategoria('');
        setPrecio('');
        setAnoCreacion('');
        setDimensiones('');
        setTecnica('');
        setFotoObra(null);
        setCertificado(null);
        setEstado('');

        // Redirigir al usuario al dashboard después de enviar los datos
        router.push('/dashboard');
      } else {
        setError('Error al enviar los datos.');
      }
    } catch (error) {
      setError('Error de conexión con el servidor.');
    }
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
        <h1>Registro de Obras</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="formGroup">
            <label htmlFor="titulo">Título de la obra:</label>
            <input
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="descripcion">Descripción:</label>
            <textarea
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="formGroup">
            <label htmlFor="categoria">Categoría:</label>
            <input
              type="text"
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="precio">Precio:</label>
            <input
              type="text"
              id="precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="anoCreacion">Año de creación:</label>
            <input
              type="text"
              id="anoCreacion"
              value={anoCreacion}
              onChange={(e) => setAnoCreacion(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="dimensiones">Dimensiones:</label>
            <input
              type="text"
              id="dimensiones"
              value={dimensiones}
              onChange={(e) => setDimensiones(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="tecnica">Técnica:</label>
            <input
              type="text"
              id="tecnica"
              value={tecnica}
              onChange={(e) => setTecnica(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="fotoObra">Fotografía de la obra:</label>
            <input
              type="file"
              id="fotoObra"
              onChange={(e) => setFotoObra(e.target.files ? e.target.files[0] : null)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="certificado">Certificado de autenticidad:</label>
            <input
              type="file"
              id="certificado"
              onChange={(e) => setCertificado(e.target.files ? e.target.files[0] : null)}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="estado">Estado:</label>
            <input
              type="text"
              id="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <button type="submit">Enviar</button>
        </form>
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

// Exportamos el componente
export default RegistroObras;
