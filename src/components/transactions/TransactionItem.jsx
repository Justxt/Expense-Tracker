import { useGlobalState } from "../../context/GlobalState";

export const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm font-bold">{transaction.description}</p>
      <div>
        <span className="font-bold">${transaction.amount}</span>
        <button
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
          className="bg-violet-600 px-3 rounded-lg ml-2 font-bold"
        >
          X
        </button>
      </div>
    </li>
  );
};
