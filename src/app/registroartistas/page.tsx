'use client'

// Importamos React y useRouter
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importamos useRouter desde next/navigation
import './estilosartistas.css'; // Importamos los estilos para el registro de artistas
import Link from 'next/link';

// Definimos el componente funcional RegistroArtistas
const RegistroArtistas = () => {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [curriculum, setCurriculum] = useState<File | null>(null);
  const [declaracion, setDeclaracion] = useState('');
  const [foto, setFoto] = useState<File | null>(null);
  const [razonSocial, setRazonSocial] = useState('');
  const [rfc, setRfc] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [estado, setEstado] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [cp, setCp] = useState('');
  const [celular, setCelular] = useState('');
  const [correo, setCorreo] = useState('');
  const [ine, setIne] = useState<File | null>(null);
  const [cuentaBancaria, setCuentaBancaria] = useState('');
  const [beneficiarioNombre, setBeneficiarioNombre] = useState('');
  const [beneficiarioTelefono, setBeneficiarioTelefono] = useState('');
  const [beneficiarioCorreo, setBeneficiarioCorreo] = useState('');
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
    formData.append('nombre', nombre);
    if (curriculum) formData.append('curriculum', curriculum);
    formData.append('declaracion', declaracion);
    if (foto) formData.append('foto', foto);
    formData.append('razonSocial', razonSocial);
    formData.append('rfc', rfc);
    formData.append('domicilio', domicilio);
    formData.append('estado', estado);
    formData.append('ciudad', ciudad);
    formData.append('cp', cp);
    formData.append('celular', celular);
    formData.append('correo', correo);
    if (ine) formData.append('ine', ine);
    formData.append('cuentaBancaria', cuentaBancaria);
    formData.append('beneficiarioNombre', beneficiarioNombre);
    formData.append('beneficiarioTelefono', beneficiarioTelefono);
    formData.append('beneficiarioCorreo', beneficiarioCorreo);

    try {
      const response = await fetch('http://localhost:3100/artista', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setSuccess('Datos enviados exitosamente.');
        // Limpiar los campos del formulario
        setNombre('');
        setCurriculum(null);
        setDeclaracion('');
        setFoto(null);
        setRazonSocial('');
        setRfc('');
        setDomicilio('');
        setEstado('');
        setCiudad('');
        setCp('');
        setCelular('');
        setCorreo('');
        setIne(null);
        setCuentaBancaria('');
        setBeneficiarioNombre('');
        setBeneficiarioTelefono('');
        setBeneficiarioCorreo('');

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
        <h1>Registro de Artista</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="formGroup">
            <label htmlFor="nombre">Nombre del artista:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Primer Nombre / Segundo Nombre / Apellido Paterno / Apellido Materno"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="curriculum">Currículum Vitae:</label>
            <input
              type="file"
              id="curriculum"
              onChange={(e) => setCurriculum(e.target.files ? e.target.files[0] : null)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="declaracion">Declaración del artista:</label>
            <textarea
              id="declaracion"
              value={declaracion}
              onChange={(e) => setDeclaracion(e.target.value)}
              placeholder="Breve descripcion de sus habilidades y momentos más importantes"
              required
            ></textarea>
          </div>
          <div className="formGroup">
            <label htmlFor="foto">Fotografía del artista en alta resolución:</label>
            <input
              type="file"
              id="foto"
              onChange={(e) => setFoto(e.target.files ? e.target.files[0] : null)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="razonSocial">Razón social:</label>
            <input
              type="text"
              id="razonSocial"
              value={razonSocial}
              onChange={(e) => setRazonSocial(e.target.value)}
              placeholder="Nombre de la empresa"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="rfc">RFC:</label>
            <input
              type="text"
              id="rfc"
              value={rfc}
              onChange={(e) => setRfc(e.target.value)}
              placeholder="XAXX010101000"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="domicilio">Domicilio, colonia</label>
            <input
              type="text"
              id="domicilio"
              value={domicilio}
              onChange={(e) => setDomicilio(e.target.value)}
              placeholder="Ingresa tu domicilio y colonia"
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
              placeholder="Villa de Alvarez"
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
              placeholder="Colima"
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
            <label htmlFor="ine">INE (indispensable):</label>
            <input
              type="file"
              id="ine"
              onChange={(e) => setIne(e.target.files ? e.target.files[0] : null)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="cuentaBancaria">Cuenta bancaria para depósito de pagos:</label>
            <input
              type="text"
              id="cuentaBancaria"
              value={cuentaBancaria}
              onChange={(e) => setCuentaBancaria(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="beneficiarioNombre">Nombre del beneficiario:</label>
            <input
              type="text"
              id="beneficiarioNombre"
              value={beneficiarioNombre}
              onChange={(e) => setBeneficiarioNombre(e.target.value)}
              placeholder="Primer Nombre / Segundo Nombre / Apellido Paterno / Apellido Materno"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="beneficiarioTelefono">Teléfono del beneficiario:</label>
            <input
              type="text"
              id="beneficiarioTelefono"
              value={beneficiarioTelefono}
              onChange={(e) => setBeneficiarioTelefono(e.target.value)}
              placeholder="3121704009"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="beneficiarioCorreo">Correo electrónico del beneficiario:</label>
            <input
              type="email"
              id="beneficiarioCorreo"
              value={beneficiarioCorreo}
              onChange={(e) => setBeneficiarioCorreo(e.target.value)}
              placeholder="correo@dominio.com"
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
export default RegistroArtistas;
