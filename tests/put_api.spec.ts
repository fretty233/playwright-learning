const { test, expect } = require('@playwright/test');
test('PUT API', async ({ request }) => {

  const response = await request.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      data: {
        id: 1,
        title: 'Updated Title',
        body: 'Updated Body',
        userId: 1
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.title).toBe('Updated Title');
});