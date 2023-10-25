// Inert Binary Tree

const invertTree = (root) => {
  if (!root) return null;
  const temp = root.left;

  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  return root;
};

// Time O(n) n = number of element
// Space O(n) balanced O(logn) / O(n)

// Intersection of Two Array ||

const intersectionOfTwoArray = (nums1, nums2) => {
  const map = new Map();
  const result = [];

  for (let num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }
  return result;
};

// time O(n + m) length nums1 nums2
// space O(min(n,m)) worst case, the smaller array could be stored in the map

const firstUniqueString = (s) => {
  let count = new Array(26).fill(0);

  for (let char of s) {
    count[char.charCodeAt() - "a".charCodeAt()]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (count[s[i].charCodeAt() - "a".charCodeAt()] === 1) return i;
  }

  return -1;
};

// time space O(n)

// jump stairs

const jumpStair = (n) => {
  if (n <= 1) return 1;
  if (n == 2) return 2;
  if (n == 3) return 4;

  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return dp[n];
};

// time O(n) 4 -> n
// space O(n) dp Array

// Find All Anagrams in a String

const findAllAnagrams = (s, p) => {
  let sFreq = new Array(26).fill(0);
  let pFreq = new Array(26).fill(0);
  let result = [];

  for (let char of p) pFreq[char.charCodeAt() - "a".charCodeAt()]++;
  for (let i = 0; i < s.length; i++) {
    if (i >= p.length) sFreq[s.charCodeAt(i - p.length) - "a".charCodeAt()]--;
    sFreq[s.charCodeAt(i) - "a".charCodeAt()]++;

    if (sFreq.join("") === pFreq.join("")) result.push(i - p.length + 1);
  }
  return result;
};

// time O(n)
// space O(1)

// Valid Anagram

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const freq = new Array(26).fill(0);

  for (let char of s) {
    freq[char.charCodeAt() - "a".charCodeAt()]++;
  }
  for (let char of t) {
    freq[char.charCodeAt() - "a".charCodeAt()]--;
  }
  for (let char of freq) {
    if (char !== 0) return false;
  }
  return true;
};

// time O(n) go tho each character
// space O(1) constant

// Binary Tree Level Order Traversal
const levelOrder = (root) => {
  if (!root) return [];

  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let level = [];
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      level.push(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    result.push(level);
  }
  return result;
};

// time O(n) go tho each node
// space O(n)  balanced O(logn)

// Maximum Subarray

const maxSubArray = (nums) => {
  if (nums.length === 0) return 0;

  let maxCurrent = nums[0];
  let maxGlobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], nums[i] + maxCurrent);
    maxGlobal = Math.max(maxCurrent, maxGlobal);
  }
  return maxGlobal;
};

// time : O(n) n = number of element
// space : O(1)  constant

// Move Zeros
const moveZero = (nums) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) nums[count++] = nums[i];
  }
  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

// time O(n) n = # of element insode nums
// space O(1)

// Single Number

const singleNumber = (nums) => {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
};

// time O(n)
// space O(1)

const decodeString = (s) => {};
