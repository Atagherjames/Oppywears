import Image from "next/image";
import Link from "next/link";
import display from "./display.module.css";

const Display = () => {
  return (
    <div className={display.displayContainer}>
      <div className={display.left}>
        <h3>Confortable Dressing</h3>
        <h5>Instant Delivery</h5>
        <aside>
          <Link href={"/"}>SHOP NOW</Link>
        </aside>
      </div>
      <div className={display.right}>
        <Image src={"/display.jpg"} alt="display" width={400} height={400} />
      </div>
    </div>
  );
};

export default Display;
