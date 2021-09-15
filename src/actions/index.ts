import { createAction } from "@reduxjs/toolkit";
import { Todo } from "../interfaces/Todo";

export const setTodos = createAction<{ todos: Todo[] }>("todos/setTodos");

