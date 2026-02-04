"use client";
import DisplayExpenses from "../components/DisplayExpenses";
import TopCategory from "../components/TopCategory";
import useFinance from "../components/helper_hooks/useFinance";
function page() {
  const { financeData } = useFinance();
  return (
    <div className="w-full h-full flex-row flex justify-between items-start">
      <div className="flex-col flex justify-center ">
        <h1 className="font-bold text-black dark:text-white m-2">All Expenses: </h1>
        <DisplayExpenses expenses={financeData?.expenses} />
      </div>
      <div className="p-4">
        {" "}
        <TopCategory expenses={financeData?.expenses} />
      </div>
    </div>
  );
}

export default page;
