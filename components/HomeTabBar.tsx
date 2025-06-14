import { productType } from "@/constants/data";
import Link from "next/link";
import React from "react";

interface Props {
  selectedTab: string;
  onTabSelected: (tab: string) => void;
}

function HomeTabBar({ selectedTab, onTabSelected }: Props) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
      <div className="flex items-center gap-3 text-sm font-semibold">
        {productType?.map((item) => (
          <button
            onClick={() => onTabSelected(item?.title)}
            key={item?.title}
            className={`border border-shop-green/5 px-4 py-1.5 rounded-full md:px-6 md:py-2 hover:bg-shop-dark-green/90 hover:border-shop-green hover:text-white hoverEffect ${selectedTab === item?.title ? "bg-shop-green" : "bg-shop-dark-green/50"}`}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <Link
        className={`border border-shop-green/5 px-4 py-1.5 rounded-full md:px-6 md:py-1.5 font-semibold hover:bg-shop-dark-green/90 hover:border-shop-green hover:text-white hoverEffect`}
        href={"/shop"}
      >
        See all
      </Link>
    </div>
  );
}

export default HomeTabBar;
