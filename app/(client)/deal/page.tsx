import React from "react";
import { getDealProducts } from "@/sanity/queries";
import Container from "@/components/Container";
import { Title } from "@/components/text";
import ProductCard from "@/components/ProductCard";

const DealPage = async () => {
  const products = await getDealProducts();
  return (
    <div className="py-10 bg-shop-deal-bg">
      <Container>
        <Title className="mb-5 underline underline-offset-4 decoration-[1px] text-base uppercase tracking-wide">
          Hot Deals of the week
        </Title>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2.5">
          {products?.map((product) => (
            //@ts-ignore
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DealPage;
