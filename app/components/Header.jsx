"use client";
import Toggle from "./Toggle";
function Header() {
 
  return (
    <header className="w-full h-24 p-2  flex  justify-between">
      <div className="text-xl font-bold text-black dark:text-white">
        Welcome back to your dashboard 👋
      </div>
      <div>
      <Toggle />
      </div>
    </header>
  );
}

export default Header;
