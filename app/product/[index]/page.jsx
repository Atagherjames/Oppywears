"use client";

import { useEffect, useState } from "react";
import product from "@/app/Components/products";
import style from "./product.module.css";
import Image from "next/image";
import Trending from "@/app/Components/Trending";
import { useDataStore } from "@/app/Components/DataStore";

const Page = ({ params: { index } }) => {
  const item = product.find((item) => item.id === Number(index));
  if (!item) {
    return;
  }

  const { state, dispatch } = useDataStore();

  useEffect(() => {
    dispatch({ type: "ID", payload: index });
  }, [index, dispatch]);

  const initialPrice = item.price;
  const [price, setPrice] = useState(initialPrice);
  const [size, setSize] = useState(1);

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
              <button
                type="button"
                onClick={() => dispatch({ type: "ID", payload: index })}
              >
                -
              </button>
              <span>{size}</span>
              <button type="button" onClick={increment}>
                +
              </button>
            </div>
          </div>
          <div className={style.buttonContainer}>
            <button>ADD TO CART</button>
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
