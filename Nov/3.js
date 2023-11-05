// 215. Kth Largest Element in an Array

const largestK = (nums, k) => {
  let minHeap = [];

  function heapfy() {
    let index = minHeap.length - 1;
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (minHeap[parent] > minHeap[index]) {
        [minHeap[index], minHeap[parent]] = [minHeap[parent], minHeap[index]];
        index = parent;
      } else break;
    }
  }

  function shiftDown() {
    let index = 0;
    while (index * 2 + 1 < minHeap.length) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let smallest = index;

      if (minHeap[left] < minHeap[smallest]) smallest = left;
      if (right < minHeap.length && minHeap[right] < minHeap[smallest])
        smallest = right;
      if (smallest !== index) {
        [minHeap[index], minHeap[smallest]] = [
          minHeap[smallest],
          minHeap[index],
        ];
        index = smallest;
      } else break;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i < k) {
      minHeap.push(nums[i]);
      heapfy();
    } else if (nums[i] > minHeap[0]) {
      minHeap[0] = nums[i];
      shiftDown();
    }
  }
  return minHeap[0];
};

// time O(nlogk)
// space O(k)

// 791. Custom Sort String

const customSort = (order, s) => {
  const map = new Map();
  let result = "";

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (let char of order) {
    while (map.get(char)) {
      result = result + char;
      map.set(char, map.get(char) - 1);
    }
  }
  for (let [char, count] of map.entries()) {
    result = result + char.repeat(count);
  }
  return result;
};

// time O(s.length);
// space O(s.length);

// 670. Maximum Swap

const maxSwap = (num) => {
  const digit = num.toString().split(""); // make it to string Array;
  const maxRight = new Array(digit.length).fill(0); //create an Array with same length;
  let maxIndex = digit.length - 1; // default maxValue of Index;

  for (let i = maxIndex; i >= 0; i--) {
    if (+digit[i] > +digit[maxIndex]) {
      // if we find greater  value in array
      maxIndex = i; // set the maxIndex to new Index;
    }
    maxRight[i] = maxIndex; // set the all value to Max Index value's Index;
  }

  for (let i = 0; i < digit.length; i++) {
    // go tho from starting position
    if (digit[i] !== digit[maxRight[i]]) {
      // if the current value is not largest value we switch
      [digit[i], digit[maxRight[i]]] = [digit[maxRight[i]], digit[i]];
      break; // we can only swap once, so we break after it.
    }
  }

  return +digit.join("");
};

// time O(n):
// space O(n) n = rightmax array

// 71. Simplify Path

const simple = (path) => {
  const dict = path.split("/");
  const stack = [];

  for (let char of dict) {
    if (char === "..") {
      stack.pop();
    } else if (char && char !== ".") {
      stack.push(char);
    }
  }

  return "/" + stack.join("/");
};

// time O(n)
// space O(n)

// 938. Range Sum of BST

const rangeSumBST = (root, low, high) => {
  if (!root) return 0;
  let sum = 0;

  if (root.val >= low) sum += rangeSumBST(root.left, low, high);
  if (root.val >= low && root.val <= high) sum += root.val;
  if (root.val <= high) sum += rangeSumBST(root.right, low, high);

  return sum;
};

// time O(n) n= number of node
// space O(h) h should be high of BST, blanced = O(logn)

// 249. Group Shifted Strings

const groupStrings = (strings) => {};
