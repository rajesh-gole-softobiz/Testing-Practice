import caeserCipher from './caeserCipher';

test('test-case: 1', () => {
  expect(caeserCipher('aaabbbccc')).toBe('bbbcccddd');
});

test('test-case: 2', () => {
  expect(caeserCipher('aAabBbzZz')).toBe('bBbcCcaAa');
});

test('test-case: 3', () => {
  expect(caeserCipher('a1ab#bc c')).toBe('b1bc#cd d');
});

test('test-case: 4', () => {
  expect(caeserCipher(1)).toBe('not a string');
});