import Container from "@/components/Container";
import ProductCategory from "@/components/ProductCategory";
import { Title } from "@/components/text";
import { getCategories } from "@/sanity/queries";
import React from "react";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const categories = await getCategories();
  const { slug } = await params;
  return (
    <div className="py-10">
      <Container>
        <Title>
          Products by Category:
          <span className="font-bold text-shop-green capitalize tracking-wide ">
            {slug}
          </span>
        </Title>
        <ProductCategory categories={categories} slug={slug} />
      </Container>
    </div>
  );
};

export default CategoryPage;
