// 205. Isomorphic Strings

function isomorphic(s, t) {
  if (s.length !== t.length) return false;

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (!sMap.has(sChar) && !tMap.has(tChar)) {
      sMap.set(sChar, tChar);
      tMap.set(tChar, sChar);
    } else if (sMap.get(sChar) !== tChar || tMap.get(tChar) !== sChar)
      return false;
  }

  return true;
}

// 2806. Account Balance After Rounded Purchase

function accountBalance(p) {
  const initNumber = 100;
  const afterCalNumber = Math.around(p / 10) * 10; // 四捨五入
  return initNumber - afterCalNumber;
}

// 110. Balanced Binary Tree

function isBalanceTree(root) {
  // root is empty or not
  if (root === null) return true;

  // helper function to check height
  function getMaxHeight(node) {
    if (node === null) return 0;
    return Math.max(getMaxHeight(node.left), getMaxHeight(node.right)) + 1; // first level height is 0;
  } // end helper

  // check balanced mean left - right abs should <= 1
  return (
    Math.abs(getMaxHeight(root.left) - getMaxHeight(root.right)) <= 1 &&
    isBalanceTree(root.left) &&
    isBalanceTree(root.right)
  );
}
