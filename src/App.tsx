import { GlobalProvider } from "./context/GlobalContext";
import TransactionForm from "./components/transactions/TransactionForm";
import ExpernseChart from "./components/ExpernseChart";
import Header from "./components/Header";
import Menu from "./components/Menu";
import History from "./components/History";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center">
        <Header />
        <Menu />
        <History />
        <div className="container mx-auto w-3/6 mt-20 max-h-min">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
            <div>
              <TransactionForm />
            </div>
            <div className="flex flex-col flex-1">
              <ExpernseChart />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
