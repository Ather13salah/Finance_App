import BaseAlertDialog from "./BaseAlertDialog";
import { useState } from "react";
import { saveTheIncome } from "./manage_income";
import ErrorAlert from "./ErrorAlert";

function AddIncome({ setIsOpen, isOpen }) {
  // this component allows user to add income details
  const [error, setError] = useState("");
  const [income, setIncome] = useState("");
  const saveIncome = (amount) => {
    // Function to save income details
    if (!amount || isNaN(amount)) {
      setError("Please enter a valid number");
      return;
    }
    // Save income logic here
    saveTheIncome(amount);
    setIsOpen(false);
  };
  return (
    <BaseAlertDialog
      title="Add Income"
      description="Please enter your income amount"
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      {error && <ErrorAlert errorMessage={error} />}
      <input
        type="text"
        placeholder="Enter income amount"
        className="border p-2 rounded"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <button
        onClick={() => saveIncome(income)}
        className="rounded-xl flex justify-center  hover:cursor-pointer hover:bg-black hover:text-white   hover:dark:bg-white hover:dark:text-black mt-4 p-2 duration-500"
      >
        Save
      </button>
    </BaseAlertDialog>
  );
}

export default AddIncome;
