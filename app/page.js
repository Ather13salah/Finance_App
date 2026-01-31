"use client";
import { useState, useEffect } from "react";
import Contanier from "./components/Contanier";
import ErrorAlert from "./components/ErrorAlert";
import AddExpense from "./components/AddExpense";
import { getTheIncome } from "./components/manage_income";
export default function Home() {
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [financeData, setFinanceData] = useState(null);
  useEffect(() => {
    const { error, income, balance, expenses, totalExpenses } = getTheIncome();
    error
      ? setError(error)
      : setFinanceData({ income, balance, totalExpenses, expenses });
  }, []);
  const monthlyExpenses = financeData?.totalExpenses?financeData?.totalExpenses : 0;
  console.log(monthlyExpenses); // Replace with actual expense retrieval logic
  const Balance = financeData?.income ? financeData?.balance : 0;
  return (
    <div className=" h-full  ">
      {error && <ErrorAlert errorMessage={error} />}
      <div className="w-full flex justify-row ">
        <Contanier text="Total Balance" amount={Balance} />
        <Contanier
          className="cursor-text"
          text="Monthly Income"
          amount={financeData ? financeData?.income : 0}
        />
        <Contanier text="Monthly Expenses" amount={monthlyExpenses} />
      </div>

      {
        /* Rest of your page content */
        financeData?.expenses.length > 0 ? (
          <div className="font-bold p-1.5 text-2xl">Expenses:</div>
        ) : (
          <div className="flex justify-center  flex-col items-center h-96 text-2xl font-semibold text-gray-500">
            <div>No expenses recorded yet.</div>
            <button onClick={()=>setOpen(true)} className="bg-black text-white cursor-pointer w-62 h-8 rounded-lg mt-2 dark:bg-white dark:text-black">
              Add Expense
            </button>
          </div>
        )
      }
      {open && < AddExpense open={open} setOpen={setOpen}/>}
    </div>
  );
}
