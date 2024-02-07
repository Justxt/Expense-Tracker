import { GlobalProvider } from "./context/GlobalState";
import { Balance } from "./components/Balance";
import { TransactionForm } from "./components/transactions/TransactionForm";
import { TransactionsList } from "./components/transactions/TransactionsList";
import { IncomeExpenses } from "./components/transactions/IncomeExpenses";
import { ExpenseChart } from "./components/transactions/ExpenseChart";

export const App = () => {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-teal-300 h-screen flex justify-center items-center">
        <div className="container mx-auto w-3/6">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
            <div>
              <h1 className="text-4xl font-bold p-3">Expense Tracker</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex flex-col flex-1">
              <div className="order-1">
                <ExpenseChart />
              </div>
              <div className="order-2 flex-1">
                <TransactionsList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
};
