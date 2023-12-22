"use client";
import style from "./cart.module.css";
import Image from "next/image";
import CartItem from "./CartItem";
import { useDataStore } from "@/app/Components/DataStore";

const page = () => {
  const { state } = useDataStore();
  const itemLength = state.totalQuantity;
  console.log(itemLength);

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

export default page;
