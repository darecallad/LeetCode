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

    if (nextValue && nextValue > currentValue) result = result - currentValue;
    // if next value is grater than current value, we - current value;
    else result = result + currentValue;
  }

  return result;
}

// 283. Move Zeros

function moveZeros(nums) {
  // noneZero index
  let noneZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) nums[noneZero++] = nums[i]; // move none zero element to the correct position
  }
  for (let i = noneZero; i < nums.length; i++) nums[i] = 0; //fill the remaining positions with zeros
}
