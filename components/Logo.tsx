import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

function Logo({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) {
  return (
    <Link href={"/"} className="inline-flex">
      <h2
        className={cn(
          "text-4xl font-bold text-shop-black hover:text-shop-dark-green hoverEffect group font-sans",
          className
        )}
      >
        H
        <span
          className={cn(
            "text-3xl text-shop-green font-semibold hover:text-shop-light-color hoverEffect",
            spanDesign
          )}
        >
          mart
        </span>
      </h2>
    </Link>
  );
}

export default Logo;
