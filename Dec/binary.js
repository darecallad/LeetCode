// sum of two integers
var getSum = function (a, b) {
  while (b !== 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
};

var getSum = function (a, b) {
  while (b !== 0) {
    carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
};

var getSum = function (a, b) {
  while (b !== 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
};

var hammingWeight = function (n) {
  let count = 0;

  while (n !== 0) {
    count = (count + n) & 1;
    n >>>= 1;
  }
  return count;
};

var hammingWeight = function (n) {
  let count = 0;

  while (n !== 0) {
    count += n & 1;
    n >>>= 1;
  }
  return count;
};

var hammingWeight = function (n) {
  let count = 1;
  while (n !== 0) {
    count += n & 1;
    n >>>= 1;
  }
  return count;
};

var countBits = function (n) {
  const result = [];
  for (let i = 0; i <= n; i++) {
    result.push(i.toString(2).split("1").length - 1);
  }
  return result;
};

var countBits = function (n) {
  const result = [];

  for (let i = 0; i <= n; i++) {
    result.push(i.toString(2).split("1").length - 1);
  }
  return result;
};

var countBits = function (n) {
  result = [];
  for (let i = 0; i <= n; i++) {
    result.push(i.toString(2).split("1").length - 1);
  }
  return result;
};

var missingNumber = function (nums) {
  let n = nums.length;
  let total = (n * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    total -= nums[i];
  }
  return total;
};

var missingNumber = function (nums) {
  let n = nums.length;
  let total = (n * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    total -= nums[i];
  }
  return total;
};
var missingNumber = function (nums) {
  let n = nums.length;
  let total = (n * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    total -= nums[i];
  }
  return total;
};

var reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n >>= 1;
  }
  return result >>> 0;
};

var reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n >>= 1;
  }
  return result >>> 0;
};

var reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n >>= 1;
  }
  return result >>> 0;
};

var reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n >>= 1;
  }
  return result >>> 0;
};
