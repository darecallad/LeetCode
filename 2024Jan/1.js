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
  let buy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) buy = prices[i];
    else profit = Math.max(profit, prices[i] - buy);
  }
  return profit;
};
var maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) buy = prices[i];
    else profit = Math.max(profit, prices[i] - buy);
  }
  return profit;
};
var maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) buy = prices[i];
    else profit = Math.max(profit, prices[i] - buy);
  }
  return profit;
};
var maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) buy = prices[i];
    else profit = Math.max(profit, prices[i] - buy);
  }
  return profit;
};
var maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) buy = prices[i];
    else profit = Math.max(profit, prices[i] - buy);
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
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) return true;
    else set.add(num);
  }
  return false;
};
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) return true;
    else set.add(num);
  }
  return false;
};
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) return true;
    else set.add(num);
  }
  return false;
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
  const dp = new Array(nums.length).fill(1);
  let left = 1;
  let right = 1;
  for (let i = 1; i < nums.length; i++) {
    left *= nums[i - 1];
    dp[i] *= left;
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right *= nums[i + 1];
    dp[i] *= right;
  }
  return dp;
};
var productExceptSelf = function (nums) {
  const dp = new Array(nums.length).fill(1);
  let right = 1;
  let left = 1;

  for (let i = 1; i < nums.length; i++) {
    left *= nums[i - 1];
    dp[i] *= left;
  }
  for (let i = nums.length - 2; i >= 0; i++) {
    right *= nums[i + 1];
    dp[i] *= right;
  }
  return dp;
};
var productExceptSelf = function (nums) {
  const dp = new Array(nums.length).fill(1);
  let left = 1;
  let right = 1;

  for (let i = 1; i < nums.length; i++) {
    left *= nums[i - 1];
    dp[i] *= left;
  }
  for (let i = nums.length - 2; i >= 0; i++) {
    right *= nums[i + 1];
    dp[i] *= right;
  }
  return dp;
};
var productExceptSelf = function (nums) {
  const dp = new Array(nums.length).fill(1);
  let left = 1;
  let right = 1;

  for (let i = 1; i < nums.length; i++) {
    left *= nums[i];
    dp[i] *= left;
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right *= nums[i + 1];
    dp[i] *= right;
  }
  return dp;
};
var productExceptSelf = function (nums) {
  const dp = new Array(nums.length).fill(1);
  let left = 1;
  let right = 1;
  for (let i = 1; i < nums.length; i++) {
    left *= nums[i - 1];
    dp[i] *= left;
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right *= nums[i + 1];
    dp *= right;
  }
  return dp;
};

var maxSubArray = function (nums) {
  if (nums.length === 0) return 0;
  let cur = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], nums[i] + cur);
    max = Math.max(cur, max);
  }
  return max;
};

var maxSubArray = function (nums) {
  if (nums.length === 0) return 0;
  let cur = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(cur, cur + nums[i]);
    max = Math.max(cur, max);
  }
  return max;
};
