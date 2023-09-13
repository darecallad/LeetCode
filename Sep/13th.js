// 338. Counting Bits

function CountingBit(n) {
  let ans = [];
  for (let i = 0; i <= n; i++) {
    ans.push(i.toString(2).split("1").length - 1);
  }
  return ans;
}

// 92. Reverse Linked List II
function reverseLinked(head, left, right) {
  if (!head || left === right) return head;

  let dummy = new LinkList(0);
  dummy.next = head;
  let prev = dymmy;

  for (let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }

  let current = prev.next;
  let next = null;

  for (let i = 0; i < right - left; i++) {
    next = current.next;
    current.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return dummy.next;
}
