import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from './componentes/header/Header';
import Main from './componentes/main/Main';
import Contato from './componentes/contatos/Contatos';
import Footer from './componentes/footer/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    ),
  },
  {
    path: "/contato",
    element: (
      <>
        <Header />
        <Contato />
        <Footer />
      </>
    ),
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
