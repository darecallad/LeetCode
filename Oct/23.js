// 100 questions for Front-end
// Two Sum

const twoSum = (nums, target) => {
  const map = new Map();
  // go tho the nums array to check each element inside it
  for (let i = 0; i < nums.length; i++) {
    const ans = target - nums[i];
    // check the value inside map or not
    if (map.has(ans)) return [i, map.get(ans)];
    // otherwise we set up for map
    else map.set(nums[i], i);
  }
  return null;
};

// Valid Parentheses

const validParentheses = (s) => {
  // stack data structure and map
  let stack = [];
  let mapping = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  // go tho string to find the result
  for (let char of s) {
    if (mapping[char]) {
      // current char is end bracket
      let topElement = stack.length === 0 ? "#" : stack.pop();
      if (topElement !== mapping[char]) return false;
    } else stack.push(char);
  }
  return stack.length === 0;
};

// Merge Two Sorted Lists

const mergeTwoLists = (list1, list2) => {
  // create dummy Node to start it
  let dummy = new ListNode();
  let current = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  if (list1) current.next = list1;
  if (list2) current.next = list2;

  return dummy.next;
};

// time O(m+n) space O(1)

// Palindrome Number

const isPalindrome = (x) => {
  if (x < 0) return false;

  let strX = x.toString();
  let left = 0;
  let right = strX.length - 1;

  while (left < right) {
    if (strX[left] !== strX[right]) return false;
    left++;
    right--;
  }
  return true;
};

// Roman to Integer

const intToRoman = (num) => {
  // List all values for ROMAN INT
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  // List all match symbols
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  // create result
  let result = "";
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      num -= values[i];
      result += symbols[i];
    }
  }
  return result;
};

// Longest common prefix

const longestCommonPrefix = (strs) => {
  if (!strs.length) return "";

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) return strs[0].substring(0, i);
    }
  }
  return strs[0];
};

// time O(n * m) n = total number of string array m is avg length of string array
// space O(1)

// Contains Duplicate

const containsDuplicate = (nums) => {
  // we use Set data structure to finish this probelm
  const set = new Set();
  // go tho each one
  for (let num of nums) {
    // if this num is already existed inside the set
    if (set.has(num)) return true;
    else set.add(num);
  }
  return false;
};

// time O(n) n = numbers in nums
// space O(n) n= number of unique elements in nums

// Maximum Depth of Binary Tree
const maxDepth = (root) => {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
// Time O(n) go tho each element
// Space O(n) worst case O(logn)

// Balanced Binary Tree

const isBalanced = (root) => {
  if (!root) return true;
  const height = (node) => {
    if (!node) return 0;

    const left = height(node.left);
    const right = height(node.right);

    if (left === -1 || right === -1 || Math.abs(right - left) > 1) return -1;

    return Math.max(left, right) + 1;
  };
  return height(root) !== -1;
};
// time O(n) worst case tho each node
// space O(n) n = high of tree

// Min Stack

const MinStack = () => {
  this.minStack = [];
  this.stack = [];
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (
    this.minStack.length === 0 ||
    val <= this.minStack[this.minStack.length - 1]
  )
    this.minStack.push(val);
};

MinStack.prototype.pop = function () {
  const poppedValue = this.stack.pop();
  if (poppedValue === this.minStack[this.minStack.length - 1])
    this.minStack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

// time O(1)
// space O(n)

// Implement Queue using Stacks

const myQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

myQueue.prototype.push = (val) => {
  this.s1.push(val);
};

myQueue.prototype.pop = () => {
  if (this.s2.length === 0) {
    while (this.s1.length !== 0) this.s2.push(this.s1.pop());
  }
  return this.s2.pop();
};

myQueue.prototype.peek = () => {
  if (this.s2.length === 0) {
    while (this.s1.length !== 0) this.s2.push(this.s1.pop());
  }
  return this.s2[this.s2.length - 1];
};

myQueue.prototype.empty = () => {
  return this.s1.length === 0 && this.s2.length === 0;
};

// time O(1) constant time
// space O(n) n = number of element in the Q
