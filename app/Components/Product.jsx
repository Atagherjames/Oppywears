import Link from "next/link";
import Image from "next/image";
import style from "./product.module.css";

const Product = ({ src, price, title, id }) => {
  return (
    <div className={style.product}>
      <Link href={`/product/${id}`}>
        <div className={style.img}>
          <Image src={src} height={200} width={200} alt="oppy sneaker" />
        </div>
        <div className={style.productDescription}>
          <h5>{title}</h5>
          <h5>{price}</h5>
        </div>
      </Link>
    </div>
  );
};

export default Product;
