"use client";

import { useEffect, useState } from "react";
import product from "@/app/Components/products";
import style from "./product.module.css";
import Image from "next/image";
import Trending from "@/app/Components/Trending";
import { useDataStore } from "@/app/Components/DataStore";

const Page = ({ params: { index } }) => {
  const item = product.find((item) => item.id === Number(index));
  const { state, dispatch } = useDataStore();

  // Update session storage whenever the state changes
  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(state));
  }, [state]);

  const initialPrice = item.price;
  const [price, setPrice] = useState(initialPrice);
  const [size, setSize] = useState(1);
  item["quantity"] = size;

  useEffect(() => {
    dispatch({ type: "ID", payload: index });
  }, [index, dispatch]);

  if (!item) {
    return null; // Return null or a loading indicator if item is not found
  }

  const addToCart = () => {
    const itemExist = state.items.find(
      (cartItem) => cartItem.name === item.name
    );
    if (!itemExist) {
      dispatch({
        type: "ADD_TO_CART",
        payload: item,
      });
    }
  };

  const increment = () => {
    setSize(size + 1);
    setPrice(initialPrice * (size + 1));
  };

  const decrement = () => {
    if (size <= 1) return;
    setSize(size - 1);
    setPrice(price - initialPrice);
  };

  return (
    <div>
      <section className={style.productContainer}>
        <div className={style.imgContainer}>
          <Image src={item.src} alt="jeans" height={500} width={500} />
        </div>
        <div className={style.productDetailsRight}>
          <h3>{item.name}</h3>
          <p className={style.detail}>{item.description}</p>
          <p className={style.quantity}>${price}</p>
          <div className={style.quantityContainer}>
            <span className={style.quantity}>Quantity:</span>
            <div className={style.increment}>
              <button type="button" onClick={decrement}>
                -
              </button>
              <span>{size}</span>
              <button type="button" onClick={increment}>
                +
              </button>
            </div>
          </div>
          <div className={style.buttonContainer}>
            <button onClick={addToCart}>ADD TO CART</button>
            <button>BUY NOW</button>
          </div>
        </div>
      </section>
      <section style={{ marginTop: "200px" }}>
        <Trending title="You May Also Like" />
      </section>
    </div>
  );
};

export default Page;
