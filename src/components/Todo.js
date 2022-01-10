import React, {useState} from "react";

const Todo = ( {text,todo,todos,setTodos,setStatus} ) => {

    const [editLocal, setEditLocal] = useState(false);
    const [localText,setLocalText]=useState(todo.text)

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    const textHandler = (e) => {
        setLocalText(e.target.value);
    };

    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return {
                        ...item, 
                        completed: !item.completed
                    }; 
                }
                return item;
            })
        );
    };

    const editHandler = () => {
        setEditLocal(true)
    };

    const saveData = () => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                   
                        return {
                            ...item,
                         
                            text:localText
                        };
                    
                }
                return item;
            })
        );

        setEditLocal(false)
    };

    const output = (item) => {
        if(item.edited === true){
            <input className="todo-item">{text}</input>
        }else{
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                    {text}
            </li>
        }
    };


    return(
        <div className="todo">

            {editLocal ? 
             <input  type="text" defaultValue={text}   onBlur={textHandler}/>:
                <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                    {text}
                </li>
            }

            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={editLocal?saveData:editHandler} className={editLocal ? "save-btn" : "edit-btn"}>
                <i className={editLocal? "fas fa-save" : "fas fa-edit"}></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;