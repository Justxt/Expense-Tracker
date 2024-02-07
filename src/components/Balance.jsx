import { useGlobalState } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="justify-between">
      <h3 className="font-bold">Your Balance</h3>
      <h1 className="text-4xl font-bold p-5 text-center text-white">{total}</h1>
    </div>
  );
};
