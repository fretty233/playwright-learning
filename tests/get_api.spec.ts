const { test, expect } = require('@playwright/test');

test('GET users API', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(1);
  expect(body.name).toBe('Leanne Graham');

  console.log(body);
});