function TopCategory({ expenses }) {
  const topCategory = expenses?.reduce(
    (curr, expense) =>
      Number(expense.amount) > Number(curr.amount) ? expense : curr,
    { amount: 0 },
  );

  return (
    <div className="dark:bg-gray-800 p-4 rounded-xl flex-col flex ml-4 text-white w-56 h-32 mt-3 bg-black">
      Top Category:
      <div className="text-2xl font-bold">
        {/* Replace with dynamic category data */}
        <div>{topCategory?.category}</div>
        <p className="text-xl font-semibold">${topCategory?.amount}</p>
      </div>
    </div>
  );
}

export default TopCategory;
