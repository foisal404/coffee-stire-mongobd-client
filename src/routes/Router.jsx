import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Coffees from "../compnents/Coffees";
import Main from "../compnents/Main/Main";
import CoffeeDetails from "../compnents/CoffeeDetails";
import UpdateCoffee from "../compnents/UpdateCoffee";

const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path: "/",
          element: <App></App>
        },
        {
          path:"/coffees",
          element:<Coffees></Coffees>,
          loader:()=>fetch('http://localhost:5000/coffees'),
        },
        {
          path:"/coffees/:id",
          element:<CoffeeDetails></CoffeeDetails>,
          loader:({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)
        },
        {
          path:"/update/:id",
          element:<UpdateCoffee></UpdateCoffee>,
          loader:({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)
        }
      ]
    }
  ]);
export default router