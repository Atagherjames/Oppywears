import Link from "next/link";
import Image from "next/image";
import style from "./product.module.css";

const Product = () => {
  return (
    <div className={style.product}>
      <Link href="/">
        <div className={style.img}>
          <Image
            src="/bannersneaker.jpg"
            height={200}
            width={200}
            alt="oppy sneaker"
          />
        </div>
        <div className={style.productDescription}>
          <h5>Sneaker for male</h5>
          <h5>$500</h5>
        </div>
      </Link>
    </div>
  );
};

export default Product;
