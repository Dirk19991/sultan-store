import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './index.css';
import {
  createBrowserRouter,
  createHashRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Catalogue from './features/catalogue/Catalogue';
import GoodsContextProvider from './context/GoodsContextProvider';
import Admin from './features/admin/Admin';
import ShoppingCart from './features/shoppingCart/ShoppingCart';
import ShoppingCartProvider from './context/ShoppingCartProvider';
import ItemCard from './features/itemCard/ItemCard';
import BurgerMenuProvider from './context/BurgerMenuProvider';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/cosmetics',
        element: <Catalogue />,
      },

      {
        path: '/cosmetics/:barcode',
        element: <ItemCard />,
      },

      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/cart',
        element: <ShoppingCart />,
      },
      {
        path: '/',
        element: <Navigate to='/cosmetics' replace />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BurgerMenuProvider>
    <GoodsContextProvider>
      <ShoppingCartProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </ShoppingCartProvider>
    </GoodsContextProvider>
  </BurgerMenuProvider>
);
