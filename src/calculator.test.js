import calculator from './calculator';

test('test-case-1', () => {
  expect(calculator.add(4, 2)).toBe(6);
});

test('test-case-2', () => {
  expect(calculator.add(-4, 2)).toBe(-2);
});

test('test-case-3', () => {
  expect(calculator.add(0.5, 0.2)).toBe(0.7);
});

test('test-case-4', () => {
  expect(calculator.add('4', 2)).toBe('Non-number are not accaptable');
});

test('test-case-5', () => {
  expect(calculator.sub(4, 2)).toBe(2);
});

test('test-case-6', () => {
  expect(calculator.sub(-4, 2)).toBe(-6);
});

test('test-case-7', () => {
  expect(calculator.sub(0.5, 0.2)).toBe(0.3);
});

test('test-case-8', () => {
  expect(calculator.sub('4', 2)).toBe('Non-number are not accaptable');
});

test('test-case-9', () => {
  expect(calculator.div(4, 2)).toBe(2);
});

test('test-case-10', () => {
  expect(calculator.div(-4, 2)).toBe(-2);
});

test('test-case-11', () => {
  expect(calculator.div(0.5, 0.2)).toBe(2.5);
});

test('test-case-12', () => {
  expect(calculator.div('4', 2)).toBe('Non-number are not accaptable');
});

test('test-case-13', () => {
  expect(calculator.mul(4, 2)).toBe(8);
});

test('test-case-14', () => {
  expect(calculator.mul(-4, 2)).toBe(-8);
});

test('test-case-15', () => {
  expect(calculator.mul(0.5, 0.2)).toBe(0.1);
});

test('test-case-16', () => {
  expect(calculator.mul('4', 2)).toBe('Non-number are not accaptable');
});
