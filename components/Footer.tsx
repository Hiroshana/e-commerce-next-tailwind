import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./text";
import { queryObjects } from "node:v8";
import Link from "next/link";
import { categoriesData, quickLinksData } from "@/constants/data";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Footer() {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <SubText>
              Discover curated furniture collections at Hmart, blending style
              and comfort to elevate your living spaces.
            </SubText>
            <SocialMedia
              className="text-shop-dark-color/60"
              iconClassName="border-shop-dark/60 hover:border-shop-dark-green hover:text-shop-dark-green"
              tooltipClassName="gb-shop-dark"
            />
          </div>
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className="space-y-2 mt-4">
              {quickLinksData?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-shop-green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Categories</SubTitle>
            <ul className="space-y-2 mt-4">
              {categoriesData?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/category/${item.href}`}
                    className="text-gray-500 hover:text-shop-green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>Newsletter</SubTitle>
            <SubText>
              Subscribe to our newsletter to receive updates and exclusive
              offers
            </SubText>
            <form className="space-y-3">
              <Input placeholder="Enter your email" type="email" required />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            © {new Date().getFullYear()} <Logo className="text-2xl" />. All
            rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
