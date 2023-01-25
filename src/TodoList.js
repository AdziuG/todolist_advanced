import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import { get } from './Fetcher'

const TodoList = ({onFetch}) => {
	const [todos, setTodos] = useState([])
	const [isCurrent, setIsCurrent] = useState(false)


	useEffect(() => {
		getTodos()
	}, [isCurrent, onFetch])

	const getTodos = async () => {
		const todoList = []
		await get().then(data => {
			Object.keys(data).forEach(key => {
				const todo = data[key]
				todoList.push({
					...todo,
					id: key,
				})
			})
			setTodos(todoList)
		})
	}

	const handleFetch = () => {
		setTimeout(() => {
			setIsCurrent(!isCurrent)
		}, 2000)
	}

	return todos.map(todo => (
		<Todo key={todo.id} id={todo.id} text={todo.text} isDone={todo.isDone} dateTime={todo.dateTime} handleFetch={handleFetch} />
	))
}

export default TodoList
