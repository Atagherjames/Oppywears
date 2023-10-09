import Marquee from "react-fast-marquee";
import Product from "./Product";
import Display from "./Display";

const Trending = ({ title = "Trending" }) => {
  return (
    <div>
      <h2 style={{ paddingBottom: "50px" }}>{title}</h2>
      <Marquee pauseOnHover="true" gradient="true">
        <Product
          src="/necklace.jpg"
          price={"$2000"}
          title="Female Classic Jewelry"
          id={9}
        />
        <Product
          src="/ladiesPolo.jpg"
          price={"$50"}
          title="Ladies Polo"
          id={10}
        />
        <Product
          src="/femaleSneaker.jpg"
          price={"$80"}
          title="Sneaker"
          id={11}
        />
        <Product src="/jeans.jpg" price={"$60"} title="Male jeans" id={13} />
        <Product
          src="/3in1.jpg"
          price={"$200"}
          title="3 in 1 Chinos trouser "
          id={14}
        />
        <Product
          src="/unexJacket.jpg"
          price={"$80"}
          title="Unex Jacket"
          id={15}
        />
      </Marquee>
    </div>
  );
};

export default Trending;
