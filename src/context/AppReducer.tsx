import { ITransaction } from "./GlobalContext";

export enum TypeAction {
  ADD_TRANSACTION = "ADD_TRANSACTION",
  DELETE_TRANSACTION = "DELETE_TRANSACTION",
}

export interface IState {
  transactions: ITransaction[];
  addTransaction: (transaction: ITransaction) => void;
  deleteTransaction: (
    id: `${string}-${string}-${string}-${string}-${string}`
  ) => void;
}

export default (state: IState, action: { type: TypeAction; payload: any }) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case TypeAction.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
