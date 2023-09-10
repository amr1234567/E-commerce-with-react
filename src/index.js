import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Dashboard from './components/dashboard/Dashboard';
import EditPage from './components/dashboard/edit-product/EditPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddProduct from './components/dashboard/add-product/AddProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div className="error"> write a correct path</div>
  }, {
    path: '/dashboard',
    element: <Dashboard />
  }, {
    path: '/editProduct/:id',
    element: <EditPage />
  }, {
    path: '/addProduct',
    element: <AddProduct />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

