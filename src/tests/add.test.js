const add = (a, b) => a+b;
const generateGreeting = (name = "Anymymous") => `Hello ${name}`;


test('name of the test, should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('generateGreeting', () => {
  const result = generateGreeting('Peter');
  expect(result).toBe('Hello Peter');
});

test('generateGreeting without parameter', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anymymous');
});
