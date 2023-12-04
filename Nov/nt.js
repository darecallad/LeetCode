// Flat
function flat(arr, depth = 1) {
  const result = [];
  for (let item of arr) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flat(item, depth - 1));
    } else {
      result.push(item);
    }
  }
  return result; // time O(n*d) n = number of arr element d = depth
  // space O(n) n = result array element
}
function flat(arr, depth = 1) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr) && depth > 0) {
      acc.push(...flat(curr, depth - 1));
    } else {
      acc.push(curr);
    }
    return acc; // time O(n*d) same as last example
    // space O(n) n = acc array element
  }, []);
}
function flat(arr, depth = 1) {
  const result = [];
  const stack = arr.map((item) => [item, depth]);

  while (stack.length) {
    const [stackItem, d] = stack.pop();
    if (Array.isArray(stackItem) && d > 0) {
      stack.push(...stackItem.map((subItem) => [subItem, d - 1]));
    } else result.push(stackItem);
  }
  return result.reverse(); // time O(n) n = number of arr element
  // space O(n) n = result.length
}
// Debounce
function debounce(func, wait) {
  let timer = null;
  return function (...args) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.apply(this, args);
    }, wait);
  }; // time O(1) each call back should be constant 1
  // space O(n) n = how many instances of debounce event called
}
function expDebounce(func, wait, option = { leading: false, trailing: true }) {
  let timer = null;
  let { leading, trailing } = option;

  return function (...args) {
    let invoked = false;
    if (!timer && leading) {
      func.apply(this, args);
      invoked = true;
    }
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (!invoked && trailing) {
        func.apply(this, args);
      }
      timer = null;
    }, wait); // time and space should be the same as last example
  };
}
//test case should be
let count = 0;
function event1() {
  counter++;
}
const sub = debounce(event1, 3000);
for (let i = 0; i < 5; i++) {
  sub();
}
const sub1 = expDebounce(event1, 3000, { leading: true, trailing: false });
// Throttle
function throttle(func, wait) {
  let timer = null;
  let lastArgs = null;
  let lastThis = null;
  // time O(1) space O(1)
  const updateTimer = () => {
    if (lastArgs) {
      func.apply(lastThis, lastArgs);
      lastArgs = null;
      lastThis = null;
      timer = window.setTimeout(updateTimer, wait);
    } else timer = null;
  };
  return function (...args) {
    if (!timer) {
      func.apply(this, args);
      timer = window.setTimeout(updateTimer, wait);
    } else {
      lastArgs = args;
      lastThis = this;
    }
  };
}
function exTrottle(func, wait, option = { leading: true, trailing: true }) {
  let timer = null;
  let lastArgs = null;
  let lastThis = null; // store context 'this'
  let { leading, trailing } = option;

  const invokeFunction = () => {
    if (lastArgs && trailing) {
      func.apply(lastThis, lastArgs);
      lastArgs = null;
      lastThis = null;
      timer = window.setTimeout(invokeFunction, wait);
    } else timer = null;
  };
  return function (...args) {
    if (!timer) {
      if (leading) func.apply(this, args);
      timer = window.setTimeout(invokeFunction, wait);
    } else {
      lastArgs = args;
      lastThis = this;
      // time space should be the same as last one
    }
  };
}
// Decode
function decode(message) {
  if (!message.length || !message[0].length) return "";
  let row = 0;
  let col = 0;
  let isTop = true;
  let res = "";
  while (col !== message[0].length) {
    if (isTop) {
      res += message[row++][col++];
    } else res += message[row--][col++];
    if (row === message.length - 1) isTop = false;
    if (row === 0) isTop = true;
  }
  return res; // time O(n) n= total char in 2D array and space O(n) n = res.length
}
// first bad version
function firstBadVersion(isBad) {
  return function (version) {
    let left = 1;
    let right = version;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (isBad(mid)) right = mid;
      else left = mid + 1;
    }
    return isBad(left) ? left : -1;
  }; // time O(logn) space O(1)
}
//test case
firstBadVersion((i) => i >= 4)(100);
// Emitter
class EnentEmitter {
  constructor() {
    this.watcher = new Map();
  }
  subscribe(eventName, callback) {
    let watcher = this.watcher; // time O(1) space O(1)
    if (!watcher.has(eventName)) watcher.set(eventName, []);
    watcher.get(eventName).push(callback);

    return {
      release: function () {
        // time O(n) space O(1)
        let callbacks = watcher.get(eventName);
        if (callbacks) {
          if (callbacks.legnth === 1) watcher.set(eventName, []);
          const index = callbacks.indexOf(callback);
          callbacks.splice(index, 1);
        }
      },
    };
  }
  emit(eventName, ...args) {
    // time O(n) space O(1)
    if (this.watcher.has(eventName)) {
      this.watcher.get(eventName).forEach((call) => {
        call.apply(this, args);
      });
    }
  }
}
//test case
const emiiter = new EnentEmitter();
let callbackCount = 0;
const callback1 = () => {
  callbackCount++;
  console.log("callback1 executed");
};
const emmitersub = emiiter.subscribe("testEvent", callback1);
emiiter.emit("testEvent");
console.assert(callbackCount === 1);
emmitersub.release();
//findNode
function findCorrespondingNode(rootA, rootB, target) {
  if (rootA === target) return rootB; // time O(n) space O(h) height of tree
  // simple east understand / overflow
  for (let i = 0; i < rootA.children.length; i++) {
    const res = findCorrespondingNode(
      rootA.children[i],
      rootB.children[i],
      target
    );
    if (res) return res;
  }
}
function findCorrespondingNode(rootA, rootB, target) {
  stack = [[rootA, rootB]]; // time O(n) space O(n) space n = store in stack
  while (stack.length) {
    // avoid overflow / complex and use more space
    const [leftNode, rightNode] = stack.pop();
    if (leftNode === target) return rightNode;
    for (let i = 0; i < leftNode.children.length; i++) {
      stack.push([leftNode.children[i], rightNode.children[i]]);
    }
  }
}
function findCorrespondingNode(rootA, rootB, target) {
  if (rootA === target) return rootB; // time O(n) space O(w) wide
  const queueA = [rootA]; // wide tree / become large not efficient as DFS
  const queueB = [rootB];
  while (queueA.length) {
    const currentA = queueA.shift();
    const currentB = queueB.shift();
    if (currentA === target) return currentB;
    queueA.push(...currentA.children);
    queueB.push(...currentB.children);
  }
}
function findCorrespondingNode(rootA, rootB, target) {
  const rootAWalker = document.createTreeWalker(rootA, NodeFilter.SHOW_ELEMENT);
  const rootBWalker = document.createTreeWalker(rootB, NodeFilter.SHOW_ELEMENT);
  //time O(n) space O(1)
  // tradeoff efficient / not transparent
  let currentNodes = [rootAWalker.currentNode, rootBWalker.currentNode];
  while (currentNodes[0] !== target) {
    currentNodes = [rootAWalker.nextNode(), rootBWalker.nextNode()];
  }
  return currentNodes[1];
}
// sort
function sort(items, newOrder) {
  const ref = [...items]; // time O(n) space(n)
  // trade off pros: simple/ stable
  // cons: extra space
  for (let i = 0; i < items.length; i++) {
    items[newOrder[i]] = ref[i];
  }
}
function sort(items, newOrder) {
  for (let i = 0; i < items.length; i++) {
    // time O(n) space O(1)
    // pros: space efficiency, cons: complex, sideEffect for modify newOrder array
    while (newOrder[i] !== i) {
      const currentOrder = newOrder[i];
      [items[i], items[currentOrder]] = [items[currentOrder], items[i]];
      [newOrder[i], newOrder[currentOrder]] = [
        newOrder[currentOrder],
        newOrder[i],
      ];
    }
  }
}
// clear Timeout
function clearAllTimeOut() {
  let id = window.setTimeout(null, 0); // time O(n) space O(1)
  while (id > 0) {
    // simple / not efficient
    window.clearTimeout(id--);
  }
}
const originT = window.setTimeout;
// time space O(n);
// pros: efficiency
// cons: overhead -> modify global Settimeout
const resultIds = new Set();
window.timeoutIds = (callback, wait) => {
  const timer = originT.call(this, callback, wait);
  resultIds.add(timer);
  return timer;
};
const clearallTt = () => {
  resultIds.forEach((id) => {
    window.clearTimeout(id);
    resultIds.delete(id);
  });
};
//Observable
class Observable {
  constructor(setup) {
    this.setup = setup; // time O(1)
  }
  subscribe(subscriber) {
    // O(1)
    const subscriberWrapper = {
      unsubscribed: false,
      next(value) {
        if (this.unsubscribed) return;
        if (subscriber instanceof Function) subscriber(value);
        return subscriber.next ? subscriber.next(value) : null;
      },
      error(value) {
        if (this.unsubscribed) return;
        this.unsubscribe();
        return subscriber.error ? subscriber.error(value) : null;
      },
      complete() {
        if (this.unsubscribed) return;
        this.unsubscribe();
        return subscriber.complete ? subscriber.complete() : null;
      },
      unsubscribe() {
        this.unsubscribed = true;
      },
    };
    this.setup(subscriberWrapper);
    // Promise.resolve().then(() => this.setup(subscriberWrapper)).catch(subscriberWrapper.error)
    return subscriberWrapper;
  }
}
// test case
function testObservable() {
  const observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.complete();
    subscriber.error(new Error("Test error"));
  });
  let received = [];
  let errorCaught = false;
  let complete = false;
  observable.subscribe({
    next(value) {
      received.push(value);
    },
    error(err) {
      errorCaught = true;
    },
    complete() {
      complete = true;
    },
  });
}
//sqrt
function mySqrt(x) {
  if (x < 0 || isNaN(x) || typeof x !== "number") return NaN;
  if (x < 2) return x; // time O(log n) space O(1)
  let left = 1;
  let right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const mid2 = mid * mid;
    if (mid2 === x) return mid;
    else if (mid2 > x) right = mid - 1;
    else left = mid + 1;
  }
  return right;
}
// number Sequence
function getNthNum(n) {
  let result = "1";
  for (let i = 1; i < n; i++) {
    result = helper(result); // time O(m*n) space O(m)
  }
  return result;
}
function helper(number) {
  let count = 1;
  let nth = ""; // time O(n) sapce O(m)
  for (let i = 0; i < number.length; i++) {
    if (number[i] === number[i + 1]) count++;
    else {
      nth += count.toString() + number[i];
      count = 1;
    }
  }
  return nth;
}
// Roman
function romanToInteger(str) {
  //O(n) O(1)
  const map = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    const curr = map[str[i]];
    const next = map[str[i + 1]];
    if (next > curr) res -= curr;
    else res += curr;
  }
  return res;
}
// int to roman
function romanToInteger(num) {
  const table = {
    M: 1000,
    CM: 900,
    D: 500, //O(1)
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let str = "";
  for (let i in table) {
    let q = Math.floor(num / table[i]);
    num %= table[i];
    str += i.repeat(q);
  }
  return str;
}
// two way binding
function twoway(state, element) {
  // condition 1. state change element change
  // 2. element change state change
  // time space O(1)
  element.value = state.value;

  const definedProperty = {
    get() {
      return element.value;
    },
    set(new_value) {
      element.value = new_value;
    },
  };
  Object.defineProperty(state, "value", definedProperty);

  const onChange = (event) => {
    state.value = event.target.value;
  };
  element.addEventListener("change", onChange);

  // memory leak
  return function tearDown() {
    element.removeEventListener("change", onChange);
  };
}
// test
const input = document.createElement("input");
const state = { value: "BFE" };
twoway(state, input);
console.log(input.value); // 'BFE'
state.value = "dev";
console.log(input.value); // 'dev'
input.value = "BFE.dev";
input.dispatchEvent(new Event("change"));
console.log(state.value); // 'BFE.dev'
// DOM1
function vertualize(element) {
  // time O(n) number of nodes in DOM
  // space O(n) number of result element
  const result = {
    type: element.tagName.toLowerCase(),
    props: {},
  };
  for (let att of element.attributes) {
    const name = att.name === "class" ? "className" : att.name;
    result.props[name] = att.name === "" ? true : att.value;
  }
  const children = [];
  for (let node of element.childNodes) {
    if (node.nodeType === 3) children.push(node.textContent);
    else children.push(vertualize(node));
  }
  result.props.children = children.length === 1 ? children[0] : children;
  return result;
}
function render(json) {
  if (typeof json === "string") return document.createTextNode(json);
  let {
    type, // time O(n) number of nodes in json
    // space O(d) depth of json
    props: { children, ...attrs },
  } = json;
  const element = document.createElement(type);
  for (let [att, value] of Object.entries(attrs)) {
    if (att.startsWith("on")) {
      const eventName = att.substring(2).toLowerCase();
      element.addEventListener(eventName, value);
    }
    element[att] = value;
  }
  if (children) {
    const fragment = document.createDocumentFragment();
    const childrenArray = Array.isArray(children) ? children : [children];
    for (let child of childrenArray) {
      fragment.appendChild(render(child));
    }
    element.appendChild(fragment);
  }

  return element;
}
//DOM 22222222222222222222222222222222222222222
function createElement(type, props, ...children) {
  if (typeof type === "function") {
    return type({ ...props, children });
  }
  return {
    type,
    props: {
      ...props,
      children,
    },
  };
}
// curry
function curry(func) {
  // time O(1) space O(n) arguments for func
  return function curried(...args) {
    if (args.length >= func.length) return func.apply(this, args);
    else return curried.bind(this, ...args);
  };
}
const add = (a, b) => a + b;
const a = curry(add);
a(3)(4);
function curry(func) {
  // time O(n * m) number of args * number fo newArgs
  // space O(d) depth of recursion
  return function curried(...args) {
    const complete =
      args.length >= func.length &&
      !args.slice(0, func.length).includes(curry.placeholder);
    if (complete) return func.apply(this, args);
    return function (...newArgs) {
      const res = args.map((arg) =>
        arg === curry.placeholder && newArgs.length ? newArgs.shift() : arg
      );
      return curried(...res, ...newArgs);
    };
  };
}
curry.placeholder = Symbol();
// invert binary tree
function inverBinary(node) {
  const nodes = [node];
  while (nodes.length) {
    const pop = nodes.pop();
    if (pop) {
      [pop.left, pop.right] = [pop.right, pop.left];
      nodes.push(pop.left, pop.right);
    }
  }
  return node; // O(n) O(w);
}
// reverse linkList
function reverseLinkedList(list) {
  let prev = null;
  let next = null;
  while (list) {
    next = list.next;
    list.next = prev;
    prev = list;
    list = next; // O(n) O(1)
  }
  return prev;
}
function reverseLinkedList(list) {
  if (!list || !list.next) return list; // O(n)
  let newHead = reverseLinkedList(list.next);
  list.next.next = list;
  list.next = null;
  return newHead;
}
// DOM / JQuery
function $(el) {
  return new Wrapper(el); //O(1)
}
class Wrapper {
  constructor(el) {
    this.el = el;
  }
  css(propertyName, value) {
    this.el.style[propertyName] = value;
    return this;
  }
}
//Memo
function memo(func, resolver) {
  const cache = new Map();
  return function (...args) {
    const key = resolver ? resolver(...args) : args.join("_");
    const cacheResult = cache.get(key);
    // time O(n) n = number of arguements space O(m * k) argurment * context 'this'
    if (cacheResult?.has(this)) return cacheResult.get(this);
    const result = func.apply(this, args);
    if (!cacheResult) cache.set(key, new Map([[this, result]]));
    else cacheResult.set(this, result);
    return result;
  };
}
// test
const memoizedAdd = memo(add);
console.log(memoizedAdd(1, 2));
function customResolver(args) {
  return args.sort().join("_");
}
const memoizedAddWithResolver = memo(add, customResolver);
console.log(memoizedAddWithResolver(1, 2)); // 3
console.log(memoizedAddWithResolver(1, 3)); // 3
// memo ONE
function memoOne(func, isEqual = sameResult) {
  let lastArgs = [];
  let lastThis = null;
  let lastResult = null;
  let isCalled = false;

  return function (...args) {
    if (isCalled && lastThis === this && isEqual(lastArgs, args))
      return lastResult;
    lastResult = func.call(this, ...args);
    lastArgs = args;
    lastThis = this;
    isCalled = true;
    return lastResult;
  };
}
function sameResult(a, b) {
  if (a.length !== b.length) return false;
  return a.every((item, i) => item === b[i]);
}
// test
function sumArray(arr) {
  console.log("Calculating sum of:", arr);
  return arr.reduce((acc, val) => acc + val, 0);
}
function sumArrays(...arrays) {
  const combinedArray = arrays.reduce((acc, arr) => acc.concat(arr), []);
  return combinedArray.reduce((acc, val) => acc + val, 0);
}
// Animation
function animateRight(element, duration, distance) {
  let position = 0; // pros: simple, direct control, flexibility
  let interval = 10; // cons: preformance issue (not smooth) -> drop frames
  // let interval = new Date().getTime();
  let step = distance / (duration / interval);
  return function move() {
    position = position + step;
    element.style.right = position + "px";

    if (position < distance) {
      setTimeout(move, interval);
    }
  };
}
function animateRight(element, duration, distance) {
  let startTime;
  let position = 0; // pros: optimized for anmation, resources, frames rate adjustment
  let step = distance / duration; // cons: overkill for simple task, less control, old browser dont support
  function move() {
    if (!startTime) startTime = timestamp;
    const timeBetween = timestamp - startTime;
    position = step * timeBetween;
    if (position < distance) {
      element.style.right = position + "px";
      requestAnimationFrame(move);
    } else {
      element.style.right = position + "px";
    }
  }
  function start() {
    requestAnimationFrame(move);
  }
  return start;
}
const startAnimation = animateRight(element, 1000, 100);
// k Element
function topK(arr, k) {
  const minHeap = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < k) {
      minHeap.push(arr[i]);
      heapfy();
    } else if (arr[i] > minHeap[0]) {
      minHeap[0] = arr[i];
      shiftDown();
    }
  }
  return minHeap[0];

  function heapfy() {
    let index = minHeap.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
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
      if (minHeap[right] < minHeap[smallest] && right < minHeap.length)
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
}
// Optimization
function applyArraytoHTML(string, styles) {
  let html = "";
  let styleStack = []; // O(m + n)
  let lastIndex = 0;
  function closeStyle(currentIndex) {
    while (
      styleStack.length > 0 &&
      styleStack[styleStack.length - 1][1] === currentIndex
    ) {
      const tag = styleStack.pop()[2];
      html = html + `</${tag}>`;
    }
  }
  for (let i = 0; i < string.length; i++) {
    closeStyle(i);
    while (lastIndex < styles.length && styles[lastIndex][0] === i) {
      const [start, end, tag] = styles[lastIndex];
      styleStack.push([start, end, tag]);
      html = html + `<${tag}>`;
      lastIndex++;
    }
    html = html + string[i];
  }
  closeStyle(string.length);
  return html;
}
function getHeight(tree) {
  let maxHeight = 0; //DFS O(N) O(H)
  if (!tree) return maxHeight;
  for (let child of tree.children) {
    maxHeight = Math.max(maxHeight, getHeight(child));
  }
  return maxHeight + 1;
}
// tree Height
function getHight(tree) {
  let height = 0; //BFS O(N) O(W)
  if (!tree) return height;
  let q = [[tree, 1]];
  while (q.length) {
    const [node, h] = q.shift();
    height = Math.max(h, height);
    for (let child of node.children) {
      q.push([child, h + 1]);
    }
  }
  return height;
}
function getHeight(tree) {
  let height = 0;
  if (!tree) return height;
  let q = [[tree, 1]];
  while (q.length) {
    const [node, h] = q.shift();
    height = Math.max(h, height);
    for (let child of node.children) {
      q.push([child, h + 1]);
    }
  }
  return height;
}
// DOM tags
function getTags(tree) {
  const set = new Set();
  const stack = [tree];
  // O(n) O(n)
  while (stack.length) {
    const node = stack.pop();
    set.add(node.tagName.toLowerCase());
    stack.push(...node.children);
  }
  return Array.from(set);
}
// Next Right
function nextRight(root, target) {
  if (!root) return null; //O(N) O(W)
  const queue = [root, null];
  while (queue.length) {
    const node = queue.shift();
    if (node === target) return queue.shift();
    else if (node === null && queue.length) queue.push(null);
    else queue.push(...node.children);
  }
  return null;
}
// traves DOM
function travesDOM(root) {
  if (root === null) return []; // O(N) O(W)
  const q = [root];
  const result = [];
  while (q.length) {
    const top = q.shift();
    result.push(top);
    q.push(...top.children);
  }
  return result;
}
//serialize
function serialize(root) {
  if (!root) return "_"; //O(n) O(h)
  return `${root.value},${serialize(root.left)},${serialize(root.right)}`;
}
function deserialize(str) {
  const q = str.split(",");
  return dfs(q);

  function dfs(q) {
    if (!q.length) return null;
    const n = q.shift();
    if (n !== "_") {
      const node = new Node(n.value);
      node.left = dfs(q);
      node.right = dfs(q);
      return node;
    }
    return null;
  }
}
// to be not to be
function toBe(input) {
  // O(1)
  return {
    not: {
      toBe: function (val) {
        if (input === 0 && val === 0 && !Object.is(input, val)) return;
        if (input === val) throw "Not Equal";
      },
    },
    toBe: function (val) {
      if (Number.isNaN(input) && Number.isNaN(val)) return;
      if (input !== val) throw "Not Equal";
    },
  };
}
// ClassName
function className(...args) {
  return args
    .flat(Infinity)
    .reduce((result, item) => {
      if (item === null) return result;
      switch (typeof item) {
        case "string":
        case "number":
          result.push(item); //O(N * M)
          break;
        case "object":
          for (let [key, value] of Object.entries(item)) {
            if (!!value) result.push(key);
          }
          break;
      }
      return result; // O(N+K)
    }, [])
    .join(" ");
}
//Search element right after target // right before // last index // first Index
function element(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  //O(log n) O(1)
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] <= target) {
      // if(arr[mid] >= target) right = mid -1
      left = mid + 1;
    } else right = mid - 1;
  }
  return arr[left - 1] === target ? arr[left] : undefined;
  return arr[right];
  return arr[left - 1] === target ? left - 1 : -1;
  return arr[right + 1] == target ? right + 1 : -1;
}
// Promise race, any
function race(promise) {
  return new Promise((res, rej) => {
    for (let i in promise) Promise.resolve(promises[i]).then(res).catch(rej);
    // O(N)
  });
}
function any(promises) {
  return new Promise((resolve, reject) => {
    let isFulfilled = false;
    const errors = [];
    let errorCount = 0;
    promises.forEach((promise, index) =>
      promise.then(
        (data) => {
          if (!isFulfilled) {
            resolve(data);
            isFulfilled = true;
          }
        },
        (error) => {
          errors[index] = error;
          errorCount += 1;

          if (errorCount === promises.length) {
            reject(new AggregateError("none resolved", errors));
          }
        }
      )
    );
  });
}
function allSettled(promises) {
  const op = [];
  let promisesToComplete = promises.length;

  return new Promise((res) => {
    if (!promises.length) res([]);

    for (let i in promises) {
      Promise.resolve(promises[i])
        .then((value) => {
          op[i] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          op[i] = { status: "rejected", reason };
        })
        .finally(() => {
          if (!--promisesToComplete) res(op);
        });
    }
  });
}
function all(promises) {
  const op = [];
  let promisesToComplete = promises.length;

  return new Promise((res, rej) => {
    if (!promises.length) res([]);

    for (let i in promises) {
      Promise.resolve(promises[i])
        .then((data) => {
          op[i] = data;
          if (!--promisesToComplete) res(op);
        })
        .catch(rej);
    }
  });
}
class FakeTimer {
  constructor() {
    this.original = {
      setTimeout: window.setTimeout,
      clearTimeout: window.clearTimeout,
      dateNow: Date.now,
    };
    this.timerId = 1;
    this.currentTime = 0;
    this.queue = [];
  }
  install() {
    window.setTimeout = (cb, time, ...args) => {
      const id = this.timerId++;
      this.queue.push({
        id,
        cb,
        time: time + this.currentTime,
        args,
      });
      this.queue.sort((a, b) => a.time - b.time);
      return id;
    };
    window.clearTimeout = (removeId) => {
      this.queue = this.queue.filter(({ id }) => id !== removeId);
    };
    Date.now = () => {
      return this.currentTime;
    };
  }

  uninstall() {
    window.setTimeout = this.original.setTimeout;
    window.clearTimeout = this.original.clearTimeout;
    Date.now = this.original.dateNow;
  }

  tick() {
    while (this.queue.length) {
      const { cb, time, args } = this.queue.shift();
      this.currentTime = time;
      cb(...args);
    }
  }
}
class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.handlers = [];
    try {
      executor(this._resolve.bind(this), this._reject.bind(this));
    } catch (err) {
      this._reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.handlers.push({
        fulfilled: (value) => {
          if (typeof onFulfilled !== "function") {
            resolve(value);
            return;
          }
          try {
            resolve(onFulfilled(value));
          } catch (err) {
            reject(err);
          }
        },
        rejected: (error) => {
          if (typeof onRejected !== "function") {
            reject(error);
            return;
          }

          try {
            resolve(onRejected(error));
          } catch (err) {
            reject(err);
          }
        },
      });

      this._executeHandlers();
    });
  }

  _executeHandlers() {
    if (this.state === "pending") return;
    for (const handler of this.handlers) {
      queueMicrotask(() => {
        handler[this.state](this.result);
      });
    }

    this.handlers = [];
  }

  _resolve(value) {
    if (this.state !== "pending") return;
    if (value instanceof MyPromise) {
      value.then(this._resolve.bind(this), this._reject.bind(this));
      return;
    }

    this.state = "fulfilled";
    this.result = value;
    this._executeHandlers();
  }

  _reject(error) {
    if (this.state !== "pending") return;
    this.state = "rejected";
    this.result = error;
    this._executeHandlers();
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  static resolve(value) {
    return new MyPromise((resolve) => {
      resolve(value);
    });
  }

  static reject(value) {
    return new MyPromise((resolve, reject) => {
      reject(value);
    });
  }
}
