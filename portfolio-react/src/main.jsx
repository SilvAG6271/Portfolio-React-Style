// import React from 'react'
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";


//routing of pages
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume";

const router = createBrowserRouter([
{
  path: "/",
  element: <App/>,
  errorElement: <ErrorPage/>,
  children: [
    {
      index: true,
      element: <AboutMe/>,
    },
    {
    path: "/Contact",
    element: <Contact/>,
    },
    {
      path: "/Portfolio",
      element: <Portfolio/>,
    },
    {
      path: "/Resume",
      element: <Resume/>
    },
  ],
},
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);