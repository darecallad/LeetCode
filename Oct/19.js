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
