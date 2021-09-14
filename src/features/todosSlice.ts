import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../Todo";
import { retrieveTodos } from "../usecases";

interface ToDosState {
    value: Todo[]
}

const initialState: ToDosState = {
    value: []
}

const toDosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        todoAdded: (state, action: PayloadAction<Todo>) => {
            state.value.push(action.payload);
        },
        todoReset: (state) => {
            state.value = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(retrieveTodos, (state, action) => {
            return action.payload.todos;
        });
    }
});

export const { todoAdded, todoReset } = toDosSlice.actions;
export default toDosSlice.reducer;