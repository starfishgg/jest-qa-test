const axios = require('axios');

describe('Posts API Tests', () => {
	test('Fetch post by ID returns correct userId', async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
		expect(response.status).toBe(200);
		expect(response.data.userId).toBe(1);
	});

	test('All posts have required fields', async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
		response.data.forEach(post => {
			expect(post).toHaveProperty('userId');
			expect(post).toHaveProperty('id');
			expect(post).toHaveProperty('title');
			expect(post).toHaveProperty('body');
		});
	});
});
