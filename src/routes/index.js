import Home from "../component/papes/Home/Home";
import Dichvu from "../component/papes/Dichvu/services/Dichvu";
import Carkey from "../component/papes/Dichvu/Carkey/Carkey";
import Motokey from "../component/papes/Dichvu/Motokey/Motokey";
import Contact from "../component/papes/Contact/Contact";
import Ad from "../component/papes/admin/admin";
import ProductList from "../component/papes/product/ProductList";
import  Product  from "../component/papes/product/product";

const publicRoutes = [
  { path: "/", title:"Trang Chủ Key Shop BMT", component: Home },
  { path: "/dichvu", component: Dichvu },
  { path: "/contact", component: Contact },
  { path: "/carkey", component: Carkey },
  { path: "/motokey", component: Motokey },
  { path: "/product", component: ProductList },
  { path: "/product/:id", component: Product },
  { path: "/admin/*", component: Ad },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
