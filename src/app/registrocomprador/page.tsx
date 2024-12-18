'use client'

// Importamos React y useRouter
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importamos useRouter desde next/navigation
import './estiloscomprador.css'; // Importamos los estilos para el registro de compradores
import Link from 'next/link';

// Definimos el componente funcional RegistroComprador
const RegistroComprador = () => {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [celular, setCelular] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [estado, setEstado] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [cp, setCp] = useState('');
  const [metodoPago, setMetodoPago] = useState('');
  const [direccionFacturacion, setDireccionFacturacion] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Hook para acceder al enrutador de Next.js
  const router = useRouter();

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Crear un FormData para enviar los datos
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('correo', correo);
    formData.append('password', password);
    formData.append('fechaNacimiento', fechaNacimiento);
    formData.append('celular', celular);
    formData.append('domicilio', domicilio);
    formData.append('estado', estado);
    formData.append('ciudad', ciudad);
    formData.append('cp', cp);
    formData.append('metodoPago', metodoPago);
    formData.append('direccionFacturacion', direccionFacturacion);

    try {
      const response = await fetch('http://localhost:3100/comprador', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setSuccess('Registro exitoso.');
        // Limpiar los campos del formulario
        setNombre('');
        setCorreo('');
        setPassword('');
        setFechaNacimiento('');
        setCelular('');
        setDomicilio('');
        setEstado('');
        setCiudad('');
        setCp('');
        setMetodoPago('');
        setDireccionFacturacion('');

        // Redirigir al usuario a una página de confirmación o bienvenida
        router.push('/dashboardComprador');
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
        <h1>Registro de Comprador</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="formGroup">
            <label htmlFor="nombre">Nombre completo:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre completo"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="correo">Correo electrónico:</label>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="correo@dominio.com"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
            <input
              type="date"
              id="fechaNacimiento"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="celular">Celular:</label>
            <input
              type="text"
              id="celular"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              placeholder="3121673917"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="domicilio">Domicilio completo:</label>
            <input
              type="text"
              id="domicilio"
              value={domicilio}
              onChange={(e) => setDomicilio(e.target.value)}
              placeholder="Calle, número, colonia"
              required
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
          <div className="formGroup">
            <label htmlFor="ciudad">Ciudad:</label>
            <input
              type="text"
              id="ciudad"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="cp">Código Postal (CP):</label>
            <input
              type="text"
              id="cp"
              value={cp}
              onChange={(e) => setCp(e.target.value)}
              placeholder="28018"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="metodoPago">Método de pago preferido:</label>
            <input
              type="text"
              id="metodoPago"
              value={metodoPago}
              onChange={(e) => setMetodoPago(e.target.value)}
              placeholder="Tarjeta de crédito, PayPal, etc."
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="direccionFacturacion">Dirección de facturación:</label>
            <input
              type="text"
              id="direccionFacturacion"
              value={direccionFacturacion}
              onChange={(e) => setDireccionFacturacion(e.target.value)}
              placeholder="Si es diferente a la dirección de envío"
            />
          </div>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <button type="submit">Registrarse</button>
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
export default RegistroComprador;
