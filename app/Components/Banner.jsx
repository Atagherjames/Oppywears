import Link from "next/link";
import Image from "next/image";
import banner from "./banner.module.css";

const Banner = () => {
  return (
    <div className={banner.banner}>
      <div className={banner.bannerLeft}>
        <h1>OPPY WEARS</h1>
        <div className={banner.link}>
          <Link href="/">SHOP NOW</Link>
        </div>
      </div>
      <div className={banner.bannerMiddle}>
        <Image
          src="/banner.jpg"
          height={200}
          width={200}
          alt="oppy cloth"
          priority
        />
        <Image
          src="/bannersneaker.jpg"
          height={200}
          width={200}
          alt="oppy sneaker"
          priority
        />
      </div>
      <div className={banner.bannerRight}>
        <h5>Description</h5>
        <small>
          Oppy is an ecommerce store for buying and selling of clothes and other
          body wears.
        </small>
      </div>
    </div>
  );
};

export default Banner;
