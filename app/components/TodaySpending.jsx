"use client";
import useFinance from "./helper_hooks/useFinance";
import useFinanceCalculator from "./helper_hooks/useFinanceCalculator";

function TodaySpending() {
  const { financeData } = useFinance();
  const { getTheTotalOfDay } = useFinanceCalculator(financeData);
  const {expenses, expensesAmount} = getTheTotalOfDay();
  return (
    <div className="dark:bg-gray-800 p-4 rounded-xl flex-col flex ml-4 text-white w-62 h-34 mt-3 bg-black">
      Today Spending:
      <div className="text-xl font-semibold pt-0.5">
        {expensesAmount > 0 ? `$${expensesAmount}` : <div>$0<br></br> No spending today</div>}
       <div> Expenses: {expenses} </div>
      </div>
    </div>
  );
}

export default TodaySpending;
