var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (map.has(res)) return [map.get(res), i];
    else map.set(nums[i], i);
  }
};

var maxProfit = function (prices) {
  let buytime = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buytime) buytime = prices[i];
    else profit = Math.max(profit, prices[i] - buytime);
  }
  return profit;
};

var containsDuplicate = function (nums) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) return true;
    else set.add(num);
  }
  return false;
};

var productExceptSelf = function (nums) {
  const dp = new Array(nums.length).fill(1);
  let left = 1;
  for (let i = 1; i < nums.length; i++) {
    left *= nums[i - 1];
    dp[i] *= left;
  }
  let right = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    right *= nums[i + 1];
    dp[i] *= right;
  }
  return dp;
};

var maxSubArray = function (nums) {
  let cur = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i] + cur, nums[i]);
    max = Math.max(cur, max);
  }
  return max;
};

var maxProduct = function (nums) {
  let min = nums[0];
  let max = nums[0];
  let res = max;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [max, min] = [min, max];
    min = Math.min(nums[i], nums[i] * min);
    max = Math.max(nums[i], nums[i] * max);
    res = Math.max(res, max);
  }
  return res;
};

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  return nums[left];
};

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  return nums[left];
};

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] === target) return mid;
    else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) right = mid;
      else left = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid;
    }
  }
  return -1;
};

var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return result;
};

var maxArea = function (height) {
  let maxArea = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let currentArea = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, currentArea);
    if (height[left] < height[right]) left++;
    else right--;
  }
  return maxArea;
};

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
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
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
  let count = 0;
  while (n !== 0) {
    count += n & 1;
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

var countBits = function (n) {
  const result = [];
  for (let i = 0; i <= n; i++) {
    result.push(i.toString(2).split("1").length - 1);
  }
  return result;
};

var missingNumber = function (nums) {
  const n = nums.length;
  let total = (n * (n + 1)) / 2;
  for (let i = 0; i < nums.length; i++) {
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

var climbStairs = function (n) {
  if (n <= 2) return n;
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

var lengthOfLIS = function (nums) {
  const tails = [];
  for (const num of nums) {
    let left = 0;
    let right = tails.length;
    while (left < right) {
      const mid = Math.floor((right - left) / 2) + left;
      if (tails[mid] < num) left = mid + 1;
      else right = mid;
    }
    tails[left] = num;
    if (tails.length === left) tails.push(num);
  }
  return tails.length;
};

var lengthOfLIS = function (nums) {
  const tails = [];
  for (let num of nums) {
    let left = 0;
    let right = tails.length;
    while (left < right) {
      const mid = Math.floor((right - left) / 2) + left;
      if (tails[mid] < num) left = mid + 1;
      else right = mid;
    }
    tails[left] = num;
    if (tails.length === left) tails.push(num);
  }
  return tails.length;
};

var longestCommonSubsequence = function (text1, text2) {
  const n = text1.length;
  const m = text2.length;

  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[n][m];
};

var longestCommonSubsequence = function (text1, text2) {
  const n = text1.length;
  const m = text2.length;
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[n][m];
};

var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i - num >= 0) {
        dp[i] += dp[i - num];
      }
    }
  }
  return dp[target];
};

var rob = function (nums) {
  const n = nums.length;

  if (n === 0) return 0;
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(nums[0], nums[1]);

  const dp = new Array(n);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[nums.length - 1];
};

var rob = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(nums[0], nums[1]);

  const dp = new Array(n);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[n - 1];
};

var rob = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  function helper(house) {
    let rob1 = 0;
    let rob2 = 0;
    for (let money of house) {
      let temp = Math.max(rob1 + money, rob2);
      rob1 = rob2;
      rob2 = temp;
    }
    return rob2;
  }
  return Math.max(
    helper(nums.slice(0, nums.length - 1)),
    helper(nums.slice(1))
  );
};

var numDecodings = function (s) {
  if (s.length === 0 || s[0] === "0") return 0;
  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    let oneDigit = parseInt(s.substring(i - 1, i));
    let twoDigit = parseInt(s.substring(i - 2, i));
    if (oneDigit >= 1) dp[i] += dp[i - 1];
    if (twoDigit >= 10 && twoDigit <= 26) dp[i] += dp[i - 2];
  }
  return dp[s.length];
};

var uniquePaths = function (m, n) {
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

var uniquePaths = function (m, n) {
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

var canJump = function (nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, nums[i] + i);
  }
  return maxReach >= nums.length - 1;
};

var climbStairs = function (n) {
  if (n <= 2) return n;
  const dp = new Array(n + 1);

  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];
};

var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

var lengthOfLIS = function (nums) {
  const tails = [];
  for (let i = 0; i < nums.length; i++) {
    let left = 0;
    let right = tails.length;
    while (left < right) {
      const mid = Math.floor((right - left) / 2) + left;
      if (tails[mid] < nums[i]) left = mid + 1;
      else right = mid;
    }
    tails[left] = nums[i];
    if (left === tails.length) tails.push(nums[i]);
  }
  return tails.length;
};

var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;

  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
};

var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i - num >= 0) {
        dp[i] += dp[i - num];
      }
    }
  }
  return dp[target];
};

var rob = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(nums[0], nums[1]);

  const dp = new Array(n);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[n - 1];
};

var rob = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  function helper(house) {
    let rob1 = 0;
    let rob2 = 0;
    for (let money of house) {
      let temp = Math.max(rob1 + money, rob2);
      rob1 = rob2;
      rob2 = temp;
    }
    return rob2;
  }
  return Math.max(helper(nums.slice(0, n - 1)), helper(nums.slice(1)));
};

var numDecodings = function (s) {
  if (s.length === 0 || s[0] === "0") return 0;
  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    let oneDigit = parseInt(s.substring(i - 1, i));
    let twoDigit = parseInt(s.substring(i - 2, i));
    if (oneDigit >= 1) dp[i] += dp[i - 1];
    if (twoDigit >= 10 && twoDigit <= 26) dp[i] += dp[i - 2];
  }
  return dp[s.length];
};

var uniquePaths = function (m, n) {
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

var canJump = function (nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, nums[i] + i);
  }
  return maxReach >= nums.length - 1;
};

var cloneGraph = function (node) {
  if (!node) return null;
  const map = new Map();
  function dfs(node) {
    if (map.has(node)) return map.get(node);
    const cloneNode = new Node(node.val, []);
    map.set(node, cloneNode);
    for (let neighbor of node.neighbors) {
      cloneNode.neighbors.push(dfs(neighbor));
    }
    return cloneNode;
  }
  return dfs(node);
};

var cloneGraph = function (node) {
  if (!node) return null;
  const map = new Map();
  function dfs(node) {
    if (map.has(node)) return map.get(node);
    const cloneNode = new Node(node.val, []);
    map.set(node, cloneNode);

    for (let neighbor of node.neighbors) {
      cloneNode.neighbors.push(dfs(neighbor));
    }
    return cloneNode;
  }
  return dfs(node);
};

var canFinish = function (numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).map(() => []);
  for (let [course, prerequest] of prerequisites) {
    graph[course].push(prerequest);
  }
  // create Array to keep track
  const visited = new Array(numCourses).fill(false);
  // array recStack
  const recStack = new Array(numCourses).fill(false);

  function dfs(course) {
    if (recStack[course]) return true;
    if (visited[course]) return false;

    visited[course] = true;
    recStack[course] = true;

    for (let prerequest of graph[course]) {
      if (dfs(prerequest)) return true;
    }

    recStack[course] = false;
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return false;
  }
  return true;
};

var canFinish = function (numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).map(() => []);
  for (let [course, pre] of prerequisites) {
    graph[course].push(pre);
  }

  // track Array
  const recStack = new Array(numCourses).fill(false);
  // visited array
  const visited = new Array(numCourses).fill(false);

  //helper function
  function dfs(course) {
    if (recStack[course]) return true;
    if (visited[course]) return false;

    visited[course] = true;
    recStack[course] = true;

    for (let pre of graph[course]) {
      if (dfs(pre)) return true;
    }

    recStack[course] = false;
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return false;
  }
  return true;
};

var canFinish = function (numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).map(() => []);
  for (let [course, pre] of prerequisites) {
    graph[course].push(pre);
  }
  const visited = new Array(numCourses).fill(false);
  const recStack = new Array(numCourses).fill(false);

  function dfs(course) {
    if (recStack[course]) return true;
    if (visited[course]) return false;

    recStack[course] = true;
    visited[course] = true;

    for (let pre of graph[course]) {
      if (dfs(pre)) return true;
    }

    recStack[course] = false;
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return false;
  }
  return true;
};

var canFinish = function (numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).map(() => []);
  for (let [course, pre] of prerequisites) {
    graph[course].push(pre);
  }

  // track array
  const visited = new Array(numCourses).fill(false);
  // recur array
  const recStack = new Array(numCourses).fill(false);

  // dfs
  function dfs(course) {
    if (recStack[course]) return true;
    if (visited[course]) return false;

    visited[course] = true;
    recStack[course] = true;

    for (let req of graph[course]) {
      if (dfs(req)) return true;
    }

    recStack[course] = false;
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return false;
  }
  return true;
};

var pacificAtlantic = function (heights) {
  if (!heights || !heights.length) return [];
  let m = heights.length;
  let n = heights[0].length;

  let pacific = Array.from({ length: m }, () => new Array(n).fill(false));
  let atlantic = Array.from({ length: m }, () => new Array(n).fill(false));

  // dfs
  function dfs(r, c, visited, preHeight) {
    if (r < 0 || c < 0 || r >= m || c >= n) return;
    if (visited[r][c] || heights[r][c] < preHeight) return;

    visited[r][c] = true;
    let directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    for (let [dr, dc] of directions) {
      dfs(r + dr, c + dc, visited, heights[r][c]);
    }
  }

  // run dfs for both oceans
  for (let i = 0; i < m; i++) {
    dfs(i, 0, pacific, heights[i][0]);
    dfs(i, n - 1, atlantic, heights[i][n - 1]);
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j, pacific, heights[0][j]);
    dfs(m - 1, j, atlantic, heights[m - 1][j]);
  }

  // find cells reachable
  let result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

var pacificAtlantic = function (heights) {
  if (!heights || !heights.length) return [];

  let m = heights.length;
  let n = heights[0].length;

  const pO = Array.from({ length: m }, () => new Array(n).fill(false));
  const aO = Array.from({ length: m }, () => new Array(n).fill(false));

  function dfs(row, col, visited, prevHeight) {
    if (row < 0 || col < 0 || row >= m || col >= n) return;
    if (visited[row][col] || heights[row][col] < prevHeight) return;

    visited[row][col] = true;
    let directions = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];

    for (let [dr, dc] of directions) {
      dfs(row + dr, col + dc, visited, heights[row][col]);
    }
  }

  // run dfs for both ocean
  for (let i = 0; i < m; i++) {
    dfs(i, 0, pO, heights[i][0]);
    dfs(i, n - 1, aO, heights[i][n - 1]);
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j, pO, heights[0][j]);
    dfs(m - 1, j, aO, heights[m - 1][j]);
  }

  let result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pO[i][j] && aO[i][j]) result.push([i, j]);
    }
  }
  return result;
};

var pacificAtlantic = function (heights) {
  if (!heights || !heights.length) return [];
  let m = heights.length;
  let n = heights[0].length;

  const pOcean = Array.from({ length: m }, () => new Array(n).fill(false));
  const aOcean = Array.from({ length: m }, () => new Array(n).fill(false));

  function dfs(row, col, visited, prevHeight) {
    if (row < 0 || col < 0 || row >= m || col >= n) return;
    if (visited[row][col] || heights[row][col] < prevHeight) return;

    visited[row][col] = true;
    const direction = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];

    for (let [dr, dc] of direction) {
      dfs(dr + row, dc + col, visited, heights[row][col]);
    }
  }

  // for both ocean
  for (let i = 0; i < m; i++) {
    dfs(i, 0, pOcean, heights[i][0]);
    dfs(i, n - 1, aOcean, heights[i][n - 1]);
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j, pOcean, heights[0][j]);
    dfs(m - 1, j, aOcean, heights[m - 1][j]);
  }

  const result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pOcean[i][j] && aOcean[i][j]) result.push([i, j]);
    }
  }
  return result;
};

var pacificAtlantic = function (heights) {
  if (!heights || !heights.length) return [];
  const m = heights.length;
  const n = heights[0].length;

  const pOcean = Array.from({ length: m }, () => Array(n).fill(false));
  const aOcean = Array.from({ length: m }, () => Array(n).fill(false));

  function dfs(r, c, visited, prevHeight) {
    if (r < 0 || c < 0 || r >= m || c >= n) return;
    if (visited[r][c] || heights[r][c] < prevHeight) return;

    visited[r][c] = true;
    const directions = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    for (let [dr, dc] of directions) {
      dfs(dr + r, dc + c, visited, heights[r][c]);
    }
  }

  for (let i = 0; i < m; i++) {
    dfs(i, 0, pOcean, heights[i][0]);
    dfs(i, n - 1, aOcean, heights[i][n - 1]);
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j, pOcean, heights[0][j]);
    dfs(m - 1, j, aOcean, heights[m - 1][j]);
  }

  const result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pOcean[i][j] && aOcean[i][j]) result.push([i, j]);
    }
  }
  return result;
};

var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;
  let row = grid.length;
  let col = grid[0].length;
  let count = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j, grid);
      }
    }
  }

  function dfs(i, j, grid) {
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === "0") return;
    grid[i][j] = "0";

    dfs(i + 1, j, grid);
    dfs(i - 1, j, grid);
    dfs(i, j + 1, grid);
    dfs(i, j - 1, grid);
  }
};

var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;
  const row = grid.length;
  const col = grid[0].length;
  let count = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j, grid);
      }
    }
  }
  return count;

  function dfs(i, j, grid) {
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === "0") return;
    grid[i][j] = "0";

    dfs(i + 1, j, grid);
    dfs(i - 1, j, grid);
    dfs(i, j + 1, grid);
    dfs(i, j - 1, grid);
  }
};

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longest = 0;

  for (let num of nums) {
    if (!set.has(num - 1)) {
      let cur = num;
      let curC = 1;

      while (set.has(cur + 1)) {
        cur++;
        curC++;
      }
      longest = Math.max(longest, curC);
    }
  }
  return longest;
};

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let count = 0;

  for (let num of nums) {
    if (!set.has(num - 1)) {
      let cur = num;
      let curC = 1;

      while (set.has(cur + 1)) {
        cur++;
        curC++;
      }
      count = Math.max(count, curC);
    }
  }
  return count;
};

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let count = 0;

  for (let num of nums) {
    if (!set.has(num - 1)) {
      let cur = num;
      let curC = 1;

      while (set.has(cur + 1)) {
        cur++;
        curC++;
      }
      count = Math.max(count, curC);
    }
  }
  return count;
};

var alienOrder = function (words) {
  const map = new Map();
  for (let word of words) {
    for (let char of word) {
      if (!map.has(char)) map.set(char, new Set());
    }
  }

  for (let i = 0; i < words.length; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];
    const minLength = Math.min(word1.length, word2.length);
    let found = false;

    for (let j = 0; j < minLength; j++) {
      if (word1[j] !== word2[j]) {
        map.get(word1[j]).add(word2[j]);
        found = true;
        break;
      }
    }

    if (!found && word1.length > word2.length) return "";
  }

  const visiting = new Set();
  const visited = new Set();
  const result = [];

  function dfs(node) {
    if (visiting.has(node)) return false;
    if (visited.has(node)) return true;

    visiting.add(node);

    for (let neighbor of map.get(node)) {
      if (!dfs(neighbor)) return false;
    }

    visiting.delete(node);
    visited.add(node);
    result.push(node);
    return true;
  }

  for (let node of map.keys()) {
    if (!dfs(node)) return "";
  }
  return result.reverse().join("");
};

var alienOrder = function (words) {
  const map = new Map();
  for (let word of words) {
    for (let char of word) {
      if (!map.has(char)) map.set(char, new Set());
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];
    const minLength = Math.min(word1.length, word2.length);
    let found = false;

    for (let j = 0; j < minLength; j++) {
      if (word1[j] !== word2[j]) {
        map.get(word1[j]).add(word2[j]);
        fount = true;
        break;
      }
    }

    if (!found && word1.length > word2.length) return "";
  }

  const visiting = new Set();
  const visited = new Set();
  const result = [];

  function dfs(node) {
    if (visiting.has(node)) return false;
    if (visited.has(node)) return true;

    visiting.add(node);
    for (let neighbor of map.get(node)) {
      if (!dfs(neighbor)) return false;
    }

    visiting.delete(node);
    visited.add(node);
    result.push(node);

    return true;
  }

  for (let node of map.keys()) {
    if (!dfs(node)) return "";
  }

  return result.reverse().join("");
};

var cloneGraph = function (node) {
  if (!node) return null;
  const map = new Map();
  function dfs(node) {
    if (map.has(node)) return map.get(node);
    const cloneNode = new Node(node.val, []);
    map.set(node, cloneNode);
    for (let neighbor of node.neighbors) {
      cloneNode.neighbors.push(dfs(neighbor));
    }
    return cloneNode;
  }
  return dfs(node);
};

var canFinish = function (numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).map(() => []);
  for (let [course, pre] of prerequisites) {
    graph[course].push(pre);
  }
  const visited = new Array(numCourses).fill(false);
  const recStack = new Array(numCourses).fill(false);

  function dfs(course) {
    if (recStack[course]) return true;
    if (visited[course]) return false;

    visited[course] = true;
    recStack[course] = true;

    for (let pre of graph[course]) {
      if (dfs(pre)) return true;
    }

    recStack[course] = false;
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return false;
  }
  return true;
};

var cloneGraph = function (node) {
  if (!node) return null;
  const map = new Map();
  function dfs(node) {
    if (map.has(node)) return map.get(node);
    const cloneNode = new Node(node.val, []);
    map.set(node, cloneNode);

    for (let neighbor of node.neighbors) {
      cloneNode.neighbors.push(dfs(neighbor));
    }
    return cloneNode;
  }
  return dfs(node);
};

var canFinish = function (numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).map(() => []);
  for (let [course, pre] of prerequisites) {
    graph[course].push(pre);
  }

  const visited = new Array(numCourses).fill(false);
  const recStack = new Array(numCourses).fill(false);

  function dfs(course) {
    if (recStack[course]) return true;
    if (visited[course]) return false;

    visited[course] = true;
    recStack[course] = true;

    for (let req of graph[course]) {
      if (dfs(req)) return true;
    }

    recStack[course] = false;
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return false;
  }
  return true;
};

var cloneGraph = function (node) {
  if (!node) return null;
  const map = new Map();
  function dfs(node) {
    if (map.has(node)) return map.get(node);
    const cloneNode = new Node(node.val, []);
    map.set(node, cloneNode);

    for (let neighbor of node.neighbors) {
      cloneNode.neighbors.push(dfs(neighbor));
    }
    return cloneNode;
  }
  return dfs(node);
};

var canFinish = function (numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).map(() => []);
  for (let [course, pre] of prerequisites) {
    graph[course].push(pre);
  }
  const visited = new Array(numCourses).fill(false);
  const recStack = new Array(numCourses).fill(false);

  function dfs(course) {
    if (recStack[course]) return true;
    if (visited[course]) return false;

    recStack[course] = true;
    visited[course] = true;

    for (let req of graph[course]) {
      if (dfs(req)) return true;
    }

    recStack[course] = false;
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return false;
  }
  return true;
};

var pacificAtlantic = function (heights) {
  if (!heights || !heights.length) return [];
  const m = heights.length;
  const n = heights[0].length;

  const pOcean = Array.from({ length: m }, () => Array(n).fill(false));
  const aOcean = Array.from({ length: m }, () => Array(n).fill(false));

  function dfs(r, c, visited, prevHeight) {
    if (r < 0 || c < 0 || r >= m || c >= n) return;
    if (visited[r][c] || heights[r][c] < prevHeight) return;

    visited[r][c] = true;
    const directions = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];

    for (let [dr, dc] of directions) {
      dfs(r + dr, c + dc, visited, heights[r][c]);
    }
  }

  for (let i = 0; i < m; i++) {
    dfs(i, 0, pOcean, heights[i][0]);
    dfs(i, n - 1, aOcean, heights[i][n - 1]);
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j, pOcean, heights[0][j]);
    dfs(m - 1, j, aOcean, heights[m - 1][j]);
  }
  const result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pOcean[i][j] && aOcean[i][j]) result.push([i, j]);
    }
  }
  return result;
};

var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;
  const row = grid.length;
  const col = grid[0].length;
  let count = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j, grid);
      }
    }
  }
  return count;

  function dfs(i, j, grid) {
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === "0") return;
    grid[i][j] = "0";

    dfs(i + 1, j, grid);
    dfs(i - 1, j, grid);
    dfs(i, j + 1, grid);
    dfs(i, j - 1, grid);
  }
};

var pacificAtlantic = function (heights) {
  if (!heights || !heights.length) return [];
  const m = heights.length;
  const n = heights[0].length;

  const pOcean = Array.from({ length: m }, () => new Array(n).fill(false));
  const aOcean = Array.from({ length: m }, () => new Array(n).fill(false));

  function dfs(r, c, visited, prevHeight) {
    if (r < 0 || c < 0 || r >= m || c >= n) return;
    if (visited[r][c] || heights[r][c] < prevHeight) return;

    visited[r][c] = true;
    const direcitons = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    for (let [dr, dc] of direcitons) {
      dfs(dr + r, dc + c, visited, heights[r][c]);
    }
  }

  // go tho both Ocean
  for (let i = 0; i < m; i++) {
    dfs(i, 0, pOcean, heights[i][0]);
    dfs(i, n - 1, aOcean, heights[i][n - 1]);
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j, pOcean, heights[0][j]);
    dfs(m - 1, j, aOcean, heights[m - 1][j]);
  }

  const result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pOcean[i][j] && aOcean[i][j]) result.push([i, j]);
    }
  }
  return result;
};

var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j, grid);
      }
    }
  }
  return count;
  function dfs(i, j, grid) {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === "0") return;
    grid[i][j] = "0";

    dfs(i + 1, j, grid);
    dfs(i - 1, j, grid);
    dfs(i, j + 1, grid);
    dfs(i, j - 1, grid);
  }
};

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let maxCount = 0;

  for (let num of nums) {
    if (!set.has(num - 1)) {
      let cur = num;
      let curC = 1;

      while (set.has(cur + 1)) {
        cur++;
        curC++;
      }
      maxCount = Math.max(maxCount, curC);
    }
  }
  return maxCount;
};

var alienOrder = function (words) {
  let map = new Map();
  for (let word of words) {
    for (let char of word) {
      if (!map.has(char)) map.set(char, new Set());
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];
    let found = false;
    let minL = Math.min(word1.length, word2.length);

    for (let j = 0; j < minL; j++) {
      if (word1[j] !== word2[j]) {
        map.get(word1[j]).add(word2[j]);
        found = true;
        break;
      }
    }

    if (!found && word1.length > word2.length) return "";
  }

  const visiting = new Set();
  const visited = new Set();
  const result = [];

  function dfs(node) {
    if (visiting.has(node)) return false;
    if (visited.has(node)) return true;

    visiting.add(node);

    for (let neighbor of map.get(node)) {
      if (!dfs(neighbor)) return false;
    }

    visiting.delete(node);
    visited.add(node);
    result.push(node);

    return true;
  }

  for (let node of map.keys()) {
    if (!dfs(node)) return "";
  }

  return result.reverse().join("");
};

var alienOrder = function (words) {
  const map = new Map();
  for (let word of words) {
    for (let char of word) {
      if (!map.has(char)) map.set(char, new Set());
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];
    let minL = Math.min(word1.length, word2.length);
    let found = false;

    for (let j = 0; j < minL; j++) {
      if (word1[j] !== word2[j]) {
        map.get(word1[j]).add(word2[j]);
        found = true;
        break;
      }
    }

    if (!found && word1.length > word2.length) return "";
  }

  const visiting = new Set();
  const visited = new Set();
  const result = [];

  function dfs(node) {
    if (visiting.has(node)) return false;
    if (visited.has(node)) return true;

    visiting.add(node);
    for (let neighbor of map.get(node)) {
      if (!dfs(neighbor)) return false;
    }

    visiting.delete(node);
    visited.add(node);
    result.push(node);
    return true;
  }

  for (let node of map.keys()) {
    if (!dfs(node)) return "";
  }
  return result.reverse().join("");
};

var alienOrder = function (words) {
  const map = new Map();
  for (let word of words) {
    for (let char of word) {
      if (!map.has(char)) map.set(char, new Set());
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];
    let minL = Math.min(word1.length, word2.length);
    let found = false;

    for (let j = 0; j < minL; j++) {
      if (word1[j] !== word2[j]) {
        map.get(word1[j]).add(word2[j]);
        found = true;
        break;
      }
    }

    if (!found && word1.length > word2.length) return "";
  }

  const visited = new Set();
  const visiting = new Set();
  const result = [];

  function dfs(node) {
    if (visiting.has(node)) return false;
    if (visited.has(node)) return true;

    visiting.add(node);

    for (let neighbor of map.get(node)) {
      if (!dfs(neighbor)) return false;
    }

    visiting.delete(node);
    visited.add(node);
    result.push(node);

    return true;
  }

  for (let node of map.keys()) {
    if (!dfs(node)) return "";
  }

  return result.reverse().join("");
};

var alienOrder = function (words) {
  const map = new Map();
  for (let word of words) {
    for (let char of word) {
      if (!map.has(char)) map.set(char, new Set());
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];
    let minL = Math.min(word1.length, word2.length);
    let found = false;

    for (let j = 0; j < minL; j++) {
      if (word1[j] !== word2[j]) {
        map.get(word1[j]).add(word2[j]);
        found = true;
        break;
      }
    }

    if (!found && word1.length > word2.length) return "";
  }

  const visiting = new Set();
  const visited = new Set();
  const result = [];

  function dfs(node) {
    if (visiting.has(node)) return false;
    if (visited.has(node)) return true;
    visiting.add(node);
    for (let neighbor of map.get(node)) {
      if (!dfs(neighbor)) return false;
    }
    visiting.delete(node);
    visited.add(node);
    result.push(node);
    return true;
  }

  for (let node of map.keys()) {
    if (!dfs(node)) return "";
  }

  return result.reverse().join("");
};

var validTree = function (n, edges) {
  if (n - 1 !== edges.length) return false;
  const graph = new Array(n).fill(0).map(() => []);
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Set();

  function dfs(node, parent) {
    if (visited.had(node)) return false;
    visited.add(node);

    for (let neighbor of graph[node]) {
      if (neighbor === parent) continue;
      if (!dfs(neighbor, node)) return false;
    }
    return true;
  }
  if (dfs(0, -1)) return false;
  return visited.size === n;
};

var validTree = function (n, edges) {
  if (edges.length !== n - 1) return false;
  const graph = new Array(n).fill(0).map(() => []);
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Set();

  function dfs(node, parent) {
    if (visited.has(node)) return false;
    visited.add(node);

    for (let neighbor of graph[node]) {
      if (neighbor === parent) continue;
      if (!dfs(neighbor, node)) return false;
    }
    return true;
  }

  if (!dfs(0, -1)) return false;
  return visited.size === n;
};

var validTree = function (n, edges) {
  if (edges.length !== n - 1) return false;
  const graph = Array.from({ length: n }, () => []);
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Set();
  function dfs(node, parent) {
    if (visited.has(node)) return false;
    visited.add(node);

    for (let neighbor of graph[node]) {
      if (neighbor === parent) continue;
      if (!dfs(neighbor, node)) return false;
    }
    return true;
  }

  if (!dfs(0, -1)) return false;
  return visited.size === n;
};

var validTree = function (n, edges) {
  if (edges.length !== n - 1) return false;
  const graph = Array.from({ length: n }, () => []);
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Set();
  function dfs(node, parent) {
    if (visited.has(node)) return false;
    visited.add(node);

    for (let neighbor of graph[node]) {
      if (neighbor === parent) continue;
      if (!dfs(neighbor, node)) return false;
    }
    return true;
  }

  if (!dfs(0, -1)) return false;
  return visited.size === n;
};

var validTree = function (n, edges) {
  if (edges.length !== n - 1) return false;
  const graph = Array.from({ length: n }, () => []);
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  const visited = new Set();
  function dfs(node, parent) {
    if (visited.has(node)) return false;
    visited.add(node);

    for (let neighbor of graph[node]) {
      if (neighbor === parent) continue;
      if (!dfs(neighbor, node)) return false;
    }
    return true;
  }
  if (!dfs(0, -1)) return false;
  return visited.size === n;
};

var countComponents = function (n, edges) {
  const graph = Array.from({ length: n }, () => []);
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Set();
  let count = 0;

  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);

    for (let neighbor of graph[node]) {
      dfs(neighbor);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }
  return count;
};

var countComponents = function (n, edges) {
  const graph = Array.from({ length: n }, () => []);
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  const visited = new Set();
  let count = 0;
  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);
    for (let neighbor of graph[node]) {
      dfs(neighbor);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }
  return count;
};

var countComponents = function (n, edges) {
  const graph = Array.from({ length: n }, () => []);
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  const visited = new Set();
  let count = 0;
  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);
    for (let neighbor of graph[node]) dfs(neighbor);
  }
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }
  return count++;
};

var countComponents = function (n, edges) {
  const graph = Array.from({ length: n }, () => []);
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  const visited = new Set();
  let count = 0;
  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);
    for (let neighbor of graph[node]) {
      dfs(neighbor);
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }
  return count;
};
