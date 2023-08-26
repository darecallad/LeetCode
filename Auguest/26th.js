// 104. Maximum Depth of Binary Tree

function maxDepath(root) {
  if (!root) return 0;

  let left = maxDepath(root.left);
  let right = maxDepath(root.right);

  return Math.max(left, right) + 1;
}

// 1768. Merge String Alternately

function merge(word1, word2) {
  let result = "";
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) result = result + word1[i];
    if (i < word2.length) result = result + word2[i];
  }
  return result;
}
