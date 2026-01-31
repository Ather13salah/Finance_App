import { useState } from "react";
import { X } from "lucide-react";
import BaseAlertDialog from "./BaseAlertDialog";
function AddExpense({ setOpen, open }) {
  const [error, setError] = useState("");

  return (
    <BaseAlertDialog
      open={open}
      onOpenChange={setOpen}
      title="Add Expense"
      description=" Please enter your expense details below"
    >
      <input placeholder="Add Expense"></input>
    </BaseAlertDialog>
  );
}

export default AddExpense;
