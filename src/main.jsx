import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Main from "./components/Layout/Main.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Login from "./components/Login/Login.jsx";
import Recipes from "./components/Recipes/Recipes.jsx";
import AboutInfo from "./components/About infomation/AboutInfo.jsx";
import AuthProvide from "./components/contexts/AuthProvide.jsx";
import SignUp from "./components/Register/SignUp.jsx";
import PrivateRoutes from "./PrivateRautes/PrivateRautes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://bd-chef-server.vercel.app/chefs`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/recipe/:id",
        element: <PrivateRoutes><Recipes></Recipes></PrivateRoutes>,
        loader: ({params}) => fetch(`https://bd-chef-server.vercel.app/chefs/${params.id}`)
      },
      {
        path: "/about",
        element: <AboutInfo></AboutInfo>
      },
      {
        path: "/signup",
        element:<SignUp></SignUp>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvide>
      <RouterProvider router={router} />
    </AuthProvide>
  </React.StrictMode>
);
