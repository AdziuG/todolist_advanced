import TodoForm from './ToDoForm'
import TodoList from './TodoList'
import { useState } from 'react'
import Header from './Header'

const ToDoModule = () => {

	const [isCurrent, setIsCurrent] = useState(false)

	const handleFetch = () => {
		setTimeout(() => {
			setIsCurrent(!isCurrent)
		}, 2000)
	}

	return (
		<div className='todo-app'>
			<Header />
			<TodoForm handleFetch={handleFetch}/>
			<TodoList onFetch={isCurrent}/>
		</div>
	)
}

export default ToDoModule
