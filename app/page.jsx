import Banner from "./Components/Banner";
import styles from "./page.module.css";
import Link from "next/link";
import products from "./Components/products";
import Product from "./Components/Product";
import Trending from "./Components/Trending";
import Display from "./Components/Display";

export default function Home() {
  return (
    <>
      <Banner />
      <section className={styles.productWrapper}>
        {/* proud product */}
        <h4>Product we are proud of</h4>
        <section className={styles.productContainer}>
          <Product src="/sneakers.jpg" price={"$80"} title="Sneaker" id={1} />

          <Product src="/kardigan.jpg" price={"$50"} title="Kardigan" id={2} />

          <Product src="/sneaker1.jpg" price={"$40"} title="Sneaker" id={3} />

          <Product src="/heels.jpg" price={"$100"} title="Female Shoe" id={4} />

          <Product src="/suit.webp" price={"$200"} title="Suit" id={5} />

          <Product src="/Tshirt.jpg" price={"$30"} title="T-shirt" id={6} />

          <Product
            src="/roundNeck.jpg"
            price={"$30"}
            title="Round Neck"
            id={7}
          />

          <Product
            src="/womenslong.jpg"
            price={"$90"}
            title="Womens Long Gown"
            id={8}
          />
        </section>
      </section>
      <section className={styles.display}>
        <Display />
      </section>
      {/* trending */}
      <section className={styles.trending}>
        <Trending />
      </section>
    </>
  );
}

{
  /* <div>
        {product.map((item) => (
          <Link href={`/product/${item.id}`}>{item.name}</Link>
        ))} */
}
