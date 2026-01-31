"use client";
import {
  SignedIn,
  SignedOut,
  useUser,
  SignInButton,
  UserButton,

} from "@clerk/nextjs";
import Toggle from "./Toggle";
import AddIncome from "./AddIncome";
import { useState } from "react";
function Header() {
  const {  user  } = useUser()
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
        <button className="mr-2 w-32 rounded-xl cursor-pointer text-white dark:text-black bg-black dark:bg-white" onClick={() => setIsOpen(true)}>Add Income</button>
        <Toggle />
      </div>
      {isOpen && <AddIncome isOpen={isOpen} setIsOpen={setIsOpen} />}
    </header>
  );
}

export default Header;
