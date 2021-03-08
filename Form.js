import React from 'react';

function Form(props) {
    return (
        <div className="form container">
            <input placeholder="Введите текст..."
                   className="putText"
                   type="text"
                   value={props.text}
                   onChange={(e) => props.setText(e.target.value)}
            />
            <input className="tick" type="checkbox"/>
            <button onClick={props.addTodo} className="add">Add</button>
        </div>
    );
}

export default Form;