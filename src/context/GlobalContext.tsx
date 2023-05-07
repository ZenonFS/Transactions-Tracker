import { createContext, useContext, useEffect, useReducer } from "react";
import AppReducer, { IState, TypeAction } from "./AppReducer";

const initialState: IState = {
  transactions: [],
  addTransaction: (transaction: ITransaction) => {},
  deleteTransaction: (
    id: `${string}-${string}-${string}-${string}-${string}`
  ) => {},
};

export const Context = createContext<IState>({
  transactions: [],
  addTransaction: (transaction: ITransaction) => {},
  deleteTransaction: (
    id: `${string}-${string}-${string}-${string}-${string}`
  ) => {},
});

export interface ITransaction {
  id: `${string}-${string}-${string}-${string}-${string}`;
  description: string;
  ammount: number;
}

export const useGlobalState = () => {
  return useContext(Context);
};

export const GlobalProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem("transactions");

    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  const addTransaction = (transaction: ITransaction) => {
    dispatch({ type: TypeAction.ADD_TRANSACTION, payload: transaction });
  };

  const deleteTransaction = (
    id: `${string}-${string}-${string}-${string}-${string}`
  ) => {
    dispatch({ type: TypeAction.DELETE_TRANSACTION, payload: id });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction: addTransaction,
        deleteTransaction: deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
