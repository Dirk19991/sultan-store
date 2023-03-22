import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './index.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Catalogue from './features/catalogue/Catalogue';
import GoodsContextProvider from './context/GoodsContextProvider';
import Admin from './features/admin/Admin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/cosmetics',
        element: <Catalogue />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/',
        element: <Navigate to='/cosmetics' replace />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GoodsContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </GoodsContextProvider>
);
