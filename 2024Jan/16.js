var minWindow = function (s, t) {
  if (s.length === 0 || t.length === 0) return "";

  const dictT = {};
  // trach unique char
  for (let char of t) {
    dictT[char] = (dictT[char] || 0) + 1;
  }
  // number unique char in T
  let required = Object.keys(dictT).length;

  // left and right pointers
  let left = 0;
  let right = 0;

  // track unique char in current
  let formed = 0;

  // current Dict
  const windowCounts = {};

  // ans list of form ( window.length, left, right);
  let ans = [-1, 0, 0];

  while (r < s.length) {
    // add one chata from right
    let char = s[r];
    windowCounts[char] = (windowCounts[char] || 0) + 1;

    if (dictT[char] && dictT[char] === windowCounts[char]) {
      formed++;
    }

    while (l <= r && formed === required) {
      char = s[l];

      // save smallest window
      if (ans[0] === -1 || r - l + 1 < ans[0]) {
        ans[(r - l + 1, l, r)];
      }

      // if left is not part of window
      windowCounts[char]--;
      if (dictT[char] && windowCounts[char] < dictT[char]) {
        formed--;
      }
      // move left
      l++;
    }
    // expanding window
    r++;
  }
  return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1);
};

var minWindow = function (s, t) {
  if (s.length === 0 || t.length === 0) return "";

  const dictT = {};
  for (let char of t) {
    dictT[char] = (dictT[char] || 0) + 1;
  }

  const required = Object.keys(dictT).length;

  let l = 0;
  let r = 0;

  let formed = 0;

  const windowCount = {};

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
  if (s.length === 0 || t.length === 0) return "";
  const dictT = {};
  for (let char of t) {
    dictT[char] = (dictT[char] || 0) + 1;
  }
  const required = Object.keys(dictT).length;

  let l = 0;
  let r = 0;

  let formed = 0;

  const windowCount = {};
  let ans = [-1, 0, 0];

  while (r < s.length) {
    let char = s[r];
    windowCount[char] = (windowCount[char] || 0) + 1;

    if (dictT[char] && dictT[char] === windowCount[char]) {
      formed++;
    }

    while (l < r && formed === required) {
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
  if (s.length === 0 || t.length === 0) return "";
  const dictT = {};
  for (let char of t) {
    dictT[char] = (dictT[char] || 0) + 1;
  }
  const required = Object.keys(dictT).length;

  let l = 0;
  let r = 0;
  let formed = 0;
  const windowCount = {};
  let ans = [-1, 0, 0];
  while (r < s.length) {
    let char = s[r];
    windowCount[char] = (windowCount[char] || 0) + 1;

    if (dictT[char] & (dictT[char] === windowCount[char])) {
      formed++;
    }

    while (l <= r && formed === required) {
      char = s[l];
      if (ans[0] === -1 && r - l + 1 < ans[0]) {
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
  if (s.length === 0 || t.length === 0) return "";
  const dictT = {};
  for (let char of t) {
    dictT[char] = (dictT[char] || 0) + 1;
  }
  const required = Object.keys(dictT).length;
  let l = 0;
  let r = 0;
  let formed = 0;
  let windowCount = {};
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
  if (s.length === 0 || t.length === 0) {
    return "";
  }
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
  if (s.length === 0 || t.length === 0) {
    return "";
  }
  const dictT = {};
  for (let char of t) {
    dictT[char] = (dictT[char] || 0) + 1;
  }
  const required = Object.keys(dictT).length;
  let l = 0;
  let r = 0;
  const windowCount = {};
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

var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
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
    let left = Math.max(0, dfs(node.left));
    let right = Math.max(0, dfs(node.right));
    maxSum = Math.max(maxSum, left + node.val + right);
    return Math.max(left, right) + node.val;
  }
  dfs(root);
  return maxSum;
};

var maxPathSum = function (root) {
  let maxSum = Number.MIN_SAFE_INTEGER;

  function dfs(node) {
    let left = Math.max(0, dfs(node.left));
    let right = Math.max(0, dfs(node.right));
    maxSum = Math.max(maxSum, left + node.val + right);
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

var maxPathSum = function (root) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  function dfs(node) {
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
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let level = [];
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();
      level.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    result.push(level);
  }
  return result;
};

var levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  let queue = [root];

  while (queue.length > 0) {
    let level = [];
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const curr = queue.shift();
      level.push(curr.val);
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

  while (queue.length > 0) {
    const level = [];
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      level.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    result.push(level);
  }
  return result;
};

var serialize = function (root) {
  function buildString(node) {
    if (node === null) return "null";
    return `${node.val}, ${buildString(node.left)}${buildString(node.right)}`;
  }
  return buildString(root);
};

var serialize = function (root) {
  function buildString(node) {
    if (!node) return "null";
    return `${node.val}, ${buildString(node.left)}${buildString(node.right)}`;
  }
  return buildString(root);
};

var serialize = function (root) {
  function buildString(node) {
    if (!node) return "null";
    return `${node.val}, ${buildString(node.left)}${buildString(node.right)}`;
  }
  return buildString(root);
};

var deserialize = function (data) {
  let list = data.split(",");

  function buildTree() {
    let val = list.shift();
    if (val === "null") {
      return null;
    }
    let node = new TreeNode(parseInt(val));
    node.left = buildTree();
    node.right = buildTree();
    return node;
  }
  return buildTree();
};

var serialize = function (root) {
  function buildString(node) {
    if (!node) return "null";
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

var deserialize = function (data) {
  let list = data.split(",");
  function buildTree() {
    let val = list.shift();
    if (val === "null") return null;
    const node = new TreeNode(parseInt(val));
    node.left = buildTree();
    node.right = buildTree();
    return node;
  }
  return buildTree();
};

var deserialize = function (data) {
  let list = data.split(",");
  function buildTree() {
    let val = list.shift();
    if (val === "null") return null;
    const node = new TreeNode(parseInt(val));
    node.left = buildTree();
    node.right = buildTree();
    return node;
  }
  return buildTree();
};

var isSubtree = function (root, subRoot) {
  if (!subRoot) return true;
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

  function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
};

var isSubtree = function (root, subRoot) {
  if (!subRoot) return true;
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSameTree(root.right, subRoot);

  function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
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
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
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
  if (!preorder.length || !inorder.length) return null;
  let rootVal = preorder[0];
  let root = new TreeNode(rootVal);
  let mid = inorder.indexOf(rootVal);

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

var buildTree = function (preorder, inorder) {
  if (!preorder.length || inorder.length) return null;
  let rootVal = preorder[0];
  let root = new TreeNode(rootVal);
  let mid = inorder.indexOf(rootVal);

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

var isValidBST = function (root) {
  return validate(root, null, null);

  function validate(node, low, high) {
    if (node === null) return true;
    if (
      (low !== null && node.val <= low) ||
      (high !== null && node.val >= high)
    )
      return false;
    return validate(node.left, low, high) && validate(node.right, low, high);
  }
};

var isValidBST = function (root) {
  return validate(root, null, null);
  function validate(node, low, high) {
    if (!node) return true;
    if ((low !== null && node.val <= low) || (!high && node.val >= high)) {
      return false;
    }
    return (
      validate(node.right, node.val, high) && validate(node.left, low, node.val)
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
  let node = root;
  while (node) {
    if (p.val > node.val && q.val > node.val) node = node.right;
    else if (p.val < node.val && q.val < node.val) node = node.left;
    else return node;
  }
  return null;
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

var topKFrequent = function (nums, k) {
  let map = new Map();
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

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (map.has(res)) return [map.get(res), i];
    else map.set(nums[i], i);
  }
};

var maxProfit = function (prices) {
  let buyTime = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyTime) buyTime = prices[i];
    else profit = Math.max(profit, prices[i] - buyTime);
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
  const dp = Array.from({ length: nums.length }, () => fill(1));
  let left = 1;

  for (let i = 1; i < nums.length; i++) {
    left *= nums[i - 1];
    dp[i] *= left;
  }
  let right = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    right *= nums[i + 1];
    dp[i] *= right;
  }

  return dp;
};

var maxSubArray = function (nums) {
  let cur = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], nums[i] + cur);
    max = Math.max(max, cur);
  }
  return max;
};

var maxProduct = function (nums) {
  let max = nums[0];
  let min = nums[0];
  let res = max;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [max, min] = [min, max];
    max = Math.max(nums[i] * max, nums[i]);
    min = Math.min(nums[i], nums[i] * min);
    res = Math.max(max, res);
  }
  return res;
};

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  return nums[left];
};

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] === target) return mid;
    else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid;
      } else left = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid;
    }
  }
  return -1;
};

var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
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
    if (height[left] < height[right]) {
      left++;
    } else right--;
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
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(i.toString(2).split("1").length - 1);
  }
  return result;
};

var missingNumber = function (nums) {
  const n = nums.length;
  let total = (n * (n + 1)) / 2;
  for (let num of nums) {
    total -= num;
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

var climbStairs = function (n) {
  if (n <= 2) return n;
  const dp = Array.from({ length: n + 1 });
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];
};

var coinChange = function (coins, amount) {
  const dp = Array.from({ length: amount + 1 }, () => Infinity);
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
  const dp = Array.from({ length: amount + 1 }, () => Infinity);
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
  for (let i = 0; i < nums.length; i++) {
    let left = 0;
    let right = tails.length;
    while (left < right) {
      const mid = Math.floor((right - left) / 2) + left;
      if (tails[mid] < nums[i]) left = mid + 1;
      else right = mid;
    }
    tails[left] = nums[i];
    if (left === tails.length) tails.push(nums[i]);
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
  const m = text1.length;
  const n = text2.length;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] !== text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
};

var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

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

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
};

var wordBreak = function (s, wordDict) {
  const dp = Array.from({ length: s.length + 1 }, () => false);
  dp[0] = true;

  for (let i = 0; i <= s.length; i++) {
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
  const dp = Array.from({ length: s.length + 1 }, () => false);
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
  const dp = Array.from({ length: target + 1 }, () => 0);

  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i - num >= 0) {
        dp[i] = dp[i] + dp[i - num];
      }
    }
  }
  return dp[target];
};

var combinationSum4 = function (nums, target) {
  const dp = Array.from({ length: target + 1 }, () => 0);
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i - num >= 0) {
        dp[i] += dp[i - num];
      }
    }
  }
  return dp[target];
};

var rob = function (nums) {
  const n = nums.length;

  if (n === 0) return 0;
  if (n === 1) return nums[1];
  if (n === 2) return Math.max(nums[0], nums[1]);

  const dp = Array.from({ length: n });

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

  const dp = Array.from({ length: n });
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

  function helper(house) {
    let rob1 = 0;
    let rob2 = 0;
    for (let money of house) {
      let temp = Math.max(rob1 + money, rob2);
      rob1 = rob2;
      rob2 = temp;
    }
    return rob2;
  }
  return Math.max(helper(nums.slice(0, n - 1)), helper(nums.slice(1)));
};

var rob = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  function helper(house) {
    let rob1 = 0;
    let rob2 = 0;
    for (let money of house) {
      let temp = Math.max(rob1 + money, rob2);
      rob1 = rob2;
      rob2 = temp;
    }
    return rob2;
  }
  return Math.max(helper(nums.slice(0, n - 1)), helper(nums.slice(1)));
};

var numDecodings = function (s) {
  if (s.length === 0 || s[0] === "0") return 0;
  const dp = Array.from({ length: s.length + 1 }, () => 0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    let oneDigit = parseInt(s.substring(i - 1, i));
    let twoDigit = parseInt(s.substring(i - 2, i));

    if (oneDigit >= 1) dp[i] = dp[i] + dp[i - 1];
    if (twoDigit >= 10 && towDigit <= 26) dp[i] = dp[i] + dp[i - 2];
  }
  return dp[s.length];
};

var uniquePaths = function (m, n) {
  const dp = Array.from({ length: m }, () => Array(n).fill(0));
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

var canJump = function (nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, nums[i] + i);
  }
  return maxReach >= nums.length - 1;
};

var cloneGraph = function (node) {
  if (!node) return null;
  const map = new Map();

  function dfs(node) {
    if (map.has(node)) return map.get(node);
    const cloneNode = new Node(node.val, []);
    map.set(node, cloneNode);

    for (let neighbor of node.neighbors) {
      cloneNode.neighbors.push(dfs(neighbor));
    }
    return cloneNode;
  }
  return dfs(node);
};

var canFinish = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  for (let [course, preq] of prerequisites) {
    graph[course].push(preq);
  }
  const visited = new Array(numCourses).fill(false);
  const recStack = new Array(numCourses).fill(false);

  function dfs(course) {
    if (recStack[course]) return true;
    if (visited[course]) return false;

    visited[course] = true;
    recStack[course] = true;

    for (let preq of graph[course]) {
      if (dfs(preq)) return true;
    }

    recStack[course] = false;
    return false;
  }
  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return false;
  }
  return true;
};

var canFinish = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  for (let [course, preq] of prerequisites) {
    graph[course].push(preq);
  }
  const visited = new Array(numCourses).fill(false);
  const recStack = new Array(numCourses).fill(false);

  function dfs(course) {
    if (recStack[course]) return true;
    if (visited[course]) return false;

    recStack[course] = true;
    visited[course] = true;

    for (let preq of graph[course]) {
      if (dfs(preq)) return true;
    }
    recStack[course] = false;
    return false;
  }
  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return false;
  }
  return true;
};

var pacificAtlantic = function (heights) {
  if (!heights || !heights.length) return [];
  const m = heights.length;
  const n = heights[0].length;

  const pOcean = Array.from({ length: m }, () => Array(n).fill(false));
  const aOcean = Array.from({ length: m }, () => Array(n).fill(false));

  function dfs(r, c, visited, prevHeight) {
    if (r < 0 || c < 0 || r >= m || c >= n) return;
    if (visited[r][c] || heights[r][c] < prevHeight) return;

    visited[r][c] = true;
    const directions = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    for (let [dr, dc] of directions) {
      dfs(r + dr, c + dc, visited, heights[r][c]);
    }
  }

  for (let i = 0; i < m; i++) {
    dfs(i, 0, pOcean, heights[i][0]);
    dfs(i, n - 1, aOcean, heights[i][n - 1]);
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j, pOcean, heights[0][j]);
    dfs(m - 1, j, aOcean, heights[m - 1][j]);
  }

  const result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pOcean[i][j] && aOcean[i][j]) result.push([i, j]);
    }
  }

  return result;
};

var numIslands = function (grid) {
  if (!grid || !grid.length) return 0;
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(grid, i, j);
      }
    }
  }

  function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === "0") return;
    grid[i][j] = "0";

    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
  }
  return count;
};

var numIslands = function (grid) {
  if (!grid || !grid.length) return 0;
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(grid, i, j);
      }
    }
  }
  function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === "0") return;
    grid[i][j] = "0";

    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
  }
  return count;
};

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;

  for (let num of nums) {
    if (!set.has(num - 1)) {
      let cur = num;
      let curC = 1;
      while (set.has(cur + 1)) {
        cur++;
        curC++;
      }
      max = Math.max(max, curC);
    }
  }
  return max;
};

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;

  for (let num of nums) {
    if (!set.has(num - 1)) {
      let cur = num;
      let curC = 1;

      while (set.has(cur + 1)) {
        cur++;
        curC++;
      }
      max = Math.max(max, curC);
    }
  }
  return max;
};

var alienOrder = function (words) {
  const map = new Map();
  for (let word of words) {
    for (let char of word) {
      if (!map.has(char)) {
        map.set(char, new Set());
      }
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];
    let found = false;
    let minL = Math.min(word1.length, word2.length);

    for (let j = 0; j < minL; j++) {
      if (word1[j] !== word2[j]) {
        map.get(word1[j]).add(word2[j]);
        found = true;
        break;
      }
    }
    if (!found && word1.length > word2.length) return "";
  }

  const visited = new Set();
  const visiting = new Set();
  const result = [];

  function dfs(node) {
    if (visiting.has(node)) return false;
    if (visited.has(node)) return true;

    visiting.add(node);
    for (let neighbor of map.get(node)) {
      if (!dfs(neighbor)) return false;
    }

    visiting.delete(node);
    visited.add(node);
    result.push(node);
    return true;
  }

  for (let node of map.keys()) {
    if (!dfs(node)) return "";
  }
  return result.reverse().join("");
};

var alienOrder = function (words) {
  const map = new Map();
  for (let word of words) {
    for (let char of word) {
      if (!map.has(char)) map.set(char, new Set());
    }
  }

  for (let i = 0; i < word.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];
    let found = false;
    let minL = Math.min(word1.length, word2.length);

    for (let j = 0; j < minL; j++) {
      if (word1[j] !== word2[j]) {
        map.get(word1[j]).add(word2[j]);
        found = true;
        break;
      }
    }
    if (!found && word1.length > word2.length) return "";
  }

  const visiting = new Set();
  const visited = new Set();
  const result = [];

  function dfs(node) {
    if (visiting.has(node)) return false;
    if (visited.has(node)) return true;

    visiting.add(node);
    for (let neighbor of map.get(node)) {
      if (!dfs(neighbor)) return false;
    }

    visiting.delete(node);
    visited.add(node);
    result.push(node);
    return true;
  }

  for (let node of map.keys()) {
    if (!dfs(node)) return "";
  }
  return result.reverse().join("");
};

var validTree = function (n, edges) {
  if (edges.length !== n - 1) return false;

  const graph = Array.from({ length: n }, () => []);
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Set();

  function dfs(node, parent) {
    if (visited.has(node)) return false;
    visited.add(node);

    for (let neighbor of graph[node]) {
      if (neighbor === parent) continue;
      if (!dfs(neighbor, node)) return false;
    }
    return true;
  }
  if (!dfs(0, -1)) return false;
  return visited.size === n;
};

var validTree = function (n, edges) {
  if (edges.length !== n - 1) return false;
  const graph = Array.from({ length: n }, () => []);
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  const visited = new Set();

  function dfs(node, parents) {
    if (visited.has(node)) return false;
    visited.add(node);

    for (let neighbor of graph[node]) {
      if (neighbor === parents) continue;
      if (!dfs(neighbor, node)) return false;
    }
    return true;
  }

  if (!dfs(0, -1)) return false;
  return visited.size === n;
};

var countComponents = function (n, edges) {
  const graph = Array.from({ length: n }, () => []);
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  const visited = new Set();
  let count = 0;

  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);

    for (let neighbor of graph[node]) {
      dfs(neighbor);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }
  return count;
};

var countComponents = function (n, edges) {
  const dp = Array.from({ length: n }, () => []);
  for (let [a, b] of edges) {
    dp[a].push(b);
    dp[b].push(a);
  }
  const visited = new Set();
  let count = 0;

  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);

    for (let neighbor of dp[node]) {
      dfs(neighbor);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }
  return count;
};

var insert = function (intervals, newInterval) {
  let i = 0;
  const result = [];

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i++]);
  }
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  result.push(newInterval);
  while (i < intervals.length) {
    result.push(intervals[i++]);
  }

  return result;
};

var merge = function (intervals) {
  if (intervals.length === 1) return intervals;
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

var eraseOverlapIntervals = function (intervals) {
  let count = 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (end > intervals[i][0]) count++;
    else end = intervals[i][1];
  }
  return count;
};

var eraseOverlapIntervals = function (intervals) {
  let count = 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (end > intervals[i][0]) count++;
    else end = intervals[i][1];
  }
  return count;
};

var canAttendMeetings = function (intervals) {
  if (!intervals.length) return true;
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (end > intervals[i][0]) return false;
    else end = intervals[i][1];
  }
  return true;
};

var canAttendMeetings = function (intervals) {
  if (intervals.length === 0) return true;
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (end > intervals[i][0]) return false;
    else end = intervals[i][1];
  }
  return true;
};

var minMeetingRooms = function (intervals) {
  let room = 0;
  if (intervals.length === 0) return 0;
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];

  for (let interval of intervals) {
    result = result.filter((end) => end > interval[0]);
    result.push(interval[1]);
    result.sort((a, b) => a - b);

    room = Math.max(room, result.length);
  }
  return room;
};

var minMeetingRooms = function (intervals) {
  if (intervals.length === 0) return 0;

  let room = 0;
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  for (let interval of intervals) {
    result = result.filter((end) => end > interval[0]);
    result.push(interval[1]);
    result.sort((a, b) => a - b);

    room = Math.max(room, result.length);
  }
  return room;
};

var reverseList = function (head) {
  let prev = null;
  let next = null;
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let fast = head.next.next;
  let slow = head.next;

  while (fast !== slow) {
    if (!fast || !fast.next) return false;
    fast = fast.next.next;
    slow = slow.next;
  }
  return true;
};

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let cur = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }

  if (list1) {
    cur.next = list1;
  }
  if (list2) {
    cur.next = list2;
  }

  return dummy.next;
};

var mergeKLists = function (lists) {
  let heap = lists.filter((list) => list !== null);
  const minfy = (index) => {
    let smallest = index;
    let left = index * 2 + 1;
    let right = index * 2 + 2;

    if (left < heap.length && heap[left] < heap[smallest]) {
      smallest = left;
    }
    if (right < heap.length && heap[right] < heap[smallest]) {
      smallest = right;
    }
    if (smallest !== index) {
      [heap[smallest], heap[index]] = [heap[index], heap[smallest]];
      minfy(smallest);
    }
  };

  let i = Math.floor(heap.length / 2) - 1;
  while (i >= 0) minfy(i--);

  let dummy = new ListNode();
  let tails = dummy;

  while (heap.length > 0) {
    let smallest = heap[0];
    tails.next = smallest;
    tail = tail.next;

    if (smallest.next) {
      heap[0] = smallest.next;
      minfy(0);
    } else {
      heap[0] = heap[heap.length - 1];
      heap.pop();
      if (heap.length > 0) minfy(0);
    }
  }
  return dummy.next;
};

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
};

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
};

var reorderList = function (head) {
  if (!head || !head.next) return;

  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let prev = null;
  let next = null;
  let head = slow;

  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  // prev;

  let first = head;
  let second = prev;

  while (second.next) {
    next = first.next;
    first.next = second;
    first = next;

    next = second.next;
    second.next = first;
    second = next;
  }
};

var setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let firstCol = false;
  let firstRow = false;

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstCol = true;
      break;
    }
  }
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      firstRow = true;
      break;
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
    }
  }

  if (firstCol) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  if (firstRow) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }
};

var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  const result = [];
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;

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

var rotate = function (matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};

var rotate = function (matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};

var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  return false;

  function dfs(row, col, index) {
    if (word.length === index) return true;
    if (
      row < 0 ||
      col < 0 ||
      row >= m ||
      col >= n ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    board[row][col] = "#";

    if (
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1)
    )
      return true;

    board[row][col] = word[index];
    return false;
  }
};

var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  return false;

  function dfs(col, row, index) {
    if (word.length === index) return true;
    if (
      col < 0 ||
      row < 0 ||
      col >= m ||
      row >= n ||
      board[row][col] !== word[index]
    )
      return false;
    board[row][col] = "#";

    if (
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1)
    )
      return true;

    board[row][col] = word[index];
    return false;
  }
};

var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  return false;

  function dfs(row, col, index) {
    if (word.length === index) return true;
    if (
      row < 0 ||
      col < 0 ||
      row >= m ||
      col >= n ||
      board[row][col] !== word[index]
    )
      return false;

    board[row][col] = "#";

    if (
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1)
    )
      return true;

    board[row][col] = word[index];
    return false;
  }
};

var lengthOfLongestSubstring = function (s) {
  let count = 0;
  let currSub = "";

  for (let i = 0; i < s.length; i++) {
    let index = currSub.indexOf(s[i]);
    if (index !== -1) currSub = currSub.substring(index + 1);
    currSub += s[i];
    count = Math.max(count, currSub.length);
  }
  return count;
};

var lengthOfLongestSubstring = function (s) {
  let count = 0;
  let sub = "";

  for (let i = 0; i < s.length; i++) {
    let index = sub.indexOf(s[i]);
    if (index !== -1) sub = sub.substring(index + 1);
    sub = sub + s[i];
    count = Math.max(count, sub.length);
  }
  return count;
};

var lengthOfLongestSubstring = function (s) {
  let count = 0;
  let sub = "";

  for (let i = 0; i < s.length; i++) {
    let index = sub.indexOf(s[i]);
    if (index !== -1) sub = sub.substring(index + 1);
    sub += s[i];
    count = Math.max(count, sub.length);
  }
  return count;
};

var characterReplacement = function (s, k) {
  const map = new Map();
  let maxCount = 0;
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    map.set(char, (map.get(char) || 0) + 1);
    maxCount = Math.max(maxCount, map.get(char));

    while (end - start + 1 - maxCount > k) {
      map.set(s[start], map.get(s[start]) - 1);
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};

var characterReplacement = function (s, k) {
  const map = new Map();
  let maxCount = 0;
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    let char = s[end];
    map.set(char, (map.get(char) || 0) + 1);
    maxCount = Math.max(maxCount, map.get(char));

    while (end - start + 1 - maxCount > k) {
      map.set(s[start], map.get(s[start]) - 1);
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};

var characterReplacement = function (s, k) {
  const map = new Map();
  let maxCount = 0;
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    let char = s[end];
    map.set(char, (map.get(char) || 0) + 1);
    maxCount = Math.max(maxCount, map.get(char));

    while (end - start + 1 - maxCount > k) {
      map.set(s[start], map.get(s[start]) - 1);
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};

var minWindow = function (s, t) {
  if (s.length === 0 || t.length === 0) return "";
  const dictT = {};
  for (let char of t) {
    dictT[char] = (dictT[char] || 0) + 1;
  }
  const required = Object.keys(dictT).length;
  let l = 0;
  let r = 0;
  let formed = 0;
  let ans = [-1, 0, 0];
  let windowCount = {};

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

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (let char of t) {
    if (!map.has(char)) return false;
    map.set(char, map.get(char) - 1);
  }
  for (let [char, index] of map.entries()) {
    if (index !== 0) return false;
  }
  return true;
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

var isValid = function (s) {
  const stack = [];
  const mapping = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  for (let char of s) {
    if (mapping[char]) {
      const top = stack.length === 0 ? "#" : stack.pop();
      if (top !== mapping[char]) return false;
    } else stack.push(char);
  }
  return stack.length === 0;
};

var isValid = function (s) {
  const stack = [];
  const mapping = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  for (let char of s) {
    if (mapping[char]) {
      const top = stack.length === 0 ? "#" : stack.pop();
      if (top !== mapping[char]) return false;
    } else stack.push(char);
  }
  return stack.length === 0;
};

var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};

var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

var encode = function (strs) {
  return strs.map((s) => `${s.length}#${s}`).join("");
};

var decode = function (s) {
  const strs = [];
  let i = 0;

  while (i < s.length) {
    let j = i;
    while (s[i] !== "#") {
      j++;
    }
    const length = parseInt(s.substring(i, j));
    strs.push(s.substring(j + 1, j + 1 + length));
    i = j + 1 + length;
  }
  return strs;
};

var encode = function (strs) {
  return strs.map((s) => `${s.length}#${s}`).join("");
};
var decode = function (s) {
  strs = [];
  let i = 0;

  while (i < s.length) {
    let j = i;
    while (s[j] !== "#") {
      j++;
    }
    const length = parseInt(s.substring(i, j));
    strs.push(s.substring(j + 1, j + 1 + length));
    i = j + 1 + length;
  }
  return strs;
};
