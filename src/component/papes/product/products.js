import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./products.css";

let searchParams = {};

export default function Products() {
  const [data, setData] = useState([]);

  const buildUrl = (params) => {
    const filtered = { where: {} };
    if (params["categories"] && params["categories"].length > 0) {
      filtered["where"]["or"] = [];
      for (let i = 0; i < params["categories"].length; i++) {
        filtered["where"]["or"].push({ category: params["categories"][i] });
      }
    }
    if (params["categories"] && params["categories"].length > 0) {
      filtered["where"]["and"] = [];
      for (let i = 0; i < params["categories"].length; i++) {
        filtered["where"]["or"].push({ category: params["categories"][i] });
      }
    }
    if (params["title"] && params["title"].length > 0) {
      filtered["where"]["title"] = { like: "%" + params["title"] + "%" };
    }
    if (params["minPrice"]) {
      filtered["where"]["price"] = { gt: params["minPrice"] };
    }
    if (params["maxPrice"]) {
      filtered["where"]["price"] = { lt: params["maxPrice"] };
    }
    // TODO: add filter for title and price range
    return "http://localhost:8000/products?filter=" + JSON.stringify(filtered);
  };

  const fetchUserData = (params) => {
    let url = buildUrl(params);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    fetchUserData({});
  }, []);

  const addCategoriesFilter = (category) => {
    console.log(searchParams);
    if (!searchParams["categories"]) {
      searchParams["categories"] = [];
    }

    if (!searchParams["categories"].includes(category)) {
      searchParams["categories"].push(category);
    } else {
      searchParams["categories"].pop(category);
    }

    console.log(searchParams);
    fetchUserData(searchParams);
  };

  return (
    <div>
      <div className="col-12 mb-4 mt-3">
        <h1 className="display-6 fw-bolder text-center">Sản Phẩm</h1>
        <hr />
      </div>
      <div className="products">
        <div className="col-md-3 category">
          <h3>Category</h3>
          <label class="mylabel">
            <input
              type="checkbox"
              value="o khoa"
              onChange={() => addCategoriesFilter("o khoa")}
            />
            <span>o khoa</span>
          </label>

          <br />
          <label class="mylabel">
            <input
              type="checkbox"
              value="chia"
              onChange={() => addCategoriesFilter("chia")}
            />
            <span>chia</span>
          </label>
        </div>

        <div className="row col-md-9 d-flex ">
          {data.map((product) => (
            <div className="col-md-3 ">
              <div className="card">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    className="card-img-top h-200 w-200"
                    alt={product.title}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.price}</p>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-primary"
                  >
                    Chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
