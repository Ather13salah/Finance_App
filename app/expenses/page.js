"use client";
import DisplayExpenses from "../components/DisplayExpenses";
import TopCategory from "../components/TopCategory";
import useFinance from "../components/helper_hooks/useFinance";
import { useState } from "react";
import useSearch from "../components/helper_hooks/useSearch";
import ThisMonthExpenses from "../components/ThisMonthExpenses";
import TodaySpending from "../components/TodaySpending";
function page() {
  const { financeData } = useFinance();
  const [searchTerm, setSearchTerm] = useState("");
  const searchResult = useSearch(searchTerm);
  return (
    <div className="w-full h-full  scroll-smooth flex-row flex justify-between items-start">
      <div className="flex-col flex justify-center ">
        <div className="font-bold text-black text-2xl hover:cursor-text dark:text-white flex justify-center ">
          All Expenses:
        </div>
        <DisplayExpenses expenses={financeData?.expenses} />
      </div>
      <div className="p-4 ">
        <div className="flex-row flex ">
          <div className="dark:bg-gray-800 p-4 rounded-xl flex-col flex ml-4 text-white w-62 h-32 mt-3 bg-black">
            Search
            <input
              className="mt-4 p-2 outline-none rounded bg-white text-black dark:bg-white/20 "
              placeholder="Enter the Category or Price: "
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <TopCategory expenses={financeData?.expenses} />
          <ThisMonthExpenses />
          <TodaySpending />
        </div>
        <div className="text-black dark:text-white text-2xl font-bold ml-2 ">
          { searchResult?.length > 0 && (
            <>
              Search Results:
              <DisplayExpenses expenses={searchResult} />
            </>
          ) }
        </div>
      </div>
    </div>
  );
}

export default page;
