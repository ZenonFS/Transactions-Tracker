import { useGlobalState } from "../context/GlobalContext";
import { currencyFormat } from "../utils/functions";

function Balance() {
  const { transactions } = useGlobalState();

  const ammounts = transactions.map(({ ammount }) => ammount);
  const total = ammounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="flex justify-between">
      <h3 className="font-bold">Your Balance</h3>
      <h2 className="text-2xl">{currencyFormat(total)}</h2>
    </div>
  );
}

export default Balance;
