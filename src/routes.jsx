import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import Singup from "./pages/Singup";

const routes = [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/products',
        element:<Products/>
    },
    {
        path:'/pricing',
        element:<Pricing/>
    },
    {
        path:'/support',
        element:<Support/>
    },
    {
        path:'/singup',
        element:<Singup/>
    }
]

export default routes;