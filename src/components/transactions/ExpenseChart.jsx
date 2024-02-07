import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../../context/GlobalState";

export const ExpenseChart = () => {
  const { transactions } = useGlobalState();

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpenses =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

      const totalExpensesPercentage =  Math.round((totalExpenses / totalIncome) * 100)
      const totalIncomePorcentage = 100 - totalExpensesPercentage;

  return (
    <VictoryPie
      colorScale={["#ffffff", "#81e6d9"]}
      data={[
        { x: "Incomes", y: totalExpensesPercentage },
        { x: "Expenses", y: totalIncomePorcentage },
      ]}
      labels={({ datum }) => `${datum.y}`}
      labelComponent={
        <VictoryLabel
          angle={45}
          style={{
            fill: "white",
          }}
        />
      }
    />
  );
};
