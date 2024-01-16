var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  let result = [];
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
    for (let j = i; j < n; j++) {
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
    if (index === word.length) return true;
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

var setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let firstRow = false;
  let firstCol = false;

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
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
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
  let bottom = matrix.length - 1;
  let left = 0;
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
  let subString = "";

  for (let i = 0; i < s.length; i++) {
    let index = subString.indexOf(s[i]);
    if (index !== -1) subString = subString.substring(index + 1);
    subString += s[i];
    count = Math.max(count, subString.length);
  }
  return count;
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
    const char = s[i];
    map.set(char, (map.get(char) || 0) + 1);
    maxCount = Math.max(maxCount, map.get(char));

    while (end - start + 1 - maxCount > k) {
      map.set(s[start], map.get(s[start] - 1));
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

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (let num of s) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let num of t) {
    if (!map.has(num)) return false;
    map.set(num, map.get(num) - 1);
  }
  for (let [char, count] of map.entries()) {
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

var isValid = function (s) {
  let stack = [];
  let mapping = {
    "}": "{",
    "]": "[",
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
