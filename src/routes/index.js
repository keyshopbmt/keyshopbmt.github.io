import Home from "../component/papes/Home/Home";
import News from "../component/papes/News/News";
import Dichvu from "../component/papes/Dichvu/Dichvu";
import Carkey from "../component/papes/Dichvu/Carkey/Carkey";





const publicRoutes =[
    {path: '/', component: Home},
    {path: '/dichvu', component: Dichvu},
    {path: '/news', component: News},
    {path: '/carkey', component: Carkey}
 

]

const privateRoutes=[

]

export {privateRoutes, publicRoutes}