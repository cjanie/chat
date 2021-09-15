import { RootState } from "../app/store";
import todosSlice, { todosAdapter } from "../reducers/todosSlice";

const todosSelectors = todosAdapter.getSelectors<RootState>((state) => state[todosSlice.name]);

export const selectAllTodos = (state: RootState) => {
    const todos = todosSelectors.selectAll(state);
    return {
        todos
    }; // returns an object so that we can add other elements in the object
};