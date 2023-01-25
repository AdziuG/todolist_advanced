import { buildTimeValue } from '@testing-library/user-event/dist/utils'
import { useEffect } from 'react'
import { remove, update } from './Fetcher'

const Todo = props => {
	const { id, text, isDone, dateTime, handleFetch } = props

	useEffect(() => {}, [props])

	const completeHandler = () => {
		update({
			...props,
			isDone: true,
		})
		handleFetch()
	}

	const deleteHandler = () => {
		remove(id)
		handleFetch()
	}

	return (
		<div className='todo bg-light mx-3 my-1 d-flex shadow-sm' key={id}>
			<li className={`todo-item m-2 + ${isDone ? 'text-decoration-line-through' : ''}`}>
				<div className='card'>
					{text} - {dateTime.toString().replace("T", " ")}
				</div>
			</li>
			<button type='button' className={`btn btn-sm btn-success px-3 mx-1 shadow-sm`} onClick={completeHandler}>
				✔️
			</button>
			<button type='button' className='btn btn-sm btn-danger px-3 shadow-sm' onClick={deleteHandler}>
				🗑️
			</button>
		</div>
	)
}

export default Todo
