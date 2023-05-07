import { useGlobalState } from "../../context/GlobalContext";
import TransacionItem from "./TransacionItem";

function TransactionList() {
  const { transactions } = useGlobalState();
  return (
    <>
      <div className="bg-indigo-900 m-2 rounded-lg p-2">
        <h2 className="text-slate-200 text-lg text-center font-bold">
          History
        </h2>
      </div>
      <ul className="overflow-y-scroll max-h-96">
        {transactions.map((transaction) => (
          <TransacionItem transaction={transaction} key={transaction["id"]} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
