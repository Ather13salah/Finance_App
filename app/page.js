"use client";
import { useState } from "react";
import Contanier from "./components/Contanier";
import ErrorAlert from "./components/ErrorAlert";
import AddExpense from "./components/AddExpense";
import useFinance from "./components/helper_hooks/useFinance";
import AddExpensesBtn from "./components/AddExpensesBtn";
import DisplayExpenses from "./components/DisplayExpenses";
import Expenses from "./components/Expenses";
import AddIncomesBtn from "./components/AddIncomeBtn";
import AddIncome from "./components/AddIncome";
import MonthlySpending from "./components/MonthlySpending";
import TopCategory from "./components/TopCategory";
import useFinanceCalculator from "./components/helper_hooks/useFinanceCalculator";
export default function Home() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { financeData, error } = useFinance();
  const { balance, incomeAmount, monthlyExpenses, percentageSpent } = useFinanceCalculator(financeData);
 
  return (
    <div className=" h-full  flex justify-between flex-row  ">
      <div className="p-4">
        {error && <ErrorAlert errorMessage={error} />}
        <div className="w-full flex justify-row ">
          <Contanier text="Total Balance" amount={balance} />
          <Contanier
            className="cursor-text"
            text="Monthly Income"
            amount={incomeAmount}
          />
          <Contanier text="Monthly Expenses" amount={monthlyExpenses} />
        </div>

        {
          /* Rest of your page content */
          financeData?.expenses?.length > 0 ? (
            <>
              <Expenses expenses={financeData?.expenses} />
              <DisplayExpenses expenses={financeData?.expenses?.slice(-5)} />
            </>
          ) : (
            <div className="flex justify-center  flex-col items-center h-96 text-2xl font-semibold text-black dark:text-white">
              <div>No expenses recorded yet.</div>
            </div>
          )
        }
      </div>

      <div className="w-full h-full flex-col  flex justify-center items-center">
        <MonthlySpending
          balance={balance}
          monthlyExpenses={monthlyExpenses}
          percentageSpent={percentageSpent}
        />
        <div className="flex justify-between">
          <div className="dark:bg-gray-800 p-4  rounded-xl flex-col flex text-white w-56 h-32 mt-3 bg-black">
            Remaninig Budget:
            <div className="text-2xl font-bold">${balance}</div>
          </div>
          <TopCategory expenses={financeData?.expenses?.slice(-5)} />
        </div>
        <div className="dark:bg-gray-800 p-4 rounded-xl flex-col flex text-white w-1/2 h-32 mt-3 bg-black">
          Quick Actions
          <AddExpensesBtn setOpen={setOpen} />
          <AddIncomesBtn setIsOpen={setIsOpen} />
        </div>
      </div>
      {open && <AddExpense open={open} setOpen={setOpen} />}
      {isOpen && <AddIncome isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}
