import { createStore } from "redux";
import { counter } from "../reducers";

export interface IStore {
    count: number;
}

export const initState: IStore = {
    count: 0
};

const store = createStore(counter);

export default store;
