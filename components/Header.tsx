import Container from "@/components/Container";
import React from "react";
import Logo from "./Logo";
import HeaderMiddle from "./HeaderMiddle";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import ProductFavoriteButton from "./ProductFavoriteButton";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";

async function Header() {
  const user = await currentUser();
  console.log(user);
  return (
    <header className="bg-white py-5 sticky top-0 z-50 bg-white/70 backdrop-blur-md">
      <Container className="flex justify-between items-center text-shop-light-color">
        {/** Logo */}
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>

        {/** Nav Middle */}
        <HeaderMiddle />

        {/** Nav Right */}
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <ProductFavoriteButton />
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && <SignIn />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
}

export default Header;
