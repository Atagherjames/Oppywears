import Marquee from "react-fast-marquee";
import Product from "./Product";
import Display from "./Display";

const Trending = () => {
  return (
    <div>
      <h2 style={{ paddingBottom: "50px" }}>Trending</h2>
      <Marquee pauseOnHover="true" gradient="true">
        <Product
          src="/necklace.jpg"
          price={"$2000"}
          title="Female Classic Jewelry"
        />
        <Product src="/ladiesPolo.jpg" price={"$50"} title="Ladies Polo" />
        <Product src="/femaleSneaker.jpg" price={"$80"} title="Sneaker" />
        <Product src="/jeans.jpg" price={"$60"} title="Male jeans" />
        <Product
          src="/3in1.jpg"
          price={"$200"}
          title="3 in 1 Chinos trouser "
        />
        <Product src="/unexJacket.jpg" price={"$80"} title="Unex Jacket" />
      </Marquee>
    </div>
  );
};

export default Trending;
