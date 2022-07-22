const isValidArguments = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return false;
    } else {
      return true;
    }
  };
  
  const add = (a, b) => {
    if (isValidArguments(a, b)) {
      return a + b;
    }
    return 'Non-number are not accaptable';
  };
  
  const sub = (a, b) => {
    if (isValidArguments(a, b)) {
      return a - b;
    }
    return 'Non-number are not accaptable';
  };
  
  const div = (a, b) => {
    if (isValidArguments(a, b)) {
      return a / b;
    }
    return 'Non-number are not accaptable';
  };
  
  const mul = (a, b) => {
    if (isValidArguments(a, b)) {
      return a * b;
    }
    return 'Non-number are not accaptable';
  };
  
  const calculator = {
    add,
    sub,
    div,
    mul,
  };
  
  export default calculator;
  