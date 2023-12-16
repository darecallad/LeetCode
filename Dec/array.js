// two sum

var twoSum = function (array, target) {
  // target to get the position inside array
  // return position index if we find the result
  // order doesnt mattter
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    const result = target - array[i];
    if (map.has(result)) return [map.get(result), i];
    else map.set(array[i], i);
  }
  // for this solution that we can find the run time is O(n)
  // because we need to go though all the element inside array
  // and the space would be O(n) because we return Array as result
};

// best time to buy and sell stock

var bestTime = function (prices) {
  // in this question we need to find the best time to buy and sell stock
  // which mean we need to get the best profit if it exist
  // first step we need to find the lowest price
  // and then we can sell it in the future day to get best profit
  let buyPrice = prices[0]; // we init buy the first day price
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    // since we already init first price we start at position 1
    if (prices[i] < buyPrice) buyPrice = prices[i];
    profit = Math.max(profit, prices[i] - buyPrice);
  }
  return profit;
  // for this solution run time would be O(n) since we need to iterlia the entire array;
  // the space should be O(1) we only take constant number to solve this problem
};
// Contains Duplicate

var containDuplicate = function (nums) {
  // in this question we have a nums array and if it contains duplicate num
  // we return true else we return false;
  // for this question we can use Set to check if there is duplicate exist
  const set = new Set();
  for (let item of nums) {
    if (set.has(item)) return true;
    else set.add(item);
  }
  return false;
  // for this solution since we need to go though the enitre nums arrray
  // the run time should be O(n)
  // and the space that we use Set should be O(1) however the
  //worst case should be O(n) because there is no duplicate and it need to
  //storing every element
};

// Product of Array Except Self
var productExceptSelf = function (nums) {
  // in this question we need to find the result that each element
  // does not contain themselves as result
  let n = nums.length;
  let output = new Array(n).fill(1);
  let left = 1;
  for (let i = 1; i < n; i++) {
    left = left * nums[i - 1];
    output[i] = output[i] * left;
  }
  let right = 1;
  for (let i = n - 2; i >= 0; i--) {
    right = right * nums[i + 1];
    output[i] = output[i] * right;
  }
  return output;
  // the run time should be O(2N) we go tho the array twice and it can be O(n);
  // the space is O(n) if we dont see the reture array as extea space and it is O(1);
};

// maxSubArray
var maxSubArray = function (nums) {
  // in this question that we need to find the largest sub total inside array
  // in this question we can use divide and conquer way to solve the problem
  // which we need to consider about two diff situation
  // max subarray in each side or cross the mid
  function subArray(arr, left, right) {
    if (left === right) return arr[left];
    const mid = left + Math.floor((right - left) / 2);

    return Math.max(
      subArray(arr, left, mid),
      subArray(arr, mid + 1, right),
      subCrossArray(arr, left, mid, right)
    );
  }
  function subCrossArray(arr, left, mid, right) {
    let sum = 0;
    let leftSum = Number.NEGATIVE_INFINITY;
    for (let i = mid; i >= left; i--) {
      sum = sum + arr[i];
      if (sum > leftSum) leftSum = sum;
    }
    sum = 0;
    let rightSum = Number.NEGATIVE_INFINITY;
    for (let i = mid + 1; i <= right; i++) {
      sum = sum + arr[i];
      if (sum > rightSum) rightSum = sum;
    }
    return leftSum + rightSum;
  }

  return subArray(nums, 0, nums.length - 1);
};

var subCrossArray = function (nums) {
  if (!nums.length) return 0;
  let currentMax = nums[0];
  let gobalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    gobalMax = Math.max(currentMax, gobalMax);
  }
  return gobalMax;
};

var subCrossArray = function (nums) {
  if (!nums.length) return 0;
  let currentMax = nums[0];
  let gobalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    gobalMax = Math.max(currentMax, gobalMax);
  }
  return gobalMax;
};
// for this solution runtime is O(n) since we need to go thought the enitre array
// the space is O(1)?
// pros: simple, easy to understand, space optimization
// cons: non generic

var subCrossArray = function (nums) {
  return subArray(nums, 0, nums.length - 1);
  function subArray(arr, left, right) {
    if (left === right) return arr[left];
    const mid = left + Math.floor((right - left) / 2);
    return Math.max(
      subArray(arr, left, mid),
      subArray(arr, mid + 1, right),
      subCrossArray(arr, left, mid, right)
    );
  }
  function subCrossArray(arr, left, mid, right) {
    let sum = 0;
    let leftSum = Number.NEGATIVE_INFINITY;
    for (let i = mid; i >= left; i--) {
      sum = sum + arr[i];
      if (sum > leftSum) leftSum = sum;
    }
    sum = 0;
    let rightSum = Number.NEGATIVE_INFINITY;
    for (let i = mid + 1; i <= right; i++) {
      sum = sum + arr[i];
      if (sum > rightSum) rightSum = sum;
    }
    return rightSum + leftSum;
  }
};

// for this solution time is still O(n log n) we need to though entire array
// space is also O(log n) ?
// pros: divide and conquer manner
// cons: complex to understand, less efficient

// Max product subArray
var maxProduct = function (nums) {
  if (!nums.length) return 0;
  let maxCurrent = nums[0];
  let minCurrent = nums[0];
  let result = maxCurrent;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [maxCurrent, minCurrent] = [minCurrent, maxCurrent];
    maxCurrent = Math.max(nums[i], nums[i] * maxCurrent);
    minCurrent = Math.min(nums[i], nums[i] * minCurrent);
    result = Math.max(maxCurrent, result);
  }
  return result;
};

var maxProduct = function (nums) {
  if (!nums.length) return 0;
  let maxCurrent = nums[0];
  let minCurrent = nums[0];
  let result = maxCurrent;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [maxCurrent, minCurrent] = [minCurrent, maxCurrent];
    maxCurrent = Math.max(nums[i], nums[i] * maxCurrent);
    minCurrent = Math.min(nums[i], nums[i] * minCurrent);
    result = Math.max(result, maxCurrent);
  }
  return result;
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

// for this solution run time O(n) spaace O(1) constant

// Find Minimum in Rotated Sorted Array
var findMin = function (nums) {
  // for this question we can use two pointers
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  return nums[left];
};
// for this solution we use binary search
// O(log n) should be run time
// space O(1) constant number left/right only

// Search in Rotated Sorted Array

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
// O(logn)
// O(1)

// three sum
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
// for this solution run time O(N^2) space O(n) result array size

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

// most water
var mostWater = function (height) {
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

var mostWater = function (height) {
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

var mostWater = function (height) {
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
// run time O(n) space O(1)

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let res = target - nums[i];
    if (map.has(res)) return [map.get(res), i];
    else map.set(nums[i], i);
  }
};

var maxProfit = function (prices) {
  let buyTime = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyTime) {
      buyTime = prices[i];
    }
    profit = Math.max(profit, prices[i] - buyTime);
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
  let output = new Array(nums.length).fill(1);
  let left = 1;
  for (let i = 1; i < nums.length; i++) {
    left = left * nums[i - 1];
    output[i] = output[i] * left;
  }
  let right = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    right = right * nums[i + 1];
    output[i] = output[i] * right;
  }
  return output;
};

var productExceptSelf = function (nums) {
  let output = new Array(nums.length).fill(1);
  let left = 1;
  for (let i = 1; i < nums.length; i++) {
    left *= nums[i];
    output[i] *= left;
  }
  let right = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    right *= nums[i];
    output[i] *= right;
  }
  return output;
};

var productExceptSelf = function (nums) {
  let output = new Array(nums.length).fill(1);
  let left = 1;
  for (let i = 1; i < nums.length; i++) {
    left *= nums[i];
    output[i] *= left;
  }
  let right = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    right *= nums[i];
    output[i] *= right;
  }
  return output;
};

var productExceptSelf = function (nums) {
  let output = new Array(nums.length).fill(1);
  let left = 1;
  for (let i = 1; i < nums.length; i++) {
    left *= nums[i];
    output[i] *= left;
  }
  let right = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    right *= nums[i];
    output[i] *= right;
  }
  return output;
};

var productExceptSelf = function (nums) {
  let output = new Array(nums.length).fill(1);
  let left = 1;
  for (let i = 1; i < nums.length; i++) {
    left *= nums[i];
    output[i] *= left;
  }
  let right = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    right *= nums[i];
    output[i] *= right;
  }
  return output;
};

var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let gobalMax = nums[0];
  let currentMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(currentMax + nums[i], nums[i]);
    gobalMax = Math.max(gobalMax, currentMax);
  }
  return gobalMax;
};

var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let currentMax = nums[0];
  let gobalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i] + currentMax, nums[i]);
    gobalMax = Math.max(currentMax, gobalMax);
  }
  return gobalMax;
};

var maxSubArray = function (nums) {
  return subArray(nums, 0, nums.length - 1);
  function subArray(arr, left, right) {
    if (left === right) return arr[left];
    const mid = left + Math.floor((right - left) / 2);

    return Math.max(
      subArray(arr, left, mid),
      subArray(arr, mid + 1, right),
      subCross(arr, left, mid, right)
    );
  }
  function subCross(arr, left, mid, right) {
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

var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let maxCurrent = nums[0];
  let gobalCurrent = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], nums[i], maxCurrent);
    gobalCurrent = Math.max(maxCurrent, gobalCurrent);
  }
  return gobalCurrent;
};

var maxSubArray = function (nums) {
  return subArray(nums, 0, nums.length);
  function subArray(arr, left, right) {
    if (left == right) return arr[left];
    const mid = left + Math.floor((right - left) / 2);
    return Math.max(
      subArray(arr, left, mid),
      subArray(arr, mid + 1, right),
      crossArray(arr, left, mid, right)
    );
  }
  function crossArray(arr, left, mid, right) {
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
    return rightSum + leftSum;
  }
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
    max = Math.max(nums[i], max * nums[i]);
    min = Math.min(nums[i], min * nums[i]);
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
    if (nums[mid] > right) left = mid + 1;
    else right = mid;
  }
  return nums[left];
};

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[right]) right = mid;
    else left = mid + 1;
  }
  return nums[left];
};

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[right]) right = mid;
    else left = mid + 1;
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
    let maxArea = Math.max(maxArea, currentArea);
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
  for (let i = 0; i <= n; i++) result.push(i.toString(2).split("1").length - 1);
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
  const dp = new Array(n.length + 1);
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
  for (let i = 3; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
  return dp[n];
};

var climbStairs = function (n) {
  if (n <= 2) return n;
  const dp = new Array(n + 1);

  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
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

var wordBreak = function (s, wordDict) {
  let n = s.length;
  const dp = new Array(n + 1).fill(false);
  dp[0];

  for (let i = 1; i <= n; i++) {
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
  let n = s.length;
  const dp = new Array(n + 1).fill(false);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
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
  dp[0] = 0;

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
