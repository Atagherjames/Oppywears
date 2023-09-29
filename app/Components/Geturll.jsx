"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Geturl = () => {
  const pathname = usePathname();
  const [path, setPath] = useState("");

  useEffect(() => {
    if (pathname === "/category/Male") setPath("Male");
    else if (pathname === "/category/Women") setPath("Woman");
    else if (pathname === "/category/Children") setPath("Children");
    else setPath("All");
  }, [pathname]);
  return <div>{path}</div>;
};

export default Geturl;
