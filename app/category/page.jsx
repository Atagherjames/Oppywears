import Product from "../Components/Product";
import product from "../Components/products";
import global from "../page.module.css";

const page = () => {
  return (
    <div className={global.productContainer}>
      {product.map((item) => (
        <Product
          src={item.src}
          price={item.price}
          title={item.name}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default page;
