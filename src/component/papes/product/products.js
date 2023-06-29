import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import "./products.css";
import Slider from "@mui/material/Slider";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

let searchParams = {};

export default function Products() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [minMaxPrice, setMinMaxPrice] = useState([0, 1]);
  const [pageLimit, setLimt] = useState(6);
  const [open, setOpen] = useState(false);

  const getProductPriceRange = () => {
    fetch("http://localhost:8000/products/priceRange")
      .then((res) => res.json())
      .then((res) => {
        searchParams.minPrice = res["min"];
        searchParams.maxPrice = res["max"];
        setMinMaxPrice([searchParams.minPrice, searchParams.maxPrice]);
        const step = Math.round((res["max"] - res["min"]) / 1000);
        searchParams.step = step;
      });
  };
  const getProductCategories = () => {
    fetch("http://localhost:8000/products/category")
      .then((res) => res.json())
      .then((categories) => {
        setCategories(categories);
        // console.log(category);
      });
  };

  // const getProduuctPageLimit = () => {
  //   fetch("http://localhost:8000/products/pageLimit")
  //     .then((res) => res.json())
  //     .then((pageLimit) => {
  //       setLimt(pageLimit);
  //     });
  // };

  const buildUrl = (params) => {
    const filtered = { where: {} };
    if (params["categories"] && params["categories"].length > 0) {
      filtered["where"]["or"] = [];
      for (let i = 0; i < params["categories"].length; i++) {
        filtered["where"]["or"].push({ category: params["categories"][i] });
      }
    }

    if (params["title"] && params["title"].length > 0) {
      filtered["where"]["title"] = { like: "%" + params["title"] + "%" };
    }
    if (params["minPrice"] && !params["maxPrice"]) {
      filtered["where"]["price"] = { gte: params["minPrice"] };
    }

    if (params["maxPrice"] && !params["minPrice"]) {
      filtered["where"]["price"] = { lte: params["maxPrice"] };
    }

    if (params["maxPrice"] && params["minPrice"]) {
      filtered["where"]["price"] = {
        between: [params["minPrice"], params["maxPrice"]],
      };
    }

    // console.log(JSON.stringify(filtered));
    return (
      "http://localhost:8000/products?filter=" +
      encodeURIComponent(JSON.stringify(filtered))
    );
  };

  const fetchUserData = (params) => {
    // console.log(params);
    // console.log(categories);
    let url = buildUrl(params);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  const resetSearch = () => {
    searchParams = {};
    getProductPriceRange();
    getProductCategories();
    fetchUserData(searchParams);
  };

  useEffect(() => {
    resetSearch();
  }, []);

  const addCategoriesFilter = (category) => {
    if (!searchParams["categories"]) {
      searchParams["categories"] = [];
    }

    if (!searchParams["categories"].includes(category)) {
      searchParams["categories"].push(category);
    } else {
      searchParams["categories"].pop(category);
    }
    // console.log(searchParams);
    fetchUserData(searchParams);
  };

  const filterBySearch = (event) => {
    const query = event.target.value;
    searchParams["title"] = query;
    fetchUserData(searchParams);
  };
  const debouncedChangeHandler = useMemo(
    () => debounce(filterBySearch, 300),
    []
  );
  const handleInput = (event, newValue) => {
    searchParams.minPrice = newValue[0];
    searchParams.maxPrice = newValue[1];
    // console.log(newValue);
    fetchUserData(searchParams);
  };
  const debouncedHandler = useMemo(() => debounce(handleInput, 50), []);

  const updateCategory = (item) => {
    item.checked = !item.checked;
    addCategoriesFilter(item.category);
  };

  const filteredPrices = (event) => {
    // event.preventDefault();
    // const searchMin = Number(document.getElementById("min").value);
    // const searchMax = Number(document.getElementById("max").value);
    // searchParams["minPrice"] = searchMin;
    // searchParams["maxPrice"] = searchMax;

    fetchUserData(searchParams);
  };
  const clearFilters = () => {
    fetchUserData({
      searchParams: null,
    });
  };
  const loadMore = () => {
    setLimt((prevValue) => prevValue + 6);
  };

  return (
    <div>
      <div className="col-12 mb-4 mt-3">
        <h1 className="display-6 fw-bolder text-center">Sản Phẩm</h1>
        <hr />
      </div>
      <div className="products">
        <div className="col-md-3 category">
          <h3>Category:</h3>
          <div className="input-box">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              onChange={debouncedChangeHandler}
              placeholder="Search user"
            />
          </div>
          <div>
            <Hidden xsDown>
              <h4>Loại:</h4>
              {categories.map((item) => (
                <div className="checkbox" key={item.category}>
                  <label className="mylabel">
                    <input
                      type="checkbox"
                      value={item.category}
                      onChange={() => updateCategory(item)}
                      checked={item.checked}
                    />
                    <p>{item.category}</p>
                  </label>
                </div>
              ))}

              <div className="price">
                <h4>Khoảng Giá:</h4>
                <div className="price-row">
                  <form className="main" onChange={filteredPrices}>
                    <div className="field">
                      <input
                        type="text"
                        id="min"
                        value={searchParams.minPrice}
                        onChange={(e) =>
                          (searchParams.minPrice = e.target.value)
                        }
                        placeholder="min"
                      />
                    </div>
                    <div className="separator">-</div>
                    <div className="field">
                      <input
                        type="text"
                        id="max"
                        value={searchParams.maxPrice}
                        onChange={(e) =>
                          (searchParams.maxPrice = e.target.value)
                        }
                        placeholder="max"
                      />
                    </div>
                  </form>
                </div>
                <div className="slider-input">
                  <Slider
                    getAriaLabel={() => "Price range"}
                    value={[searchParams.maxPrice, searchParams.minPrice]}
                    min={minMaxPrice[0]}
                    max={minMaxPrice[1]}
                    onChange={debouncedHandler}
                    valueLabelDisplay="auto"

                    // getAriaValueText={valuetext}
                  />
                </div>
              </div>
              <div className="filter-clear">
                <button
                  className="btn btn-light btn-sm clearFilter"
                  onClick={(e) => resetSearch()}
                >
                  Clear Filters
                </button>
              </div>
            </Hidden>
            <Hidden smUp>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </div>
          <SwipeableDrawer
            anchor="right"
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
          >
            <div
              onClick={() => setOpen(false)}
              onKeyPress={() => setOpen(false)}
              role="button"
              tabIndex={0}
            >
              <IconButton>
                <ChevronRightIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              {categories.map((item) => (
                <div className="checkbox" key={item.category}>
                  <label className="mylabel">
                    <input
                      type="checkbox"
                      value={item.category}
                      onChange={() => updateCategory(item)}
                      checked={item.checked}
                    />
                    <p>{item.category}</p>
                  </label>
                </div>
              ))}

              <div className="price">
                <div className="price-row">
                  <form className="main" onChange={filteredPrices}>
                    <input
                      type="text"
                      id="min"
                      value={searchParams.minPrice}
                      onChange={(e) => (searchParams.minPrice = e.target.value)}
                      placeholder="min"
                    />
                    <input
                      type="text"
                      id="max"
                      value={searchParams.maxPrice}
                      onChange={(e) => (searchParams.maxPrice = e.target.value)}
                      placeholder="max"
                    />
                  </form>
                </div>
                <div className="slider-input">
                  <Slider
                    getAriaLabel={() => "Price range"}
                    value={[searchParams.maxPrice, searchParams.minPrice]}
                    min={minMaxPrice[0]}
                    max={minMaxPrice[1]}
                    onChange={debouncedHandler}
                    valueLabelDisplay="auto"

                    // getAriaValueText={valuetext}
                  />
                </div>
              </div>
              <div className="filter-clear">
                <button
                  type="filter-clear"
                  className="btn btn-light btn-sm"
                  onClick={clearFilters}
                >
                  Clear Filters
                </button>
              </div>
            </List>
          </SwipeableDrawer>
        </div>

        <div className="row col-md-9 d-flex ">
          {data.slice(0, pageLimit).map((product) => (
            <div className="col-md-3" key={product.id}>
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
          <div className="col-12 p-3">
            <div className="btn btn-primary pageLimit" onClick={loadMore}>
              Load More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
