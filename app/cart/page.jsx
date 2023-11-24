"use client";
import { PaystackButton } from "react-paystack";
import style from "./cart.module.css";

const page = () => {
  return (
    <div className={style.cartContainer}>
      {/* jsjsj */}
      <div className={style.cartLeft}>
        <section className={style.product}>
          <section className={style.productDetails}>
            <div className={style.productLeft}>
              <img src="/sneaker1.jpg" alt="" srcset="" />
            </div>
            <div style={style.productRight}>
              <h4>product description</h4>
              <p>
                <strong>price</strong>
              </p>
            </div>
          </section>
          <section style={style.productEdit}>
            <button>Remove</button>
            <div className={style.productResize}>
              <button>-</button>
              <span>1</span>
              <button>2</button>
            </div>
          </section>
        </section>
      </div>

      <div className="cartRight"></div>
    </div>
  );
};

export default page;
