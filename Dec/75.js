// two sum

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const result = target - nums[i];
    if (map.has(result)) return [map.get(result), i];
    else map.set(nums[i], i);
  }
  return null;
};

// best time to buy

var maxProfit = function (prices) {
  let buytime = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buytime) buytime = prices[i];
    else {
      profit = Math.max(prices[i] - buytime, profit);
    }
  }
  return profit;
};
// Contains Duplicate
var containsDuplicate = function (nums) {
  const map = new Map();
  for (let item of nums) {
    if (!map.has(item)) map.set(item, 1);
    else map.set(item, map.get(item) + 1);
    if (map.get(item) === 2) return true;
  }
  return false;
};

var containsDuplicate = function (nums) {
  const set = new Set();
  for (let item of nums) {
    if (set.has(item)) return true;
    else set.add(item);
  }
  return false;
};
//Product of Array Except Self

var productExceptSelf = function (nums) {
  const output = new Array(nums.length).fill(1);
  let left = 1;
  for (let i = 1; i < nums.length; i++) {
    left *= nums[i - 1];
    output[i] *= left;
  }
  let right = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    right *= nums[i + 1];
    output[i] *= right;
  }
  return output;
};

var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let maxCurrent = nums[0];
  let maxGobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], nums[i] + maxCurrent);
    maxGobal = Math.max(maxCurrent, maxGobal);
  }
  return maxGobal;
};

var maxSubArray = function (nums) {
  function maxSubArray(arr, left, right) {
    if (left === right) return arr[left];
    const mid = left + Math.floor(right - left) / 2;

    return Math.max(
      maxSubArray(arr, left, mid),
      maxSubArray(arr, mid + 1, right),
      maxCrossArray(arr, left, mid, right)
    );
  }

  function maxCrossArray(arr, left, mid, right) {
    let sum = 0;
    let leftsum = Number.NEGATIVE_INFINITY;
    for (let i = mid; i >= left; i--) {
      sum += arr[i];
      if (sum > leftsum) leftsum = sum;
    }
    sum = 0;
    let rightsum = Number.NEGATIVE_INFINITY;
    for (let i = mid + 1; i <= right; i++) {
      sum += arr[i];
      if (sum > rightsum) rightsum = sum;
    }
    return leftsum + rightsum;
  }
  return maxSubArray(nums, 0, nums.length - 1);
};

var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let maxCurrent = nums[0];
  let maxGobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    maxGobal = Math.max(maxCurrent, maxGobal);
  }
  return maxGobal;
};

var maxSubArray = function (nums) {
  return maxSubArray(nums, 0, nums.length - 1);

  function maxSubArray(arr, left, right) {
    if (left === right) return arr[left];
    const mid = left + Math.floor((right - left) / 2);

    return Math.max(
      maxSubArray(arr, left, mid),
      maxSubArray(arr, mid + 1, right),
      maxCrossArray(arr, left, mid, right)
    );
  }

  function maxCrossArray(arr, left, mid, right) {
    let sum = 0;
    let leftSum = Number.NEGATIVE_INFINITY;
    for (let i = mid; i >= left; i--) {
      sum += arr[i];
      if (sum > leftSum) leftSum = sum;
    }
    sum = 0;
    let rightSum = Number.NEGATIVE_INFINITY;
    for (let i = mid + 1; i <= right; i++) {
      sum += arr[i];
      if (sum > rightSum) rightSum = sum;
    }
    return leftSum + rightSum;
  }
};

var maxProduct = function (nums) {
  if (nums.length === 0) return 0;

  let maxProduct = nums[0];
  let minProduct = nums[0];
  let result = maxProduct;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      // Swap maxProduct and minProduct when current number is negative
      [maxProduct, minProduct] = [minProduct, maxProduct];
    }

    // Calculate max and min product up to the current position
    maxProduct = Math.max(nums[i], maxProduct * nums[i]);
    minProduct = Math.min(nums[i], minProduct * nums[i]);

    // Update result if the current maxProduct is greater
    result = Math.max(result, maxProduct);
  }

  return result;
};

// Example usage
console.log(maxProduct([2, 3, -2, 4])); // Output: 6
console.log(maxProduct([-2, 0, -1])); // Output: 0

var maxProduct = function (nums) {
  if (!nums.length) return 0;
  let max = nums[0];
  let min = nums[0];
  let result = max;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [max, min] = [min, max];
    max = Math.max(nums[i], max * nums[i]);
    min = Math.min(nums[i], min * nums[i]);
    result = Math.max(result, max);
  }
  return result;
};

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  return nums[left];
};

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  return nums[left];
};

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
};

var threeSum = function (nums) {
  let result = [];
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

var maxArea = function (height) {
  let maxarea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let currArea = Math.min(height[left], height[right]) * (right - left);
    maxarea = Math.max(currArea, maxarea);

    if (height[left] < height[right]) left++;
    else right--;
  }
  return maxarea;
};

var maxProduct = function (nums) {
  if (!nums.length) return 0;
  let max = nums[0];
  let min = nums[0];
  let result = max;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [max, min] = [min, max];
    max = Math.max(nums[i], nums[i] * max);
    min = Math.min(nums[i], nums[i] * min);
    result = Math.max(max, result);
  }
  return result;
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
  //init count
  let count = 0;
  // loop while n !== zero
  while (n !== 0) {
    // use bitwise to check least n is 1
    count += n & 1;
    // shift n by 1
    n >>>= 1;
  }
  //return count;
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
  let n = nums.length;
  let total = (n * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    total = total - nums[i];
  }
  return total;
};

var reverseBits = function (n) {
  let result = 0;
  // 32 bits
  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n >>= 1;
  }
  return result >>> 0;
};

var climbStairs = function (n) {
  if (n <= 2) return n;
  dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

var lengthOfLTS = function (nums) {
  let tails = [];

  for (let num of nums) {
    let left = 0;
    let right = tails.length;

    while (left < right) {
      const mid = left + Math.floor((left + right) / 2);
      if (tails[mid] < num) left = mid + 1;
      else right = mid;
    }
    tails[left] = num;
    if (left === tails.length) tails.push(num);
  }
  return tails.length;
};

var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length;
  let n = text2.length;

  let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
};

var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length;
  let n = text2.length;

  let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

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

var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
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
  let dp = new Array(target + 1).fill(0);
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
  let n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(nums[0], nums[1]);

  // base case
  const dp = Array(n);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  // loop the function tho all houses
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[n - 1];
};

var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  function robLinear(houses) {
    let rob1 = 0,
      rob2 = 0;
    for (let money of houses) {
      let temp = Math.max(rob1 + money, rob2);
      rob1 = rob2;
      rob2 = temp;
    }
    return rob2;
  }

  return Math.max(
    robLinear(nums.slice(0, nums.length - 1)),
    robLinear(nums.slice(1))
  );
};

var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  function robLinear(houses) {
    let rob1 = 0;
    let rob2 = 0;

    for (let money of houses) {
      let temp = Math.max(rob1 + money, rob2);
      rob1 = rob2;
      rob2 = temp;
    }
    return rob2;
  }

  return Math.max(
    robLinear(nums.slice(0, nums.length - 1), robLinear(nums.slice(1)))
  );
};

var numDecodings = function (s) {
  if (s.length === 0 || s[0] === "0") return 0;
  let dp = new Array(s.length + 1).fill(0);
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
