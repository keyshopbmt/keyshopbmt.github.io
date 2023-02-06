import Home from "../component/papes/Home/Home";
import News from "../component/papes/News/News";
import Dichvu from "../component/papes/Dichvu/Dichvu";





const publicRoutes =[
    {path: '/', component: Home},
    {path: '/dichvu', component: Dichvu},
    {path: '/news', component: News},
 

]

const privateRoutes=[

]

export {privateRoutes, publicRoutes}