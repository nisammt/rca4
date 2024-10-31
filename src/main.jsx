import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './roots/Root';
import Product from './components/Product';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


const router =createBrowserRouter(
  [
    {
      path: "/",
      element:<Root/>,
    
      children:[
        { 
          path:"/",
          element:<App/>

        }
        ,
        {
            path:"/product/:product_id",
            element:<Product/>

        },
      ]
    },
    
    
  ]
);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
