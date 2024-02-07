import { useGlobalState } from "../../context/GlobalState";
import { TransactionItem } from "./TransactionItem";

export const TransactionsList = () => {
  const { transactions } = useGlobalState();

  return (
    <div>
      <h3 className="text-2xl text-white font-bold w-full text-center p-2">History</h3>
      <ul className="overflow-y-auto max-h-96">
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
      </div>
  );
};
