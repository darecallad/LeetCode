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

var alienOrder = function (words) {
  const adjList = new Map();
  for (let word of words) {
    for (let char of word) {
      if (!adjList.has(char)) adjList.set(char, new Set());
    }
  }

  // find all edges
  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];
    const minLength = Math.min(word1.length, word2.length);
    let found = false;

    for (let j = 0; j < minLength; j++) {
      if (word1[j] !== word2[j]) {
        adjList.get(word1[j].add(word2[j]));
        found = true;
        break;
      }
    }

    if (!found && word1.length > word2.length) return "";
  }

  const visiting = new Set(); // node being visited
  const visited = new Set(); // visited
  const result = [];

  function dfs(node) {
    if (visiting.has(node)) return false;
    if (visited.has(node)) return false;

    visiting.add(node);

    for (let neighbor of adjList.get(node)) if (!dfs(neighbor)) return false;

    visiting.delete(node);
    visited.add(node);
    result.push(node);

    return true;
  }

  for (let node of adjList.keys()) if (!dfs(node)) return "";

  return result.reverse().join("");
};

var alienOrder = function (words) {
  const map = new Map();
  for (let word of words) {
    for (let char of word) {
      if (!map.has(char)) map.set(char, new Set());
    }
  }

  // for all edges
  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];
    const minLength = Math.min(word1.length, word2.length);
    let found = false;

    for (let j = 0; j < minLength; j++) {
      if (word1[j] !== word2[j]) {
        map.get(word1[j]).add(word2[j]);
        found = true;
        break;
      }
    }

    if (!found && word1.length > word2.length) return "";
  }

  const visiting = new Set(); // node has being visited
  const visited = new Set(); // node visited;
  const result = [];

  function dfs(node) {
    if (visiting.has(node)) return false;
    if (visited.has(node)) return true;

    visiting.add(node);

    for (let neighbor of map.get(node)) {
      if (!dfs(neighbor)) return false;
    }
    visiting.delete(node);
    visited.add(node);
    result.push(node);
  }

  for (let node of map.kets()) {
    if (!dfs(node)) return "";
  }

  return result.reverse().join("");
};

function alienOrder(words) {
  const map = new Map();
  for (let word of words) {
    for (let char of word) {
      if (!map.has(char)) map.set(char, new Set());
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];
    let minLength = Math.min(word1.length, word2.length);
    let found = false;

    for (let j = 0; j < minLength; j++) {
      if (word1[j] !== word2[j]) {
        map.get(word1[j]).add(word2[j]);
        found = true;
        break;
      }
    }
    if (!found && word1.length > word2.length) return "";
  }

  const visiting = new Set();
  const visited = new Set();
  const result = [];

  function dfs(node) {
    if (visiting.has(node)) return false;
    if (visited.has(node)) return false;

    visiting.add(node);

    for (let neighbor of map.get(node)) {
      if (!dfs(neighbor)) return false;
    }

    visiting.delete(node);
    visited.add(node);
    result.push(node);
  }

  for (let node of map.keys()) {
    if (!dfs(node)) return "";
  }

  return result.reverse().join("");
}

function validTree(n, edges) {
  if (edges.length !== n - 1) return false;

  // build graph
  const graph = new Array(n).fill(0).map(() => []);
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Set();

  function dfs(node, parent) {
    if (visited.has(node)) return false;
    visited.add(node);

    for (let neighbor of graph[node]) {
      if (neighbor === parent) continue;
      if (!dfs(neighbor, node)) return false;
    }
    return true;
  }
  if (!dfs(0, -1)) return false;
  return visited.size === n;
}

function validTree(n, edges) {
  if (edges.length !== n - 1) return false;
  const graph = new Array(n).fill(0).map(() => []);

  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Set();

  function dfs(node, parent) {
    if (visited.has(node)) return false;
    visited.add(node);

    for (let neighbor of graph[node]) {
      if (neighbor === parent) continue;
      if (!dfs(neighbor, node)) return false;
    }
    return true;
  }

  if (!dfs(0, -1)) return false;
  return visited.size === n;
}

function validTree(n, edges) {
  if (edges.length !== n - 1) return false;
  const graph = new Array(n).fill(0).map(() => []);

  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Set();

  function dfs(node, parent) {
    if (visited.has(node)) return false;
    visited.add(node);

    for (let neighbor of graph[node]) {
      if (neighbor === parent) continue;
      if (!dfs(neighbor, node)) return false;
    }
    return true;
  }

  if (!dfs(0, -1)) return false;
  return visited.size === n;
}

function validTree(n, edges) {
  if (edges.length !== n - 1) return false;
  const graph = new Array(n).fill(0).map(() => []);

  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Set();

  function dfs(node, parent) {
    if (visited.has(node)) return false;
    visited.add(node);

    for (let neighbor of graph[node]) {
      if (neighbor === parent) continue;
      if (!dfs(neighbor, node)) return false;
    }
    return true;
  }
  if (!dfs(0, -1)) return false;
  return visited.size === n;
}

function countComponents(n, edges) {
  const graph = new Array(n);

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Set();
  let count = 0;

  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);
    for (let neighbor of graph[node]) {
      dfs(neighbor);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }

  return count;
}

function countComponents(n, edges) {
  const graph = new Array(n);

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Set();
  let count = 0;

  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);

    for (let neighbor of graph[node]) {
      dfs(neighbor);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }
  return count;
}

function countComponents(n, edges) {
  const graph = new Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  const visited = new Set();
  let count = 0;

  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);
    for (let neighbor of graph[node]) {
      dfs(neighbor);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }
  return count;
}

function countComponents(n, edges) {
  const graph = new Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  const visited = new Set();
  let count = 0;

  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);
    for (let neighbor of graph[node]) {
      dfs(neighbor);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }
  return count;
}

function countComponents(n, edges) {
  const graph = new Array(n);
  for (let i = 0; i < n; i++) graph[i] = [];
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  const visited = new Set();
  let count = 0;

  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);

    for (let neighbor of graph[node]) dfs(neighbor);
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }
  return count;
}

function countComponents(n, edges) {
  const graph = new Array(n);
  for (let i = 0; i < n; i++) graph[i] = [];
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  const visited = new Set();
  let count = 0;

  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);

    for (let neighbor of graph[node]) dfs(neighbor);
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }
  return count;
}

var insert = function (intervals, newInterval) {
  let result = [];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newIntervals[0], intervals[i][0]);
    newInterval[1] = Math.max(newIntervals[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }
  return result;
};

var insert = function (intervals, newInterval) {
  let result = [];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  result.push(newInterval);

  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }
  return result;
};

var insert = function (intervals, newInterval) {
  const result = [];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i++]);
  }
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);
  while (i < intervals.length) {
    result.push(intervals[i++]);
  }
  return result;
};

var insert = function (intervals, newInterval) {
  const result = [];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0])
    result.push(intervals[i++]);
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);
  while (i < intervals.length) result.push(intervals[i++]);
  return result;
};

var merge = function (intervals) {
  if (intervals.length <= 1) return intervals;

  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  for (let interval of intervals) {
    if (result.length === 0 || result[result.length - 1][1] < interval[0])
      result.push(interval);
    else
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        interval[1]
      );
  }
  return result;
};

var merge = function (intervals) {
  if (intervals.length === 1) return intervals;
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  for (let interval of intervals) {
    if (result.length === 0 || result[result.length - 1][1] < interval[0])
      result.push(interval);
    else
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        interval[1]
      );
  }
  return result;
};

var merge = function (intervals) {
  if (intervals.length === 1) return intervals;
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  for (let interval of intervals) {
    if (result.length === 0 || result[result.length - 1][1] < interval[0])
      result.push(interval);
    else
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        interval[1]
      );
  }
  return result;
};

var merge = function (intervals) {
  if (intervals.length === 1) return intervals;
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  for (let interval of intervals) {
    if (result.length === 0 || result[result.length - 1][1] < interval[0])
      result.push(interval);
    else
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        interval[1]
      );
  }
  return result;
};

var merge = function (intervals) {
  if (intervals.length === 1) return intervals;
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  for (let interval of intervals) {
    if (result.length === 0 || result[result.length - 1][1] < interval[0])
      result.push(interval);
    else
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        interval[1]
      );
  }
  return result;
};

var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];
  let count = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) count++;
    else end = intervals[i][1];
  }
  return count;
};

var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];
  let count = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (end > intervals[i][0]) count++;
    else end = intervals[i][1];
  }
  return count;
};

var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];
  let count = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) count++;
    else end = intervals[i][1];
  }
  return count;
};

var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];
  let count = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) count++;
    else end = intervals[i][1];
  }
  return count;
};

var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];
  let count = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) count++;
    else end = intervals[i][1];
  }
  return count;
};

var canAttendMeetings = function (intervals) {
  if (!intervals.length) return true;
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) return false;
    else end = intervals[i][1];
  }
  return true;
};

var canAttendMeetings = function (intervals) {
  if (intervals.length === 0) return true;
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) return false;
    else end = intervals[i][1];
  }
  return true;
};

var canAttendMeetings = function (intervals) {
  if (!intervals.length) return true;
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];

  for (let i = 2; i < intervals.length; i++) {
    if (intervals[i][0] < end) return false;
    else end = intervals[i][1];
  }
  return true;
};

var canAttendMeetings = function (intervals) {
  if (!intervals.length) return true;
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) return false;
    else end = intervals[i][1];
  }
  return true;
};

var canAttendMeetings = function (intervals) {
  if (!intervals.length) return true;
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) return false;
    else end = intervals[i][1];
  }
  return true;
};

var canAttendMeetings = function (intervals) {
  if (!intervals.length) return true;
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) return false;
    else end = intervals[i][1];
  }
  return true;
};

var canAttendMeetings = function (intervals) {
  if (!intervals.length) return true;
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) return false;
    else end = intervals[i][1];
  }
  return true;
};
var canAttendMeetings = function (intervals) {
  if (!intervals.length) return true;
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) return false;
    else end = intervals[i][1];
  }
  return true;
};

var minMeetingRooms = function (intervals) {
  if (!intervals.length) return 0;
  intervals.sort((a, b) => a[0] - b[0]);
  let room = 0;
  let heap = [];

  for (let interval of intervals) {
    heap = heap.filter((end) => end > interval[0]);
    heap.push(interval[1]);
    heap.sort((a, b) => a - b);

    room = Math.max(room, heap.length);
  }
  return room;
};

var minMeetingRooms = function (intervals) {
  if (!intervals.length) return 0;
  intervals.sort((a, b) => a[0] - b[0]);
  let room = 0;
  let result = [];

  for (let interval of intervals) {
    result = result.filter((endTime) => endTime > interval[0]);
    result.push(interval[1]);
    result.sort((a, b) => a - b);
    room = Math.max(room, result.length);
  }
  return room;
};

var minMeetingRooms = function (intervals) {
  if (!intervals.length) return 0;
  intervals.sort((a, b) => a[0] - b[0]);
  let room = 0;
  let result = [];

  for (let interval of intervals) {
    result = result.filter((end) => end > interval[0]);
    result.push(interval[1]);
    result.sort((a, b) => a - b);

    room = Math.max(room, room.length);
  }
  return room;
};

var minMeetingRooms = function (intervals) {
  if (!intervals.length) return 0;
  intervals.sort((a, b) => a[0] - b[0]);
  let room = 0;
  let result = [];

  for (let interval of intervals) {
    result = result.filter((end) => end > interval[0]);
    result.push(interval[1]);
    result.sort((a, b) => a - b);

    room = Math.max(room, result.length);
  }
  return room;
};

var minMeetingRooms = function (intervals) {
  if (!intervals.length) return 0;
  intervals.sort((a, b) => a[0] - b[0]);
  let room = 0;
  let result = [];

  for (let interval of intervals) {
    result = result.filter((end) => end > interval[0]);
    result.push(interval[1]);
    result.sort((a, b) => a - b);

    room = Math.max(room, result.length);
  }
  return room;
};

var reverseList = function (head) {
  let prev = null;
  let next = null;

  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

var reverseList = function (head) {
  if (!head || !head.next) return head;

  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
};

var reverseList = function (head) {
  let prev = null;
  let next = null;
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

var reverseList = function (head) {
  if (!head || !head.next) return head;
  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

var reverseList = function (head) {
  let prev = null;
  let next = null;

  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

var reverseList = function (head) {
  if (!head || !head.next) return head;
  let newHead = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return newHead;
};

var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head.next;
  let fast = head.next.next;

  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    fast = fast.next.next;
    slow = slow.next;
  }
  return true;
};

var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head.next;
  let fast = head.next.next;

  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    fast = fast.next.next;
    slow = slow.next;
  }
  return true;
};

var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head.next;
  let fast = head.next.next;

  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    fast = fast.next.next;
    slow = slow.next;
  }
  return true;
};

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let current = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  if (list1) {
    current.next = list1;
  }
  if (list2) {
    current.next = list2;
  }
  return dummy.next;
};

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let current = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  if (list1) current.next = list1;
  if (list2) current.next = list2;

  return dummy.next;
};

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let current = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  if (list1) current.next = list1;
  if (list2) current.next = list2;

  return dummy.next;
};

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let current = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  if (list1) current.next = list1;
  if (list2) current.next = list2;

  return dummy.next;
};

var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head.next;
  let fast = head.next.next;

  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    fast = fast.next.next;
    slow = slow.next;
  }
  return true;
};

var mergeKLists = function (lists) {
  const minHeapfy = (index) => {
    let smallest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (left < heap.length && heap[left].val < heap[smallest].val)
      smallest = left;
    if (right < heap.length && heap[right].val < head[smallest].val)
      smallest = right;
    if (smallest !== index) {
      [heap[smallest], heap[index]] = [heap[index], heap[smallest]];
      minHeapfy(smallest);
    }
  };

  let heap = lists.filter((list) => list !== null);
  let i = Math.floor(heap.length / 2) - 1;
  while (i >= 0) {
    minHeapfy(i--);
  }

  let dummy = new ListNode(0);
  let tail = dummy;

  while (heap.length > 0) {
    let smallest = heap[0];
    tail.next = smallest;
    tail = tail.next;

    if (smallest.next) {
      heap[0] = smallest.next;
      minHeapfy(0);
    } else {
      heap[0] = heap[heap.length - 1];
      heap.pop();
      if (heap.length > 0) minHeapfy(0);
    }
  }

  return dummy.next;
};

var mergeKLists = function (lists) {
  const minify = (index) => {
    let smallest = index;
    let left = index * 2 + 1;
    let right = index * 2 + 2;

    if (left < heap.length && heap[left].val < heap[smallest].val)
      smallest = left;
    if (right < heap.length && heap[right].val < heap[smallest].val)
      smallest = right;
    if (smallest !== index) {
      [heap[smallest], head[index]] = [head[index], heap[smallest]];
      minify(smallest);
    }
  };

  let heap = lists.filter((list) => list !== null);
  let i = Math.floor(heap.length / 2) - 1;

  while (i >= 0) minify(i--);

  let dummy = new ListNode(0);
  let tail = dummy;

  while (heap.length > 0) {
    let smallest = heap[0];
    tail.next = smallest;
    tail = tail.next;

    if (smallest.next) {
      heap[0] = smallest.next;
      minHeapfy(0);
    } else {
      heap[0] = heap[heap.length - 1];
      heap.pop();
      if (heap.length > 0) minify(0);
    }
  }
  return dummy.next;
};

var mergeKLists = function (lists) {
  const minify = (index) => {
    let smallest = index;
    let left = index * 2 + 1;
    let right = index * 2 + 2;

    if (left < heap.length && heap[left].val < heap[smallest].val)
      smallest = left;
    if (left < heap.length && heap[right].val < heap[smallest].val)
      smallest = right;
    if (smallest !== index) {
      [heap[smallest], heap[index]] = [heap[index], heap[smallest]];
      minify(smallest);
    }
  };
  let heap = lists.filter((list) => list !== null);
  let i = Math.floor(heap.length / 2) + 1;
  while (i >= 0) minify(i--);

  let dummy = new ListNode(0);
  let tail = dummy;

  while (heap.length > 0) {
    let smallest = heap[0];
    tail.next = smallest;
    tail = tail.next;

    if (smallest.next) {
      heap[0] = smallest.next;
      minify(0);
    } else {
      heap[0] = heap[heap.length - 1];
      heap.pop();
      if (heap.length > 0) minify(0);
    }
  }
  return dummy.next;
};

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
};

var reorderList = function (head) {
  if (!head || !head.next) return;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let prev = null;
  let temp = null;
  let curr = slow;

  while (curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  let first = head;
  let second = prev;

  while (second.next) {
    temp = first.next;
    first.next = second;
    first = temp;

    temp = second.next;
    second.next = first;
    second = temp;
  }
};

var reorderList = function (head) {
  if (!head || !head.next) return;
  let fast = head;
  let slow = head;

  // find middle point
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  // reverse second part
  let prev = null;
  let next = null;

  while (slow) {
    next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }
  // re-order
  let first = head;
  let second = prev;

  while (second.next) {
    next = first.next;
    first.next = second;
    first = next;

    next = second.next;
    second.next = first;
    second = next;
  }
};

var reorderList = function (head) {
  if (!head || !head.next) return;
  // find middle
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  //reverse second part
  let prev = null;
  let next = null;
  while (slow) {
    next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }
  // re-order
  let first = head;
  let second = prev;

  while (second.next) {
    next = first.next;
    first.next = second;
    first = next;

    next = second.next;
    second.next = first;
    second = next;
  }
};

var reorderList = function (head) {
  // check exist
  if (!head || !head.next) return;
  // find middle
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  // reverse
  let prev = null;
  let next = null;
  let temp = slow;

  while (temp) {
    next = temp.next;
    temp.next = prev;
    prev = temp;
    temp = next;
  }
  // re-order
  let first = head;
  let second = prev;

  while (second.next) {
    next = first.next;
    first.next = second;
    first = next;

    next = second.next;
    second.next = first;
    second = next;
  }
};
