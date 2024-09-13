/**
 * List of todos
 *
 * This component renders a list of todos.
 *
 * It takes two props:
 * - `todoList`: An array of todos.
 * - `toggleCompleted`: A function that takes a todo id and toggles the completed value of the todo.
 * - `deleteTodo`: A function that takes a todo id and removes the todo from the list.
 *
 * It renders each todo as a list item with a checkbox and a button to delete the todo.
 * If the todo is completed, it renders the title with a strike-through style.
 */
import { Todo } from '../types/todo'
import { Trash2 } from 'lucide-react'

type Props = {
    todoList: Todo[]
    toggleCompleted: (id: number) => void
    deleteTodo: (id: number) => void
}

export const TodoList = ({ todoList, toggleCompleted, deleteTodo }: Props) => {
    return (
        <div className='space-y-3'>
            {todoList.map((todo) => (
                <div key={todo.id} className='flex items-center gap-3 rounded bg-white p-2'>
                    <label className='flex grow items-center gap-3 hover:cursor-pointer'>
                        <div className='flex items-center'>
                            <input
                                type='checkbox'
                                className='size-5'
                                checked={todo.completed}
                                onChange={() => toggleCompleted(todo.id)}
                            />
                        </div>
                        {/* completed is true => apply class, is false => do nothing. */}
                        <span className={todo.completed ? 'text-gray-400 line-through' : ''}>{todo.title}</span>
                    </label>
                    <button
                        type='button'
                        className='rounded bg-gray-200 p-2 transition-colors hover:bg-gray-300'
                        onClick={() => deleteTodo(todo.id)} // On click, alternate completed true <=> false.
                    >
                        <Trash2 className='size-5 text-gray-500' />
                    </button>
                </div>
            ))}
            {/* Show message if todoList is empty. */}
            {todoList.length === 0 && <p className='text-center text-sm'>There is no todo.</p>}
        </div>
    )
}
