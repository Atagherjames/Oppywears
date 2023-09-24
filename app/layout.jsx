import "./globals.css";
import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Oppy Wears",
  description:
    "Oppy is a leading ecommerce store for buying and selling of clothes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.poppin}>
        <Header />
        <section className="appContainer">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
