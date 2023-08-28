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

// 345. Reverse Vowels of a String

function reverseVowels(s) {
  const vowels = "aeiouAEIOU";
  let start = 0;
  let end = s.length - 1;
  const chars = s.split("");

  while (start < end) {
    while (start < end && !vowels.includes(chars[start])) start++;
    while (start < end && !vowels.includes(chars[end])) end--;

    const temp = chars[start];
    chars[start] = chars[end];
    chars[end] = temp;

    start++;
    end--;
  }

  return chars.join("");
}

// 234. Palindrome Linked List

function palindromeLinked(head) {
  // check the linked list is null or not
  if (head === null || head.next === null) return true;
  // after that first we need to find the middle of the list
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // second we need to reverse the second part of the list
  let prev = null;
  while (slow !== null) {
    const temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  // finally we compare 2 part of linked list val
  let p1 = head;
  let p2 = prev;

  while (p2 !== null) {
    if (p1.val !== p2.val) return false;
    p1 = p1.next;
    p2 = p2.next;
  }
  return true;
}

// 226. Invert Binary Tree

function invertTree(root) {
  if (root === null) return null;

  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.left = right;
  root.right = left;

  return root;
}
