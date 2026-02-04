import React from "react";

function DisplayExpenses({ expenses }) {
  return (
    <>
      {expenses?.map((expense) => (
        <div
          key={expense?.id}
          className=" cursor-pointer hover:-translate-y-2 duration-500 m-1.5 w-96 rounded-xl h-16 p-2.5 text-white  dark:bg-gray-800 bg-black"
        >
          <div className="flex justify-between ">
            <h1 className="font-bold text-xl">{expense?.category}</h1>
            <h2>{expense?.amount}$</h2>
          </div>
          <div className="flex justify-between text-sm">
            {expense?.date}
            <p>{expense?.time}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default DisplayExpenses;
