import React from 'react';

function Todo(props) {
    return (
        <div className="todo">
            <div className="todo-text">
                {props.text}
            </div>
            <div className="actions">
                <input className="checker" type="checkbox"/>
                <button onClick={() => props.deleteTodo(props.index)} className="deleteTodo">&#10006;</button>
            </div>
        </div>
    );
}

export default Todo;