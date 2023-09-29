import global from "../../page.module.css";
import Product from "@/app/Components/Product";
import product from "@/app/Components/products";

const page = ({ params, geturl }) => {
  const category = product.filter((item) => item.category === params.index);
  if (!category) return;

  return (
    <div className={global.productContainer}>
      {category.map((item) => (
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
