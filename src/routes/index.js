import Home from "../component/papes/Home/Home";
import News from "../component/papes/News/News";
import Dichvu from "../component/papes/Dichvu/Dichvu";
import Carkey from "../component/papes/Dichvu/Carkey/Carkey";
import Motokey from "../component/papes/Dichvu/Motokey/Motokey";





const publicRoutes =[
    {path: '/', component: Home},
    {path: '/dichvu', component: Dichvu},
    {path: '/news', component: News},
    {path: '/carkey', component: Carkey},
    {path: '/motokey', component: Motokey}
 

]

const privateRoutes=[

]

export {privateRoutes, publicRoutes}