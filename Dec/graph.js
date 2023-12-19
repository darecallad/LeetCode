var cloneGraph = function (node) {
  if (!node) return null;
  const map = new Map();

  function dfs(node) {
    if (map.has(node)) return map.get(node);
    const cloneNode = new Node(node.val, []);
    map.set(node, cloneNode);

    for (let neighbor of node.neightbors) {
      cloneNode.neighbors.push(dfs(neighbor));
    }
    return cloneNode;
  }
  return dfs(node);
};

var cloneGraph = function (node) {
  if (!node) return null;
  const map = new Map();

  function dfs(node) {
    if (map.has(node)) return map.get(node);
    const cloneNode = new Node(node.val, []);
    map.set(node, cloneNode);

    for (let neighbor of node.neighbors) {
      cloneNode.neighbors.push(dfs(neighbor));
    }
    return cloneNode;
  }
  return dfs(node);
};

var cloneGraph = function (node) {
  if (!node) return null;
  const map = new Map();

  function dfs(node) {
    if (map.has(node)) return map.get(node);
    const cloneNode = new Node(node.val, []);
    map.set(node, cloneNode);

    for (let neighbor of node.neighbors) {
      cloneNode.neighbors.push(dfs(neighbor));
    }
    return cloneNode;
  }
  return dfs(node);
};

var cloneGraph = function (node) {
  if (!node) return null;
  const map = new Map();

  function dfs(node) {
    if (map.has(node)) return map.get(node);
    const cloneNode = new Node(node.val, []);
    map.set(node, cloneNode);

    for (let neighbor of node.neighbors) {
      cloneNode.neighbors.push(dfs(neighbor));
    }
    return cloneNode;
  }
  return dfs(node);
};

var canFinish = function (numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).map(() => []);
  for (let [course, prereq] of prerequisites) {
    graph[course].push(prereq);
  }

  const visited = new Array(numCourses).fill(false);
  const recStack = new Array(numCourses).fill(false);

  function dfs(course) {
    if (recStack[course]) return true;
    if (visited[course]) return false;

    visited[course] = true;
    recStack[course] = true;

    for (let prereq of graph[course]) if (dfs(prereq)) return true;
    recStack[course] = false;
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return false;
  }
  return true;
};

var canFinish = function (numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).map(() => []);
  for (let [course, prereq] of prerequisites) {
    graph[course] = prereq;
  }

  const visited = new Array(numCourses).fill(false);
  const recStack = new Array(numCourses).fill(false);

  function dfs(course) {
    if (recStack[course]) return true;
    if (visited[course]) return false;

    recStack[course] = true;
    visited[course] = true;

    for (let prereq of graph[course]) if (dfs(prereq)) return true;
    recStack[course] = false;
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return false;
  }
  return true;
};

var canFinish = function (numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).map(() => []);
  for (let [course, prereq] of prerequisites) {
    graph[course] = prereq;
  }

  const visited = new Array(numCourses).fill(false);
  const recStack = new Array(numCourses).fill(false);
  function dfs(course) {
    if (recStack[course]) return true;
    if (visited[course]) return false;

    recStack[course] = true;
    visited[course] = true;

    for (let prereq of graph[course]) if (dfs(prereq)) return true;
    recStack[course] = false;
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return false;
  }
  return true;
};

var canFinish = function (numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).map(() => []);
  for (let [course, prereq] of prerequisites) graph[course] = prereq;
  const visited = new Array(numCourses).fill(false);
  const recStack = new Array(numCourses).fill(false);

  function dfs(course) {
    if (recStack[course]) return true;
    if (visited[course]) return false;

    recStack[course] = true;
    visited[course] = true;

    for (let prereq of graph[course]) if (dfs(prereq)) return true;
    recStack[course] = false;
    return false;
  }
  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return false;
  }
  return true;
};

var pacificAtlantic = function (heights) {
  if (!heights || !heights.length) return [];

  let m = heights.length;
  let n = heights[0].length;

  let pacific = Array.from({ length: m }, () => Array(n).fill(false));
  let atlantic = Array.from({ length: m }, () => Array(n).fill(false));

  function dfs(r, c, visited, prevHeight) {
    if (r < 0 || c < 0 || r >= m || c >= n) return;
    if (visited[r][c] || heights[r][c] < prevHeight) return;

    visited[r][c] = true;
    let directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    for (let [dr, dc] of directions) {
      dfs(r + dc, c + dc, visited, heights[r][c]);
    }
  }

  for (let i = 0; i < m; i++) {
    dfs(i, 0, pacific, heights[i][0]);
    dfs(i, n - 1, atlantic, heights[i][n - 1]);
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j, pacific, heights[0][j]);
    dfs(m - 1, j, atlantic, heights[m - 1][j]);
  }

  let result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

var pacificAtlantic = function (heights) {
  if (!heights || !heights[0].length) return [];
  let m = heights.length;
  let n = heights[0].length;

  let pacific = Array.from({ length: m }, () => Array(n).fill(false));
  let atlantic = Array.from({ length: m }, () => Array(n).fill(false));

  // dfs
  function dfs(r, c, visited, prevHeight) {
    if (r < 0 || c < 0 || r >= m || c >= n) return;
    if (visited[r][c] || heights[r][c] < prevHeight) return;

    visited[r][c] = true;
    let directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    for (let [dr, dc] of directions) {
      dfs(r + dr, c + dc, visited, heights[r][c]);
    }
  }
  // run dfs
  for (let i = 0; i < m; i++) {
    dfs(i, 0, pacific, heights[i][0]);
    dfs(i, n - 1, atlantic, heights[i][n - 1]);
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j, pacific, heights[0][j]);
    dfs(m - 1, j, atlantic, heights[m - 1][j]);
  }

  let result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) result.push([i, j]);
    }
  }
  return result;
};

var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;

  let row = grid.length;
  let col = grid[0].length;
  let count = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(grid, i, j);
      }
    }
  }
  return count;

  function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === "0") return;
    grid[i][j] = 0;

    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
  }
};

var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;
  let row = grid.length;
  let col = grid[0].length;
  let count = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(grid, i, j);
      }
    }
  }
  return count;

  function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === "0") return;

    grid[i][j] = "0";

    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
  }
};

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longest = 0;

  for (let num of nums) {
    if (set.has(num - 1)) {
      let curNum = num;
      let curS = 1;

      while (set.has(curNum + 1)) {
        curNum++;
        curS++;
      }
      longest = Math.max(longest, curS);
    }
  }
  return longest;
};

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longest = 0;

  for (const num of nums) {
    if (set.has(num - 1)) {
      let curNum = num;
      let curSum = 1;
      while (set.has(curNum + 1)) {
        curNum++;
        curSum++;
      }
      longest = Math.max(longest, curSum);
    }
  }
  return longest;
};

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longest = 0;

  for (let num of nums) {
    if (set.has(num - 1)) {
      let curNum = num;
      let curSum = 1;

      while (set.has(curNum + 1)) {
        curNum++;
        curSum++;
      }
      longest = Math.max(longest, curSum);
    }
  }
  return longest;
};
