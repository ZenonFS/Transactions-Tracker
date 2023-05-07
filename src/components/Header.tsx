import Balance from "./Balance";
import IncomesExpenses from "./IncomesExpenses";

function Header() {
  return (
    <div className="fixed left-0 top-0 w-full bg-zinc-800 p-2">
      <Balance />
      <IncomesExpenses />
    </div>
  );
}

export default Header;
