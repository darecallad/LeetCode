var cloneGraph = function (node) {
  if (!node) return null;
  const map = new Map();
  function dfs(node) {
    if (map.has(node)) return map.get(node);
    const cloneNode = new Node(node.val, []);
    map.set(node, cloneNode);
    for (let neightbor of node.neightbors) {
      cloneNode.neightbors.push(dfs(neightbor));
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

//

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (map.has(res)) return [map.get(res), i];
    else map.set(nums[i], i);
  }
};

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (map.has(res)) return [map.get(res), i];
    else map.set(nums[i], i);
  }
};

var maxProfit = function (prices) {
  let buyDay = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyDay) buyDay = prices[i];
    else profit = Math.max(profit, prices[i] - buyDay);
  }
  return profit;
};

var containsDuplicate = function (nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) return true;
    else set.add(num);
  }
  return false;
};

var productExceptSelf = function (nums) {
  const n = nums.length;
  const dp = Array(n).fill(1);

  let left = 1;
  for (let i = 1; i < n; i++) {
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

var productExceptSelf = function (nums) {
  let n = nums.length;
  const dp = new Array(n).fill(1);

  let left = 1;
  for (let i = 1; i < n; i++) {
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
  let currentMax = nums[0];
  let golbalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    golbalMax = Math.max(golbalMax, currentMax);
  }
  return golbalMax;
};

var maxSubArray = function (nums) {
  let cur = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], nums[i] + cur);
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
    if (nums[mid] < nums[right]) right = mid;
    else left = mid + 1;
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
  for (let i = 0; i < nums.length - 2; i++) {
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

var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i >= 0 && nums[i] === nums[i - 1]) continue;
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
  for (let num of nums) {
    let left = 0;
    let right = tails.length;
    while (left < right) {
      const mid = Math.floor((right - left) / 2) + left;
      if (tails[mid] < num) left = mid + 1;
      else right = mid;
    }
    tails[left] = num;
    if (left === tails.length) tails.push(num);
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
  let n = text1.length;
  let m = text2.length;

  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

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

  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
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
      if (i - num >= 0) dp[i] += dp[i - num];
    }
  }
  return dp[target];
};

var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i - num >= 0) dp[i] += dp[i - num];
    }
  }
  return dp[target];
};

var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i - num >= 0) dp[i] += dp[i - num];
    }
  }
  return dp[target];
};

var rob = function (nums) {
  let n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(nums[0], nums[1]);

  const dp = new Array(n);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[n - 1];
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
    dp[i] = Math.max(nums[i] + dp[i - 1], dp[i - 2]);
  }
  return dp[n - 1];
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
    dp[i] = Math.max(nums[0] + dp[i - 2], dp[i - 1]);
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

var rob = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  function helper(house) {
    let rob1 = 0;
    let rob2 = 0;
    for (let money of house) {
      let temp = Math.max(money + rob1, rob2);
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
    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return maxReach >= nums.length - 1;
};

var canJump = function (nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return maxReach >= nums.length - 1;
};

var canJump = function (nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, nums[i] + i);
  }
  return maxReach >= nums.length - 1;
};

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (map.has(res)) return [map.get(res), i];
    else map.set(nums[i], i);
  }
};

var maxProfit = function (prices) {
  let buyTime = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyTime) buyTime = prices[i];
    else profit = Math.max(profit, prices[i] - buyTime);
  }
  return profit;
};

var containsDuplicate = function (nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) return true;
    else set.add(num);
  }
  return false;
};

var productExceptSelf = function (nums) {
  let n = nums.length;
  const dp = new Array(n).fill(1);
  let left = 1;
  for (let i = 1; i < n; i++) {
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

var productExceptSelf = function (nums) {
  let n = nums.length;
  const dp = new Array(n).fill(1);
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
  let goabal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i] + cur, cur);
    goabal = Math.max(cur, goabal);
  }
  return goabal;
};
