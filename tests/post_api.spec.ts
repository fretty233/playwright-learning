const { test, expect } = require('@playwright/test');
test('POST API', async ({ request }) => {

  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'QA playwright API Testing',
        body: 'Playwright API Testing',
        userId: 1
      }
    }
  );

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.title).toBe('QA playwright API Testing');

  console.log(body);
});