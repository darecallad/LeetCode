// 7. Reverse Integer

function reverseInteger(num) {
  const limit = 2147483648; // limit number
  const k = num < 0 ? -1 : 1;
  const n = Number(String(Math.abs(num)).split("").reverse().join(""));
  return n > limit ? 0 : n * k;
}

// 139. Word Break

function wordBreak(s, wordDict) {
  const dp = new Array(s.length + 1).fill(fasle);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}

// 215. Kth Largest Element in an Array

function findKlargest(nums, k) {
  const heap = [];
  for (let i = 0; i < nums.length; i++) {
    if (heap.length < k) {
      heap.push(nums[i]);
      heapify(heap);
    } else if (nums[i] > heap[0]) {
      heap[0] = nums[i];
      heapDown(heap);
    }
  }
  return heap[0];
}

function heapify(heap) {
  let index = heap.length - 1;
  while (index > 0) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (heap[parentIndex] > heap[index]) {
      [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
      index = parentIndex;
    } else break;
  }
}

function heapDown(heap) {
  let index = 0;
  while (2 * index + 1 < heap.length) {
    let smaller = 2 * index + 1;
    if (
      2 * index + 2 < heap.length &&
      heap[2 * index + 2] < heap[2 * index + 1]
    ) {
      [heap[index], heap[smaller]] = [heap[smaller], heap[index]];
      index = smaller;
    } else break;
  }
}

// 81. Search in Rotated Sorted Array II

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left >= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return true;

    // left part sorted
    if (nums[left] < nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else if (nums[left] > nums[mid]) {
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    } else left++;
  }
  return false;
}
