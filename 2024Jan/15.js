var groupAnagrams = function (strs) {
  const map = new Map();
  for (let str of strs) {
    let key = str.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }
  return Array.from(map.values());
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
  const n = s.length;
  let ans = "";
  let dp = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 1; i <= n; i++) {
    for (let start = 0; start < n; start++) {
      let end = start + i - 1;
      if (end >= n) break;
      dp[start][end] =
        (i === 1 || i === 2 || dp[start + 1][end - 1]) && s[start] === s[end];
      if (dp[start][end] && i > ans.length) ans = s.substring(start, end + 1);
    }
  }
  return ans;
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
  const n = s.length;
  let ans = "";
  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 0; i <= n; i++) {
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
var encode = function (strs) {
  return strs.map((s) => `${s.length}#${s}`).join("");
};

var encode = function (strs) {
  return strs.map((s) => `${s.length}#${s}`).join("");
};

var decode = function (s) {
  const strs = [];
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
  const strs = [];
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

var encode = function (strs) {
  return strs.map((s) => `${s.length}#${s}`).join("");
};

var decode = function (s) {
  const strs = [];
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
