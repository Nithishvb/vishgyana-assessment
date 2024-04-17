import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CategoryListing from './Components/CategoryListing/CategoryListing';
import Header from './Components/Header/Header';
import MealDetails from './Components/MealDetails/MealDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cart",
    element: <h1>Hello from cart</h1>,
  },
  {
    path: "category/:itemname",
    element: <CategoryListing />
  },
  {
    path: "mealdetails/:mealcategory/:mealid",
    element: <MealDetails />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);

