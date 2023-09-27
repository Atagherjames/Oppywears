import layout from "./layout.module.css";
import Link from "next/link";
const LayoutLink = ({ url, type }) => {
  return (
    <div className={layout.linkWrapper}>
      <Link href={url}>{type}</Link>
    </div>
  );
};

export default LayoutLink;
