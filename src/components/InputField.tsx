import React, { useRef } from 'react'
import './style.css'

interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

export const InputField: React.FC<InputFieldProps> = ({todo, setTodo, handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className='input' onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur()
            }}>
            <input 
                type="input" 
                placeholder='todo task' 
                className='input__box'
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button className='input_submit' type='submit'>Add</button>
        </form>
    );
}