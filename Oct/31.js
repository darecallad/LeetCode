// 804. Unique Morse Code Words

const uniqu = (words) => {
  const Mouse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  const set = new Set(); // store unique mouse code

  for (let word of words) {
    let mouseWord = "";
    for (let char of word) {
      mouseWord += Mouse[char.charCodeAt(0) - "a".charCodeAt()];
    }
    set.add(mouseWord);
  }
  return set.size;
};

// time O(N * M)
// space O(N)

// Check If It Is a Straight Line

const checkStraightLine = (codes) => {
  const [x0, y0] = codes[0];
  const [x1, y1] = codes[1];

  let deX = x1 - x0;
  let deY = y1 - y0;

  for (let i = 2; i < codes.length; i++) {
    const [xi, yi] = codes[i];

    if (deX * (yi - y0) !== deY * (xi - x0)) return false;
  }
  return true;
};

// time O(n);
// space O(1);

// Convert Binary Number in a Linked List to Integer

const getLink = (head) => {
  let num = 0;

  while (head !== null) {
    num = num * 2 + head.val;
    head = head.next;
  }
  return num;
};

// time O(n)
// space O(1)

// Split a String in Balanced Strings

const balanceString = (s) => {
  let count = 0;
  let balance = 0;

  for (let char of s) {
    if (char === "R") balance++;
    else balance--;

    if (balance === 0) count++;
  }
  return count;
};

// time O(n);
// space O(1);

// Fizz Buzz
const fizzBuzz = (n) => {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) result.push("FizzBuzz");
    else if (i % 5 === 0) result.push("Buzz");
    else if (i % 3 === 0) result.push("Fizz");
    else result.push(i.toString());
  }
  return result;
};

// time space O(n);

// Number of Islands

const island = (grid) => {
  if (!grid || grid.length === 0) return 0;
  let rows = grid.length;
  let cols = grid[0].length;

  let count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(grid, i, j);
      }
    }
  }
  return count;
};

const dfs = (grid, i, j) => {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] === "0"
  )
    return;

  grid[i][j] = "0";
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
};

// time  space O(m * n)

// Flood Fill
const floodFill = (image, sr, sc, color) => {
  const originalColor = image[sr][sc];
  if (originalColor === color) return image;

  const dfs = (sr, sc) => {
    if (
      sr < 0 ||
      sc < 0 ||
      sr >= image.length ||
      sc >= image[0].length ||
      image[sr][sc] !== originalColor
    )
      return;

    image[sr][sc] = color;

    dfs(sr + 1, sc);
    dfs(sr - 1, sc);
    dfs(sr, sc + 1);
    dfs(sr, sc - 1);
  };

  dfs(sr, sc);
  return image;
};

// time space O(M * N);

// Climbing Stairs
const climbStairs = (n) => {
  if (n <= 2) return n;

  let dp = new Array(n + 1);

  // base case
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// time O(n);
// space O(n);

// 237. Delete Node in a Linked List

const deleteNode = (node) => {
  //when we delete a node inside linklist
  // we can simple put node.val to the next node
  // and move node.next = node.next.next

  node.val = node.next.val;
  node.next = node.next.next;
};

// time O(1)
// space O(1)

// 622. Design Circular Queue
