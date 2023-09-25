import Link from "next/link";
import footer from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={footer.sub}>
        <h2>News Letter</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <input
            type="email"
            name="subscribe"
            autoComplete="true"
            defaultValue={"sample@gmail.com"}
          />
          <button>Subscribe</button>
        </div>
      </div>
      <div className={footer.quickLinks}>
        <div>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Store Locator</Link>
          <Link href={"/"}>FAQs</Link>
          <Link href={"/"}>News</Link>
          <Link href={"/"}>Careers</Link>
          <Link href={"/"}>Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
