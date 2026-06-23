"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function GoHashLinkToHome() {
  const pathname = usePathname();
  useEffect(() => {
    if (window?.location?.hash) {
      const id = window?.location?.hash.replace("#", "/");
      console.log('id',id)
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  return null;
}