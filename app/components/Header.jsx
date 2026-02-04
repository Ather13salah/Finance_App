"use client";
import {
  SignedIn,
  SignedOut,
  useUser,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Toggle from "./Toggle";
import { useState } from "react";
function Header() {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full h-24 p-2  flex  justify-between">
      <div>
        <SignedOut>
          <SignInButton className="bg-white text-black rounded-md" />
        </SignedOut>
        <SignedIn>
          <div className="flex justify-center flex-row ">
            {" "}
            <UserButton />
            <div className="ml-1 mt-1 font-bold hover:cursor-text">
              Welcome Back, {user?.firstName}
            </div>
          </div>
        </SignedIn>
      </div>
      <div>
      <Toggle />
      </div>
    </header>
  );
}

export default Header;
