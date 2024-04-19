import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import CategoryListing from './Components/CategoryListing/CategoryListing';
import Header from './Components/Header/Header';
import MealDetails from './Components/MealDetails/MealDetails';
import { CartProvider } from './context/context';
import Cart from './Components/CartPage/Cart';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:itemname" element={<CategoryListing />} />
          <Route path="/mealdetails/:mealcategory/:mealid" element={<MealDetails />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
    </Router>
    </CartProvider>
  </React.StrictMode>
);

