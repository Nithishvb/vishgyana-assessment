import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from '../reducer/reducer';

// Define initial state
const initialState = {
  cart: [],
  orders: []
};

// Create context
const CartContext = createContext<any>(null);

// Create provider component
export const CartProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to consume CartContext
export const useCart = () => useContext(CartContext);
