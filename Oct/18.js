// 486 Predict the Winner

const predictTheWinner = (nums) => {
  let n = nums.length;
  if (n <= 2) return true;

  const dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < n; i++) dp[i][i] = nums[i]; // base case

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1;

      dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
    }
  }

  return dp[0][n - 1] >= 0;
};
