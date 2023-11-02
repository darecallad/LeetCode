// 314. Binary Tree Vertical Order Traversal

const binaryTreeVertical = (root) => {
  if (!root) return [];
  const map = new Map();
  const queue = [[root, 0]];
  let minC = 0;
  let maxC = 0;

  while (queue.length) {
    const [node, column] = queue.shift();
    if (!map.has(column)) map.set(column, []);
    map.get(column).push(node.val);

    minC = Math.min(minC, column);
    maxC = Math.max(maxC, column);

    if (node.left) queue.push([node.left, column - 1]);
    if (node.right) queue.push([node.right, column + 1]);
  }
  let result = [];
  for (let i = minC; i <= maxC; i++) {
    result.push(map.get(i));
  }
  return result;
};

// time O(N) space O(N)

//408. Valid Word Abbreviation

const validword = (word, abbr) => {
  // set two pointers for word and abbr
  let i = 0;
  let j = 0;

  while (i < word.length && j < abbr.length) {
    if (isNumber(abbr[j])) {
      if (abbr[j] === "0") return false; // cannot leading to zero
      let start = j;
      while (j < abbr.length && isNumber(abbr[j])) {
        j++;
      }

      let num = parseInt(abbr.substring(start, j));
      i += num;
    } else {
      if (word[i] !== abbr[j]) return false;
      i++;
      j++;
    }
  }
  return i === word.length && j === abbr.length;
};

function isNumber(n) {
  return n >= "0" && n <= "9";
}

// time O(N)
// space O(1)

//1249. Minimum Remove to Make Valid Parentheses

const miniRemove = (s) => {
  const stack = [];
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(i);
    else if (s[i] === ")") {
      if (stack.length === 0) set.add(i);
      else stack.pop();
    }
  }

  while (stack.length) set.add(stack.pop());

  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (!set.has(i)) result.push(s[i]);
  }
  return result.join("");
};

// time O(n)
// space O(n)

// 1762. Buildings With an Ocean View
const buildings = (heights) => {
  const result = [];
  let maxHeight = -1;

  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > maxHeight) {
      result.push(i);
      maxHeight = heights[i];
    }
  }
  return result.reverse();
};

// time O(n) space O(K) k= ocean view building

//1570. Dot Product of Two Sparse Vectors
const dotVet = (nums) => {
  this.data = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) data[i] = nums[i];
  }
};

dotVet.prototype.dotProduct = function (vec) {
  let result = 0;

  for (let i in this.data) {
    let index = parse(i);
    if (vec.data[index] !== undefined)
      result += vec.data[index] * this.data[index];
  }
  return result;
};

// time O(n)
// space O(k) where k is = none 0

// 680. Valid Palindrome II

const validPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  const helper = (l, r, s) => {
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++;
      r--;
    }
    return true;
  };
  while (left < right) {
    if (s[left] !== s[right]) {
      return helper(left + 1, right, s) || helper(left, right - 1, s);
    }
    left++;
    right--;
  }

  return true;
};

// time O(n)
// space O(1)

// 1650. Lowest Common Ancestor of a Binary Tree III

const height = (node) => {
  let height = 0;
  while (node) {
    node = node.parent;
    height++;
  }
  return height;
};
const lowest = (p, q) => {
  let lenP = height(p);
  let lenQ = height(q);

  if (lenP > lenQ) {
    [p, q] = [q, p];
    [lenP, lenQ] = [lenQ, lenP];
  }

  while (lenQ > lenP) {
    q = q.parent;
    lenQ--;
  }

  while (p !== q) {
    p = p.parent;
    q = q.parent;
  }

  return p;
};

// time O(h) h = height of tree
// space O(1)

//528. Random Pick with Weight

const solution = (w) => {
  this.prefixSums = [];
  let prefixSum = 0;

  for (let weight of w) {
    prefixSum += weight;
    this.prefixSums.push(prefixSum);
  }
  this.totalSum = prefixSum;
};

// time O(n)
// space O(n)
solution.prototype.pickIndex = function () {
  const target = this.totalSum * Math.random();

  let low = 0;
  let high = this.prefixSums.length - 1;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (target > this.prefixSums[mid]) {
      low = mid + 1;
    } else high = mid;
  }

  return low;
};

// time O(logn)

//227. Basic Calculator II

const calculator = (s) => {
  let nums = [];
  let num = 0;
  let lastOp = "+";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char >= "0" && char <= "9") num = num * 10 + parseInt(char);
    if ("+-*/".includes(char) || i === s.length - 1) {
      if (lastOp === "+") nums.push(num);
      else if (lastOp === "-") nums.push(-num);
      else if (lastOp === "*") {
        const prev = nums.pop();
        nums.push(prev * num);
      } else if (lastOp === "/") {
        const prev = nums.pop();
        nums.push(Math.trunc(prev / num));
      }
      num = 0;
      lastOp = char;
    }
  }
  return nums.reduce((acc, curr) => acc + curr, 0);
};

//time O(N)
// space O(N)

//339. Nested List Weight Sum

const depthSum = (nestedList) => {
  function dfs(list, depth) {
    let sum = 0;
    for (let item of list) {
      if (item.isInteger()) {
        sum = sum + item.getInteger() * depth;
      } else {
        sum = sum + dfs(item.getList(), depth + 1);
      }
    }
    return sum;
  }
  return dfs(nestedList, 1);
};

// time O(N)
// space O(d) d is the max depth of  nestlist
