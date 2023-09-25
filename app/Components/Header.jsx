"use client";
import header from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { GiShoppingCart } from "react-icons/gi";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={isOpen ? header.header : "unused"}>
      <div className={header.head}>
        <div className={header.left}>
          <Image
            alt="logo"
            src="/oppy.jpg"
            width={70}
            height={70}
            style={{
              borderRadius: "50%",
              marginTop: "7px",
              marginBottom: "7px",
            }}
          />
        </div>
        <div className={header.right}>
          {/* destop */}
          <nav className={header.desktop}>
            <Link href="/category">CATEGORIES</Link>
            <Link href="/product">PRODUCT PAGE</Link>
            <div className={header.cartCount}>
              <GiShoppingCart className={header.shop} />
              <span>12</span>
            </div>
          </nav>
          {/* mobile */}
          <nav className={header.mobile}>
            {isOpen && (
              <nav className={header.open}>
                <Link href="/category" onClick={() => setOpen(false)}>
                  CATEGORIES
                </Link>
                <Link href="/product" onClick={() => setOpen(false)}>
                  PRODUCT
                </Link>
              </nav>
            )}
            <div className={header.cartCount}>
              <GiShoppingCart className={header.shop} />
              <span>12</span>
            </div>
            <Hamburger size={25} toggle={setOpen} toggled={isOpen} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
