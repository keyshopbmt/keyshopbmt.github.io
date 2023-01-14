import Home from "../component/papes/Home/Home";
import Component from "../component/papes/News/News";




const publicRoutes =[
    {path: '/', component: Home},
    {path: '/news', component: Component},
 

]

const privateRoutes=[

]

export {privateRoutes, publicRoutes}