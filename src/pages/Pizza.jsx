import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Pizza = () => {
  const { id } = useParams(); // Obtener el id de la URL
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    // Realizar la petición a la API utilizando el id de la pizza
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then(response => response.json())
      .then(data => setPizza(data))
      .catch(error => console.error('Error fetching pizza:', error));
  }, [id]);

  if (!pizza) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container">
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} className="img-fluid" />
      <p>Precio: ${pizza.price.toLocaleString()}</p>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>{pizza.description}</p>
    </div>
  );
};

export default Pizza;
