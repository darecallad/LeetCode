// 344. Reverse String

function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }
}

// 3. Longest Substring Without Repeating Characters

function longestSubstring(s) {
  let currentSub = "";
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    let index = currentSub.indexOf(s[i]);
    if (index !== -1) currentSub = currentSub.substring(index + 1);
    currentSub += s[i];
    maxLength = Math.max(maxLength, currentSub.length);
  }
  return maxLength;
}

// 33. Search in Rotated Sorted Array

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
}

// 74. Search a 2D Matrix
function searchMatrix(matrix, target) {
  let col = martix[0].length;
  let row = matrix.length;

  let left = 0;
  let right = col * row - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = matrix[Math.floor(mid / col)][mid % col];

    if (midValue === target) return true;
    else if (midValue < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
}

// 15. 3Sum

function threeSum(nums) {
  nums.sort((a, b) => a - b); //sorting first
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue; // skip the same case
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }

  return result;
}
