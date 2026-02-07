"use client";
import useFinance from "./helper_hooks/useFinance";
import useFinanceCalculator from "./helper_hooks/useFinanceCalculator";
function ThisMonthExpenses() {
  const { financeData } = useFinance();
  const { averageDailyExpense } = useFinanceCalculator(financeData);
  return (
    <div className="dark:bg-gray-800 p-4 rounded-xl flex-col flex ml-4 text-white w-62 h-34 mt-3 bg-black">
      This Month:
      <div className="text-xl font-semibold pt-0.5">
        <p> Total: ${financeData?.totalExpenses}</p>
      <p> Expenses: {financeData?.expenses?.length ?? 0}</p>
      <p> Avg / Day: $ {averageDailyExpense ?? 0}</p>
      </div>
      
    </div>
  );
}

export default ThisMonthExpenses;
