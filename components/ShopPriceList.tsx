import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Title } from "./text";

const priceArray = [
  { title: "Under $100", value: "0-100" },

  { title: "$100 - $200", value: "100-200" },
  { title: "$200 - $300", value: "200-300" },
  { title: "$300 - $500", value: "300-500" },
  { title: "Over $500", value: "500-10000" },
];

interface Props {
  selectedPrice?: string | null;
  setSelectedPrice: React.Dispatch<React.SetStateAction<string | null>>;
}

const ShopPriceList = ({ selectedPrice, setSelectedPrice }: Props) => {
  return (
    <div className="w-full bg-white p-5">
      <Title className="text-base text-shop-black/80">Price</Title>
      <RadioGroup value={selectedPrice || ""} className="mt-2 space-y-1">
        {priceArray?.map((price) => (
          <div
            onClick={() => {
              setSelectedPrice(price?.value);
            }}
            key={price.title}
            className="flex items-center space-x-2 hover:cursor-pointer"
          >
            <RadioGroupItem
              value={price?.value}
              id={price?.value}
              className="rounded-sm"
            />
            <Label
              htmlFor={price?.value}
              className={`${selectedPrice === price?.value ? "font-semibold text-shop-dark-green" : "font-normal"}`}
            >
              {price?.title}
            </Label>
          </div>
        ))}
        {selectedPrice && (
          <button
            onClick={() => setSelectedPrice(null)}
            className="text-left text-sm font-medium mt-2 underline underline-offset-2 decoration-[1px] hover:text-shop-dark-green hoverEffect"
          >
            Reset selection
          </button>
        )}
      </RadioGroup>
    </div>
  );
};

export default ShopPriceList;
