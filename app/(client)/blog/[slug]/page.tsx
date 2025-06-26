import CustomContainer from "@/components/Container";
import { Title } from "@/components/text";
import React from "react";

const SingleBlogPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return (
    <div>
      <CustomContainer>
        <Title>Single Blog page</Title>
        <p>{slug}</p>
      </CustomContainer>
    </div>
  );
};

export default SingleBlogPage;
