import { useContext } from "react";
import { FinanceContext } from "@/app/contexts/FinanceContex";
function useFinance() {
  return useContext(FinanceContext);
}

export default useFinance;
