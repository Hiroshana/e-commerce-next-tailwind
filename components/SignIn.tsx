import { SignInButton } from "@clerk/nextjs";
import React from "react";

const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <button className="text-sm font-semibold text-shop-light-color hover:text-shop-black hover:cursor-pointer hoverEffect">
        SignIn
      </button>
    </SignInButton>
  );
};

export default SignIn;
