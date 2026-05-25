const { test, expect } = require('@playwright/test');

test('response body validation', async ({ request }) => {

  const response = await request.get('https://jsonplaceholder.typicode.com/todos/1');

  // validate status
  expect(response.status()).toBe(200);

  // convert response to json
  const body = await response.json();

  // validate response body
  expect(body.id).toBe(1);
  expect(body.userId).toBe(1);
  expect(body.title).toContain('delectus');
  expect(body.completed).toBe(false);

});