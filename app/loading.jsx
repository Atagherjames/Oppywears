import Image from "next/image";
import load from "./loading.module.css";

const loading = () => {
  return (
    <div className={load.loadContainer}>
      <div>
        <Image
          alt="logo"
          src="/oppy.jpg"
          width={60}
          height={60}
          className={load.loadingImg}
          style={{
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
};

export default loading;
