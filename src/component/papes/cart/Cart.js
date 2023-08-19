import React from "react";
import { useCart } from "react-use-cart";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { BsCartCheck, BsCartX } from "react-icons/bs";

import "./cart.css";

const Cart = () => {
  const [theme] = useThemeHook();
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <div className="py-4 mt-5">
      <h1
        className={`${
          theme ? "text-light" : "text-light-primary"
        } my-5 text-center`}
      >
        {isEmpty ? "GIỎ HÀNG CỦA BẠN TRỐNG" : "GIỎ HÀNG"}
      </h1>
      <div className="justify-content-center">
        <div
          responsive="sm"
          striped
          bordered
          hover
          variant={theme ? "dark" : "light"}
          className="mb-5"
        >
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index} className="cart-card">
                  <td className="cart-td">
                    <div>
                      <div className="cart-image">
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                  </td>
                  <td className="cart-td">
                    <div className="cart-title">
                      <h6>{item.title}</h6>
                    </div>
                  </td>
                  <td className="cart-td">
                    <div className="cart-price">
                      <h6>
                        Giá:{" "}
                        {item.price.toLocaleString(navigator.language, {
                          minimumFractionDigits: 0,
                        })}{" "}
                        vnđ
                      </h6>
                    </div>
                  </td>
                  <td className="cart-td">
                    <div className="cart-quantity">
                      <h6>Số lượng ({item.quantity})</h6>
                    </div>
                  </td>
                  <td className="cart-td">
                    <div className="cart-button">
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        className="ms-2 itemQuantity "
                      >
                        <span>+</span>
                      </button>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="ms-2 itemQuantity"
                      >
                        <span>-</span>
                      </button>
                      <button
                        variant="danger"
                        onClick={() => removeItem(item.id)}
                        className="ms-2 btn btn-danger"
                      >
                        remote
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </div>
        {!isEmpty && (
          <div
            className={`${
              theme ? "bg-light-black text-light" : "bg-light text-balck"
            } justify-content-center w-100 h-100`}
          >
            <div className="cartAll">
              <div className="cartAllPrice">
                <h4>
                  Giá:{" "}
                  {cartTotal.toLocaleString(navigator.language, {
                    minimumFractionDigits: 0,
                  })}{" "}
                  vnđ
                </h4>
              </div>
              <div className="cartAllButon" md={4}></div>
              <button variant="success" className="m-2 btn btn-success">
                <BsCartCheck size="1.7rem" />
              </button>
              <button
                variant="danger"
                className="m-2 btn btn-danger"
                onClick={() => emptyCart()}
              >
                <BsCartX size="1.7rem" />
                Xóa Tất Cả Sản Phẩm
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
