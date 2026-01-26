import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Toggle from "./Toggle";
import { currentUser } from "@clerk/nextjs/server";
async function Header() {
  const user = await currentUser();
  return (
    <header className="w-full h-24 p-2  flex bg-white dark:bg-black justify-between">
      <div>
        <SignedOut>
          <SignInButton className="bg-white text-black rounded-md" />
        </SignedOut>
        <SignedIn>
          <div className="flex justify-center flex-row ">
            {" "}
            <UserButton />
            <div className="ml-1 mt-1 hover:cursor-text">Welcome Back, {user?.firstName}</div>
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
