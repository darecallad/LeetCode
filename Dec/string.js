var lengthOfLongestSubstring = function (s) {
  let count = 0;
  let currentSub = "";

  for (let i = 0; i < s.length; i++) {
    let index = currentSub.indexOf(s[i]);
    if (index !== -1) currentSub = currentSub.substring(index + 1);

    currentSub += s[i];
    count = Math.max(count, currentSub.length);
  }
  return count;
};

var lengthOfLongestSubstring = function (s) {
  let count = 0;
  let currentSub = "";

  for (let i = 0; i < s.length; i++) {
    let index = currentSub.indexOf(s[i]);
    if (index !== -1) currentSub = currentSub.substring(index + 1);

    currentSub += s[i];
    count = Math.max(count, currentSub.length);
  }
  return count;
};

var lengthOfLongestSubstring = function (s) {
  let count = 0;
  let currentSub = "";

  for (let i = 0; i < s.length; i++) {
    let index = currentSub.indexOf(s[i]);
    if (index !== -1) currentSub = currentSub.substring(index + 1);
    currentSub += s[i];
    count = Math.max(count, currentSub.length);
  }
  return count;
};

var lengthOfLongestSubstring = function (s) {
  let count = 0;
  let currentSub = "";

  for (let i = 0; i < s.length; i++) {
    let index = currentSub.indexOf(s[i]);
    if (index !== -1) currentSub = currentSub.substring(index + 1);
    currentSub += s[i];
    count = Math.max(count, currentSub.length);
  }
  return count;
};

var lengthOfLongestSubstring = function (s) {
  let count = 0;
  let currentSub = "";

  for (let i = 0; i < s.length; i++) {
    let index = currentSub.indexOf(s[i]);
    if (index !== -1) currentSub = currentSub.substring(index + 1);
    currentSub += s[i];
    count = Math.max(count, currentSub.length);
  }
  return count;
};

var characterReplacement = function (s, k) {
  const map = new Map();
  let start = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) map.set(s[i], 1);
    else map.set(s[i], map.get(s[i] + 1));
    count = Math.max(count, map.get(s[i]));

    if (i - start + 1 - count > k) {
      map.set(s[start], map.get(s[start]) - 1);
      start++;
    }
  }
  return s.length - start;
};

var characterReplacement = function (s, k) {
  const map = new Map();
  let start = 0;
  let maxCount = 0;
  let maxLength = 0;

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
  let start = 0;
  let maxCount = 0;
  let maxLength = 0;

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

var minWindow = function (s, t) {
  if (s.length === 0 || t.length === 0) return "";
  const dictT = {};
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    dictT[char] = (dictT[char] || 0) + 1;
  }
  let required = Object.keys(dictT).length;

  let left = 0;
  let right = 0;

  let found = 0;

  const windowCount = {};

  let ans = [-1, 0, 0];
  while (right < s.length) {
    const char = s[right];
    windowCount[char] = (windowCount[char] || 0) + 1;
    if (dictT[char] && windowCount[char] === dictT[char]) found++;

    while (left <= right && found === required) {
      char = s[left];
      if (ans[0] === -1 || right - left + 1 < ans[0]) {
        ans = [right - left + 1, left, right];
      }

      windowCount[char]--;
      if (dictT[char] && windowCount[char] < dictT[char]) found--;

      left++;
    }
    right++;
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
    else map.set(char, map.get(char) - 1);
  }
  for (let [char, count] of map) {
    if (count !== 0) return false;
  }
  return true;
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();

  for (let item of s) {
    map.set(item, (map.get(item) || 0) + 1);
  }
  for (let item of t) {
    if (!map.has(item)) return false;
    else map.set(item, map.get(item) - 1);
  }
  for (let [char, count] of map) {
    if (count !== 0) return false;
  }
  return true;
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (let item of s) {
    map.set(item, (map.get(item) || 0) + 1);
  }
  for (let item of t) {
    if (!map.has(item)) return false;
    else map.set(item, map.get(item) - 1);
  }
  for (let [char, count] of map) {
    if (count !== 0) return false;
  }
  return true;
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();

  for (let item of s) map.set(item, (map.get(item) || 0) + 1);
  for (let item of t) {
    if (!map.has(item)) return false;
    else map.set(item, map.get(item) - 1);
  }
  for (let [char, count] of map) {
    if (count !== 0) return false;
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
  let stack = [];
  let mapping = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (let char of s) {
    if (mapping[char]) {
      let top = stack.length === 0 ? "#" : stack.pop();
      if (top !== mapping[char]) return false;
    } else stack.push(char);
  }
  return stack.length === 0;
};

var isValid = function (s) {
  let stack = [];
  const mapping = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (let char of s) {
    if (mapping[char]) {
      let top = stack.length === 0 ? "#" : stack.pop();
      if (top !== mapping[char]) return false;
    } else {
      stack.push(char);
    }
    return stack.length === 0;
  }
};

var isValid = function (s) {
  const stack = [];
  const mapping = { "}": "{", ")": "(", "]": "[" };

  for (let char of s) {
    if (mapping[char]) {
      let top = stack.length === 0 ? "#" : stack.pop();
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

var longestPalindrome = function (s) {
  let n = s.length;
  let dp = Array.from({ length: n }, () => Array(n).fill(false));
  let ans = "";

  for (let i = 1; i <= n; i++) {
    for (let start = 0; start < n; start++) {
      let end = start + i - 1;
      if (end >= n) break;
      dp[start][end] =
        (i == 1 || i == 2 || dp[start + 1][end - 1]) && s[start] == s[end];
      if (dp[start][end] && i > ans.length) ans = s.substring(start, end + 1);
    }
  }
  return ans;
};

var longestPalindrome = function (s) {
  let n = s.length;
  let dp = Array.from({ length: n }, () => Array(n).fill(false));
  let ans = "";

  for (let i = 1; i <= n; i++) {
    for (let start = 0; i < n; i++) {
      let end = start + i;
      if (end >= n) break;
      dp[start][end] =
        (i == 1 || i == 2 || dp[start + 1][end - 1]) && s[start] === s[end];
      if (dp[start][end] && i > ans.length) ans = s.substring(start, end + 1);
    }
  }
  return ans;
};

var longestPalindrome = function (s) {
  let n = s.length;
  let ans = "";
  let dp = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 1; i <= n; i++) {
    for (let start = 0; start < n; start++) {
      let end = start + i - 1;
      if (end >= n) break;
      dp[start][end] =
        (i == 1 || i == 2 || dp[start + 1][end - 1]) && s[start] === s[end];
      if (dp[start][end] && i > ans.length) ans = s.substring(start, end + 1);
    }
  }
  return ans;
};

var longestPalindrome = function (s) {
  let n = s.length;
  let dp = Array.from({ length: n }, () => Array(n).fill(false));
  let ans = "";

  for (let i = 1; i <= n; i++) {
    for (let start = 0; start < n; start++) {
      let end = start + i - 1;
      if (end >= n) break;
      dp[start][end] =
        (i == 1 || i == 2 || dp[start + 1][end - 1]) && s[start] === s[end];
      if (dp[start][end] && i > ans.length) ans = s.substring(start, end + 1);
    }
  }
  return ans;
};

var longestPalindrome = function (s) {
  let n = s.length;
  let dp = Array.from({ length: n }, () => Array(n).fill(false));
  let ans = "";

  for (let i = 1; i <= n; i++) {
    for (let start = 0; start < n; start++) {
      let end = start + i - 1;
      if (end >= n) break;
      dp[start][end] =
        (i == 1 || i == 2 || dp[start + 1][end - 1]) && s[start] === s[end];
      if (dp[start][end] && i > ans.length) ans = s.substring(start, end + 1);
    }
  }
  return ans;
};

var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += expandAroundCenter(s, i, i);
    count += expandAroundCenter(s, i, i + 1);
  }
  return count;

  function expandAroundCenter(s, left, right) {
    let count = 0;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
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
    while (left >= 0 && right < s.length && s[left] === s[right]) {
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

var encode = function (strs) {
  return strs.map((s) => `${s.length}#${s}`).join("");
};

var decode = function (s) {
  const strs = [];
  let i = 0;
  while (i < s.length) {
    let j = i;
    while (s[j] !== "#") j++;
    const length = parseInt(s.substring(i, j));
    strs.push(s.substring(j + 1, j + 1 + length));
    i = j + 1 + length;
  }
  return strs;
};

var encode = function (strs) {
  return strs.map((s) => `${s.length}#${s}`).join("");
};

var encode = function (strs) {
  return strs.map((s) => `${s.length}#${s}`).join("");
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

var decode = function (s) {
  strs = [];
  let i = 0;
  while (i < s.length) {
    let j = i;
    while (s[j] !== "#") j++;
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
    while (s[j] !== "#") j++;
    const length = parseInt(s.substring(i, j));
    strs.push(s.substring(j + 1, j + 1 + length));
    i = j + 1 + length;
  }
  return strs;
};

var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return (
    p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.left, p.right)
  );
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

var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
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

var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
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
  const temp = root.left;

  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
};

var invertTree = function (root) {
  if (!root) return null;
  const temp = root.left;

  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
};

var invertTree = function (root) {
  if (!root) return null;
  const temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
};

var invertTree = function (root) {
  if (!root) return null;
  const temp = root.left;
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

var invertTree = function (root) {
  if (!root) return null;
  let temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
};

var maxPathSum = function (root) {
  let maxSum = Number.MIN_SAFE_INTEGER;

  function maxGain(node) {
    if (!node) return 0;

    let leftGain = Math.max(maxGain(node.left), 0);
    let rightGain = Math.max(maxGain(node.right), 0);

    let priceNewPath = node.val + leftGain + rightGain;

    maxSum = Math.max(maxSum, priceNewPath);
    return node.val + Math.max(leftGain, rightGain);
  }
  maxGain(root);
  return maxSum;
};

var maxPathSum = function (root) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  function helper(node) {
    if (!node) return 0;
    let leftValue = Math.max(helper(root.left), 0);
    let rightValue = Math.max(helper(root.right), 0);
    let rootValue = node.val + leftValue + rightValue;
    maxSum = Math.max(maxSum, rootValue);
    return node.val + Math.max(leftValue, rightValue);
  }
  helper(root);
  return maxSum;
};

var maxPathSum = function (root) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  function helper(node) {
    if (!node) return 0;
    let left = Math.max(helper(node.left), 0);
    let right = Math.max(helper(node.right), 0);
    let totalVal = node.val + left + right;
    maxSum = Math.max(maxSum, totalVal);
    return node.val + Math.max(left, right);
  }
  helper(root);
  return maxSum;
};

var maxPathSum = function (root) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  function helper(node) {
    if (!node) return 0;
    let left = Math.max(helper(node.left), 0);
    let right = Math.max(helper(node.right), 0);
    let total = node.val + left + right;
    maxSum = Math.max(maxSum, total);
    return node.val + Math.max(left, right);
  }
  helper(root);
  return maxSum;
};

var maxPathSum = function (root) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  function helper(node) {
    if (!node) return 0;
    let left = Math.max(helper(node.left), 0);
    let right = Math.max(helper(node.right), 0);
    let total = node.val + left + right;
    maxSum = Math.max(maxSum, total);
    return node.val + Math.max(left, right);
  }
  helper(root);
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
      let currNode = queue.shift();
      level.push(currNode.val);
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
    result.push(level);
  }
  return result;
};

var levelOrder = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  while (queue.length > 0) {
    let level = [];
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let currNode = queue.shift();
      level.push(currNode.val);
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
    result.push(level);
  }
  return result;
};

var levelOrder = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let level = [];
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const currNode = queue.shift();
      level.push(currNode.val);
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
    result.push(level);
  }
  return result;
};

var levelOrder = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let level = [];
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let currtNode = queue.shift();
      level.push(currtNode.val);
      if (currtNode.left) queue.push(currtNode.left);
      if (currtNode.right) queue.push(currtNode.right);
    }
    result.push(level);
  }
  return result;
};

var levelOrder = function (root) {
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

var serialize = function (root) {
  function building(node) {
    if (!node) return "null,";
    return `${node.val},${building(node.left)}${building(node.right)}`;
  }
  return building(root);
};

var serialize = function (root) {
  function helper(node) {
    if (!node) return "null,";
    return `${node.val},${helper(node.left)}${helper(node.right)}`;
  }
  return helper(root);
};

var serialize = function (root) {
  function helper(node) {
    if (!node) return "null,";
    return `${node.val},${helper(node.left)}${helper(node.right)}`;
  }
  return helper(root);
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
    let node = new TreeNode(val);
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
    let node = new TreeNode(parseInt(val));
    node.left = buildTree();
    node.right = buildTree();
    return node;
  }
  return buildTree();
};

function serialize(root) {
  function buildString(node) {
    if (!node) return "null,";
    return `${node.val},${buildString(node.left)}${buildString(node.right)}`;
  }
  return buildString(root);
}

function deserialize(data) {
  let list = data.split(",");
  function buildTree() {
    let val = list.shift();
    if (val === "null") return null;
    let node = new TreeNode(parentInt(val));
    node.left = buildTree();
    node.right = buildTree();
    return node;
  }
  return buildTree();
}

function serialize(root) {
  function buildingString(node) {
    if (!node) return "null,";
    return `${node.val},${buildingString(node.left)}${buildingString(
      node.right
    )}`;
  }
  return buildingString(root);
}
function deserialize(data) {
  let list = data.split(",");
  function buiildTree() {
    let val = list.shift();
    if (val === "null") return null;
    let node = new TreeNode(parseInt(val));
    node.left = buiildTree();
    node.right = buiildTree();
    return node;
  }
  return buiildTree();
}
