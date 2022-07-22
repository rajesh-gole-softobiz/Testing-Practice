import capitalize from './capitalize';

test( 'test-case-1',() => {
  expect(capitalize('test')).toBe('Test');
});

test('test-case-2', () => {
  expect(capitalize('Test')).toBe('Test');
});

test('test-case-3', () => {
  expect(capitalize('TEST')).toBe('TEST');
});

test('test-case-4', () => {
  expect(capitalize('three word test')).toBe('Three word test');
});

test('test-case-5', () => {
  expect(capitalize('12@#abcd@#34')).toBe('12@#Abcd@#34');
});

test('test-case-6', () => {
  expect(capitalize('12@#Abcd@#34')).toBe('12@#Abcd@#34');
});

test('test-case-7', () => {
  expect(capitalize('1234')).toBe('no valid characters');
});

test('test-case-8', () => {
  expect(capitalize('@#$')).toBe('no valid characters');
});

test('test-case-9', () => {
  expect(capitalize(1234)).toBe('no valid characters');
});

test('test-case-10', () => {
  expect(capitalize('  aL2')).toBe('failed test case');
});
