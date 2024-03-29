// 5. Longest Palindromic Substring

function longestPalidorme(s) {
  let n = s.length;
  let dp = Array.from({ length: s.length }, () => Array(n).fill(false));

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
}

//189. Rotate Array

function rotate(nums, k) {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

function reverse(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

// 128. Longest Consecutive Sequence

function logestConsecutive(nums) {
  const numSet = new Set(nums);
  let longest = 0;

  for (const num of nums) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentS = -1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentS++;
      }

      longest = Math.max(longest, currentS);
    }
  }

  return longest;
}
