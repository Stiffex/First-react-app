import React from 'react';
import Header from "./Header";
import Form from "./Form";
import Todos from "./Todos";
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css";
import {useState} from "react";

function App(props) {

    const [todos, setTodos] = useState([
        {
            text: "Купить Macbook Pro M1",
            done: false
        },
        {
            text: "Стать React разработчиком",
            done: false
        },
        {
            text: "Устроиться на работу",
            done: false
        },
        {
            text: "Сходить в магазин",
            done: false
        }
    ]);

    const deleteTodo = (indexOfElem) => {
        const filtered = todos.filter((todo, index) => {
            if(index === indexOfElem) {
                return false;
            }

            return true;
        });

        setTodos(filtered);
    }

    const [text, setText] = useState("");

    const addTodo = () => {
        setTodos([{
            text: text,
        }, ...todos])

        setText("");
    }

    return (
        <div className="body">
            <div className="app">
                <Header />
                <Form
                    addTodo={addTodo}
                    text={text}
                    setText={setText}
                    index={todos.index}
                />
                <Todos
                    todos={todos}
                    text={props.text}
                    deleteTodo={deleteTodo}
                />
            </div>
        </div>
    );
}

export default App;