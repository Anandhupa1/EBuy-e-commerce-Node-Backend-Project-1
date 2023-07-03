import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import Login from "./pages/login&signup/signin";
import SignUp from "./pages/login&signup/signup";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/Error';
import Products from "./pages/products/Products";
import { Provider } from 'react-redux';
import { persistore, store } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<Error/>
  },
  {
    path: "/signin",
    element: <Login/>,
    errorElement:<Error/>
  },
  {
    path: "/signup",
    element: <SignUp/>,
    
  },
  {
    path: "/products",
    element: <Products/>
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ChakraProvider>
      <Provider store={store} >
      <PersistGate persistor={persistore}> 
      
       <RouterProvider store={store} router={router} />
       
       </PersistGate>
      </Provider>
      </ChakraProvider>
  </React.StrictMode>
);


