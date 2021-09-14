import { store } from "../app/store";
import { selectors } from "../constants";
import todosSlice, { todoAdded, todoReset } from "../features/todosSlice";
import { retrieveTodos } from "../usecases";


describe("test list of todos", () => {
    test("should retrieve empty list when there is not todo", () => {
        expect(selectors.getToDosState(store.getState())).toEqual({
            [todosSlice.name]: {value: []}
        });
    });

    test("should retrieve todos when there are some", () => {
        store.dispatch(retrieveTodos({todos : {value: [
            {
                id: 1,
                text: "todo1"
            },
            {
                id: 2,
                text: "todo2"
            }
        ]}}));
        expect(selectors.getToDosState(store.getState())).toEqual({
            [todosSlice.name]: {value: [
                {
                    id: 1,
                    text: "todo1"
                },
                {
                    id: 2,
                    text: "todo2"
                }
            ]}
        });     
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
    
        expect(selectors.getToDosState(store.getState())).toEqual({
            [todosSlice.name]: {value: [
                {
                    id: 1,
                    text: "todo1"
                },
                {
                    id: 2,
                    text: "todo2"
                }
            ]}
        });
    });
    
});