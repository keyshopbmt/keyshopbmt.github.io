import Home from "../component/papes/Home/Home";
import News from "../component/papes/News/News";





const publicRoutes =[
    {path: '/', component: Home},
    {path: '/news', component: News},
 

]

const privateRoutes=[

]

export {privateRoutes, publicRoutes}