/**
 * Delete all completed todos.
 *
 * This component is a button that deletes all completed todos from the list.
 */

type Props = {
    deleteAllCompleted: () => void
}

export const TodoDeleteCompleted = ({ deleteAllCompleted }: Props) => {
    return (
        <div className='flex justify-end'>
            <button onClick={deleteAllCompleted} className='text-sm text-red-500'>
                Delete completed todos
            </button>
        </div>
    )
}
