export const  getTheIncome = () => {
    const error = { data: null, error: "Failed to receive income data." };
    try {
      const financeData = JSON.parse(localStorage.getItem("finance"));

      return financeData ? financeData : error;
    } catch (e) {
      return error;
    }
  };
export default getTheIncome