import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalContext";

const ExpernseChart = () => {
  const { transactions } = useGlobalState();

  const incomes = transactions
    .filter(({ ammount }) => ammount > 0)
    .reduce((acc, { ammount }) => (acc += ammount), 0);

  const expenses =
    transactions
      .filter(({ ammount }) => ammount < 0)
      .reduce((acc, { ammount }) => (acc += ammount), 0) * -1;

  const totalExpensesPercentage = Math.round((expenses / incomes) * 100);
  const totalIncomesPercentage = 100 - totalExpensesPercentage;

  return (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Expenses", y: totalExpensesPercentage },
        { x: "Incomes", y: totalIncomesPercentage },
      ]}
      animate={{ duration: 200 }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
    />
  );
};

export default ExpernseChart;
