import BlogLatest from "@/components/BlogLatest";
import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import HomeCategories from "@/components/HomeCategories";
import ProductGrid from "@/components/ProductGrid";
import ShopByBrands from "@/components/ShopByBrands";
import { getCategories } from "@/sanity/queries";
import React from "react";

const Home = async () => {
  const categories = await getCategories(6);

  console.log(categories);
  return (
    <Container>
      <HomeBanner />
      <div className="py-10">
        <ProductGrid />
      </div>
      <HomeCategories categories={categories} />
      <ShopByBrands />
      <BlogLatest />
    </Container>
  );
};

export default Home;
