import { Category } from "@/sanity.types";
import React from "react";
import { Title } from "./text";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

interface Props {
  categories: Category[];
  selectedCategory?: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

const ShopCategoryList = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}: Props) => {
  return (
    <div className="w-full bg-white p-5">
      <Title className="text-base text-shop-black/80">Product Categories</Title>
      <RadioGroup value={selectedCategory || ""} className="mt-2 space-y-1">
        {categories?.map((category) => (
          <div
            onClick={() => {
              setSelectedCategory(category?.slug?.current as string);
            }}
            key={category._id}
            className="flex items-center space-x-2 hover:cursor-pointer"
          >
            <RadioGroupItem
              value={category?.slug?.current as string}
              id={category?.slug?.current}
              className="rounded-sm"
            />
            <Label
              htmlFor={category?.slug?.current}
              className={`${selectedCategory === category?.slug?.current ? "font-semibold text-shop-dark-green" : "font-normal"}`}
            >
              {category?.title}
            </Label>
          </div>
        ))}
        {selectedCategory && (
          <button
            onClick={() => setSelectedCategory(null)}
            className="text-left text-sm font-medium mt-2 underline underline-offset-2 decoration-[1px] hover:text-shop-dark-green hoverEffect"
          >
            Reset selection
          </button>
        )}
      </RadioGroup>
    </div>
  );
};

export default ShopCategoryList;
