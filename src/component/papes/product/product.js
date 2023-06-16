import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:8000/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt="product.title"
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6 ">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <h4 className="display-6 fw-bold my-4">Giá: {product.price} vnđ</h4>
          <p className="lead">{product.description}</p>
        </div>
      </>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container ">
        <div className="row mt-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}

export default Product;
