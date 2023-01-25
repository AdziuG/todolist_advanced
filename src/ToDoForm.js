import { useState } from 'react'
import { get, post } from './Fetcher'

const TodoForm = ({handleFetch}) => {
	const [id, setId] = useState('')
	const [text, setText] = useState('')
	const [isDone, setIsDone] = useState(false)
	const [dateTime, setDateTime] = useState('')
	const [isValid, setIsValid] = useState(false)

	const handleText = e => {
		e.target.value.length > 0 ? setIsValid(true) : setIsValid(false)
		setText(e.target.value)

	}

	const handleDate = e => {
		console.log(e.target.value)
		setDateTime(e.target.value)
	}
	const handleSubmit = e => {
		e.preventDefault()
		const preparedTodo = {
			id,
			text,
			isDone,
			dateTime: dateTime ? dateTime : new Date().toLocaleString()
		}
		post(preparedTodo)
		setText('')
		handleFetch()
	}

	return (
		<div className='container-fluid'>
			<form className='d-flex mt-3'>
				<input
					type='text'
					name='text'
					className={`form-control ml-2 + ${isValid ? '' : 'invalid'}`}
					placeholder='Wpisz zadanie...'
					onChange={handleText}
					autoFocus
					autoComplete='off'
					value={text}
				/>
				<input
					type='datetime-local'
					name='dateTime'
					className='form-control ml-2'
					placeholder='Podaj datę'
					onChange={handleDate}
					autoFocus
					autoComplete='off'
					value={dateTime}
				/>
				<button disabled={!isValid} type='submit' className='btn btn-dark btn-lg mx-2 px-3' onClick={handleSubmit}>
					+
				</button>
			</form>
		</div>
	)
}

export default TodoForm
