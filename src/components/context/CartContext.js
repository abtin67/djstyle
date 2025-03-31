import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const saveCartItems = (items) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
    setCartItems(items);
  };

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    let newCartItems;
    if (existingProduct) {
      newCartItems = cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newCartItems = [...cartItems, { ...product, quantity: 1 }];
    }
    saveCartItems(newCartItems);
  };

  const removeFromCart = (id) => {
    const newCartItems = cartItems.filter(item => item.id !== id);
    saveCartItems(newCartItems);
  };

  const increaseQuantity = (id) => {
    const newCartItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    saveCartItems(newCartItems);
  };

  const decreaseQuantity = (id) => {
    const newCartItems = cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    saveCartItems(newCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
