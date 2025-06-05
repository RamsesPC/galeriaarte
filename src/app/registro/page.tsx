'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './estilosregistro.css'; // Importamos los estilos del registro

const RegistroUsuarios = () => {
  const router = useRouter();

  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('comprador');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validaciones
    if (!correo.includes('@')) {
      setError('Correo no válido');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      setLoading(false);
      return;
    }

    const nuevoUsuario = {
      correo,
      password,
      tipo_usuario: tipoUsuario,
    };

    try {
      const response = await fetch('http://localhost:3100/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoUsuario),
      });

      if (response.ok) {
        router.push('/'); // Redirige al login
      } else if (response.status === 409) {
        setError('El correo ya está registrado');
      } else {
        setError('Error al registrar usuario');
      }
    } catch (err) {
      setError('Error de conexión con el servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/Logo.png" alt="Logo" className="logo" />
        </div>
      </nav>

      <div className="container">
        <h1>Crear Cuenta</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="formGroup">
            <label htmlFor="correo">Correo electrónico:</label>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
              placeholder="ejemplo@correo.com"
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
              placeholder="Mínimo 6 caracteres"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="tipoUsuario">Tipo de usuario:</label>
            <select
              id="tipoUsuario"
              value={tipoUsuario}
              onChange={(e) => setTipoUsuario(e.target.value)}
            >
              <option value="comprador">Comprador</option>
              <option value="artista">Artista</option>
            </select>
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? 'Registrando...' : 'Crear Cuenta'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistroUsuarios;
