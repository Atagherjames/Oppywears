import Link from "next/link";
import category from "./category.module.css";
import LayoutLink from "./LayoutLink";

const layout = ({ children, params }) => {
  return (
    <div>
      <section>
        <div className={category.catHeader}>
          <span>
            <Link href="/">{"<"} Home</Link>
          </span>
          <span>All</span>
        </div>
        <section className={category.categories}>
          <LayoutLink url="/category" type="All" />
          <LayoutLink url="/category/Male" type="Male" />
          <LayoutLink url="/category/Women" type="Women" />
          <LayoutLink url="/category/Children" type="Children" />
        </section>
      </section>
      <section>{children}</section>
    </div>
  );
};

export default layout;
