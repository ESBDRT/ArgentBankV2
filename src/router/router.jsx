import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from '../pages/index/index';
import Signin from '../pages/sign-in/sign-in';
import User from '../pages/user/user'


const router = createBrowserRouter([
    {
      path: '/',
      element: <Index/>
    },
    {
      path: '/signin',
      element: <Signin/>
    },
    {
      path: 'user',
      element: <User/>
    }
  ]
);

function Router() {
return (
    <RouterProvider router={router}/>
  );
}


export default Router;
