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

  for (let i = n - 1; n >= 0; n--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else digits[i] = 0;
  }

  // jump out for loop = we get something like [9,9];
  digits.unshift(1);
  return digits;
}
