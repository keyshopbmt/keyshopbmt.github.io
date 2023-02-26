import Home from "../component/papes/Home/Home";

import Dichvu from "../component/papes/Dichvu/services/Dichvu";
import Carkey from "../component/papes/Dichvu/Carkey/Carkey";
import Motokey from "../component/papes/Dichvu/Motokey/Motokey";
import Contact from "../component/papes/Contact/Contact";





const publicRoutes =[
    {path: '/', component: Home},
    {path: '/dichvu', component: Dichvu},
    {path: '/contact', component: Contact},
    {path: '/carkey', component: Carkey},
    {path: '/motokey', component: Motokey}
 

]

const privateRoutes=[

]

export {privateRoutes, publicRoutes}