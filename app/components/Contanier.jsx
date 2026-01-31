
function Contanier({text,amount}) {
  return (
    <div className="bg-gray-200 text-black dark:text-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-42 h-24 m-4 flex flex-col items-start">
      <p>{text}</p>
      <p className="font-bold text-3xl">${amount}</p>
    </div>
  )
}

export default Contanier
