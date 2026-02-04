"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { X } from "lucide-react";
import useFinance from "./helper_hooks/useFinance";
function ErrorAlert({ errorMessage, isExpense = false }) {
  const { setError, setExpenseError } = useFinance();
  return (
    <Alert variant="destructive" className=" relative max-w-md m-4">
      <X
        className=" absolute top-1 right-1 cursor-pointer"
        onClick={() => (isExpense ? setExpenseError("") : setError(""))}
      />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{errorMessage}</AlertDescription>
    </Alert>
  );
}

export default ErrorAlert;
