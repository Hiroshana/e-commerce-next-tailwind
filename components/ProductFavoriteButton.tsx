"use client";

import { Product } from "@/sanity.types";
import useStore from "@/store";
import { Heart } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProductFavoriteButton = ({
  showProduct = false,
  product,
}: {
  showProduct?: boolean;
  product?: Product | null | undefined;
}) => {
  const { favoriteProduct, addToFavorite } = useStore();
  const [existingProduct, setExistingProduct] = useState<Product | null>(null);

  useEffect(() => {
    const availableProduct = favoriteProduct?.find(
      (item) => item?._id === product?._id
    );
    setExistingProduct(availableProduct || null);
  }, [product, favoriteProduct]);

  const handleFavorite = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    if (product?._id) {
      addToFavorite(product).then(() => {
        toast.success(
          existingProduct
            ? "Product remove successfully"
            : "Product added successfully"
        );
      });
    }
  };

  return (
    <>
      {!showProduct ? (
        <Link href={"/wishlist"} className="group relative">
          <Heart className="w-5 h-5 hover:text-shop-dark-green hoverEffect" />
          <span className="absolute -top-1 -right-1 bg-shop-dark-green text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
            {favoriteProduct?.length ? favoriteProduct?.length : 0}
          </span>
        </Link>
      ) : (
        <button
          onClick={handleFavorite}
          className="group relative hover:text-shop-green hoverEffect border border-shop-green/80 hover:border-shop-green p-1.5 rounded-sm"
        >
          {existingProduct ? (
            <Heart
              fill="#3b9c3c"
              className="text-shop-green/80 group-hover:text-shop-green hoverEffect mt-.5 w-5 h-5"
            />
          ) : (
            <Heart className="text-shop-green/80 group-hover:text-shop-green hoverEffect mt-.5 w-5 h-5" />
          )}
        </button>
      )}
    </>
  );
};

export default ProductFavoriteButton;
