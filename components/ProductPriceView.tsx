import React from "react";
import PriceFormatter from "./PriceFormatter";

interface Props {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
}

const ProductPriceView = ({ price, discount, className }: Props) => {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <PriceFormatter amount={price} className="text-shop-dark-green" />
        {price && discount && (
          <PriceFormatter
            amount={price + (discount * price) / 100}
            className="line-through text-shop-light-text"
          />
        )}
      </div>
    </div>
  );
};

export default ProductPriceView;
