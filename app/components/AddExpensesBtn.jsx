function AddExpensesBtn({ setOpen }) {
  return (
    <button
      onClick={() => setOpen(true)}
      className="flex justify-start items-center px-2 bg-white text-black m-2  cursor-pointer w-64  h-8 rounded-md mt-2 dark:bg-white dark:text-black"
    >
      + Add Expense
    </button>
  );
}

export default AddExpensesBtn;
