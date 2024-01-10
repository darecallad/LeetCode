var maxProduct = function (nums) {
  if (!nums.length) return 0;
  let max = nums[0];
  let min = nums[0];
  let res = max;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [max, min] = [min, max];
    max = Math.max(nums[i], nums[i] * max);
    min = Math.min(nums[i], nums[i] * min);
    res = Math.max(res, max);
  }
  return res;
};
var maxProduct = function (nums) {
  if (!nums.length) return 0;
  let max = nums[0];
  let min = nums[0];
  let res = max;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [max, min] = [min, max];
    max = Math.max(nums[i], nums[i] * max);
    min = Math.min(nums[i], nums[i] * min);
    res = Math.max(res, max);
  }
  return res;
};
var maxProduct = function (nums) {
  if (!nums.length) return 0;
  let max = nums[0];
  let min = nums[0];
  let res = max;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [max, min] = [min, max];
    max = Math.max(nums[i], nums[i] * max);
    min = Math.min(nums[i], nums[i] * min);
    res = Math.max(res, max);
  }
  return res;
};
var maxProduct = function (nums) {
  if (!nums.length) return 0;
  let max = nums[0];
  let min = nums[0];
  let res = max;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [max, min] = [min, max];
    max = Math.max(nums[i], nums[i] * max);
    min = Math.min(nums[i], nums[i] * min);
    res = Math.max(res, max);
  }
  return res;
};
var maxProduct = function (nums) {
  if (!nums.length) return 0;
  let max = nums[0];
  let min = nums[0];
  let res = max;
  for (let i = 1; i < nums.length; i++) {
    if (nums[0] < 0) [max, min] = [min, max];
    max = Math.max(nums[i], nums[i] * max);
    min = Math.min(nums[i], nums[i] * min);
    res = Math.max(res, max);
  }
  return res;
};
var maxProduct = function (nums) {
  if (!nums.length) return 0;
  let max = nums[0];
  let min = nums[0];
  let res = max;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [max, min] = [min, max];
    max = Math.max(nums[i], nums[i] * max);
    min = Math.min(nums[i], nums[i] * min);
    res = Math.max(res, max);
  }
  return res;
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
    else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
};
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
};
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
};
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
};
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
};
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[left] <= nums[mid]) {
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
var maxArea = function (height) {
  let maxArea = 0;
  let right = height.length - 1;
  let left = 0;

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
    maxArea = Math.max(currentArea, maxArea);
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
    carry = a & b;
    a = a ^ b;
    b = carrt << 1;
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
var countBits = function (n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i.toString(2).split("1").length - 1);
  }
  return result;
};
var countBits = function (n) {
  const result = [];
  for (let i = 1; i <= n; i++) result.push(i.toString(2).split("1").length - 1);
  return result;
};
var countBits = function (n) {
  const result = [];
  for (let i = 0; i <= n; i++) result.push(i.toString(2).split("1").length - 1);
  return result;
};
var countBits = function (n) {
  const result = [];
  for (let i = 0; i <= n; i++) result.push(i.toString(2).split("1").length - 1);
  return result;
};
var countBits = function (n) {
  const result = [];
  for (let i = 0; i <= n; i++) result.push(i.toString(2).split("1").length - 1);
  return result;
};
var countBits = function (n) {
  const result = [];
  for (let i = 0; i <= n; i++) result.push(i.toString(2).split("1").length - 1);
  return result;
};

var missingNumber = function (nums) {
  let total = (nums.length * (nums.length + 1)) / 2;
  for (let i = 0; i < nums.length; i++) {
    total -= nums[i];
  }
  return total;
};
var missingNumber = function (nums) {
  let n = nums.length;
  let total = (n * (n + 1)) / 2;
  for (let i = 0; i < n; i++) total -= nums[i];
  return total;
};
var missingNumber = function (nums) {
  let n = nums.length;
  let total = n & ((n + 1) / 2);
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
    result = result << 1 || n & 1;
    n <<= 1;
  }
  return result >>> 0;
};
var reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = result << 1 || n & 1;
    n <<= 1;
  }
  return result >>> 0;
};
var reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = result << 1 || n & 1;
    n <<= 1;
  }
  return result >>> 0;
};
var reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = result << 1 || n & 1;
    n <<= 1;
  }
  return result >>> 0;
};
var reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = result << 1 || n & 1;
    n <<= 1;
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
var climbStairs = function (n) {
  if (n <= 2) return n;
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] - dp[i - 2];
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
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (coin of coins) {
      if (i - coin >= 0) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0];
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
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
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
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
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

var lengthOfLIS = function (nums) {
  let tails = [];
  for (let num of nums) {
    let left = 0;
    let right = tails.length;

    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
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
      const mid = left + Math.floor((right - left) / 2);
      if (tails[mid] < num) left = mid + 1;
      else right = mid;
    }
    tails[left] = num;
    if (left === tails.length) tails.push(num);
  }
  return tails.length;
};
var lengthOfLIS = function (nums) {
  let tails = [];
  for (let num of nums) {
    let left = 0;
    let right = tails.length;

    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (tails[mid] < num) left = mid + 1;
      else right = mid;
    }
    tails[left] = num;
    if (left === tails.length) tails.push(num);
  }
  return tails.length;
};
var lengthOfLIS = function (nums) {
  let tails = [];
  for (let num of nums) {
    let left = 0;
    let right = tails.length;

    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
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
  for (const num of nums) {
    let left = 0;
    let right = tails.length;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (tails[mid] < num) left = mid + 1;
      else right = mid;
    }
    tails[left] = num;
    if (left === tails.length) tails.push(num);
  }
  return tails.length;
};
var lengthOfLIS = function (nums) {
  let tails = [];
  for (let num of nums) {
    let left = 0;
    let right = tails.length;

    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (tails[mid] < num) left = mid + 1;
      else right = mid;
    }
    tails[left] = num;
    if (left === tails.length) tails.push(num);
  }
  return tails.length;
};
var lengthOfLIS = function (nums) {
  let tails = [];
  for (let num of nums) {
    let left = 0;
    let right = tails.length;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (tails[mid] < num) left = mid + 1;
      else right = mid;
    }
    tails[left] = num;
    if (left === tails.length) tails.push(num);
  }
  return tails.length;
};

var lengthOfLIS = function (nums) {
  let tails = [];
  for (let num of nums) {
    let left = 0;
    let right = tails.length;
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
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
    if (left === tails.length) tails.push(num);
  }
  return tails.length;
};
var lengthOfLIS = function (nums) {
  let tails = [];
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
  let tails = [];
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

var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length;
  let n = text2.length;

  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
};
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
};
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;

  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
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
  let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
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
  let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
};
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
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
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j < i; j++) {
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
    for (let j = 1; j < i; j++) {
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
    for (let j = 1; j < i; j++) {
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
    for (let j = 1; j < i; j++) {
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
    for (let j = 1; j < i; j++) {
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
    for (let j = 1; j < i; j++) {
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
      if (i - num >= 0) dp[i] = dp[i] + dp[i - num];
    }
  }
  return dp[target];
};

var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i - num >= 0) dp[i] = dp[i] + dp[i - num];
    }
  }
  return dp[target];
};
var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i - num >= 0) dp[i] = dp[i] + dp[i - num];
    }
  }
  return dp[target];
};
var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i - num >= 0) dp[i] = dp[i] + dp[i - num];
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
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  const dp = new Array(nums.length);
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
  let n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(nums[0], nums[1]);

  function liner(houses) {
    let rob1 = 0;
    let rob2 = 0;
    for (let money of houses) {
      let temp = Math.max(rob1 + money, rob2);
      rob1 = rob2;
      rob2 = temp;
    }
    return rob2;
  }
  return Math.max(liner(nums.slice(0, nums.length - 1)), liner(nums.slice(1)));
};
var rob = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  function liner(house) {
    let rob1 = 0;
    let rob2 = 0;

    for (let money of house) {
      let temp = Math.max(money + rob1, rob2);
      rob1 = rob2;
      rob2 = temp;
    }
    return rob2;
  }
  return Math.max(liner(nums.slice(0, nums.length - 1)), liner(nums.slice(1)));
};
var rob = function (nums) {
  let n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  function liner(house) {
    let rob1 = 0;
    let rob2 = 0;
    for (let money of house) {
      let temp = Math.max(rob1 + money, rob2);
      rob1 = rob2;
      rob2 = temp;
    }
    return rob2;
  }
  return Math.max(liner(nums.slice(0, nums.length - 1)), liner(nums.slice(1)));
};
var rob = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  function liner(house) {
    let rob1 = 0;
    let rob2 = 0;
    for (let money of house) {
      let temp = Math.max(rob1 + money, rob2);
      rob1 = rob2;
      rob2 = temp;
    }
    return rob2;
  }
  return Math.max(liner(nums.slice(0, nums.length - 1)), liner(nums.slice(1)));
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

  function liner(house) {
    let rob1 = 0;
    let rob2 = 0;
    for (let money of house) {
      let temp = Math.max(rob1 + money, rob2);
      rob1 = rob2;
      rob2 = temp;
    }
    return rob2;
  }
  return Math.max(liner(nums.slice(0, nums.length - 1)), liner(nums.slice(1)));
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
  const dp = new Array(m).fill(0).map(() => Array(n).fill(0));
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
    for (let j = 1; j < m; j++) {
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
    maxReach = Math.max(nums[i] + i, maxReach);
  }
  return maxReach >= nums.length - 1;
};
var canJump = function (nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(nums[i] + i, maxReach);
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
var canJump = function (nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, nums[i] + i);
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
var canJump = function (nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, nums[i] + i);
  }
  return maxReach >= nums.length - 1;
};

var cloneGraph = function (node) {};
var cloneGraph = function (node) {};
var cloneGraph = function (node) {};
var cloneGraph = function (node) {};
var cloneGraph = function (node) {};
var cloneGraph = function (node) {};
