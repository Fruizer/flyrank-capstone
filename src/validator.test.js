const assert = require('assert');
const { validateUserInput } = require('./validator');

const test1 = validateUserInput({ username: '  ab ', email: 'test@example.com', password: 'password123' });
assert.strictEqual(test1.isValid, false, 'Should reject short usernames');

const test2 = validateUserInput({ username: 'lorenzo', email: 'invalid-email', password: 'password123' });
assert.strictEqual(test2.isValid, false, 'Should reject malformed emails');

const test3 = validateUserInput({ username: 'lorenzo', email: 'lorenzo@example.com', password: 'password123' });
assert.strictEqual(test3.isValid, true, 'Should accept valid input');

const test4 = validateUserInput(undefined);
assert.strictEqual(test4.isValid, false, 'Should handle undefined payload safely');

console.log("All terminal validator unit tests passed successfully!");
