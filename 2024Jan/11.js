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
  const graph = Array.from({ length: numCourses }, () => []);
  for (let [a, b] of prerequisites) {
    graph[a].push(b);
  }
  const visited = new Array(numCourses).fill(false);
  const recStack = new Array(numCourses).fill(false);

  function dfs(course) {
    if (recStack[course]) return true;
    if (visited[course]) return false;

    visited[course] = true;
    recStack[course] = true;

    for (let pre of graph[course]) {
      if (dfs(pre)) return true;
    }

    recStack[course] = false;
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return false;
  }
  return true;
};

var canFinish = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  for (let [course, pre] of prerequisites) {
    graph[course].push(pre);
  }
  const visited = new Array(numCourses).fill(false);
  const recStack = new Array(numCourses).fill(false);

  function dfs(course) {
    if (recStack[course]) return true;
    if (visited[course]) return false;

    visited[course] = true;
    recStack[course] = true;

    for (let pre of graph[course]) {
      if (dfs(pre)) return true;
    }

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
  const m = heights.length;
  const n = heights[0].length;

  const pOcean = Array.from({ length: m }, () => new Array(n).fill(false));
  const aOcean = Array.from({ length: m }, () => new Array(n).fill(false));

  function dfs(r, c, visited, ocean) {
    if (r < 0 || c < 0 || r >= m || c >= n) return;
    if (visited[r][c] || heights[r][c] < ocean) return;

    visited[r][c] = true;
    const directions = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    for (let [dr, dc] of directions) {
      dfs(r + dr, c + dc, visited, heights[r][c]);
    }
  }

  for (let i = 0; i < m; i++) {
    dfs(i, 0, pOcean, heights[i][0]);
    dfs(i, n - 1, aOcean, heights[i][n - 1]);
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j, pOcean, heights[0][j]);
    dfs(m - 1, j, aOcean, heights[m - 1][j]);
  }
  const result = [];
  for (i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pOcean[i][j] && aOcean[i][j]) result.push([i, j]);
    }
  }
  return result;
};

var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j, grid);
      }
    }
  }
  return count;

  function dfs(i, j, grid) {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === "0") return;
    grid[i][j] = "0";

    dfs(i + 1, j, grid);
    dfs(i - 1, j, grid);
    dfs(i, j + 1, grid);
    dfs(i, j - 1, grid);
  }
};

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let maxC = 0;

  for (let num of nums) {
    if (!set.has(num - 1)) {
      let cur = num;
      let curC = 1;

      while (set.has(cur + 1)) {
        cur++;
        curC++;
      }
      maxC = Math.max(curC, maxC);
    }
  }
  return maxC;
};

var alienOrder = function (words) {
  const map = new Map();
  for (let word of words) {
    for (let char of word) {
      if (!map.has(char)) map.set(char, new Set());
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];
    let found = false;
    let minL = Math.min(word1.length, word2.length);

    for (let j = 0; j < minL; j++) {
      if (word1[j] !== word2[j]) {
        map.get(word1[j]).add(word2[j]);
        found = true;
        break;
      }
    }

    if (!found && word1.length > word2.length) return "";
  }

  const visited = new Set();
  const visiting = new Set();
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

    return true;
  }

  for (let node of map.keys()) {
    if (!dfs(node)) return "";
  }

  return result.reverse().join("");
};

var validTree = function (n, edges) {
  if (edges.length !== n - 1) return false;
  const graph = Array.from({ length: n }, () => []);
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
};

var countComponents = function (n, edges) {
  const graph = Array.from({ length: n }, () => []);
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

var insert = function (intervals, newInterval) {
  const result = [];
  let i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i++]);
  }
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  result.push(newInterval);
  while (i < intervals.length) result.push(intervals[i++]);
  return result;
};

var insert = function (intervals, newInterval) {
  const result = [];
  let i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i++]);
  }
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  result.push(newInterval);
  while (i < intervals.length) result.push(intervals[i++]);
  return result;
};

var merge = function (intervals) {
  if (intervals.length === 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];

  for (let interval of intervals) {
    if (result.length === 0 || result[result.length - 1][1] < interval[0]) {
      result.push(interval);
    } else {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        interval[1]
      );
    }
  }
  return result;
};

var merge = function (intervals) {
  if (intervals.length === 1) return intervals;
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  for (let interval of intervals) {
    if (result.length === 0 || result[result.length - 1][1] < interval[0]) {
      result.push(interval);
    } else {
      result[result.length - 1][1] = Math.max(
        interval[1],
        result[result.length - 1][1]
      );
    }
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
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  result.push(newInterval);
  while (i < intervals.length) result.push(intervals[i++]);
  return result;
};

var merge = function (intervals) {
  if (intervals.length === 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  for (let interval of intervals) {
    if (result.length === 0 || result[result.length - 1][1] < interval[0]) {
      result.push(interval);
    } else {
      result[result.length - 1][1] = Math.max(
        interval[1],
        result[result.length - 1][1]
      );
    }
  }
  return result;
};

var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) count++;
    else end = intervals[i][1];
  }
  return count;
};

var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let end = intervals[0][1];

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
  if (!intervals.length) return true;
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) return false;
    else end = intervals[i][1];
  }
  return true;
};

var eraseOverlapIntervals = function (intervals) {
  let count = 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];

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

var minMeetingRooms = function (intervals) {
  if (!intervals.length) return 0;
  let count = 0;
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];

  for (let interval of intervals) {
    result = result.filter((end) => end > interval[0]);
    result.push(interval[1]);
    result.sort((a, b) => a - b);

    count = Math.max(count, result.length);
  }
  return count;
};

var minMeetingRooms = function (intervals) {
  if (!intervals.length) return 0;
  let count = 0;
  let result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  for (let interval of intervals) {
    result = result.filter((end) => end > interval[0]);
    result.push(interval[1]);
    result.sort((a, b) => a - b);

    count = Math.max(count, result.length);
  }
  return count;
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

var merge = function (intervals) {
  if (intervals.length === 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];

  for (let interval of intervals) {
    if (result.length === 0 || result[result.length - 1][1] < interval[0]) {
      result.push(interval);
    } else {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        interval[1]
      );
    }
  }
  return result;
};

var merge = function (intervals) {
  if (intervals.length === 1) return intervals;
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  for (let interval of intervals) {
    if (result.length === 0 || result[result.length - 1][1] < interval[0]) {
      result.push(interval);
    } else {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        interval[1]
      );
    }
  }
  return result;
};

var eraseOverlapIntervals = function (intervals) {
  let count = 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];

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

var minMeetingRooms = function (intervals) {
  let room = 0;
  if (intervals.length === 0) return 0;
  intervals.sort((a, b) => a[0] - b[0]);
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
  if (!head) return null;
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

var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let fast = head.next.next;
  let slow = head.next;

  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    fast = fast.next.next;
    slow = slow.next;
  }
  return true;
};

var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let fast = head.next.next;
  let slow = head.next;

  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    fast = fast.next.next;
    slow = slow.next;
  }
  return true;
};

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(null);
  let current = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
      current = current.next;
    } else {
      current.next = list2;
      list2 = list2.next;
      current = current.next;
    }
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
  let dummy = new ListNode(null);
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

var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let fast = head.next.next;
  let slow = head.next;
  while (fast !== slow) {
    if (!fast || !fast.next) return false;
    fast = fast.next.next;
    slow = slow.next;
  }
  return true;
};

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(null);
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

var mergeKLists = function (lists) {
  let heap = lists.filter((list) => list !== null);

  const minify = (index) => {
    let smallest = index;
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    if (left < heap.length && heap[left].val < heap[smallest].val) {
      smallest = left;
    }
    if (right < heap.length && heap[right].val < heap[smallest].val) {
      smallest = right;
    }
    if (smallest !== index) {
      [heap[smallest], heap[index]] = [heap[index], heap[smallest]];
      minify(smallest);
    }
  };

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
      minify(0);
    } else {
      heap[0] = heap[heap.length - 1];
      heap.pop();
      if (heap.length > 0) minify(0);
    }
  }
  return dummy.next;
};

var mergeKLists = function (lists) {
  let heap = lists.filter((list) => list !== null);
  const minify = (index) => {
    let smellest = index;
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    if (left < heap.length && heap[left].val < heap[smellest].val) {
      smellest = left;
    }
    if (right < heap.length && heap[right].val < heap[smellest].val) {
      smellest = right;
    }
    if (smellest !== index) {
      [heap[smellest], heap[index]] = [heap[index], heap[smellest]];
      minify(smellest);
    }
  };

  let i = Math.floor(heap.length / 2) - 1;
  while (i >= 0) minify(i--);

  let dummy = new ListNode();
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

var mergeKLists = function (lists) {
  let heap = lists.filter((list) => list !== null);
  const minify = (index) => {
    let smellest = index;
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    if (left < heap.length && heap[left].val < heap[smallest].val)
      smellest = left;
    if (right < heap.length && heap[right].val < heap[smellest].val)
      smellest = right;
    if (smellest !== index) {
      [heap[smellest], heap[index]] = [heap[index], heap[smellest]];
      minify(smellest);
    }
  };
  let i = Math.floor(heap.length / 2) - 1;
  while (i >= 0) minify(i--);

  let dummy = new ListNode();
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

var mergeKLists = function (lists) {
  let heap = lists.filter((list) => list !== null);
  const minify = (index) => {
    let smellest = index;
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    if (left < heap.length && heap[left].val < heap[smellest].val) {
      smellest = left;
    }
    if (right < heap.length && heap[right].val < heap[smellest].val) {
      smellest = right;
    }
    if (smellest !== index) {
      [heap[smellest], heap[index]] = [heap[index], heap[smellest]];
      minify(smellest);
    }
  };

  let i = Math.floor(heap.length / 2) - 1;
  while (i >= 0) minify(i--);

  let dummy = new ListNode();
  let tail = dummy;

  while (heap.length > 0) {
    let smellest = heap[0];
    tail.next = smellest;
    tail = tail.next;

    if (smellest.next) {
      heap[0] = smellest.next;
      minify(0);
    } else {
      heap[0] = heap[heap.length - 1];
      heap.pop();
      if (heap.length > 0) minify(0);
    }
  }
  return dummy.next;
};

var mergeKLists = function (lists) {
  let heap = lists.filter((list) => list !== null);
  const minify = (index) => {
    let smellest = index;
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    if (left < heap.length && heap[left].val < heap[smellest].val)
      smellest = left;
    if (right < heap.length && heap[right].val < heap[smellest].val)
      smellest = right;
    if (smellest !== index) {
      [heap[smellest], heap[index]] = [heap[index], heap[smellest]];
      minify(smellest);
    }
  };

  let i = Math.floor(heap.length / 2) - 1;
  while (i >= 0) minify(i--);

  let dummy = new ListNode();
  let tail = dummy;
  while (heap.length > 0) {
    let smellest = heap[0];
    tail.next = smellest;
    tail = tail.next;

    if (smellest.next) {
      heap[0] = smellest.next;
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

  let fast = dummy;
  let slow = dummy;

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

  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let temp = slow;
  let prev = null;
  let next = null;

  while (temp) {
    next = temp.next;
    temp.next = prev;
    prev = temp;
    temp = next;
  }

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
  // check head exist
  if (!head || !head.next) return;
  let slow = head;
  let fast = head;

  // middle point
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  // reverse second part;
  let temp = slow;
  let next = null;
  let prev = null;
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

  while (fast !== slow) {
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
  if (list1) current.next = list1;
  if (list2) current.next = list2;
  return dummy.next;
};

var mergeKLists = function (lists) {
  let heap = lists.filter((list) => list !== null);
  const minify = (index) => {
    let smellest = index;
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    if (left < heap.length && heap[left].val < heap[smellest].val)
      smellest = left;
    if (right < heap.length && heap[right].val < heap[smellest].val)
      smellest = right;
    if (smellest !== index) {
      [heap[smellest], heap[index]] = [heap[index], heap[smellest]];
      minify(smellest);
    }
  };
  let i = Math.floor(heap.length / 2) - 1;
  while (i >= 0) minify(i--);
  let dummy = new ListNode();
  let tail = dummy;
  while (heap.length > 0) {
    let smellest = heap[0];
    tail.next = smellest;
    tail = tail.next;

    if (smellest.next) {
      heap[0] = smellest.next;
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
  while (fast) {
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
  // reverse
  let temp = slow;
  let next = null;
  let prev = null;

  while (temp) {
    next = temp.next;
    temp.next = prev;
    prev = temp;
    temp = next;
  }

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

var setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let firstRow = false;
  let firstCol = false;

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstCol = true;
      break;
    }
  }

  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      firstRow = true;
      break;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
    }
  }

  if (firstCol) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  if (firstRow) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }
};

var setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let firstRow = false;
  let firstCol = false;

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstCol = true;
      break;
    }
  }

  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      firstRow = true;
      break;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
    }
  }

  if (firstCol) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  if (firstRow) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }
};

var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;

  const result = [];

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
};

var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  const result = [];

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
};

var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  const result = [];
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
};

var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let firstRow = false;
  let firstCol = false;

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstCol = true;
      break;
    }
  }

  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      firstRow = true;
      break;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (firstCol) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  if (firstRow) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }
};

var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  let result = [];

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    if (bottom >= top) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
};
