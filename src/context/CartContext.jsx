import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const existingPizza = cart.find(item => item.id === pizza.id);
    if (existingPizza) {
      setCart(cart.map(item =>
        item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  const removeFromCart = (pizzaId) => {
    setCart(cart.filter(item => item.id !== pizzaId));
  };

  const increaseQuantity = (pizzaId) => {
    setCart(cart.map(item =>
      item.id === pizzaId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (pizzaId) => {
    setCart(cart
      .map(item =>
        item.id === pizzaId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};
