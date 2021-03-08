import React from 'react';
import Todo from "./Todo";

function Todos(props) {
    return (
        <div className="todos">
            {props.todos.map((todo, index) => {
                return <Todo
                    text={todo.text}
                    deleteTodo={props.deleteTodo}
                    index={index}
                />
            })
            }
        </div>
    );
}

export default Todos;