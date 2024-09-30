import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { email, logout, getProfile } = useContext(UserContext);

  useEffect(() => {
    getProfile(); // Obtiene el perfil del usuario al cargar la página
  }, []);

  return (
    <div className="container">
      <h2>Perfil de Usuario</h2>
      <p>Email: {email}</p>
      <button className="btn btn-secondary" onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;
