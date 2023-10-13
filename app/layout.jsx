import "./globals.css";
import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { DataStore } from "./Components/DataStore";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Oppy Wears",
  description:
    "Oppy is a leading ecommerce store for buying and selling of clothes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <DataStore>
          <Header />
          <section className="appContainer">{children}</section>
          <Footer />
        </DataStore>
      </body>
    </html>
  );
}
