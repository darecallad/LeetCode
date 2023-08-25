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
