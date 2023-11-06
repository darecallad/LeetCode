// word abb

const test1 = (word, abbr) => {
  let i = 0;
  let j = 0;

  while (i < word.length && j < abbr.length) {
    if (abbr[j] >= "0" && abbr[j] <= "9") {
      if (abbr[j] === "0") return false;
      let start = j;
      while (abbr[j] >= "0" && abbr[j] <= "9" && j < abbr.length) j++;

      let num = parseInt(abbr.substring(start, j));
      i = i + num;
    } else {
      if (word[i] !== abbr[j]) return false;
      i++;
      j++;
    }
  }
  return i === word.length && j === abbr.length;
};

// space constant O(1);
// time O(n + m);

// word
const test2 = (root) => {
  if (!root) return [];

  let queue = [[root, 0]];
  let minC = 0;
  let maxC = 0;
  const map = new Map();

  while (queue.length > 0) {
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

// time O(N) n = number of nodes inside Tree
// space O(nlongn);

const minRemoveParent = (s) => {
  const stack = [];
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(i);
    else if (s[i] === ")") {
      if (stack.length > 0) stack.pop();
      else set.add(i);
    }
  }

  while (stack.length > 0) set.add(stack.pop());

  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (!set.has(i)) result.push(s[i]);
  }

  return result.join("");
};

// time O(n) n = s.length;
// space O(n);

const ocean = (heights) => {
  let maxHeight = 0;
  const result = [];
  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > maxHeight) {
      result.push(i);
      maxHeight = heights[i];
    }
  }

  return result.reverse();
};

// time O(n) which n = number of building inside array
// space O(n) n = result of element number

const vector = (nums) => {
  this.data = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) this.data[i] = nums[i];
  }
};

vector.prototype.fun1 = function (vec) {
  let result = 0;

  for (let key in this.data) {
    const index = parseInt(key);
    if (vec.data[index] !== undefined) {
      result = result + vec.data[index] * this.data[index];
    }
  }

  return result;
};

const test3 = (p, q) => {
  // get the path
  // move to same height
  // check the node

  const height = (node) => {
    let height = 0;
    while (node) {
      node = node.parent;
      height++;
    }
    return height;
  };

  let lenQ = height(q);
  let lenP = height(p);

  if (lenP > lenQ) {
    [lenP, lenQ] = [lenQ, lenP];
    [p, q] = [q, p];
  }

  while (lenQ > lenP) {
    lenQ--;
    q = q.parent;
  }

  while (p !== q) {
    p = p.parent;
    q = q.parent;
  }

  return p;
};

const deleteOne = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right])
      return helper(left + 1, right, s) || helper(left, right - 1, s);
    left++;
    right--;
  }
  return true;

  function helper(l, r, s) {
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++;
      r--;
    }
    return true;
  }
};

const lestedListSum = (lestedList) => {
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

  return dfs(lestedList, 1);
};

const test5 = (s) => {
  let lastOp = "+";
  let num = 0;
  const nums = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char >= "0" && char <= "9") {
      num = num * 10 + parseInt(char);
    }
    if ("+-*/".includes(char) || i === s.length - 1) {
      if (lastOp === "+") nums.push(num);
      else if (lastOp === "-") nums.push(-num);
      else if (lastOp === "*") nums.push(nums.pop() * num);
      else if (lastOp === "/") nums.push(Math.trunc(nums.pop() / num));

      num = 0;
      lastOp = char;
    }
  }

  return nums.reduce((acc, cur) => acc + cur, 0);
};

// time O(n) which n is the length of string

const test4 = (w) => {
  this.preFixSums = [];
  let preFixSum = 0;

  for (let weight of w) {
    preFixSum = preFixSum + weight;
    this.preFixSums.push(preFixSum);
  }
  this.totalSum = preFixSum;
};

test4.prototype.tt = function () {
  const target = this.totalSum * Math.random();

  let left = 0;
  let right = this.preFixSums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target > this.preFixSums[mid]) left = mid + 1;
    else right = mid;
  }

  return left;
};
