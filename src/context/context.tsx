import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { reducer } from '../reducer/reducer';
import axios from 'axios';
import { API } from '../endpoints/endpoints';

// Define initial state
const initialState = {
  categories: [],
  cart: [],
  orders: [],
};

// Create context
const CartContext = createContext<any>(null);

// Create provider component
export const CartProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchCategories();
  }, [])

  const fetchCategories = async () => {
    const response = await axios.get(API.CATEGORIES());
    dispatch({ type: 'SET_CATEGORIES', payload: response.data?.categories });
  }

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to consume CartContext
export const useCart = () => useContext(CartContext);
