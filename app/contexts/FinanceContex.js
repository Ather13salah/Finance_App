"use client";
import { createContext, useEffect, useState } from "react";
import getTheIncome from "../components/manage_income";
export const FinanceContext = createContext({});
function FinanceProvider({ children }) {
  const [financeData, setFinanceData] = useState({});
  const [error, setError] = useState("");
  const [expenseError, setExpenseError] = useState("");
  useEffect(() => {
    const { error, income, balance, expenses, totalExpenses } = getTheIncome();
    error
      ? setError(error)
      : setFinanceData({ income, balance, totalExpenses, expenses });
  }, []);

  const saveTheIncome = (incomeValue) => {
    try {
      let financeData = {
        income: incomeValue,
        balance: incomeValue,
        expenses: [],
        totalExpenses: 0,
      };
      setFinanceData(financeData);
      localStorage.setItem("finance", JSON.stringify(financeData));
      return true;
    } catch (e) {
      return { data: null, error: "Failed to save income data." };
    }
  };

  
  const validateExpense = (amount, category,balance) => {
    if (!category.trim()) {
      setExpenseError("Please enter a valid expense category");
      return false;
    }
    if (!amount || isNaN(amount)) {
      setExpenseError("Please enter a valid expense amount");
      return false;
    }
    if (Number(amount) > Number(balance)) {
      setExpenseError("Expense amount exceeds current balance");
      return false;
    }
    if (Number(amount) <= 0) {
      setExpenseError("Expense amount must be greater than zero");
      return false;
    }
    setExpenseError("");
    return true;
  };
  const updateFinanceData = (newData) => {
    try {
      const { error, income, expenses, balance, totalExpenses } =
        getTheIncome();
      if (error) {
        return {
          data: null,
          error: "Failed to retrieve existing finance data.",
        };
      }
      if (!validateExpense(newData?.amount, newData?.category,balance)) {
        return;
      }
      let expense = {
        id: crypto.randomUUID(),
        amount: newData.amount,
        category: newData.category,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      };
      const updatedExpenses = [...expenses, expense];
      const updatedTotalExpenses = totalExpenses + parseFloat(newData.amount);
      const updatedBalance = income - updatedTotalExpenses;
      const updatedFinanceData = {
        income,
        balance: updatedBalance,
        expenses: updatedExpenses,
        totalExpenses: updatedTotalExpenses,
      };
      setFinanceData(updatedFinanceData);
      setExpenseError("")
      localStorage.setItem("finance", JSON.stringify(updatedFinanceData));
      return true;
    } catch (e) {
      return { data: null, error: "Failed to update income data." };
    }
  };
  
  return (
    <FinanceContext.Provider
      value={{
        financeData,
        error,
        setError,
        expenseError,
        setExpenseError,
        saveTheIncome,
        updateFinanceData,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}

export default FinanceProvider;
