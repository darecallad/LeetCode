// 657. Robot Return to Origin

const robotReturn = (moves) => {
  let x0 = 0;
  let y0 = 0;
  for (let char of moves) {
    if (char === "R") x0 += 1;
    else if (char === "L") x0 -= 1;
    else if (char === "U") y0 += 1;
    else y0 -= 1;
  }

  return x0 === 0 && y0 === 0;
};

// time O(n)
// space O(1)

//1528. Shuffle String

const restoreString = (s, indices) => {
  let dp = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    dp[indices[i]] = s[i];
  }

  return dp.join("");
};

// time O(n);
// space O(n);

// 599. Minimum Index Sum of Two Lists

const findRestart = (list1, list2) => {
  const map1 = new Map();
  const map2 = new Map();
  let result = [];
  let minSum = Infinity;

  for (let i = 0; i < list1.length; i++) {
    map1.set(list1[i], i);
  }
  for (let i = 0; i < list2.length; i++) {
    map2.set(list2[i], i);
  }
  for (let [char, index] of map1.entries()) {
    if (map2.has(char)) {
      const index2 = map2.get(char);
      const sum = index + index2;

      if (sum < minSum) {
        minSum = sum;
        result = [char];
      } else if (sum === minSum) result.push(char);
    }
  }
  return result;
};

// time space O(list1.length + list2.length)

//833. Find And Replace in String
const findReplace = (s, indices, sources, targets) => {
  let result = [];
  let lastIdx = 0;

  // Sort by indices to process replacements in order.
  const items = indices
    .map((idx, i) => [idx, sources[i], targets[i]])
    .sort((a, b) => a[0] - b[0]);

  for (let [idx, src, tgt] of items) {
    // If the source matches, append the substring before the match and then the target.
    if (s.substring(idx, idx + src.length) === src) {
      result.push(s.substring(lastIdx, idx), tgt);
      lastIdx = idx + src.length;
    }
  }

  // Append any remaining portion of the original string.
  result.push(s.substring(lastIdx));

  return result.join("");
};

// Ransom Note

const ransomNote = (ransomNote, magazine) => {
  const map = new Map();
  for (let char of magazine) map.set(char, (map.get(char) || 0) + 1);

  for (let char of ransomNote) {
    if (!map.get(char)) return false;
    map.set(char, map.get(char) - 1);
  }
  return true;
};

// time O(M+N)
// space O(n)

// Shortest Word Distance

const shortestDistance = (wordDict, word1, word2) => {
  let index1 = -1;
  let index2 = -1;
  let minDict = Infinity;

  for (let i = 0; i < wordDict.length; i++) {
    if (word1 === wordDic[i]) index1 = i;
    else if (word2 === wordDict[i]) index2 = i;

    if (index1 !== -1 && index2 !== -1) {
      minDict = Math.min(minDict, Math.abs(index1 - index2));
    }
  }
  return minDict;
};

// time O(n)
// space O(1)

// Minimum Absolute Difference

const minAbs = (arr) => {
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  for (let i = 1; i < arr.length; i++) {
    minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
  }
  const result = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === minDiff) result.push([arr[i - 1], arr[i]]);
  }
  return result;
};

// time O(nlogn);
// space O(n);

// Cells with Odd Values in a Matrix

const functionx = (m, n, indices) => {
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);

  for (let [ri, ci] of indices) {
    rows[ri]++;
    cols[ci]++;
  }

  let oddCount = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((rows[i] + cols[j]) % 2 !== 0) oddCount++;
    }
  }
  return oddCount;
};
