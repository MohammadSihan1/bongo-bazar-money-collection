import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import More from './components/More/More';
import Layout from './components/Layout/Layout';
import Payment from './components/Payment/Payment';
import About from './components/About/About';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: '/pay',
        element: <Payment></Payment>
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
