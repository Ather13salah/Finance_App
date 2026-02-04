'use client'
import BaseAlertDialog from "./BaseAlertDialog";
import { useState } from "react";
import ErrorAlert from "./ErrorAlert";
import useFinance from "./helper_hooks/useFinance";
function AddIncome({ setIsOpen, isOpen }) {
  // this component allows user to add income details

  const [income, setIncome] = useState("");
  const { saveTheIncome ,error,setError } = useFinance();
  const saveIncome = () => {
    // Function to save income details
    if (!income || isNaN(income)) {
      setError("Please enter a valid number");
      return;
    }
    // Save income logic here
    const savedIncome = saveTheIncome(Number(income));
    if(savedIncome) setIsOpen(false);
  }; 
  return (
    <BaseAlertDialog
      title="Add Income"
      description="Please enter your income amount"
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      {error && <ErrorAlert errorMessage={error} setError={setError}/>}
      <input
        type="text"
        placeholder="Enter income amount"
        className="border p-2 rounded"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <button
        onClick={saveIncome}
        className="rounded-xl flex justify-center  hover:cursor-pointer hover:bg-black hover:text-white   hover:dark:bg-white hover:dark:text-black mt-4 p-2 duration-500"
      >
        Save
      </button>
    </BaseAlertDialog>
  );
}

export default AddIncome;
