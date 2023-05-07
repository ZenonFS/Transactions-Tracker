import { useGlobalState } from "../context/GlobalContext";
import { currencyFormat } from "../utils/functions";

const IncomesExpenses = () => {
  const { transactions } = useGlobalState();

  const ammounts = transactions.map(({ ammount }) => ammount);
  const incomes = ammounts
    .filter((ammount) => ammount > 0)
    .reduce((acc, income) => (acc += income), 0);
  const expenses =
    ammounts
      .filter((ammount) => ammount < 0)
      .reduce((acc, expense) => (acc += expense), 0) * -1;

  return (
    <>
      <div className="flex">
        <h4 className="italic">Incomes:</h4>
        <h4 className="italic ml-2">{currencyFormat(incomes)}</h4>
        <h4 className="italic ml-2">Expenses </h4>
        <h4 className="italic ml-2">{currencyFormat(expenses)}</h4>
      </div>
    </>
  );
};

export default IncomesExpenses;
