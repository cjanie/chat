import { useState } from "react";
import { TodoTextInput } from "./TodoTextInput";


export function TodoItem() {

    const [editing, setEditing] = useState(true);

    function getElement() {
        if(!editing) 
            return (<p>Not editing</p>)
        return (<TodoTextInput placeholder="edit"/>)
    }

    return (
        <div>
            {getElement()}
            
        </div>
    );
}