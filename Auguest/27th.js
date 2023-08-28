// 268. Missing Number
function missingNumber(nums) {
  let n = nums.length;
  let total = (n * (n + 1)) / 2;

  for (let i = 0; i < n; i++) {
    total = total - nums[i];
  }

  return total;
}

// 136. Single Number

function singleNumber(nums) {
  let c = 0;
  for (let i = 0; i < nums.length; i++) c ^= nums[i]; //XOR
  return c;
}

// 100. Same Tree

function sameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return (
    p.val === q.val && sameTree(p.left, q.left) && sameTree(p.right, q.right)
  );
}
