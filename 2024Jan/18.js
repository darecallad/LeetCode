var encode = function (strs) {
  return strs.map((s) => `${s.length}#${s}`).join("");
};
var decode = function (s) {
  let strs = [];
  let i = 0;

  while (i < s.length) {
    let j = i;
    while (j !== "#") {
      const length = parseInt(s.substring(i, j));
      strs.push(s.substring(j + 1, j + 1 + length));
      i = j + 1 + length;
    }
  }
  return strs;
};

var encode = function (strs) {
  return strs.map((s) => `${s.length}#${s}`).join("");
};
var decode = function (s) {
  const strs = [];
  let i = 0;
  while (i < s.length) {
    let j = i;

    while (j !== "#") {
      const length = parseInt(s.substring(i, j));
      strs.push(s.substring(j + 1, j + 1 + length));
      i = j + 1 + length;
    }
  }
  return strs;
};

var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += helper(i, i, s);
    count += helper(i, i + 1, s);
  }
  return count;

  function helper(s, left, right) {
    let count = 0;
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
    return count;
  }
};

var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += helper(s, i, i);
    count += helper(s, i, i + 1);
  }
  return count;

  function helper(s, left, right) {
    let count = 0;
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
    return count;
  }
};

var invertTree = function (root) {
  if (!root) return null;
  let temp = root.left;

  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  return root;
};

var invertTree = function (root) {
  if (!root) return null;

  let temp = root.left;

  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  return root;
};

var maxPathSum = function (root) {
  let maxSum = Number.MIN_SAFE_INTEGER;

  function dfs(node) {
    if (!node) return 0;
    let left = Math.max(0, dfs(node.left));
    let right = Math.max(0, dfs(node.right));
    maxSum = Math.max(maxSum, left + node.val + right);
    return Math.max(left, right) + node.val;
  }
  dfs(root);
  return maxSum;
};

var maxPathSum = function (root) {
  let maxSum = Numer.MIN_SAFE_INTEGER;
  function dfs(node) {
    if (!node) return 0;
    let left = Math.max(0, dfs(node.left));
    let right = Math.max(0, dfs(node.right));
    let maxSum = Math.max(maxSum, left + node.val + right);
    return Math.max(left, right) + node.val;
  }
  dfs(root);
  return maxSum;
};

var maxPathSum = function (root) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  function dfs(node) {
    if (!node) return 0;
    let left = Math.max(0, dfs(node.left));
    let right = Math.max(0, dfs(node.right));
    maxSum = Math.max(maxSum, left + node.val + right);
    return Math.max(left, right) + node.val;
  }
  dfs(root);
  return maxSum;
};

var levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  let queue = [root];

  while (queue.length) {
    let level = [];
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      level.push(curr);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    result.push(level);
  }
  return result;
};
var levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length) {
    const level = [];
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const cur = queue.shift();
      level.push(cur);
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    result.push(level);
  }
  return result;
};

var levelOrder = function (root) {
  if (!root) return 0;
  const result = [];
  const queue = [root];

  while (queue.length) {
    const level = [];
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const cur = queue.shift();
      level.push(cur.val);
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    result.push(level);
  }
  return result;
};

var longestPalindrome = function (s) {
  const n = s.length;
  let ans = "";
  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 1; i <= n; i++) {
    for (let start = 0; start < n; start++) {
      let end = start + i - 1;
      if (end >= n) break;
      dp[start][end] =
        (i === 1 || i === 2 || dp[start + 1][end - 1]) && s[start] === s[end];
      if (dp[start][end] && i > ans.length) {
        ans = s.substring(start, end + 1);
      }
    }
  }
  return ans;
};

var longestPalindrome = function (s) {
  let ans = "";
  const n = s.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 1; i <= s.length; i++) {
    for (let start = 0; start < s.length; start++) {
      let end = start + i - 1;
      if (end >= n) break;
      dp[start][end] =
        (i === 1 || i === 2 || dp[start + 1][end - 1]) && s[start] === s[end];
      if (dp[start][end] && i > ans.length) {
        ans = s.substring(start, end + 1);
      }
    }
  }
  return ans;
};
var longestPalindrome = function (s) {
  let ans = "";
  const n = s.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 1; i <= n; i++) {
    for (let start = 0; start < n; start++) {
      let end = start + i - 1;
      if (end >= n) break;
      dp[start][end] =
        (i === 1 || i === 2 || dp[start + 1][end - 1]) && s[start] === s[end];
      if (dp[start][end] && i > ans.length) {
        ans = s.substring(start, end + 1);
      }
    }
  }
  return ans;
};
var longestPalindrome = function (s) {
  let ans = "";
  const n = s.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 1; i <= s.length; i++) {
    for (let start = 0; start < n; start++) {
      let end = start + i - 1;
      if (end >= n) break;
      dp[start][end] =
        (i === 1 || i === 2 || dp[start + 1][end - 1]) && s[start] === s[end];
      if (dp[start][end] && i > ans.length) {
        ans = s.substring(start, end + 1);
      }
    }
  }
  return ans;
};

var isSubtree = function (root, subRoot) {
  if (!subRoot) return true;
  if (!root) return false;
  if (isSmaeTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

  function isSmaeTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;

    return (
      p.val === q.val &&
      isSmaeTree(p.left, q.left) &&
      isSmaeTree(p.right, q.right)
    );
  }
};

var isSubtree = function (root, subRoot) {
  if (!subRoot) return true;
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

  function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return (
      p.val === q.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right)
    );
  }
};

var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  let rootVal = preorder[0];
  let root = new TreeNode(rootVal);
  let mid = inorder.indexOf(rootVal);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};

var buildTree = function (preorder, inorder) {
  let rootVal = preorder[0];
  let root = new TreeNode(rootVal);
  let mid = inorder.indexOf(rootVal);

  root.left = buildTree(preorder(1, mid + 1), inorder(0, mid));
  root.right = buildTree(preorder(mid + 1), inorder(mid + 1));
  return root;
};

var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);
  const mid = inorder.indexOf(rootVal);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};

var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  let rootVal = preorder[0];
  let root = new TreeNode(rootVal);
  let mid = inorder.indexOf(rootVal);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};

var minWindow = function (s, t) {
  if (!s.length || !t.length) return "";
  const dictT = {};
  for (let char of t) {
    dictT[char] = (dictT[char] || 0) + 1;
  }
  const required = Object.keys(dictT).length;
  let l = 0;
  let r = 0;
  let formed = 0;
  let ans = [-1, 0, 0];
  const windowCount = {};

  while (r < s.length) {
    let char = s[r];
    windowCount[char] = (windowCount[char] || 0) + 1;

    if (dictT[char] && dictT[char] === windowCount[char]) {
      formed++;
    }

    while (l <= r && formed === required) {
      char = s[l];
      if (ans[0] === -1 || r - l + 1 < ans[0]) {
        ans = [r - l + 1, l, r];
      }

      windowCount[char]--;
      if (dictT[char] && windowCount[char] < dictT[char]) {
        formed--;
      }
      l++;
    }
    r++;
  }
  return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1);
};

var serialize = function (root) {
  function buildString(node) {
    if (node === null) return "null";
    return `${node.val},${buildString(node.left)}${buildString(node.right)}`;
  }
  return buildString(root);
};
var deserialize = function (data) {
  let list = data.split(",");
  function buildTree() {
    let val = list.shift();
    if (val === "null") return null;
    let node = new TreeNode(parseInt(val));
    node.left = buildTree();
    node.right = buildTree();
    return node;
  }
  return buildTree();
};

var serialize = function (root) {
  function buildString(node) {
    if (node === null) return "null";
    return `${node.val}, ${buildString(node.left)}${buildString(node.right)}`;
  }
  return buildString(root);
};
var deserialize = function (data) {
  let list = data.split(",");
  function buildTree() {
    let val = list.shift();
    if (val === "null") return null;
    let node = new TreeNode(parseInt(val));
    node.left = buildTree();
    node.right = buildTree();
    return node;
  }
  return buildTree();
};
var serialize = function (root) {
  function buildString(node) {
    if (node === null) return "null";
    return `${node.val}, ${buildString(node.left)}${buildString(node.right)}`;
  }
  return buildString(root);
};
var deserialize = function (data) {
  let list = data.split(",");
  function buildingTree() {
    let val = list.shift();
    const node = new TreeNode(parseInt(val));
    node.left = buildingTree();
    node.right = buildingTree();
    return node;
  }
  return buildingTree();
};

var deserialize = function (data) {
  let list = data.split(",");
  function buildTree() {
    let val = list.shift();
    const node = new TreeNode(parseInt(val));
    node.left = buildTree();
    node.right = buildTree();
    return node;
  }
  return buildTree();
};

var isValidBST = function (root) {
  return validate(root, null, null);
  function validate(node, low, high) {
    if (!node) return true;
    if (
      (low !== null && node.val <= low) ||
      (high !== null && node.val >= high)
    )
      return false;

    return (
      validate(node.left, low, node.val) && validate(node.right, node.val, high)
    );
  }
};

var isValidBST = function (root) {
  return validate(root, null, null);

  function validate(node, low, high) {
    if (!node) return true;
    if (
      (low !== null && node.val <= low) ||
      (high !== null && node.val >= high)
    )
      return false;
    return (
      validate(node.left, low, node.val) && validate(node.right, node.val, high)
    );
  }
};

var isValidBST = function (root) {
  return validate(root, null, null);
  function validate(node, low, high) {
    if (!node) return true;
    if (
      (low !== null && node.val <= low) ||
      (high !== null && node.val >= high)
    )
      return false;
    return (
      validate(node.left, low, node.val) && validate(node.right, node.val, high)
    );
  }
};

var lowestCommonAncestor = function (root, p, q) {
  let node = root;
  while (node) {
    if (p.val > node.val && q.val > node.val) node = node.right;
    else if (p.val < node.val && q.val < node.val) node = node.left;
    else return node;
  }
  return null;
};

var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (p.val > root.val && q.val > root.val) root = root.right;
    else if (p.val < root.val && q.val < root.val) root = root.left;
    else return root;
  }
  return null;
};

var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (root.val > p.val && root.val > q.val) root = root.right;
    else if (root.val < p.val && root.val < q.val) root = root.left;
    else return root;
  }
  return null;
};

var kthSmallest = function (root, k) {
  const stack = [];
  let node = root;
  let count = 0;

  while (true) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    count++;

    if (count === k) return node.val;
    node = node.right;
  }
};

var kthSmallest = function (root, k) {
  const stack = [];
  let count = 0;
  let node = root;

  while (true) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    count++;
    if (count === k) return node.val;
    node = node.right;
  }
};

var kthSmallest = function (root, k) {
  const stack = [];
  let node = root;
  let count = 0;

  while (true) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    count++;
    if (count === k) return node.val;
    node = node.right;
  }
};

var topKFrequent = function (nums, k) {
  const map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const minHeap = [];
  for (let [num, freq] of map.entries()) {
    minHeap.push([num, freq]);
    if (minHeap.length > k) {
      minHeap.sort((a, b) => a - b);
      minHeap.shift();
    }
  }
  return minHeap.map((item) => item[0]);
};

var topKFrequent = function (nums, k) {
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

var topKFrequent = function (nums, k) {
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

var minWindow = function (s, t) {
  const dictT = {};
  for (let char of t) {
    dictT[char] = (dictT[char] || 0) + 1;
  }
  const required = Object.keys(dictT).length;
  const windowCount = {};
  let l = 0;
  let r = 0;
  let formed = 0;
  let ans = [-1, 0, 0];

  while (r < s.length) {
    let char = s[r];
    windowCount[char] = (windowCount[char] || 0) + 1;

    if (dictT[char] && dictT[char] === windowCount[char]) {
      formed++;
    }

    while (l <= r && formed === required) {
      char = s[l];
      if (ans[0] === -1 || r - l + 1 < ans[0]) {
        ans = [r - l + 1, l, r];
      }
      windowCount[char]--;
      if (dictT[char] && windowCount[char] < dictT[char]) {
        formed--;
      }
      l++;
    }
    r++;
  }
  return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1);
};

var minWindow = function (s, t) {
  let dictT = {};
  for (let char of t) {
    dictT[char] = (dictT[char] || 0) + 1;
  }
  const required = Object.keys(dictT).length;
  let formed = 0;
  let l = 0;
  let r = 0;
  let windowCount = {};
  let ans = [-1, 0, 0];

  while (r < s.length) {
    let char = s[r];
    windowCount[char] = (windowCount[char] || 0) + 1;

    if (dictT[char] && windowCount[char] === dictT[char]) {
      formed++;
    }

    while (l <= r && formed === required) {
      char = s[l];
      if (ans[0] === -1 || r - l + 1 < ans[0]) {
        ans = [r - l + 1, l, r];
      }

      windowCount[char]--;

      if (dictT[char] && windowCount[char] < dictT[char]) {
        formed--;
      }
      l++;
    }
    r++;
  }
  return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1);
};

var maxProfit = function (prices) {
  let buyTime = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (buyTime > prices[i]) buyTime = prices[i];
    profit = Math.max(profit, prices[i] - buyTime);
  }
  return profit;
};

var isValid = function (s) {
  let stack = [];
  let mapping = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let char of s) {
    if (mapping[char]) {
      let top = stack.length === 0 ? "#" : stack.pop();
      if (top !== mapping[char]) return false;
    } else stack.push(char);
  }
  return stack.length === 0;
};

var rotate = function (nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  function reverse(nums, left, right) {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }
};

var rotate = function (nums, k) {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  function reverse(nums, left, right) {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }
};

var groupAnagrams = function (strs) {
  const map = new Map();
  for (let str of strs) {
    const key = str.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }
  return Array.from(map.values());
};

var groupAnagrams = function (strs) {
  const map = new Map();
  for (let str of strs) {
    const key = str.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }
  return Array.from(map.values());
};

var merge = function (intervals) {
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  for (let interval of intervals) {
    if (result.length === 0 || result[result.length - 1][1] < interval[0]) {
      result.push(interval);
    } else {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        interval[1]
      );
    }
  }
  return result;
};

var merge = function (intervals) {
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  for (let interval of intervals) {
    if (result.length === 0 || result[result.length - 1][1] < interval[0]) {
      result.push(interval);
    } else {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        interval[1]
      );
    }
  }
  return result;
};

var lengthOfLongestSubstring = function (s) {
  let sub = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let index = sub.indexOf(s[i]);
    if (index !== -1) sub = sub.substring(index + 1);
    sub = sub + s[i];
    count = Math.max(count, sub.length);
  }
  return count;
};

var lengthOfLongestSubstring = function (s) {
  let sub = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let index = sub.indexOf(s[i]);
    if (index !== -1) sub = sub.substring(index + 1);
    sub = sub + s[i];
    count = Math.max(count, sub.length);
  }
  return count;
};

var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  const result = [];

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
};

var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [root];
  let leftToRight = true;

  while (queue.length > 0) {
    levelSize = queue.length;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      let cur = queue.shift();
      if (leftToRight) {
        level.push(cur.val);
      } else {
        level.unshift(cur.val);
      }
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    leftToRight = !leftToRight;
    result.push(level);
  }
  return result;
};
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  let leftToRight = true;

  while (queue.length) {
    const levelSize = queue.length;
    const level = [];
    for (let i = 0; i < levelSize; i++) {
      let cur = queue.shift();
      if (leftToRight) {
        level.push(cur.val);
      } else {
        level.unshift(cur.val);
      }

      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    leftToRight = !leftToRight;
    result.push(level);
  }
  return result;
};
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  let leftToRight = true;

  while (queue.length) {
    const level = [];
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const cur = queue.shift();
      if (leftToRight) {
        level.push(cur.val);
      } else {
        level.unshift(cur.val);
      }

      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    leftToRight = !leftToRight;
    result.push(level);
  }
  return result;
};
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  let leftToRight = true;

  while (queue.length) {
    const level = [];
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let cur = queue.shift();
      if (leftToRight) {
        level.push(cur.val);
      } else {
        level.unshift(cur.val);
      }

      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }

    leftToRight = !leftToRight;
    result.push(level);
  }
  return result;
};
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  let leftToRight = true;

  while (queue.length) {
    const level = [];
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const cur = queue.shift();
      if (leftToRight) {
        level.push(cur.val);
      } else {
        level.unshift(cur.val);
      }

      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    leftToRight = !leftToRight;
    result.push(level);
  }
  return result;
};

var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let current = 0;

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

var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let current = 0;

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

var sortColors = function (nums) {
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

var longestPalindrome = function (s) {
  const n = s.length;
  let ans = "";
  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 1; i <= n; i++) {
    for (let start = 0; start < n; start++) {
      let end = start + i - 1;
      if (end >= n) break;
      dp[start][end] =
        (i === 1 || i === 2 || dp[start + 1][end - 1]) && s[start] === s[end];
      if (dp[start][end] && i > ans.length) {
        ans = s.substring(start, end + 1);
      }
    }
  }
  return ans;
};

var lengthOfLongestSubstring = function (s) {
  let sub = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let index = sub.indexOf(s[i]);
    if (index !== -1) sub = sub.substring(index + 1);
    sub = sub + s[i];
    count = Math.max(count, sub.length);
  }
  return count;
};

var longestPalindrome = function (s) {
  const n = s.length;
  let ans = "";
  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 1; i <= n; i++) {
    for (let start = 0; start < n; start++) {
      let end = start + i - 1;
      if (end >= n) break;
      dp[start][end] =
        (i === 1 || i === 2 || dp[start + 1][end - 1]) && s[start] === s[end];
      if (dp[start][end] && i > ans.length) {
        ans = s.substring(start, end + 1);
      }
    }
  }
  return ans;
};
var lengthOfLongestSubstring = function (s) {
  let sub = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let index = sub.indexOf(s[i]);
    if (index !== -1) sub = sub.substring(index + 1);
    sub = sub + s[i];
    count = Math.max(count, sub.length);
  }
  return count;
};

var longestPalindrome = function (s) {
  const n = s.length;
  let ans = "";
  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 1; i <= n; i++) {
    for (let start = 0; start < n; start++) {
      let end = start + i - 1;
      if (end >= n) break;
      dp[start][end] =
        (i === 1 || i === 2 || dp[start + 1][end - 1]) && s[start] === s[end];
      if (dp[start][end] && i > ans.length) {
        ans = s.substring(start, end + 1);
      }
    }
  }
  return ans;
};

var longestPalindrome = function (s) {
  let ans = "";
  const n = s.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 0; i <= s.length; i++) {
    for (let start = 1; start < n; start++) {
      let end = start + i - 1;
      if (end >= n) break;
      dp[start][end] =
        (i === 1 || i === 2 || dp[start + 1][end - 1]) && s[start] === s[end];
      if (dp[start][end] && i > ans.length) {
        ans = s.substring(start, end + 1);
      }
    }
  }
  return ans;
};

var LRUCache = function (capacity) {
  this.cache = new Map();
  const keys = [];
  this.onBeforeAccess = (key) => {
    if (this.cache.has(key)) {
      key.splice(key.indexOf(key), 1);
    }
    keys.push(key);
    if (keys.length > capacity) {
      const keyToRemove = keys.shift();
      this.cache.delete(keyToRemove);
    }
  };
};

LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    this.onBeforeAccess(key);
    return this.cache.get(key);
  } else return -1;
};

LRUCache.prototype.put = function (key, value) {
  this.onBeforeAccess(key);
  this.cache.set(key, value);
};

var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;
  let trappedWater = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        trappedWater += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        trappedWater += maxRight - height[right];
      }
      right--;
    }
  }
  return trappedWater;
};
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxRight = 0;
  let maxLeft = 0;
  let total = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        total += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        total += maxRight - height[right];
      }
      right--;
    }
  }
  return total;
};

var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxRight = 0;
  let maxLeft = 0;
  let total = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        total += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        total += maxRight - height[right];
      }
      right--;
    }
  }
  return total;
};

var distanceK = function (root, target, k) {
  // add parent pointers to tree
  const addParents = (node, parent = null) => {
    if (!node) return;
    node.parent = parent;
    addParents(node.left, node);
    addParents(node.right, node);
  };
  // find all vals k distance from target
  const getDist = (node, dist = 0) => {
    if (!node || dist > k) return;
    if (visited.has(node)) return;

    if (dist === k) res.push(node.val);
    visited.add(node);

    getDist(node.left, dist + 1);
    getDist(node.right, dist + 1);
    getDist(node.parent, dist + 1);
  };

  addParents(root);
  const res = [];
  const visited = new Set();
  getDist(target);
  return res;
};

var distanceK = function (root, target, k) {
  const addParent = (node, parent) => {
    if (!node) return;
    node.parent = parent;
    addParent(node.left, node);
    addParent(node.right, node);
  };

  const getDist = (node, dist = 0) => {
    if (!node || dist > k) return;
    if (visited.has(node)) return;

    if (dist === k) res.push(node.val);
    visited.add(node);

    getDist(node.left, dist + 1);
    getDist(node.right, dist + 1);
    getDist(node.parent, dist + 1);
  };

  addParent(root);
  const res = [];
  const visited = new Set();
  getDist(target);
  return res;
};

var findShortestSubArray = function (nums) {
  let left = {},
    right = {},
    counts = {};
  let degree = 0;

  nums.forEach((num, i) => {
    if (left[num] === undefined) left[num] = i;
    right[num] = i;
    counts[num] = (counts[num] || 0) + 1;
    degree = Math.max(degree, counts[num]);
  });

  let minLength = nums.length;
  for (let num in counts) {
    if (counts[num] === degress) {
      minLength = Math.min(minLength, right[num] - left[num] + 1);
    }
  }
  return minLength;
};

var findShortestSubArray = function (nums) {
  let left = {},
    right = {},
    counts = {};
  let degree = 0;

  nums.forEach((num, i) => {
    if (left[num] === undefined) left[num] = i;
    right[num] = i;
    counts[num] = (counts[num] || 0) + 1;
    degree = Math.max(degree, counts[num]);
  });

  let minLength = nums.length;
  for (let num in counts) {
    if (counts[num] === degree) {
      minLength = Math.min(minLength, right[num] - left[num] + 1);
    }
  }
  return minLength;
};

var findShortestSubArray = function (nums) {
  let left = {},
    right = {},
    counts = {};
  let degree = 0;

  nums.forEach((num, i) => {
    if (left[num] === undefined) left[num] = i;
    right[num] = i;
    counts[num] = (counts[num] || 0) + 1;
    degree = Math.max(degree, counts[num]);
  });

  let minLength = nums.length;
  for (let num in counts) {
    if (counts[num] === degree) {
      minLength = Math.min(minLength, right[num] - left[num] + 1);
    }
  }
  return minLength;
};

var maximumProfit = function (present, future, budget) {
  let profits = [];
  for (let i = 0; i < present.length; i++) {
    profits.push({ profit: future[i] - present[i], cost: present[i] });
  }

  profits.sort((a, b) => b.profit - a.profit);

  let totoalProfit = 0;

  for (let { profit, cost } of profits) {
    if (budget >= cost) {
      budget -= cost;
      topKFrequent += profit;
    }
  }
  return totoalProfit;
};

var maximumProfit = function (present, future, budget) {
  let profits = [];
  for (let i = 0; i < present.length; i++) {
    profits.push({ profit: future[i] - present[i], cost: present[i] });
  }

  profits.sort((a, b) => b.profit - a.profit);
  let total = 0;
  for (let { profit, cost } of profits) {
    if (budget >= cost) {
      budget -= cost;
      total += profit;
    }
  }
  return total;
};

var maximumProfit = function (present, future, budget) {
  let stocks = present.map((cost, index) => ({
    cost,
    profit: future[index] - cost,
  }));

  stocks.sort((a, b) => a.cost - b.cost);

  let dp = new Array(budget + 1).fill(0);

  for (let { cost, profit } of stocks) {
    for (let b = budget; b >= cost; b--) {
      dp[b] = Math.max(dp[b], dp[b - cost] + profit);
    }
  }
  return dp[budget];
};

var maximumProfit = function (present, future, budget) {
  let stocks = present.map((cost, index) => ({
    cost,
    profit: future[index] - cost,
  }));

  stocks.sort((a, b) => a.cost - b.cost);
  const dp = new Array(budget + 1).fill(0);

  for (let { cost, profit } of stocks) {
    for (let b = budget; b >= cost; b--) {
      dp[b] = Math.max(dp[b], dp[b - cost] + profit);
    }
  }
  return dp[budget];
};

var maximumProfit = function (present, future, budget) {
  let stocks = present.map((cost, index) => ({
    cost,
    profit: future[index] - cost,
  }));

  stocks.sort((a, b) => a.cost - b.cost);
  const dp = new Array(budget + 1).fill(0);
  for (let { cost, profit } of stocks) {
    for (let b = budget; b >= cost; b--) {
      dp[b] = Math.max(dp[b], dp[b - cost] + profit);
    }
  }
  return dp[budget];
};

var maxPalindromes = function (s, k) {
  let ans = 0;

  const isPalindromes = (str) => {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  };

  let len = s.length;
  let i = 0;

  while (i + k <= len) {
    let step = 1;
    if (isPalindromes(s.substring(i, i + k))) {
      ans++;
      step = k;
    } else if (i + k + 1 <= len) {
      if (isPalindromes(s.substring(i, i + k + 1))) {
        ans++;
        step = k + 1;
      }
    }
    i += step;
  }
  return ans;
};

var maxPalindromes = function (s, k) {
  let ans = "";

  function isPalindromes(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  let len = s.length;
  let i = 0;

  while (i + k <= len) {
    let step = 1;
    if (isPalindromes(s.substring(i, i + k))) {
      ans++;
      step = k;
    } else if (i + k + 1 <= len) {
      if (isPalindromes(s.substring(i, i + k + 1))) {
        ans++;
        step = k + 1;
      }
    }
    i = i + step;
  }
  return ans;
};

var maxPalindromes = function (s, k) {
  let ans = "";
  function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  let i = 0;
  let len = s.length;

  while (i + k <= len) {
    let step = 1;
    if (isPalindrome(s.substring(i, i + k))) {
      ans++;
      step = k;
    } else if (i + k + 1 <= len) {
      if (isPalindrome(i, i + k + 1)) {
        ans++;
        step = k + 1;
      }
    }
    i = i + step;
  }
  return ans;
};
