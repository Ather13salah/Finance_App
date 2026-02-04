"use client";
import { useState } from "react";
import BaseAlertDialog from "./BaseAlertDialog";
import ErrorAlert from "./ErrorAlert";
import useFinance from "./helper_hooks/useFinance";
function AddExpense({ setOpen, open }) {
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const { updateFinanceData, expenseError } = useFinance();
  const inputStyle = `border p-2 rounded`;
  return (
    <BaseAlertDialog
      open={open}
      onOpenChange={setOpen}
      title="Add Expense"
      description=" Please enter your expense details below"
    >
      {expenseError && (
        <ErrorAlert errorMessage={expenseError} isExpense={true} />
      )}
      <input
        placeholder="Enter Expense amount"
        type="text"
        className={inputStyle}
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
      />
      <input
        placeholder="Enter Expense's Category"
        type="text"
        className={inputStyle}
        value={expenseCategory}
        onChange={(e) => setExpenseCategory(e.target.value)}
      />
      <button
        onClick={() => {
          const expense = updateFinanceData({
            amount: expenseAmount,
            category: expenseCategory,
          });
          if (expense) setOpen(false);
        }}
        className="rounded-xl flex justify-center  hover:cursor-pointer hover:bg-black hover:text-white   hover:dark:bg-white hover:dark:text-black mt-4 p-2 duration-500"
      >
        Add Expense
      </button>
    </BaseAlertDialog>
  );
}

export default AddExpense;
