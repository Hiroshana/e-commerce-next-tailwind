import { Product } from "@/sanity.types";
import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProductFavoriteButton = ({
  showProduct = false,
  product,
}: {
  showProduct?: boolean;
  product?: Product | null | undefined;
}) => {
  return (
    <>
      {!showProduct ? (
        <Link href={"/wishlist"} className="group relative">
          <Heart className="w-5 h-5 hover:text-shop-dark-green hoverEffect" />
          <span className="absolute -top-1 -right-1 bg-shop-dark-green text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
            0
          </span>
        </Link>
      ) : (
        <button className="group relative hover:text-shop-green hoverEffect border border-shop-green/80 hover:border-shop-green p-1.5 rounded-sm">
          <Heart className="text-shop-green/80 group-hover:text-shop-green hoverEffect mt-.5 w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default ProductFavoriteButton;
