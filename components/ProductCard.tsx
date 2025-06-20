import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { Flame, FlameIcon, StarIcon, StarsIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductAddWishlistButton from "./ProductAddWishlistButton";
import { Title } from "./text";
import ProductPriceView from "./ProductPriceView";
import ProductAddToCartButton from "./ProductAddToCartButton";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="text-sm border-[1px] border-shop-dark-green/20 rounded-md bg-white group">
      <div className="relative group overflow-hidden bg-gray-50/90 rounded-md">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product?.images[0]).url()}
              alt="Product"
              loading="lazy"
              width={700}
              height={700}
              className={`w-full h-64 object-contain overflow-hidden transition-transform hoverEffect ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
            />
          </Link>
        )}
        <ProductAddWishlistButton product={product} />
        {product?.status === "sale" && (
          <p className="absolute top-2 left-2 z-10 text-xs border border-shop-dark-color/50 px-2 rounded-full group-hover:text-shop-green group-hover:border-shop-green hoverEffect">
            Sale!
          </p>
        )}
        {product?.status === "new" && (
          <p className="absolute top-2 left-2 z-10 text-xs border border-shop-dark-color/50 px-2 rounded-full group-hover:text-shop-green group-hover:border-shop-green hoverEffect">
            New!
          </p>
        )}
        {product?.status === "hot" && (
          <Link
            href="/deal"
            className="absolute top-2 left-2 z-10 border text-orange-700 border-orange-700 px-1 py-1 rounded-full group-hover:text-orange-500 group-hover:border-orange-500 hoverEffect"
          >
            <Flame size={18} fill="var(--color-orange-700)" />
          </Link>
        )}
      </div>
      <div className="p-3 flex flex-col gap-2">
        {product?.categories && (
          <p className="uppercase line-clamp-1 text-xs text-shop-light-text">
            {product?.categories?.map((cat) => cat).join(", ")}
          </p>
        )}
        <Title className="text-sm line-clamp-1">{product?.name}</Title>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                fill={index < 4 ? "#3aafa9" : "#686e7d"}
                className="text-shop-green"
                size={12}
              />
            ))}
          </div>
          <p className="text-shop-light-color text-xs tracking-wide">
            5 Reviews
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <p>In Stock</p>
          <p
            className={` font-semibold ${product?.stock === 0 ? "text-red-600" : "text-shop-green"}`}
          >
            {(product?.stock as number) > 0 ? product?.stock : "unavailable"}
          </p>
        </div>
        <ProductPriceView
          price={product?.price}
          discount={product?.discount}
          className="text-sm"
        />
        <ProductAddToCartButton
          product={product}
          className="w-36 rounded-full bg-shop-dark-green"
        />
      </div>
    </div>
  );
}

export default ProductCard;
