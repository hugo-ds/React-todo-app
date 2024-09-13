/**
 * Form to add new todos.
 *
 * This component is a form with a input field and a + button.
 * When the + button is clicked, the text in the input field is added to the todo list.
 * The input field is cleared after adding a new todo.
 */

import { useState } from 'react'
import { Plus } from 'lucide-react'

type Props = {
    addTodo: (title: string) => void
}

// Receive addTodo function as props.
export const AddTodoForm = ({ addTodo }: Props) => {
    const [inputValue, setInputValue] = useState('') // Store todo text input by user.

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // Prevent page reload.
        e.preventDefault()

        // Add todo to variable todoList.
        addTodo(inputValue)

        // Empty the input field.
        setInputValue('')
    }

    return (
        <form
            className='flex'
            onSubmit={onSubmit} // Submit when + button is pusshed.
        >
            <input
                type='text'
                placeholder='Input your todo'
                className='grow rounded-s bg-slate-200 p-2'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Save input value to variable inputValue
            />
            <button
                type='submit'
                className='rounded-e bg-blue-600 p-2 transition-colors hover:bg-blue-800 disabled:bg-gray-400'
                disabled={!inputValue}
            >
                <Plus className='text-white' />
            </button>
        </form>
    )
}
