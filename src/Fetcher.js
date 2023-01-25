export const post = data => {
	fetch('https://authproject-e1798-default-rtdb.europe-west1.firebasedatabase.app/todos.json', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
		body: JSON.stringify(data),
	})
		.then(response => response.json())
		.then(data => {
			console.log('Success:', data)
		})
		.catch(error => {
			console.error('Error:', error)
		})
}

export const get = async () => {
	return await fetch('https://authproject-e1798-default-rtdb.europe-west1.firebasedatabase.app/todos.json', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	}).then(response => response.json())
}

export const remove = id => {
	fetch(`https://authproject-e1798-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	})
		.then(response => response.json())
		.then(data => {
			console.log('Success:', data)
		})
		.catch(error => {
			console.error('Error:', error)
		})
}

export const update = data => {
	fetch(`https://authproject-e1798-default-rtdb.europe-west1.firebasedatabase.app/todos/${data.id}.json`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
		body: JSON.stringify(data),
	})
		.then(response => response.json())
		.then(data => {
			console.log('Success:', data)
		})
		.catch(error => {
			console.error('Error:', error)
		})
}
