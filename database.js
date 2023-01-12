const fakeDb = [
	{ name: 'Lovisa', password: 'hej123' }
]

// function userExist(userName) {}

function authenticateUser(userName, password) {
	// Tips: Array.some
	const found = fakeDb.find(user => user.name === userName && user.password === password)

	return Boolean(found)
}

export { authenticateUser }
