// word abb

const test1 = (word, abbr) => {
  let i = 0;
  let j = 0;

  while (i < word.length && j < abbr.length) {
    if (abbr[j] >= "0" && abbr[j] <= "9") {
      if (abbr[j] === "0") return false;
      let start = j;
      while (abbr[j] >= "0" && abbr[j] <= "9" && j < abbr.length) j++;

      let num = parseInt(abbr.substring(start, j));
      i = i + num;
    } else {
      if (word[i] !== abbr[j]) return false;
      i++;
      j++;
    }
  }
  return i === word.length && j === abbr.length;
};

// space constant O(1);
// time O(n + m);

// word
const test2 = (root) => {
  if (!root) return [];

  let queue = [[root, 0]];
  let minC = 0;
  let maxC = 0;
  const map = new Map();

  while (queue.length > 0) {
    const [node, column] = queue.shift();
    if (!map.has(column)) map.set(column, []);
    map.get(column).push(node.val);

    minC = Math.min(minC, column);
    maxC = Math.max(maxC, column);

    if (node.left) queue.push([node.left, column - 1]);
    if (node.right) queue.push([node.right, column + 1]);
  }

  let result = [];

  for (let i = minC; i <= maxC; i++) {
    result.push(map.get(i));
  }

  return result;
};

// time O(N) n = number of nodes inside Tree
// space O(nlongn);

const minRemoveParent = (s) => {
  const stack = [];
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(i);
    else if (s[i] === ")") {
      if (stack.length > 0) stack.pop();
      else set.add(i);
    }
  }

  while (stack.length > 0) set.add(stack.pop());

  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (!set.has(i)) result.push(s[i]);
  }

  return result.join("");
};

// time O(n) n = s.length;
// space O(n);
