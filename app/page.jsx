import Banner from "./Components/Banner";
import styles from "./page.module.css";
import Link from "next/link";
import products from "./Components/products";
import Product from "./Components/Product";
// import Trending from "./Components/Trending";
export default function Home() {
  return (
    <>
      <Banner />
      <section className={styles.productWrapper}>
        <h4>Product we are proud of</h4>
        <section className={styles.productContainer}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </section>
      </section>
      <section>{/* <Trending /> */}</section>
    </>
  );
}

{
  /* <div>
        {product.map((item) => (
          <Link href={`/product/${item.id}`}>{item.name}</Link>
        ))} */
}
