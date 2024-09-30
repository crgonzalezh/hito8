import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CardPizza from '../components/CardPizza';

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error('Error fetching pizzas:', error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4" key={pizza.id}>
            <CardPizza
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              img={pizza.img}
              onAddToCart={() => addToCart(pizza)}  // Agregar al carrito
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
