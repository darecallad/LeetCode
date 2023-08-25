// 168. Excel Sheet Column Title

function coverTitle(number) {
  let result = "";

  while (number > 0) {
    let reminder = (number - 1) % 26; // excel is 1-based;
    result = String.fromCharCode(65 + reminder) + result;
    number = Math.floor((number - 1) / 26);
  }

  return result;
}

// 206. reverse Linked List

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next; // set next to replace it
    current.next = prev; // change the linked list point direction

    prev = current;
    current = next;
  }

  return prev;
}

// 66. Plus One

function plusOne(digits) {
  let n = digits.length;

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else digits[i] = 0;
  }

  // jump out for loop = we get something like [9,9];
  digits.unshift(1);
  return digits;
}

// 392. Is Subsequence

function subsequence(s, t) {
  // use pointer
  let sIndex = 0;

  for (let c of t) {
    if (s[sIndex] === c) sIndex++;
  }
  return sIndex === s.length;
}

// 704. Binary Search

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

// 58. Length of Last Word

function lengthOfLastWord(s) {
  s = s.trim();
  return s.length - s.lastIndexOf(" ") - 1; // -1 because its index number starting at 0 position.
}
