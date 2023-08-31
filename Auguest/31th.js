// 7. Reverse Integer

function reverseInteger(num) {
  const limit = 2147483648; // limit number
  const k = num < 0 ? -1 : 1;
  const n = Number(String(Math.abs(num)).split("").reverse().join(""));
  return n > limit ? 0 : n * k;
}

// 139. Word Break

function wordBreak(s, wordDict) {
  const dp = new Array(s.length + 1).fill(fasle);
  dp[0] = true;

  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}
