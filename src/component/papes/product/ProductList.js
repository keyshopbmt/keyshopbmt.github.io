import React from "react";
import Navbar from "../Navbar/Navbar";
import Products from "./products";
import Footer from "../Footer/Footer";
import News from "../News/News";

function ProductList() {
  return (
    <div>
      <Navbar />
      <News />
      <Products />
      <Footer />
    </div>
  );
}

export default ProductList;
