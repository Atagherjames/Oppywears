"use client";
import Image from "next/image";
import { useState } from "react";
import style from "./cart.module.css";
import { useDataStore } from "@/app/Components/DataStore";

const CartItem = ({ name, src, size, price, id }) => {
  const { state, dispatch } = useDataStore();

  const initialPrice = size * price;

  const [priced, setPrice] = useState(initialPrice);
  const [sized, setSize] = useState(size);

  const increment = () => {
    setSize(sized + 1);
    setPrice(price * (sized + 1));
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity: sized + 1 },
    });
  };

  const decrement = () => {
    if (sized <= 1) return;
    setSize(sized - 1);
    setPrice(price * (sized - 1));
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity: sized - 1 },
    });
  };

  const handleRemove = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id },
    });
  };

  return (
    <div>
      <div className={style.cartInfo}>
        <div className={style.item}>
          <div className={style.itemImg}>
            <Image src={src} height={50} width={50} className={style.img} />
            <div className={style.productdetail}>
              <span>{name}</span>

              <div className={style.totalPrice}> ${priced}</div>
            </div>
          </div>
          <div className={style.quantityBtn}>
            <button onClick={decrement}>-</button>
            <span>{sized}</span>
            <button onClick={increment}>+</button>
          </div>
          <div className={style.removeItem} onClick={handleRemove}>
            x
          </div>
        </div>
        {/* second item */}
      </div>
    </div>
  );
};

export default CartItem;
