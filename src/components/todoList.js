import React from "react";
import Todo from "./Todo";

const TodoList = ( {todos, setTodos, filteredTodos,setStatus} ) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo 
                        setTodos={setTodos} 
                        todos={todos} 
                        key={todo.id} 
                        todo={todo}
                        text={todo.text}
                        setStatus={setStatus} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;