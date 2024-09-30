import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Almacena el token JWT
  const [email, setEmail] = useState(null); // Almacena el email del usuario

  // Método para iniciar sesión
  const login = async (email, password) => {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      setToken(data.token);
      setEmail(data.email);
    } else {
      console.error('Error en el login');
    }
  };

  // Método para registrarse
  const register = async (email, password) => {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      setToken(data.token);
      setEmail(data.email);
    } else {
      console.error('Error en el registro');
    }
  };

  // Método para hacer logout
  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  // Método para obtener el perfil del usuario
  const getProfile = async () => {
    const response = await fetch('http://localhost:5000/api/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      setEmail(data.email); // Actualiza el estado con el email
    } else {
      console.error('Error al obtener el perfil');
    }
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};
