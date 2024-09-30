import React from 'react';
import '../App.css'; // Asegúrate de que esta ruta es correcta
import headerImage from '../assets/images/Header.jpg'; // Ruta correcta a la imagen

const Header = () => {
  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '50px 0',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h1>¡Bienvenidos a Pizzería Mamma Mia!</h1>
      <p>Las mejores pizzas que podrás encontrar.</p>
    </header>
  );
};

export default Header;
