import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Cart = () => {
  const { cart, total } = useContext(CartContext);  // Obtener datos del carrito desde el contexto
  const { token } = useContext(UserContext);        // Obtener el token del contexto de usuario
  const [message, setMessage] = useState('');       // Estado para mostrar mensajes de éxito o error

  const handleCheckout = async () => {
    // Enviar el carrito al backend
    const response = await fetch('http://localhost:5000/api/checkouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,  // Incluir el token JWT en el header
      },
      body: JSON.stringify({ cart }),  // Enviar el carrito de compras
    });

    if (response.ok) {
      setMessage('Compra realizada con éxito');  // Mostrar mensaje de éxito si la compra fue exitosa
    } else {
      setMessage('Error al realizar la compra');  // Mostrar mensaje de error si hubo un problema
    }
  };

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {cart.map((item) => (
        <div className="row" key={item.id}>
          <div className="col-md-4">
            <img src={item.img} alt={item.name} className="img-fluid" />
          </div>
          <div className="col-md-8">
            <h5>{item.name}</h5>
            <p>Precio: ${item.price.toLocaleString()}</p>
            <p>Cantidad: {item.quantity}</p>
          </div>
        </div>
      ))}
      <h3>Total: ${total.toLocaleString()}</h3>
      {/* Botón de pagar */}
      <button className="btn btn-success" onClick={handleCheckout} disabled={!token}>
        Pagar
      </button>
      {/* Mostrar mensaje de éxito o error */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Cart;
