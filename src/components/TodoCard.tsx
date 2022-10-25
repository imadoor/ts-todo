import React from 'react'
import { Todo } from './model';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import './style.css'

interface TodoCardProps {
    todo: Todo;
    key: number;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoCard: React.FC<TodoCardProps> = ({todo, key, todos, setTodos}:TodoCardProps) => {
        return (
            <form className="todo__single">
                <span className="todo__single--text" key={key}>{ todo.todo }</span>
                <div>
                    <span className="icon">
                        <AiFillEdit/>
                    </span>
                    <span className="icon">
                        <AiFillDelete/>
                    </span>
                    <span className="icon">
                        {!todo.isDone
                            ? <MdCheckBoxOutlineBlank/>
                            : <MdCheckBox/>
                        }
                    </span>
                </div>
            </form>
        );
}