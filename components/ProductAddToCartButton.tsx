"use client";

import { Product } from "@/sanity.types";
import React from "react";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  className?: string;
}

const ProductAddToCartButton = ({ product, className }: Props) => {
  const isOutOfStock = product?.stock === 0;

  const handleAddToCart = () => {};

  return (
    <Button
      onClick={handleAddToCart}
      disabled={isOutOfStock}
      className={cn(
        "w-full bg-shop-dark-green text-shop-light-green shadow-none border-shop-dark-green font-semibold tracking-wide hover:text-white hover:bg-shop-green hover:border-shop-green hoverEffect",
        className
      )}
    >
      <ShoppingBag />
      {isOutOfStock ? "Out of Stock" : "Add to Cart"}
    </Button>
  );
};

export default ProductAddToCartButton;
