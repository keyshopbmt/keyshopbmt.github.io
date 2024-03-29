import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import "./products.css";
import Slider from "@mui/material/Slider";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import InfiniteScroll from "react-infinite-scroll-component";
import { TableTitle } from "../GeneralFuntions";
import { NumericFormat } from "react-number-format";
import { InputAdornment } from "@mui/material";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { useCart } from "react-use-cart";

let searchParams = {};

export default function Products() {
  TableTitle("Sản Phẩm | Key Shop BMT");

  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [minMaxPrice, setMinMaxPrice] = useState([0, 1]);
  const [pageLimit, setPageLimit] = useState(9);
  const [open, setOpen] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [isHasMore, setIsHasMore] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 1]);

  function customParseFloat(value) {
    return parseFloat(String(value).replaceAll(".", "").replaceAll(",", "."));
  }
  const getProductPriceRange = () => {
    fetch("https://test-api.lthoang.com/products/priceRange")
      .then((res) => res.json())
      .then((res) => {
        searchParams.minPrice = res["min"];
        searchParams.maxPrice = res["max"];
        setMinMaxPrice([searchParams.minPrice, searchParams.maxPrice]);
        setPriceRange([searchParams.minPrice, searchParams.maxPrice]);
        const step = Math.round((res["max"] - res["min"]) / 1000);
        searchParams.step = step;
      });
  };
  const getProductCategories = () => {
    fetch("https://test-api.lthoang.com/products/category")
      .then((res) => res.json())
      .then((categories) => {
        setCategories(categories);
      });
  };

  const getWhereObject = (params) => {
    const whereObject = {};
    if (params["categories"] && params["categories"].length > 0) {
      whereObject["or"] = [];
      for (let i = 0; i < params["categories"].length; i++) {
        whereObject["or"].push({ category: params["categories"][i] });
      }
    }

    if (params["title"] && params["title"].length > 0) {
      whereObject["title"] = { like: "%" + params["title"] + "%" };
    }
    if (params["minPrice"] && !params["maxPrice"]) {
      whereObject["price"] = { gte: customParseFloat(params["minPrice"]) };
    }

    if (params["maxPrice"] && !params["minPrice"]) {
      whereObject["price"] = { lte: customParseFloat(params["maxPrice"]) };
    }

    if (params["maxPrice"] && params["minPrice"]) {
      whereObject["price"] = {
        between: [
          customParseFloat(params["minPrice"]),
          customParseFloat(params["maxPrice"]),
        ],
      };
    }
    return whereObject;
  };

  const getFilteredObject = (params) => {
    const filtered = { where: getWhereObject(params) };
    if (params["limit"]) {
      filtered["limit"] = { pageLimit };
    }
    return filtered;
  };

  const buildCountUrl = (params) => {
    const whereObject = getWhereObject(params);
    return (
      "https://test-api.lthoang.com/products/count?" +
      encodeURIComponent(JSON.stringify(whereObject))
    );
  };

  const buildSearchUrl = (params, reset = true) => {
    const filtered = getFilteredObject(params);
    if (reset) {
      filtered["skip"] = 0;
    } else {
      filtered["skip"] = data.length;
    }
    return (
      "https://test-api.lthoang.com/products?filter=" +
      encodeURIComponent(JSON.stringify(filtered))
    );
  };

  const fetchUserData = (params, reset = true) => {
    console.log(params);
    const countUrl = buildCountUrl(params);
    fetch(countUrl)
      .then((res) => {
        return res.json();
      })
      .then((countObject) => {
        setTotalCount(countObject["count"]);
        setIsHasMore(totalCount > data.length);
      });
    let url = buildSearchUrl(params, reset);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((currentData) => {
        if (reset) {
          setData(currentData);
        } else {
          setData(data.concat(currentData));
        }
      });
  };

  const resetSearch = () => {
    searchParams = {};
    getProductPriceRange();
    getProductCategories();
    fetchUserData(searchParams, true);
  };

  useEffect(() => {
    resetSearch();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const addCategoriesFilter = (category) => {
    if (!searchParams["categories"]) {
      searchParams["categories"] = [];
    }
    if (!searchParams["categories"].includes(category)) {
      searchParams["categories"].push(category);
    } else {
      searchParams["categories"].pop(category);
    }
    fetchUserData(searchParams, true);
  };

  const filterBySearch = (event) => {
    const query = event.target.value;
    searchParams["title"] = query;
    fetchUserData(searchParams, true);
  };
  const debouncedChangeHandler = debounce(filterBySearch, 300);

  const handleInput = (event, newValue) => {
    searchParams.minPrice = newValue[0];
    searchParams.maxPrice = newValue[1];
    setPriceRange([
      customParseFloat(searchParams.minPrice),
      customParseFloat(searchParams.maxPrice),
    ]);
    fetchUserData(searchParams, true);
  };
  const debouncedHandler = debounce(handleInput, 50);

  const updateCategory = (item) => {
    item.checked = !item.checked;
    addCategoriesFilter(item.category);
  };

  const updateMinPrice = (value) => {
    searchParams.minPrice = value;
    setPriceRange([
      customParseFloat(searchParams.minPrice),
      customParseFloat(searchParams.maxPrice),
    ]);
    fetchUserData(searchParams, true);
  };
  const debouncedMinPriceHandler = debounce(updateMinPrice, 100);

  const updateMaxPrice = (value) => {
    searchParams.maxPrice = value;
    setPriceRange([
      customParseFloat(searchParams.minPrice),
      customParseFloat(searchParams.maxPrice),
    ]);
    fetchUserData(searchParams, true);
  };
  const debouncedMaxPriceHandler = debounce(updateMaxPrice, 100);

  const loadMore = () => {
    fetchUserData(searchParams, false);
    setPageLimit(pageLimit + 6);
  };
  const materialUiTextFieldProps = {
    required: true,
    fullWidth: true,
    label: "Total Amount",
    InputProps: {
      startAdornment: <InputAdornment position="start">$</InputAdornment>,
    },
  };

  const [theme] = useThemeHook();
  const { addItem } = useCart();

  return (
    <div>
      <div className="col-12 mb-4 mt-3">
        <h1 className="display-6 fw-bolder text-center">Sản Phẩm</h1>
        <hr />
      </div>
      <InfiniteScroll
        dataLength={totalCount}
        next={loadMore}
        hasMore={isHasMore}
        style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
        loader={<h4>Loading...</h4>}
      >
        <div className="products">
          <div className="col-md-3 category">
            <h3>BỘ LỌC TÌM KIẾM:</h3>
            <div className="input-box">
              <input
                type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                onChange={debouncedChangeHandler}
                placeholder="Tìm kiếm"
              />
            </div>
            <div>
              <Hidden xsDown>
                <div className="categoryProduct">
                  <h4>Loại:</h4>

                  {categories.map((item) => (
                    <div className="checkbox" key={item.category}>
                      <label className="mylabel">
                        <input
                          type="checkbox"
                          value={item.category || ""}
                          onChange={() => updateCategory(item)}
                          checked={item.checked}
                        />
                        <p>{item.category}</p>
                      </label>
                    </div>
                  ))}
                </div>

                <div className="price">
                  <h4>Khoảng Giá:</h4>
                  <div className="price-row">
                    <div className="field">
                      <NumericFormat
                        type="text"
                        id="min"
                        value={searchParams.minPrice}
                        onChange={(e) =>
                          debouncedMinPriceHandler(e.target.value)
                        }
                        placeholder="min"
                        decimalSeparator=","
                        thousandSeparator="."
                        {...materialUiTextFieldProps}
                      />
                    </div>
                    <div className="separator">-</div>
                    <div className="field">
                      <NumericFormat
                        type="text"
                        id="max"
                        value={searchParams.maxPrice}
                        onChange={(e) =>
                          debouncedMaxPriceHandler(e.target.value)
                        }
                        placeholder="max"
                        decimalSeparator=","
                        thousandSeparator="."
                        {...materialUiTextFieldProps}
                      />
                    </div>
                  </div>

                  <div className="slider-input">
                    <Slider
                      getAriaLabel={() => "Price range"}
                      value={priceRange}
                      min={minMaxPrice[0]}
                      max={minMaxPrice[1]}
                      onChange={debouncedHandler}
                      valueLabelDisplay="auto"
                    />
                  </div>
                </div>
                <div>
                  <button
                    className="btn btn-light btn-sm clearFilter"
                    onClick={(e) => resetSearch()}
                  >
                    XÓA TẤT CẢ
                  </button>
                </div>
              </Hidden>
              <Hidden smUp>
                <IconButton onClick={() => setOpen(true)}>
                  <FilterAltIcon />
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
                <div className="categoryProduct">
                  <h4>Loại:</h4>
                  {categories.map((item) => (
                    <div className="checkbox" key={item.category}>
                      <label className="mylabel">
                        <input
                          type="checkbox"
                          value={item.category || ""}
                          onChange={() => updateCategory(item)}
                          checked={item.checked}
                        />
                        <p>{item.category}</p>
                      </label>
                    </div>
                  ))}
                </div>

                <div className="price">
                  <h4>Khoảng Giá:</h4>
                  <div className="price-row">
                    <input
                      type="text"
                      id="min"
                      value={searchParams.minPrice || ""}
                      onChange={(e) => debouncedMinPriceHandler(e.target.value)}
                      placeholder="min"
                    />
                    <input
                      type="text"
                      id="max"
                      value={searchParams.maxPrice || ""}
                      onChange={(e) => debouncedMaxPriceHandler(e.target.value)}
                      placeholder="max"
                    />
                  </div>
                  <div className="slider-input">
                    <Slider
                      getAriaLabel={() => "Price range"}
                      value={priceRange}
                      min={minMaxPrice[0]}
                      max={minMaxPrice[1]}
                      onChange={debouncedHandler}
                      valueLabelDisplay="auto"
                    />
                  </div>
                </div>
                <div className="filter-clear">
                  <button
                    className="btn btn-light btn-sm clearFilter"
                    onClick={(e) => resetSearch()}
                  >
                    XÓA TẤT CẢ
                  </button>
                </div>
              </List>
            </SwipeableDrawer>
          </div>

          <div className="row col-md-9 d-flex ">
            {data.map((product, index) => {
              product.quantity = 1;
              return (
                <div className="col-md-3" key={index.id}>
                  <div className="card-product">
                    <Link
                      to={`/product/${product.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={product.image}
                        className="card-img-product"
                        alt={product.title}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "./assets/1.jpg";
                        }}
                      />
                      <div className="card-body" style={{ color: "black" }}>
                        <h5 className="card-title">{product.title}</h5>
                        <h6 className="card-text">
                          <span>Giá từ:</span>{" "}
                          {product.price.toLocaleString(navigator.language, {
                            minimumFractionDigits: 0,
                          })}{" "}
                          vnđ
                        </h6>
                      </div>
                    </Link>
                    <div className="shopCart">
                      <button
                        onClick={() => addItem(product)}
                        className={
                          theme
                            ? "bg-dark-primary text-black"
                            : "bg-light-primary"
                        }
                        style={{ borderRadius: "0", border: 0 }}
                      >
                        Thêm Vào Giỏ Hàng
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}
