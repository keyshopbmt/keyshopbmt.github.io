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
      const response = await fetch(
        `https://test-api.lthoang.com/products/${id}`
      );
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

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
            height="600px"
            width="650px"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://res.cloudinary.com/dbs44uzyv/image/upload/v1688996217/1_zhb8tr.jpg";
            }}
          />
        </div>
        <div className="col-md-6 ps-5">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h2 className="display-5">{product.title}</h2>
          <h4 className="display-6 fw-bold my-4">
            Giá:{' '}
            {product.price?.toLocaleString(navigator.language, {
              minimumFractionDigits: 0,
            })}
            {' '}vnđ
          </h4>
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
