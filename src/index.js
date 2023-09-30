import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { RangeProducts, SpecificCategory, loaderSpesific } from './pages/App';
import { DashBoardContainer } from './pages/dashboard/main-page/Dashboard';
import EditPage from './pages/dashboard/edit-product/EditPage';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AddProduct from './pages/dashboard/add-product/AddProduct';
import MainPage from './layouts/MainPage';

const router2 = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainPage />}>
      <Route path='' element={<App />}>
        <Route index element={<SpecificCategory />} loader={loaderSpesific} />
        <Route
          path='specific/:category'
          element={<SpecificCategory />}
          loader={loaderSpesific}
        />
        <Route
          path='range'
          element={<RangeProducts />}
        />
      </Route>
      <Route path='dashboard' element={<DashBoardContainer />} />
      <Route path='editProduct/:id' element={<EditPage />} />
      <Route path='addProduct' element={<AddProduct />} />
    </Route>
  )
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div className="error"> write a correct path</div>
  }, {
    path: '/dashboard',
    element: <DashBoardContainer />
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
    <RouterProvider router={router2} />
  </React.StrictMode>
);

