// 63. Unique Paths II

function uniquePathsWithObstacles(id) {
  if (obstacleGrid[0][0] === 1) return 0; // If the starting point is an obstacle, there's no way to move.

  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));

  // Initialize the starting point
  dp[0][0] = 1;

  // Fill the dp array
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) continue; // Skip if there's an obstacle

      if (i - 1 >= 0) dp[i][j] += dp[i - 1][j]; // Top cell
      if (j - 1 >= 0) dp[i][j] += dp[i][j - 1]; // Left cell
    }
  }

  return dp[m - 1][n - 1];
}

// 62. Unique Paths

function uniquePath(m, n) {
  let dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));

  // Initialize the first row and first column to 1 since there's only one way to go right or down.
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }

  // For each cell, the number of ways to reach it is the sum of the ways from the cell above and the cell to the left.
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}
