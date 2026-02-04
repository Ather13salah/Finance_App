import { Progress } from "@/components/ui/progress";


function MonthlySpending({percentageSpent,monthlyExpenses,balance}) {
  return (
    <div className="w-1/2 h-62 text-white  dark:bg-gray-800 bg-black p-4 border rounded-lg flex flex-col justify-center gap-4">
          <h1 className="text-2xl font-bold">Monthly Spending</h1>
          <p className="font-bold text-2xl">{percentageSpent}% Used</p>
          <Progress
            className="w-full h-4 rounded-lg bg-gray-100 dark:bg-gray-700 [&>div]:bg-blue-500 dark:[&>div]:bg-blue-400"
            value={percentageSpent}
          />
          <div className="w-full flex justify-between">
            <p className="">Spent: ${monthlyExpenses}</p>
            <p>Remaninig: ${balance}</p>
          </div>
        </div>
  )
}

export default MonthlySpending
