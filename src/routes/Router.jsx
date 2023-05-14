import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Coffees from "../compnents/Coffees";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>
    },
    {
      path:"/coffees",
      element:<Coffees></Coffees>,
      loader:()=>fetch('http://localhost:5000/coffees'),
    }
  ]);
export default router