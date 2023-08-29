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
