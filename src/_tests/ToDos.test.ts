import { store } from "../app/store";
import { todoAdded, todoReset } from "../reducers/todosSlice";
import { actions, selectors } from "..";


describe("test list of todos", () => {

    test("should retrieve empty list when there is not todo", () => {
        expect(selectors.selectAllTodos(store.getState())).toEqual({todos: []});
    });

    test("should retrieve todos when there are some", () => {
        store.dispatch(actions.setTodos({
            todos : [
                {
                    id: 1,
                    text: "todo1"
                },
                {
                    id: 2,
                    text: "todo2"
                }
            ]
        }));
        expect(selectors.selectAllTodos(store.getState())).toEqual({
            todos: [
                {
                    id: 1,
                    text: "todo1"
                }, 
                {
                    id: 2,
                    text: "todo2"
                }
            ]
        })     
    });

    test("reset and add todos", () => {
        store.dispatch(todoReset())
        store.dispatch(todoAdded(
            {
                id: 1,
                text: "todo1"
            }
        ));
        store.dispatch(todoAdded(
            {
                id: 2,
                text: "todo2"
            }
        ));
        expect(selectors.selectAllTodos(store.getState())).toEqual({
            todos: [
                {
                    id: 1,
                    text: "todo1"
                },
                {
                id: 2,
                text: "todo2"
                }
            ]
        });
    });    
    
});