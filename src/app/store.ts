import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../features/todosSlice";

export const store = configureStore({
    reducer: {
        [todosSlice.name]: todosSlice}
    
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>