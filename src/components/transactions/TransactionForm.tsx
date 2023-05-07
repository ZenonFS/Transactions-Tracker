import { FormEvent, useState } from "react";
import { useGlobalState } from "../../context/GlobalContext";

function TransactionForm() {
  const [description, setDescription] = useState("");
  const [ammount, setAmmount] = useState(0);

  const { addTransaction } = useGlobalState();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTransaction({ id: window.crypto.randomUUID(), ammount, description });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label className="font-bold"> Tracker</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Enter a Description"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <input
          type="number"
          step={0.01}
          name="value"
          id="value"
          placeholder="00.00"
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          onChange={(e) => setAmmount(Number(e.target.value))}
        />
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
