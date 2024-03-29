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

// 198

const rob = (nums) => {
  let n = nums.length;

  if (n === 0) return 0;
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(nums[0], nums[1]);

  // base case
  const dp = Array(n);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  // loop the house
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[n - 1];
};

// time space O(n) -> time : go tho all the houses | space : cuz dp Array

const rightSideView = (root) => {
  if (root === null) return [];
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let levelSide = queue.length;
    for (let i = 0; i < levelSide; i++) {
      let currentNode = queue.shift();

      // if its the last one, we push it into result
      if (i === queue.length - 1) result.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  return result;
};

// time : O(n) each node need to process at least once
// space : O(n) the max number of items in the queue

// island count
const numIsLands = (grid) => {
  // if grid not exist
  if (!grid || grid.length === 0) return 0;
  // go tho nested island
  let row = grid.length;
  let column = grid[0].length;
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < gird[0].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(grid, i, j);
      }
    }
  }
  return count;
};

function dfs(grid, i, j) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j])
    return 0;

  // set visited
  grid[i][j] = "0";

  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
}

// time : O (m * n) row * cloumn
// space: O ( m * n )
