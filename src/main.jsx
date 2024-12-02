import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/mango')
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params})=> fetch(`http://localhost:5000/mango/${params.id}`),
  },
  {
    path: '/signIn',
    element: <SignIn></SignIn>,
  },
  {
    path: '/signUp',
    element: <SignUp></SignUp>,
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: ()=> fetch('http://localhost:5000/users'),
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProviders>
        <RouterProvider router={router} />
     </AuthProviders>
  </StrictMode>,
)
