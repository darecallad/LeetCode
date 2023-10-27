// Find All Numbers Disappeared in an Array

const findDisappeared = (nums) => {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);
    nums[num - 1] = Math.abs(nums[num - 1]) * -1; // mark as negative number
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) result.push(i + 1);
  }

  return result;
};

// time O(n) space O(1)

// Product of Array Except Self

const productExceptSelf = (nums) => {
  let n = nums.length;
  let output = new Array(n).fill(1);

  let leftProduct = 1;
  for (let i = 1; i < n; i++) {
    leftProduct *= nums[i - 1];
    output[i] *= leftProduct;
  }
  let rightProduct = 1;
  for (let i = n - 2; i >= 0; i--) {
    rightProduct *= nums[i + 1];
    output[i] *= rightProduct;
  }

  return output;
};

// time O(n)
// space O(1)  if we count output array O(n)

//  Top K Frequent Elements
const topKfrequent = (nums, k) => {
  const map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const minHeap = [];
  for (let [num, freq] of map.entries()) {
    minHeap.push([num, freq]);
    if (minHeap.length > k) {
      minHeap.sort((a, b) => a[1] - b[1]);
      minHeap.shift();
    }
  }

  return minHeap.map((item) => item[0]);
};

// time O(n + klogk + (n-k)logk)
// spane O(n)

// Sort Colors
const sortColors = (nums) => {
  let left = 0;
  let current = 0;
  let right = nums.length - 1;

  while (current <= right) {
    if (nums[current] === 0) {
      [nums[left], nums[current]] = [nums[current], nums[left]];
      left++;
      current++;
    } else if (nums[current] === 1) current++;
    else {
      [nums[current], nums[right]] = [nums[right], nums[current]];
      right--;
    }
  }
};

// time O(n) space O(1)

// Word Pattern

const pattern = (pattern, s) => {
  let p = pattern.split("");
  s = s.split(" ");

  if (p.length !== s.length) return false;
  let smap = new Map();
  let pmap = new Map();

  for (let i = 0; i < p.length; i++) {
    if (smap.has(s[i]) && smap.get(s[i]) !== p[i]) return false;
    else smap.set(s[i], p[i]);

    if (pmap.has(p[i]) && pmap.get(p[i]) !== s[i]) return false;
    else pmap.set(p[i], s[i]);
  }
  return true;
};

// time space O(n)

// Path Sum
const hasPathSum = (root, targetSum) => {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === targetSum;

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

// time O(n)
// sapce O(n) worst case otherwise O(logn)

// sum of left leaves
const sumOfLeaves = (root) => {
  return dfs(root, false);
};

const dfs = (node, isLeft) => {
  if (!node) return 0;
  if (!node.left && !node.right && isLeft) return node.val;
  return dfs(node.left, true) + dfs(node.right, false);
};

// time O(n)
// space O(n) / O(logn)

// Binary Tree Paths
const binaryTreePaths = (root) => {
  const result = [];
  dfs(root, path);
  return result;
};

function dfs(node, path) {
  if (!node) return;

  path += node.val;

  if (!node.left && !node.right) result.push(path);
  else {
    path += "->";
    dfs(node.left, path);
    dfs(node.right, path);
  }
}

// time O(n)
// space O(n) if banlanced O(logn)
