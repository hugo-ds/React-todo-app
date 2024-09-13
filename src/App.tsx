/**
 * This is the main application component.
 *
 * It uses the useTodoList hook to get the todo list state and the functions to modify it.
 *
 * The component renders a heading, a form to add new todos, a list of existing todos, and a button to delete all completed todos.
 */

import { TodoList } from './components/TodoList'
import { AddTodoForm } from './components/AddTodoForm'
import { TodoDeleteCompleted } from './components/TodoDeleteCompleted'

import { useTodoList } from './hooks/useTodoList'

function App() {
    // Custom hook. Separate todo related functions in another file.
    const { todoList, toggleCompleted, addTodo, deleteTodo, deleteAllCompleted } = useTodoList()

    return (
        <main className='mx-auto mt-10 max-w-xl space-y-10'>
            <h1 className='text-center text-4xl'>Todo App</h1>
            <div className='space-y-5'>
                {/* A form to add new todos. */}
                <AddTodoForm addTodo={addTodo} />

                <div className='space-y-5 rounded bg-slate-200 p-5'>
                    {/* List of all todos. */}
                    <TodoList todoList={todoList} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
                    <TodoDeleteCompleted deleteAllCompleted={deleteAllCompleted} />
                </div>
            </div>
        </main>
    )
}

export default App
