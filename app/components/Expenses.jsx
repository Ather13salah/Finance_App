import Link from "next/link";
function Expenses({ expenses }) {
  return (
    <div className="flex flex-row ">
      <div className="font-bold p-1.5 text-2xl">Last Expenses:</div>
      <div className="ml-42 mt-2 hover:underline flex flex-row  duration-750 cursor-pointer">
        {" "}
        {expenses?.length > 5 && <Link href={"/expenses"}>View All </Link>}
      </div>
    </div>
  );
}

export default Expenses;
