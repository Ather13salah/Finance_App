export const getTheIncome = () => {
  const error = { data: null, error: "Failed to receive income data." };
  try {
    const financeData = JSON.parse(localStorage.getItem("finance"));

    return financeData ? financeData : error;
  } catch (e) {
    return error;
  }
};

export const saveTheIncome = (incomeValue) => {
  try {
    let financeData = JSON.stringify({
      income: incomeValue,
      balance: incomeValue,
      expenses: [],
      totalExpenses: 0,
    });
    localStorage.setItem("finance", financeData);
  } catch (e) {
    return { data: null, error: "Failed to save income data." };
  }
};
