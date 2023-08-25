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

// 35. Search Insert Position
// use O(logn) which is binary search algorithm

function searchInserPosition(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return left;
}

// 69. Sqrt(x)

function sqrt(x) {
  if (x === 0) return 0;

  let left = 1;
  let right = Math.floor(x / 2) + 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sqr = mid * mid;

    if (sqr === x) return mid;
    else if (sqr < x) left = mid + 1;
    else right = mid - 1;
  }

  return right; // if the space root not found return the value of right;
}
