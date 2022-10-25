import React from 'react'
import './style.css'

interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

export const InputField: React.FC<InputFieldProps> = ({todo, setTodo, handleAdd}) => {
        return (
            <form className='input' onSubmit={handleAdd}>
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