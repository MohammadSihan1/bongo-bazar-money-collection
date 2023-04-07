import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import More from './components/More/More';
const router = createBrowserRouter([
  {
    path: "/",
    element:  <Home></Home> ,
    children: [
      {
        path: "/about",
        element: <h1>This is the about page</h1>
      },
      {
        path: "/more",
        element: <More></More>
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
