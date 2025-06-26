import BlogLatest from "@/components/BlogLatest";
import CustomContainer from "@/components/Container";
import { Title } from "@/components/text";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <CustomContainer>
        <Title>Our Blogs</Title>
        <BlogLatest />
      </CustomContainer>
    </div>
  );
};

export default BlogPage;
