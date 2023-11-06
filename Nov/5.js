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
  let preFixsum = 0;

  for (let weight of w) {
    preFixsum = preFixsum + weight;
    this.preFixSums.push(preFixsum);
  }
  this.totalSum = preFixsum;
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

const ttt = (order, s) => {
  const map = new Map();
  let result = "";

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (let char of order) {
    while (map.get(char)) {
      result = result + char;
      map.set(char, map.get(char) - 1);
    }
  }
  for (let [char, count] of map.entries()) {
    result = result + char.repeat(count);
  }

  return result;
};

const lastest = (nums, k) => {
  const minHeap = [];

  for (let i = 0; i < nums.length; i++) {
    if (i < k) {
      minHeap.push(nums[i]);
      // function
      heapfy();
    } else if (nums[i] > minHeap[0]) {
      minHeap[0] = nums[i];
      shiftDown();
    }
  }

  return minHeap[0];

  function heapfy() {
    let index = minHeap.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (minHeap[parent] > minHeap[index]) {
        [minHeap[index], minHeap[parent]] = [minHeap[parent], minHeap[index]];
        index = parent;
      } else break;
    }
  }

  function shiftDown() {
    let index = 0;
    while (index * 2 + 1 < minHeap.length) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let smallest = index;

      if (minHeap[left] < minHeap[smallest]) smallest = left;
      if (right < minHeap.length && minHeap[right] < minHeap[smallest])
        smallest = right;
      if (index !== smallest) {
        [minHeap[index], minHeap[smallest]] = [
          minHeap[smallest],
          minHeap[index],
        ];
        index = smallest;
      } else break;
    }
  }
};

const iWich = (w) => {
  this.preFixSums = [];
  let preFixSum = 0;

  for (let weight of w) {
    preFixSum += weight;
    this.preFixSums.push(preFixSum);
  }
  this.totalSum = preFixSum;
};

iWich.prototype.je = function () {
  let target = this.totalSum * Math.random();

  let left = 0;
  let right = this.preFixSums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target > this.preFixSums[mid]) left = mid + 1;
    else right = mid;
  }
  return left;
};

const check = (root, low, high) => {
  if (!root) return 0;
  let result = 0;

  if (root.val >= low) result = result + check(root.left, low, high);
  if (root.val >= low && root.val <= high) result = result + root.val;
  if (root.val <= high) result = result + check(root.right, low, high);

  return result;
};

const ppppath = (path) => {
  const dict = path.split("/");
  const stack = [];

  for (let char of dict) {
    if (char === "..") stack.pop();
    else if (char && char !== ".") stack.push(char);
  }
  return "/" + stack.join("/");
};

const groupString = (strings) => {
  const map = new Map();
  for (let string of strings) {
    const key = helper(string);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(string);
  }
  return Array.from(map.values());
};

const helper = (string) => {
  let key = "";

  for (let i = 1; i < string.length; i++) {
    const shift = (string.charCodeAt(i) - string.charCodeAt(i - 1) + 26) % 26;
    key += String.fromCharCode("a".charCodeAt(0) + shift) + ",";
  }
  return key;
};
