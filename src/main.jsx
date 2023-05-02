import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import Main from './components/Layout/Main.jsx';
import Blog from './components/Blog/Blog.jsx';
import Login from './components/Login/Login.jsx';
import Recipes from './components/Recipes/Recipes.jsx';
import AboutInfo from './components/About infomation/AboutInfo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/chefs`)
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/recipe',
        element:<Recipes></Recipes>
      },
      {
        path: '/about',
        element:<AboutInfo></AboutInfo>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
