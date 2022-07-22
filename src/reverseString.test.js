import reverseString from './reverseString';

test( 'test-case-1',() => {
 //expect(received).toBe(expected) 
  expect(reverseString('test?')).toBe('?tset');
});

test('test-case-2', () => {
    expect(reverseString('test')).toBe('tset');
  });
  
  test('test-case-3', () => {
    expect(reverseString('what about spaces')).toBe('secaps tuoba tahw');
  });
  
  test('test-case-4', () => {
    expect(reverseString('12345')).toBe('54321');
  });
  
  test('test-case-5', () => {
    expect(reverseString(12345)).toBe('not a string');
  });