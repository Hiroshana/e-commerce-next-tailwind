import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Logo from "./Logo";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const NoAccess = ({
  details = "Log in to view your cart items and checkout. Don't miss out your favorite products!",
}: {
  details?: string;
}) => {
  return (
    <div className="flex items-center justify-center py-12 md:py-32 bg-gray-100 p-4">
      <Card className="w-full max-w-md p-5">
        <CardHeader className="flex items-center flex-col">
          <Logo />
          <CardTitle className="text-2xl font-semibold text-center text-gray-600">
            Welcome Back!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center font-medium text-shop-black/60">
            {details}
          </p>

          <SignInButton mode="modal">
            <Button className="w-full" size="lg">
              Sign in
            </Button>
          </SignInButton>
        </CardContent>

        <CardFooter className="space-y-4">
          <SignInButton mode="modal">
            <Button variant="outline" className="w-full" size="lg">
              Cancel
            </Button>
          </SignInButton>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NoAccess;
