import { ITransaction, useGlobalState } from "../../context/GlobalContext";
import { currencyFormat } from "../../utils/functions";

interface IProps {
  transaction: ITransaction;
}

const TransacionItem = ({
  transaction: { ammount, description, id },
}: IProps) => {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mx-2 mb-2 w-auto flex justify-between items-center">
      <div>
        <p className="text-sm">{description}</p>
        <span>{currencyFormat(ammount)}</span>
      </div>
      <button
        onClick={() => {
          deleteTransaction(id);
        }}
        className="bg-red-500 m-2 p-2 rounded-lg"
      >
        x
      </button>
    </li>
  );
};

export default TransacionItem;
