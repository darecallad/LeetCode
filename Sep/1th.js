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
