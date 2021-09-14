import { createAction } from "@reduxjs/toolkit";
import { Todo } from "../Todo";

export const retrieveTodos = createAction<{ todos: {value: Todo[]} }>("todos/retrieveTodos");
