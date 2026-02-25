const data = require('../data/sampleData.json');

describe('Sample Data Validation', () => {
	test('All items have numeric value > 0', () => {
		data.forEach(item => {
			expect(typeof item.value).toBe('number');
			expect(item.value).toBeGreaterThan(0);
		});
	});
});
