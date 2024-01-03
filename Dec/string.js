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

var isSubtree = function (root, subRoot) {
  if (!subRoot) return true;
  if (!root) return false;

  if (isSameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

var isSubtree = function (root, subRoot) {
  if (!subRoot) return true;
  if (!root) return false;

  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
var isSubtree = function (root, subRoot) {
  if (!subRoot) return true;
  if (!root) return false;

  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
var isSubtree = function (root, subRoot) {
  if (!subRoot) return true;
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

var isSubtree = function (root, subRoot) {
  if (!subRoot) return true;
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
var isSubtree = function (root, subRoot) {
  if (!subRoot) return true;
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

var buildTree = function (preorder, inorder) {
  if (!preorder || !inorder) return null;
  let rootVal = preorder[0];
  let root = new TreeNode(rootVal);
  let mid = inorder.indexOf(rootVal);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
};
var buildTree = function (preorder, inorder) {
  if (!preorder || !inorder) return null;
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
};
function validate(node, low, high) {
  if (!node) return true;
  if ((low && node.val <= low) || (high && node.val >= high)) return false;
  return (
    validate(node.left, low, node.val) && validate(node.right, node.val, high)
  );
}
var isValidBST = function (root) {
  return validate(root, null, null);
};

function validate(node, low, high) {
  if (!node) return true;
  if ((low && node.val <= low) || (high && node.val >= high)) return false;
  return (
    validate(node.left, low, node.val) && validate(node.right, node.val, high)
  );
}

var isValidBST = function (root) {
  return validate(root, null, null);
};
function validate(node, low, high) {
  if (node === null) return true;
  if ((low !== null && node.val <= low) || (high !== null && node.val >= high))
    return false;
  return (
    validate(node.left, low, node.val) && validate(node.right, node.val, high)
  );
}
var isValidBST = function (root) {
  return validate(root, null, null);
};

function validate(node, low, high) {
  if (node === null) return true;
  if ((low !== null && node.val <= low) || (high !== null && node.val >= high))
    return false;
  return (
    validate(node.left, low, node.val) && validate(node.right, node.val, high)
  );
}
var isValidBST = function (root) {
  return validate(root, null, null);
};

function validate(node, low, high) {
  if (node === null) return true;
  if ((row !== null && node.val <= low) || (high !== null && node.val >= high))
    return false;
  return (
    validate(node.left, low, node.val) && validate(node.right, node.val, high)
  );
}

var kthSmallest = function (root, k) {
  let stack = [];
  let node = root;
  let count = 0;

  // in-order
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
  let stack = [];
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

var lowestCommonAncestor = function (root, p, q) {
  let currentNode = root;
  while (currentNode) {
    if (p.val > currentNode.val && q.val > currentNode.val)
      currentNode = currentNode.right;
    else if (p.val < currentNode.val && q.val < currentNode.val)
      currentNode = currentNode.left;
    else return currentNode;
  }
  return null;
};
var lowestCommonAncestor = function (root, p, q) {
  let currentNode = root;
  while (currentNode) {
    if (p.val > currentNode.val && q.val > currentNode.val)
      currentNode = currentNode.right;
    else if (p.val < currentNode.val && q.val < currentNode.val)
      currentNode = currentNode.left;
    else return currentNode;
  }
  return null;
};
var lowestCommonAncestor = function (root, p, q) {
  let currentNode = root;
  while (currentNode) {
    if (p.val > currentNode.val && q.val > currentNode.val)
      currentNode = currentNode.right;
    else if (p.val < currentNode.val && q.val < currentNode.val)
      currentNode = currentNode.left;
    else return currentNode;
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

var Trie = function () {
  this.root = new TrieNode();
};
Trie.prototype.insert = function (word) {
  let current = this.root;
  for (const char of word) {
    if (!current.children[char]) current.children[char] = new TrieNode();
    current = current.children[char];
  }
  current.isEndOfWord = true;
};
Trie.prototype.search = function (word) {
  let current = this.root;
  for (const char of word) {
    if (!current.children[char]) return false;
    current = current.children[char];
  }
  return current.isEndOfWord;
};
Trie.prototype.startsWith = function (prefix) {
  let current = this.root;
  for (const char of prefix) {
    if (!current.children[char]) return false;
    current = current.children[char];
  }
  return true;
};
//
//two sum

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (map.has(res)) return [map.get(res), i];
    else map.set(nums[i], i);
  }
};

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (map.has(res)) return [map.get(res), i];
    else map.set(nums[i], i);
  }
};

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (map.has(res)) return [map.get(res), i];
    else map.set(nums[i], i);
  }
};

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (map.has(res)) return [map.get(res), i];
    else map.set(nums[i], i);
  }
};
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (map.has(res)) return [map.get(res), i];
    else map.set(nums[i], i);
  }
};
var twoSum = function (nums, target) {
  const map = new Map(); // using map to set key value pair
  for (let i = 0; i < nums.length; i++) {
    // go though the whole nums array
    const res = target - nums[i]; // res that we want to find for element
    if (map.has(res)) return [map.get(res), i];
    // if we find it return the index with current index;
    else map.set(nums[i], i); // else set the current value with current index;
  }
};

var maxProfit = function (prices) {
  let buyTime = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyTime) buyTime = prices[i];
    profit = Math.max(profit, prices[i] - buyTime);
  }
  return profit;
};
var maxProfit = function (prices) {
  let buyTime = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyTime) buyTime = prices[i];
    profit = Math.max(profit, prices[i] - buyTime);
  }
  return profit;
};
var maxProfit = function (prices) {
  let buyTime = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyTime) buyTime = prices[i];
    profit = Math.max(profit, prices[i] - buyTime);
  }
  return profit;
};
var maxProfit = function (prices) {
  let buyTime = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyTime) buyTime = prices[i];
    profit = Math.max(profit, prices[i] - buyTime);
  }
  return profit;
};
var maxProfit = function (prices) {
  let buyTime = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyTime) buyTime = prices[i];
    profit = Math.max(profit, prices[i] - buyTime);
  }
  return profit;
};
var maxProfit = function (prices) {
  let buyTime = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyTime) buyTime = prices[i];
    profit = Math.max(profit, prices[i] - buyTime);
  }
  return profit;
};
var maxProfit = function (prices) {
  let buyTime = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyTime) buyTime = prices[i];
    profit = Math.max(profit, prices[i] - buyTime);
  }
  return profit;
};
var maxProfit = function (prices) {
  let buyTime = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyTime) buyTime = prices[i];
    profit = Math.max(profit, prices[i] - buyTime);
  }
  return profit;
};
var maxProfit = function (prices) {
  let buyTime = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyTime) buyTime = prices[i];
    profit = Math.max(profit, prices[i] - buyTime);
  }
  return profit;
};
var maxProfit = function (prices) {
  let buyTime = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyTime) buyTime = prices[i];
    profit = Math.max(profit, prices[i] - buyTime);
  }
  return profit;
};

var containsDuplicate = function (nums) {
  const set = new Set();
  for (let item of nums) {
    if (set.has(item)) return true;
    else set.add(item);
  }
  return false;
};
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let item of nums) {
    if (set.has(item)) return true;
    else set.add(item);
  }
  return false;
};
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let item of nums) {
    if (set.has(item)) return true;
    else set.add(item);
  }
  return false;
};
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let item of nums) {
    if (set.has(item)) return true;
    else set.add(item);
  }
  return false;
};
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let item of nums) {
    if (set.has(item)) return true;
    else set.add(item);
  }
  return false;
};
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let item of nums) {
    if (set.has(item)) return true;
    else set.add(item);
  }
  return false;
};
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let item of nums) {
    if (set.has(item)) return true;
    else set.add(item);
  }
  return false;
};
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let item of nums) {
    if (set.has(item)) return true;
    else set.add(item);
  }
  return false;
};
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let item of nums) {
    if (set.has(item)) return true;
    else set.add(item);
  }
  return false;
};
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let item of nums) {
    if (set.has(item)) return true;
    else set.add(item);
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
    output[i] *= right;
  }
  return output;
};
var productExceptSelf = function (nums) {
  let dp = new Array(nums.length).fill(1);
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
var productExceptSelf = function (nums) {
  let dp = new Array(nums.length).fill(1);
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
var productExceptSelf = function (nums) {
  let dp = new Array(nums.length).fill(1);
  let left = 1;
  let right = 1;
  for (let i = 1; i < nums.length; i++) {
    left *= nums[i - 1];
    dp[i] *= left;
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right *= nums[i + 1];
    dp[i] *= right;
  }
  return dp;
};
var productExceptSelf = function (nums) {
  let dp = new Array(nums.length).fill(1);
  let left = 1;
  let right = 1;
  for (let i = 1; i < nums.length; i++) {
    left *= nums[i - 1];
    dp[i] *= left;
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right *= nums[i + 1];
    dp[i] *= right;
  }
  return dp;
};
var productExceptSelf = function (nums) {
  let dp = new Array(nums.length).fill(1);
  let left = 1;
  let right = 1;
  for (let i = 1; i < nums.length; i++) {
    left *= nums[i - 1];
    dp[i] *= left;
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right *= nums[i + 1];
    dp[i] *= right;
  }
  return dp;
};
var productExceptSelf = function (nums) {
  let dp = new Array(nums.length).fill(1);
  let left = 1;
  let right = 1;

  for (let i = 1; i < nums.length; i++) {
    left *= nums[i - 1];
    dp[i] *= left;
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right *= nums[i + 1];
    dp[i] *= right;
  }
  return dp;
};
var productExceptSelf = function (nums) {
  let dp = new Array(nums.length).fill(1);
  let left = 1;
  let right = 1;
  for (let i = 1; i < nums.length; i++) {
    left *= nums[i - 1];
    dp[i] *= left;
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right *= nums[i + 1];
    dp[i] *= right;
  }
  return dp;
};
var productExceptSelf = function (nums) {
  let dp = new Array(nums.length).fill(1);
  let left = 1;
  let right = 1;
  for (let i = 1; i < nums.length; i++) {
    left *= nums[i - 1];
    dp[i] *= left;
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right *= nums[i + 1];
    dp[i] *= right;
  }
  return dp;
};
var productExceptSelf = function (nums) {
  let dp = new Array(nums.length).fill(1);
  let left = 1;
  let right = 1;
  for (let i = 1; i < nums.length; i++) {
    left *= nums[i - 1];
    dp[i] *= left;
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right *= nums[i + 1];
    dp[i] *= right;
  }
  return dp;
};

var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let currentMax = nums[0];
  let gobalMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], nums[i] + currentMax);
    gobalMax = Math.max(currentMax, gobalMax);
  }
  return gobalMax;
};
var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let cur = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], cur + nums[i]);
    max = Math.max(cur, max);
  }
  return max;
};
var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let cur = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], nums[i] + cur);
    max = Math.max(cur, max);
  }
  return max;
};
var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let cur = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], nums[i] + cur);
    max = Math.max(cur, max);
  }
  return max;
};
var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let cur = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], cur + nums[i]);
    max = Math.max(cur, max);
  }
  return max;
};
var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let cur = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], nums[i] + cur);
    max = Math.max(cur, max);
  }
  return max;
};
var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let cur = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], nums[i] + cur);
    max = Math.max(cur, max);
  }
  return max;
};
var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let cur = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], nums[i] + cur);
    max = Math.max(cur, max);
  }
  return max;
};
var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let cur = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], nums[i] + cur);
    max = Math.max(cur, max);
  }
  return max;
};

var maxProduct = function (nums) {
  if (!nums.length) return 0;
  let min = nums[0];
  let max = nums[0];
  let res = max;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [max, min] = [min, max];
    max = Math.max(nums[i], nums[i] * max);
    min = Math.min(nums[i], nums[i] * min);
    res = Math.max(max, res);
  }
  return res;
};
var maxProduct = function (nums) {
  if (!nums.length) return 0;
  let min = nums[0];
  let max = nums[0];
  let res = max;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [max, min] = [min, max];
    max = Math.max(nums[i], max * nums[i]);
    min = Math.min(nums[i], nums[i] * min);
    res = Math.max(res, max);
  }
  return res;
};
var maxProduct = function (nums) {
  if (!nums.length) return 0;
  let min = nums[0];
  let max = nums[0];
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
    max = Math.max(nums[i], nums[i] * max);
    min = Math.min(nums[i], nums[i] * min);
    res = Math.max(res, max);
  }
  return res;
};
var maxProduct = function (nums) {
  if (!nums.length) return 0;
  let min = nums[0];
  let max = nums[0];
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
  let min = nums[0];
  let max = nums[0];
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
  let min = nums[0];
  let max = nums[0];
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
    max = Math.max(nums[i], nums[i] * max);
    min = Math.min(nums[i], nums[i] * min);
    res = Math.max(res, max);
  }
  return res;
};
var maxProduct = function (nums) {
  if (!nums.length) return 0;
  let min = nums[0];
  let max = nums[0];
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
  let min = nums[0];
  let max = nums[0];
  let res = max;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [max, min] = [min, max];
    max = Math.max(nums[i], nums[i] * max);
    min = Math.min(nums[i], nums[i] * min);
    res = Math.max(res, max);
  }
  return res;
};
