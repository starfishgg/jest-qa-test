const axios = require('axios');

describe('User API Tests', () => {
	test('Fetch user by ID returns correct name', async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
		expect(response.status).toBe(200);	// http response 'OK' code
		expect(response.data.name).toBe('Leanne Graham')	// the first user
	});

	test('Fetch all users returns array', async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		expect(Array.isArray(response.data)).toBe(true);
		expect(response.data.length).toBeGreaterThan(0);
	});
});
