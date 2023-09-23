import product from "@/app/Components/products";

const page = ({ params: { index } }) => {
  const item = product.find((item) => item.id === Number(index));
  if (!item) {
    return;
  }
};

export default page;
