import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setTodos } from "../actions";
import { Todo } from "../interfaces/Todo";


export const todosAdapter = createEntityAdapter<Todo>();

const todosSlice = createSlice({
    name: "todos",
    initialState: todosAdapter.getInitialState(),
    reducers: {
        todoAdded: (state, action: PayloadAction<Todo>) => {
            todosAdapter.setOne(state, action.payload);           
        },
        todoReset: (state) => {
            todosAdapter.removeAll(state);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setTodos, (state, action) => {
            todosAdapter.setAll(state, action.payload.todos);
        });
    }
});

export const { todoAdded, todoReset } = todosSlice.actions;
export default todosSlice.reducer;