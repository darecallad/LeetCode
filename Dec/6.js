function decode(message) {
  if (!message || !message[0].length) return "";
  let row = 0;
  let col = 0;
  let isTop = true;
  let res = "";

  while (col < message[0].length) {
    if (isTop) res += message[row++][col++];
    else res += message[row--][col++];

    if (row === message.length - 1) isTop = false;
    if (row === 0) isTop = true;
  }
  return res;
}
// run time should be O(n) n = char of message
// space should be O(R) r = res.length

function firstbad(isBad) {
  return (version) => {
    let left = 1;
    let right = version;

    while (left < right) {
      const mid = left + Math.floor((left + right) / 2);
      if (isBad(mid)) right = mid;
      else left = mid + 1;
    }
    return isBad(left) ? left : -1;
  };
}
class Emmiter {
  constructor() {
    this.watcher = new Map();
  }
  subscribe(eventName, callback) {
    let watcher = this.watcher;
    if (!watcher.has(eventName)) watcher.set(eventName, []);
    watcher.get(eventName).push(callback);

    return {
      release: function () {
        let callbacks = watcher.get(eventName);
        if (callbacks) {
          if (callbacks.length === 1) watcher.set(eventName, []);
          const index = callbacks.indexOf(callback);
          callbacks.splice(index, 1);
        }
      },
    };
  }

  emit(eventName, ...args) {
    let watcher = this.watcher;
    if (watcher.has(eventName))
      watcher.get(eventName).forEach((callback) => callback.apply(this, args));
  }
}

const sub = new Emmiter();
let count = 0;
function testfunction() {
  count++;
  console.log("exe");
}
const emmiter = sub.subscribe("event1", testfunction);
sub.emit("event1");
emiiter.release();

function findCorrespondingNode(rootA, rootB, target) {
  if (rootA === target) return rootB;

  for (let i = 0; i < rootA.children.length; i++) {
    const res = findCorrespondingNode(
      rootA.children[i],
      rootB.children[i],
      target
    );
    if (res) return res;
  }
  // run time O(n) space O(h)
}
function findCorrespondingNode(rootA, rootB, target) {
  const stack = [[rootA, rootB]];
  while (stack.length) {
    const [leftNode, rightNode] = stack.pop();
    if (leftNode === target) return rightNode;

    for (let i = 0; i < leftNode.children.length; i++) {
      stack.push([leftNode.children[i], rightNode.children[i]]);
    }
  } // O(n) // O(h)
}
function findCorrespondingNode(rootA, rootB, target) {
  if (rootA === target) return rootB;

  const queueA = [rootA];
  const queueB = [rootB];

  while (queueA.length) {
    const currentA = queueA.shift();
    const currentB = queueB.shift();

    if (currentA === target) return currentB;

    queueA.push(...currentA.children);
    queueB.push(...currentB.children);
  } // O(n) O(W)
}

function findCorrespondingNode(rootA, rootB, target) {
  const treeWalkA = document.createTreeWalker(rootA, NodeFitler.SHOW_ELEMENT);
  const treeWalkB = document.createTreeWalker(rootB, NodeFilter.SHOW_ELEMENT);

  let currentNodes = [treeWalkA.currentNode, treeWalkB.currentNode];
  while (currentNodes[0] !== target) {
    currentNodes = [treeWalkA.nextNode(), treeWalkB.nextNode()];
  }
  return currentNodes[1];
  // time O(n) space O(1);
}
function sort(items, newOrder) {
  for (let i = 0; i < items.length; i++) {
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
function sort(items, newOrder) {
  for (let i = 0; i < items.length; i++) {
    const index = newOrder[i];
    if (index === i) continue;

    [items[i], items[index]] = [items[index], items[i]];
    [newOrder[i], newOrder[index]] = [newOrder[index], newOrder[i]];
    i--;
  }
}

function clearAllTimeout() {
  let id = window.setTimeout(null, 0);
  while (id > 0) {
    window.clearTimeout(id--); // simple, clear all timeout
  }
}

let originalTime = window.setTimeout;
const set = new Set();

window.setTimeout = (callback, wait) => {
  const timer = originalTime.call(this, callback, wait);
  set.add(timer);
  return timer;
};
function clearAllTimeout() {
  set.forEach((id) => {
    window.clearTimeout(id);
    set.delete(id);
  });
}

let oriii = window.setTimeout;
const set1 = new Set();

window.setTimeout = (callback, wait) => {
  const timer = oriii.call(this, callback, wait);
  set1.add(timer);
  return timer;
};

function callAllTimeout() {
  set1.forEach((id) => {
    window.clearTimeout(id);
    set1.delete(id);
  });
}

let oooooo = window.setTimeout;
const set111 = new Set();

window.setTimeout = (callback, wait) => {
  const timer = oooooo.call(this, callback, wait);
  set111.add(timer);
  return timer;
};
function clearAllTimeout() {
  set111.forEach((id) => {
    window.clearTimeout(id);
    set111.delete(id);
  });
}

function testOverservable() {
  const observale = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.complete();
    subscriber.error(new Error("Test error"));
  });
  let recevied = [];
  let corr = false;
  let com = false;

  observale.subscribe({
    next(value) {
      recevied.push(value);
    },
    error(corr) {
      corr = true;
    },
    complete() {
      com = true;
    },
  });
}
function twoway(state, element) {
  element.value = state.value;
  // state change element change
  const defineP = {
    set(new_value) {
      element.value = new_value;
    },
    get() {
      return element.value;
    },
  };

  Object.defineProperty(state, "value", defineP);
  // element change state change
  const onChange = (event) => {
    state.value = event.target.value;
  };
  element.addEnevetListener("change", onChange);
  return function tearDown() {
    element.removeEventListener("chage", onChange);
  };
}
function vertualize(element) {
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
  result.props.children = children.length === 1 ? childrem[0] : children;
  return result;
}
function createElement(type, props, ...children) {
  if (typeof type === "function") {
    return type({ ...props, children });
  }
  return {
    type,
    props: {
      children,
      ...props,
    },
  };
}
function render(json) {
  if (typeof json === "string") return document.createTextNode(json);
  const {
    type,
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
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) return func.apply(this, args);
    else return curried.bind(this, ...args);
  };
}
function curry(func) {
  return function curried(...args) {
    const complete =
      args.length >= func.length &&
      !args.splice(0, func.length).includes(curry.placeholder);
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
const add = (a, b) => a + b;
const a = curry(add);
a(3, 4, a.placeholder)(5, 6);

function invertBiinaryTree(node) {
  const nodes = [node];
  while (nodes.length) {
    const pop = nodes.pop();
    if (pop) {
      [pop.left, pop.right] = [pop.right, pop.left];
      nodes.push(pop.left, pop.right);
    }
  }
  return node;
}
function reverseLinkList(list) {
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
function neefa(list) {
  if (!list || !list.next) return list;
  let newHead = neefa(list.next);
  list.next.next = list;
  list.next = null;
  return newHead;
}
function $(el) {
  return new Wrapper(el);
}
class Wrapper {
  constructor(el) {
    this.el = el;
  }
  css(propertyName, value) {
    this.el[propertyName] = value;
    return this;
  }
}
function resd(args) {
  return args.sort().join("_");
}
function memo(func, resolver) {
  const cache = new Map();
  return function (...args) {
    const key = resolver ? resolver(...args) : args.join("_");
    const cacheResult = cache.get(key);

    if (cacheResult?.has(this)) return cacheResult.get(this);
    result = func.apply(this, args);
    if (!cacheResult) {
      cache.set(key, new Map([[this, result]]));
    } else cacheResult.set(this, result);
    return result;
  };
}
function same(a, b) {
  if (a.length !== b.length) return false;
  return a.every((item, i) => item === b[i]);
}
function memoOne(func, isEqua = same) {
  let lastResult = null;
  let lastThis = null;
  let isCalled = false;
  let lastArgs = [];

  return function (...args) {
    if (isCalled && lastThis === this && isEqua(lastArgs, args))
      return lastResult;
    lastResult = func.call(this, ...args);
    lastArgs = args;
    lastThis = this;
    isCalled = true;
    return lastResult;
  };
}
function animationRight(element, duration, distance) {
  let interval = 10;
  let step = distance / (duration / interval);
  let position = 0;

  let intervalId = window.setInterval(() => {
    position = position + step;
    element.style.right = position + "px";

    if (position > distance) {
      window.clearInterval(intervalId);
    }
  }, interval);
}
function animateRight(element, duration, distance) {
  let position = 0;
  let step = distance / duration;
  let startTime;

  function move() {
    if (!startTime) startTime = timestamp;
    const timeDuration = timestamp - startTime;
    position = step * timeDuration;

    if (position > distance) {
      element.style.right = distance + "px";
    } else {
      element.style.right = position + "px";
      requestAnimationFrame(move);
    }
  }
  function start() {
    requestAnimationFrame(move);
  }
  return start;
}
// apply style to string
function applyStyletoString(string, styles) {
  let html = "";
  let lastIndex = 0;
  let styleStack = [];

  for (let i = 0; i < string.length; i++) {
    closeStyle(i);
    while (lastIndex < styles.length && styles[lastIndex][0] === i) {
      const [start, end, tag] = styles.pop();
      styleStack.push([start, end, tag]);
      html = html + `<${tag}>`;
      lastIndex++;
    }
    html = html + string[i];
  }
  closeStyle(string.length);
  return html;

  function closeStyle(currentIndex) {
    while (
      styleStack.length &&
      styleStack[styleStack.length - 1][1] === currentIndex
    ) {
      const tag = styleStack.pop()[2];
      html = html + `</${tag}>`;
    }
  }
}
function applyStyleToString(string, styles) {
  let html = "";
  let lastIndex = 0;
  let styleStack = [];

  function closeStyle(current) {
    while (
      styleStack.length &&
      styleStack[styleStack.length - 1][1] === current
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
  closeStyle(string.length); // make sure it close in the end;
  return html;
}
function getHight(tree) {
  let height = 0;
  if (!tree) return height;
  for (let child of tree.children) {
    height = Math.max(height, getHight(child));
  }
  return height + 1;
}
function getHight(tree) {
  let height = 0;
  if (!tree) return height;
  let q = [[tree, 1]];
  while (q.length) {
    const [node, h] = q.shift();
    height = Math.max(height, h);
    for (let child of node.children) {
      q.push([child, h + 1]);
    }
  }
  return height;
}
function getHeight(tree) {
  let height = 0;
  if (!tree) return height;

  for (let child of tree.children) {
    height = Math.max(height, getHeight(child));
  }
  return height + 1;
}
function getHeight(tree) {
  let height = 0;
  if (!tree) return height;

  for (let child of tree.children) {
    height = Math.max(height, getHeight(child));
  }
  return height + 1;
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
function getTags(tree) {
  const set = new Set();
  const stack = [tree];

  while (stack.length) {
    const node = stack.pop();
    set.add(node.tagName.toLowerCase());
    stack.push(...node.children);
  }
  return Array.from(set);
}
function getTag(tree) {
  const stack = [tree];
  const set = new Set();

  while (stack.length) {
    const node = stack.pop();
    set.add(node.tagName.toLowerCase());
    stack.push(...node.children);
  }
  return Array.from(set);
}
function getTag(tree) {
  const set = new Set();
  const stack = [tree];

  while (stack.length) {
    const node = stack.pop();
    set.add(node.tagName.toLowerCase());
    stack.push(...node.children);
  }
  return Array.from(set);
}
function nextRight(root, target) {
  if (!root) return null; //O(N) O(W)
  const queue = [root, null]; //level mark
  while (queue.length) {
    const node = queue.shift();
    if (node === target) return queue.shift();
    else if (node === null && queue.length) queue.push(null);
    else queue.push(...node.children);
  }
  return null;
}
function nextRight(root, target) {
  if (!root) return null;
  const queue = [root, null]; // level marker
  while (queue.length) {
    const node = queue.shift();
    if (node === target) return queue.shift();
    else if (node === null && queue.length) queue.push(null);
    else queue.push(...node.children);
  }
  return null;
}
function nextRight(root, target) {
  if (!root) return null;
  let queue = [root, null]; // O(n) O(w);
  while (queue.length) {
    const node = queue.shift();
    if (node === target) return queue.shift();
    else if (node === null && queue.length) queue.push(null);
    else queue.push(...node.children);
  }
  return null;
}
function travesDOM(root) {
  if (root === null) return [];
  const q = [root];
  const result = [];
  while (q.length) {
    const top = q.shift();
    result.push(top);
    q.push(...top.children);
  }
  return result;
}
function travelDOM(root) {
  if (!root) return [];
  const q = [root];
  const result = [];

  while (q.length) {
    const node = q.shift();
    result.push(node);
    q.push(...node.children);
  }
  return result;
}
function travelDOM(root) {
  if (!root) return [];
  const q = [root];
  const result = [];

  while (q.length) {
    const node = q.shift();
    result.push(node);
    q.push(...node.children);
  }
  return result;
}
function serialize(root) {
  if (!root) return "_";
  return `${root.value}, ${serialize(root.left)}, ${serialize(root.right)}`;
}
function deserialize(str) {
  const q = str.split(",");
  return dfs(q);

  function dfs(q) {
    if (!q.length) return null; //
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
function serialize(root) {
  if (!root) return null;
  return `${root.value}, ${serialize(root.left)}, ${serialize(root.right)}`;
}
function deserializze(str) {
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
function tobeNottobe(input) {
  return {
    toBe: function (val) {
      if (Number.isNaN(input) && Number.isNaN(val)) return;
      if (input !== val) throw "Not Equal";
    },
    not: {
      toBe: function (val) {
        if (input === 0 && val === 0 && !Object.is(input, val)) return;
        if (input === val) throw "Not Equal";
      },
    },
  };
}
function tobeNottobe(input) {
  return {
    toBe: function (val) {
      if (Number.isNaN(input) && Number.isNaN(val)) return;
      if (input !== val) throw "Not Equal";
    },
    not: {
      toBe: function (val) {
        if (input === 0 && val === 0 && !Object.is(input, val)) return;
        if (input === val) throw "Not Equal";
      },
    },
  };
}
function className(...args) {
  return args
    .flat(Infinity)
    .reduce((result, item) => {
      if (item === null) return result;
      switch (item) {
        case "string":
        case "number":
          result.push(item); //O(N+M*K)
          break;
        case "object":
          for (let [key, value] of Object.entries(item)) {
            if (!!value) result.push(key);
          }
          break;
      }
      return result; //O(N)
    }, [])
    .join(" ");
}
