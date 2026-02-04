
function useFinanceCalculator(financeData) {
  const monthlyExpenses = financeData?.totalExpenses ?? 0;
  const balance = financeData?.balance ?? 0;
  const incomeAmount = financeData.income ?? 0;
  const percentageSpent =
    Math.round((monthlyExpenses / incomeAmount) * 100) || 0;
  return {incomeAmount, balance, monthlyExpenses, percentageSpent};
}

export default useFinanceCalculator;
