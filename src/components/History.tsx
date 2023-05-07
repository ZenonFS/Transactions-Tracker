import TransactionList from "./transactions/TransactionList";

const History = () => {
  return (
    <div className="fixed rounded-lg bg-indigo-700 right-0 top-0 h-4/5 w-48 m-10 mt-28">
      <TransactionList />
    </div>
  );
};

export default History;
