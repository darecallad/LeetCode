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
