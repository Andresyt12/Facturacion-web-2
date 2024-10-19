import React, { StrictMode } from 'react';  // Asegúrate de importar React
import { createRoot } from 'react-dom/client';  // Importa createRoot de 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';  // Asegúrate de importar RouterProvider

// Importa los componentes de las páginas
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Egresos from './pages/Egresos';

// Define las rutas de la aplicación
const router = createBrowserRouter([
  {
    path: '/',  // Ruta base para el componente Home
    element: <Home />,
  },
  {
    path: '/login',  // Ruta para Login
    element: <Login />
  },
  {
    path: '/register',  // Ruta para Register
    element: <Register />
  },
  {
    path: '/egresos',  // Ruta para Egresos
    element: <Egresos />
  }
]);

// Renderiza la aplicación en el div con ID 'app'
const root = createRoot(document.getElementById('app'));  // Monta en 'app'
root.render(
  <StrictMode>
    <RouterProvider router={router} />  // Usa RouterProvider para proveer las rutas
  </StrictMode>
);
