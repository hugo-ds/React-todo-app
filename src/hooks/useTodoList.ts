/**
 * useTodoList
 *
 * This is a custom hook for managing todo list state.
 *
 * It uses the useState hook to save the todo list to the component's state.
 * It also uses the useEffect hook to save the todo list to local storage.
 *
 * The hook returns the todo list, and four functions to modify it.
 *
 * 1. addTodo: Add a new todo to the list.
 * 2. toggleCompleted: Toggle the completion of a todo.
 * 3. deleteTodo: Delete a todo from the list.
 * 4. deleteAllCompleted: Delete all completed todos from the list.
 */

import { useEffect, useState } from 'react'
import { Todo } from '../types/todo'

export const useTodoList = () => {
    const [todoList, setTodoList] = useState<Todo[]>(() => {
        // Get Todo from local storage
        const localStorageTodoList = localStorage.getItem('todoList')

        // Convert to array
        return JSON.parse(localStorageTodoList ?? '[]')
    })

    // Executed when the value of the second argument "todoList" changes
    useEffect(() => {
        // Save the todo list to local storage
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }, [todoList])

    // Toggle the completion of the target Todo
    const toggleCompleted = (id: number) => {
        // The previous Todo list can be called as an argument
        setTodoList((prevTodoList) => {
            return prevTodoList.map((todo) => {
                // If the target id is the same, toggle the completed status
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }

                // For other todos, return as is
                return todo
            })
        })
    }

    // Add a Todo to the list
    const addTodo = (title: string) => {
        setTodoList((prevTodoList) => {
            // Create a new Todo
            const newTodo = {
                id: Date.now(),
                title,
                completed: false,
            }

            // Combine with the previous Todo list
            return [newTodo, ...prevTodoList]
        })
    }

    // Delete a Todo
    const deleteTodo = (id: number) => {
        setTodoList((prevTodoList) => {
            // Leave only the Todos that are not the target id
            return prevTodoList.filter((todo) => {
                return todo.id !== id
            })
        })
    }

    // Delete all completed Todos
    const deleteAllCompleted = () => {
        setTodoList((prevTodoList) => {
            // Leave only the Todos that are not completed
            return prevTodoList.filter((todo) => {
                return !todo.completed
            })
        })
    }

    return {
        todoList,
        toggleCompleted,
        addTodo,
        deleteTodo,
        deleteAllCompleted,
    }
}
