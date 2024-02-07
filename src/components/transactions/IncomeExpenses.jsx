import React from "react";
import { useGlobalState } from "../../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expenses =
    amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2) * -1;

  return (
    <>
      <div className="flex justify-between my-2 p-3">
        <h4>Income</h4>
        <p className="text-white font-bold">${income}</p>
      </div>
      <div className="flex justify-between my-2 p-3">
        <h4>Expenses</h4>
        <p className="text-white font-bold">${expenses}</p>
      </div>
    </>
  );
};
