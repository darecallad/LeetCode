const d1 = (s) => {
  if (s.trim() === "") return false;

  let hasNum = false;
  let hasE = false;
  let hasDot = false;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char >= "0" && char <= "9") hasNum = true;
    else if (char === ".") {
      if (hasDot || hasE) return false;
      hasDot = true;
      hasE = false;
    } else if (char === "e" || char === "E") {
      if (hasE || !hasNum) return false;
      hasE = true;
      hasNum = false;
    } else if (char === "-" || char === "+") {
      if (i !== 0 && s[i - 1] !== "e" && s[i - 1] !== "E") return false;
    } else return false;
  }
  return hasNum;
};

// time O(n) space O(1)

const dd = (root) => {
  if (!root) return null;
  let first = null;
  let last = null;

  function inOrder(node) {
    if (node) {
      inOrder(node.left);

      if (last) {
        last.right = node;
        node.left = last;
      } else first = node;

      last = node;
      inOrder(node.right);
    }
  }

  inOrder(root);
  last.right = first;
  first.left = last;

  return first;
};

// !? time O(n) space O(n)

const maxSwap = (num) => {
  const digit = num.toString().split(""); // make it to string array
  const dp = new Array(digit.length).fill(0); // create new array to record index
  let maxHeight = digit.length - 1; // init max index to the last digit

  for (let i = maxHeight; i >= 0; i--) {
    if (+digit[i] > +digit[maxHeight]) maxHeight = i;
    dp[i] = maxHeight;
  }
  for (let i = 0; i < digit.length; i++) {
    if (digit[i] !== digit[dp[i]]) {
      [digit[i], digit[dp[i]]] = [digit[dp[i]], digit[i]];
      break;
    }
  }
  return +digit.join("");
};

const lca = (root, p, q) => {
  if (!root || root === p || root === q) return root;

  const left = lca(root.left, p, q);
  const right = lca(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left ? left : right;
};

function removeInvalidParentheses(s) {
  let left = 0;
  let right = 0;

  for (let char of s) {
    if (char === "(") left++;
    else if (char === ")") {
      if (left !== 0) left--;
      else right++;
    }
  }

  const set = new Set();

  function backtrack(index, leftCount, rightCount, leftRem, rightRem, exp) {
    if (index === s.length) {
      if (leftRem === 0 && rightRem === 0) set.add(exp.join(""));
      return;
    }

    const current = s[index];

    if ((current === "(" && leftRem > 0) || (current === ")" && rightRem > 0)) {
      backtrack(
        index + 1,
        leftCount,
        rightCount,
        leftRem - (current === "(" ? 1 : 0),
        rightRem - (current === ")" ? 1 : 0),
        exp
      );
    }
    exp.push(current);

    if (current !== "(" && current !== ")")
      backtrack(index + 1, leftCount, rightCount, leftRem, rightRem, exp);
    else if (current === "(")
      backtrack(index + 1, leftCount + 1, rightCount, leftRem, rightRem, exp);
    else if (leftCount > rightCount)
      backtrack(index + 1, leftCount, rightCount + 1, leftRem, rightRem, exp);

    exp.pop();
  }

  backtrack(0, 0, 0, left, right, []);
  return Array.from(set);
}

// .... stickers

const minStickers = (stickers, target) => {
  const m = stickers.length;
  const mp = Array.from({ length: m }, () => new Array(26).fill(0));

  for (let i = 0; i < m; i++) {
    for (const c of stickers[i]) {
      mp[i][c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
  }

  const memo = new Map();
  memo.set("", 0);

  function dfs(target) {
    if (memo.has(target)) return memo.get(target);
    const tar = new Array(26).fill(0);
    for (const c of target) {
      tar[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    let ans = Number.MAX_SAFE_INTEGER;
    for (const sticker of mp) {
      if (sticker[target.charCodeAt(0) - "a".charCodeAt(0)] === 0) continue;
      let s = "";
      for (let i = 0; i < 26; i++) {
        if (tar[i] > 0) {
          for (let j = 0; j < Math.max(0, tar[i] - sticker[i]); j++) {
            s += String.fromCharCode(i + "a".charCodeAt(0));
          }
        }
      }
      const tmp = dfs(s);
      if (tmp != -1) ans = Math.min(ans, 1 + tmp);
    }
    memo.set(target, ans === Number.MAX_SAFE_INTEGER ? -1 : ans);
    return memo.get(target);
  }

  return dfs(target);
};
