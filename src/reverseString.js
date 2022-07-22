const reverseString = (string) => {
    if (typeof string === 'string') {
      const splitStr = string.split('');
      const rev = splitStr.reverse();
      const newString = rev.join('');
      return newString;
    }
    return 'not a string';
  };
  
  export default reverseString;
  