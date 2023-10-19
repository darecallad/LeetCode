// 190

const reverseBit = (s) => {
  let result = 0;
  // 32 bits so we literate 32 times
  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n >>= 1;
  }
  return result >>> 0;
};

// 191

const hammingWeight = (n) => {
  // init count
  let count = 0;
  // loop while n is not Zero
  while (n !== 0) {
    //use bitwise AND to check least bit n is 1
    count = (count + n) & 1;
    // right shift n by 1
    n >>>= 1;
  }
  return count;
};
