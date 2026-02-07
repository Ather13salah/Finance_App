function useFinanceCalculator(financeData) {
  const monthlyExpenses = financeData?.totalExpenses ?? 0;
  const balance = financeData?.balance ?? 0;
  const incomeAmount = financeData.income ?? 0;
const percentageSpent =
  incomeAmount > 0
    ? Math.round((monthlyExpenses / incomeAmount) * 100)
    : 0;
  const averageDailyExpense = Math.round(monthlyExpenses / 30) ?? 0;
  const getTheTotalOfDay = () => {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();
    const totalForToday = financeData?.expenses
      ?.filter((expense) => {
        const expenseDate = new Date(expense.date);
        return (
          expenseDate.getFullYear() === todayYear &&
          expenseDate.getMonth() === todayMonth &&
          expenseDate.getDate() === todayDay
        );
      })

      const expenses = totalForToday?.length ?? 0
      const expensesAmount = totalForToday?.reduce((total, expense) => total + Number(expense.amount), 0)??0

    return {expenses, expensesAmount}
  };

  return {
    incomeAmount,
    balance,
    monthlyExpenses,
    percentageSpent,
    averageDailyExpense,
    getTheTotalOfDay,
  };
}

export default useFinanceCalculator;
