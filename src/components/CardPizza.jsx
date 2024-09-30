import React from 'react';
import { Link } from 'react-router-dom';

const CardPizza = ({ id, name, ingredients, price, img, onAddToCart }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul className="list-group list-group-flush">
          {ingredients.map((ingredient, index) => (
            <li className="list-group-item" key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
        <p className="card-text">Precio: ${price.toLocaleString()}</p>
        <button className="btn btn-primary" onClick={onAddToCart}>Añadir al carrito</button>
        <Link to={`/pizza/${id}`} className="btn btn-link">Ver detalles</Link>
      </div>
    </div>
  );
};

export default CardPizza;
