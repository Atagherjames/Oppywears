"use client";

import { useEffect } from "react";
import style from "./cart.module.css";
import CartItem from "./CartItem";
import { useDataStore } from "@/app/Components/DataStore";

const Page = () => {
  const { state, dispatch } = useDataStore();
  const itemLength = state.totalQuantity;

  // Load items from session storage on mount
  useEffect(() => {
    const storedState = JSON.parse(sessionStorage.getItem("cartState"));
    if (storedState) {
      dispatch({ type: "LOAD_FROM_SESSION_STORAGE", payload: storedState });
    }
  }, [dispatch]);

  // Update cart store when session storage changes
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "cartState") {
        const storedState = JSON.parse(event.newValue);
        dispatch({ type: "LOAD_FROM_SESSION_STORAGE", payload: storedState });
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [dispatch]);

  return (
    <div className={style.cartContainer}>
      {/* cart right */}
      <section className={style.cartLeft}>
        {/* cart header */}
        <div className={style.cartLeftHeader}>
          <h4>Shopping Cart</h4>
          <h4>
            {itemLength > 1 ? `${itemLength} Items` : `${itemLength} Item`}
          </h4>
        </div>
        <div className={style.cartLeftSubHeader}>
          <h5>PRODUCT DETAILS</h5>
          <h5>QUANTITY</h5>
          <h5>REMOVE</h5>
        </div>

        <div className={style.cartItemContainer}>
          {state.items.map((item) => (
            <CartItem
              id={item.id}
              key={item.id}
              name={item.name}
              src={item.src}
              size={item.quantity}
              price={item.price}
            />
          ))}
        </div>
      </section>

      {/* cart right */}
      <section className={style.cartRight}>
        <div className={style.cartTotal}>
          <span>
            <b>Total: </b>
          </span>
          <span>
            <b>${state.totalCost}</b>
          </span>
        </div>
        <div className={style.checkout}>
          <button>CHECKOUT</button>
        </div>
      </section>
    </div>
  );
};

export default Page;
