import React from 'react'
import { Todo } from './model';
import './style.css'
import { TodoCard } from './TodoCard';
interface TodoListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<TodoListProps> = ({todos, setTodos}:TodoListProps) => {
        return (
            <div className='todos'>
                {todos.map((todo)=>(
                    <TodoCard todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                ))}
            </div>
        );
}