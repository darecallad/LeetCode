// 13. RomanToInt

function romanToInt(s) {
  // set Romanvalue chat
  const romanValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currentValue = romanValue[s[i]];
    const nextValue = romanValue[s[i + 1]];

    if (nextValue && nextValue > currentValue)
      result =
        result -
        currentValue; // if next value is grater than current value, we - current value;
    else result = result + currentValue;
  }

  return result;
}
