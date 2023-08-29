// 1071. Greatest Common Divisor of Strings

function gcdOfStrings(s, t) {
  if (s + t !== t + s) return "";

  // create helper function to check if 's' string is a multiple of length of 't'
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const length = gcd(s.length, t.length);

  return s.slice(0, length);
}

// 876. Middle of the Linked List

function middleNode(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// 231. Power of Two

function isPowerOfTwo(n) {
  if (n <= 0) return false;

  while (n % 2 === 0) {
    n /= 2;
  }
  return n === 1;
}

// 643. Maximum Average Subarray I

function findMaxAverage(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let maxSum = sum;

  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
}

// 83. Remove Duplicates from Sorted List

function deleteDuplicates(head) {
  let cur = head;

  while (cur && cur.next) {
    if (cur.val === cur.next.val) cur.next = cur.next.next;
    else cur = cur.next;
  }
  return head;
}

// 2815. Max Pair Sum in an Array

function maxSum(nums) {
  const maxDigitsSum = {};
  let maxSum = -1;

  for (let num of nums) {
    const maxDigit = Math.max(...num.toString().split("")); // get the max digits from num
    if (!maxDigitsSum[maxDigit]) maxDigitsSum[maxDigit] = num;
    else {
      maxSum = Math.max(maxSum, maxDigitsSum[maxDigit] + num); // if having same max digit, we add it together
      maxDigitsSum[maxDigit] = Math.max(maxDigitsSum[maxDigit], num);
    }
  }
  return maxSum;
}

// 543. Diameter of Binary Tree

function diameterOfTree(root) {
  let diameter = 0;
  const height = (node) => {
    if (!node) return 0;
    const left = height(node.left);
    const right = height(node.right);

    diameter = Math.max(diameter, left + right);
    return Math.max(left, right) + 1;
  };
  height(root);
  return diameter;
}

// 383. Ransom Note

function ransomNote(a, b) {
  const bChar = {};

  for (let char of b) bChar[char] = (bChar[char] || 0) + 1;
  for (let char of a) {
    if (!bChar[char]) return false;
    bChar[char]--;
  }
  return true;
}
