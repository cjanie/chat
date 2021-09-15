import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../reducers/todosSlice";

export const store = configureStore({
    reducer: {
        [todosSlice.name]: todosSlice}
    
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>