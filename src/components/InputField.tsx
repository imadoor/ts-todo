import React from 'react'

interface InputFieldProps {

}

export const InputField: React.FC<InputFieldProps> = ({}) => {
        return (
            <form className='input'>
                <input type="input" placeholder='todo task' className='input__box'/>
                <button className='input__submit' type='submit'>Add</button>
            </form>
        );
}