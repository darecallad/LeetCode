function flat(arr, depth) {
  const result = [];
  for (let item of arr) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flat(item, depth - 1));
    } else result.push(item);}
  return result; //O(n * d) number * depth
  // O(n) result array
}// tradition
function flat(arr, depth) {
  return arr.reduce((arr, curr) => {
    if (Array.isArray(curr) && depth > 0) {
      arr.push(...flat(curr, depth - 1));
    } else arr.push(curr);
    return arr; // O(n* d) number * depth
    // O(n) number of result array
  }, []); // more function program approach
} //  imperative vs. functional
function flat(arr, depth) {
  const stack = arr.map((item) => [item, depth]);
  const result = [];
  while (stack.length) {
    const [item, depth] = stack.pop();
    if (Array.isArray(item) && depth > 0) {
      stack.push(...item.map((subItem) => [subItem, depth - 1]));
    } else result.push(item);
  } return result.reverse(); // O(n) arr element
  // O(n) result item
}
function debounce(func, wait) {
  let timer = null;
  return function (...args) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.apply(this, args);
    }, wait); // O(1) constant
};}
let debounceTimer;
function debouncedHandleScroll() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        handleScroll();}, 200);}
window.addEventListener('scroll', debouncedHandleScroll);

function exdebounce(func, wait, option = { leading: false, trailing: true }) {
  let timer = null;
  let { leading, trailing } = option;
  return function (...args) {
    let invoked = false;
    if (!timer && leading) {
      func.apply(this, args);
      invoked = true;}
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (trailing && !invoked) {
        func.apply(this, args);}
      timer = null;
    }, wait); // reduce frequent call / performance
    // delay exe, never chance
  };}
let count = 0;
function event1() {count++;}
  const sub = debounce(event1, 3000);
  window.addEventListener('scroll', debounce(logEvent, 2000));
  window.addEventListener('scroll', sub);
function throttle(func, wait) {
  let lastArgs = null;
  let lastThis = null; //O(1)
  let timer = null;
  const invokedFunction = () => {
    if (lastArgs) {
      func.apply(lastThis, lastArgs);
      lastArgs = null;
      lastThis = null;
      timer = window.setTimeout(invokedFunction, wait);
    } else timer = null;};
  return function (...args) {
    if (!timer) {
      func.apply(this, args);
      timer = window.setTimeout(invokedFunction, wait);
    } else {
      lastArgs = args;
      lastThis = this;
    } // regular exe, real time
    // ignore call,  janky user exp
  };}
// debounce - function called after user's action
// throttle - rate of function
// first bad version
function firstBadVersion(isBad) {
  return function (version) {
    let left = 1;
    let right = version;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (isBad(mid)) right = mid - 1;
      else left = mid + 1;}
    return isBad(left) ? left : -1;
  }; // time O(logn) space O(1)
}
firstBadVersion((i) => i >= 4)(100);
// find Node
function findCorrespondingNode(rootA, rootB, target) {
  if (rootA === target) return rootB;
  for (let i = 0; i < rootA.children.length; i++) {
    const res = findCorrespondingNode(
      rootA.children[i],
      rootB.children[i],
      target);
    if (res) return res; //O(n) O(h)
}}
function findCorrespondingNode(rootA, rootB, target) {
  const stack = [[rootA, rootB]];
  while (stack.length) {
    const [leftNode, rightNode] = stack.pop(); //O(n) O(h)
    if (leftNode === target) return rightNode;
    for (let i = 0; i < leftNode.children.length; i++) {
      stack.push([leftNode.children[i], rightNode.children[i]]);
    }}}
function findCorrespondingNode(rootA, rootB, target) {
  if (rootA === target) return rootB;
  const qA = [rootA];
  const qB = [rootB]; //O(n) O(w)
  while (qA.length) {
    const cA = qA.shift();
    const cB = qB.shift();
    if (cA === target) return cB;
    qA.push(...cA.children);
    qB.push(...cB.children);
  }}
function findCorrespondingNode(rootA, rootB, target) {
  const wA = document.createTreeWalker(rootA, NodeFilter.SHOW_ELEMENT);
  const wB = document.createTreeWalker(rootB, NodeFilter.SHOW_ELEMENT);
  let currentNodes = [wA.currentNode, wB.currentNode];
  while (currentNodes[0] !== target) {
    currentNodes = [wA.nextNode(), wB.nextNode()];
  }
  return currentNodes[1]; //O(n) O(1)
}
// sort
function sort(items, newOrder) {
  const ref = [...items]; //O(n) O(n)
  for (let i = 0; i < items.length; i++) {
    items[newOrder[i]] = ref[i];
  }}
function sort(items, newOrder) {
  for (let i = 0; i < items.length; i++) {
    const index = newOrder[i]; //O(n) O(1)
    if (index === i) continue;
    [items[i], items[indx]] = [items[indx], items[i]];
    [newOrder[i], newOrder[indx]] = [newOrder[indx], newOrder[i]];
    i--;
  }}
// clear Timeout
let timeoutIDs = [];
function customerSetTimeoue(callback, wait) {
  let id = window.setTimeout(callback, wait); // simple not efficient
  timeoutIDs.push(id);
  return id;
}
let timeout1 = setTimeout(() => console.log("Timeout 1"), 1000);
timeoutIDs.push(timeout1);
function clearTimeout() {
  timeoutIDs.forEach((id) => window.clearTimeout(id));
  timeoutIDs = [];
}
const originT = window.setTimeout;
const result = new Set();
// time space O(n);
// pros: efficiency
// cons: memory overhead -> modify global Settimeout
window.setTimeout = (callback, wait) => {
  const timer = originT.call(this, callback, wait);
  result.add(timer);
  return timer;
};
function clearTimeout() {
  result.forEach((id) => {
    window.clearTimeout(id);
    result.delete(id);
  });
}
//
setTimeout(func1, 10000);
clearAllTimeout();
// Observable
// test case
class Observable {
  
  constructor(setup) {
    this._setup = setup
  }
  subscribe(subscriber) {  // equivalent to fire
    // a wrapper function/ object 
    // is used to share the closure of outer function and modify the logics
    const subscriberWrapper = {
      unsubscribed: false,
      next(value) {
        if (this.unsubscribed) return
        // we are relying on the scope of subscriber
        if (subscriber instanceof Function) return subscriber(value);
        return subscriber.next ? subscriber.next(value) : null
      },
      error(value) {
        if (this.unsubscribed) return
        this.unsubscribe();
        return subscriber.error ? subscriber.error(value) : null;
      }, 
      complete() {
        if (this.unsubscribed) return;
        this.unsubscribe();  
        return subscriber.complete ? subscriber.complete() : null
      },
      unsubscribe() {
        this.unsubscribed = true;
      }
    }
    this._setup(subscriberWrapper);
    return subscriberWrapper
  }
}
// Create an Observable instance with a setup function
const observable = new Observable((subscriber) => {
  // Simulate asynchronous data emission
  setTimeout(() => subscriber.next("First value"), 1000);
  setTimeout(() => subscriber.next("Second value"), 2000);
  setTimeout(() => subscriber.complete(), 3000);
});

// Define a subscriber
const subscriber = {
  next: value => console.log("Received:", value),
  error: error => console.log("Error:", error),
  complete: () => console.log("Completed")
};

// Subscribe to the observable
const subscription = observable.subscribe(subscriber);

// Optionally, you can unsubscribe before the observable completes
setTimeout(() => subscription.unsubscribe(), 1500);
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
    result = helper(result); // time O(2^n)
  }
  return result;
}
function helper(number) {
  let count = 1;
  let nth = "";
  for (let i = 0; i < number.length; i++) {
    if (number[i] === number[i + 1]) count++;
    else {
      nth += count.toString() + number[i];
      count = 1;
    }
  }
  return nth;
}
function getNthNum(n) {
  let nthNum = "1"; //O(m^2)^n
  while (n > 1) {
    let str = nthNum;
    let res = "";
    let lastchar = str[0];
    let lastcharCount = 1;

    for (let i = 1; i <= str.length; i++) {
      if (str[i] == lastchar) {
        lastcharCount++;
      } else {
        res += `${lastcharCount}${lastchar}`;
        lastchar = str[i];
        lastcharCount = 1;
      }
    }
    nthNum = res;
    n--;
  }
  return nthNum;
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
function twoway(state, element) {
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
const input = document.createElement("input");
const state = { value: "ABC" };
twoway(state, input);
console.log(input.value);
state.value = "dev";
console.log(input.value);
input.value = "BFE.dev";
input.dispatchEvent(new Event("change"));
console.log(state.value);
// DOM 1
function vertualize(element) {
  const result = {
    type: element.tagName.toLowerCase(),
    props: {}, // O(n) number of DOM, space = number of result
  };
  for (let att of element.attributes) {
    const name = att.name === "class" ? "className" : att.name;
    result.props[name] = att.value === "" ? true : att.value;
  }
  const children = [];
  for (let node of element.childNodes) {
    if (node.nodeType === 3) children.push(node.textContent);
    else children.push(vertualize(node));
  }
  result.props.children = children.length === 1 ? children[0] : children;
  return result;
}
function createElement(type, props, ...children) {
  if (type === "function") return type({ ...props, children });
  return {
    type,
    props: {
      ...props,
      children,
    },
  };
}
function render(json) {
  if (typeof json === "string") return document.createTextNode(json);
  let {
    type, //O(n) number //O(d) depth of json
    props: { children, ...attrs },
  } = json;
  const element = document.createElement(type);
  for (let [att, value] of Object.entries(attrs)) element[att] = value;
  const childrenArray = Array.isArray(children) ? children : [children];
  for (let child of childrenArray) element.append(render(child));
  return element;
}
// curry
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) return func.apply(this, args);
    else return curried.bind(this, ...args); //O(1) O(n) n of args
  };
}
curry.placeholder = Symbol();
function curry(func) {
  return function curried(...args) {
    const complete =
      args.length >= func.length && // O(n*m) args * newArgs
      !args.slice(0, func.length).includes(curry.placeholder);
    if (complete) return func.apply(this, args); // O(d) depth
    return function (...newArgs) {
      const res = args.map((arg) =>
        arg === curry.placeholder && newArgs.length ? newArgs.shift() : arg
      );
      return curried(...res, ...newArgs);
    };
  };
}
const add = (a, b) => a + b;
const a = curry(add);
a(3)(4);
function sumArray(arr) {
  console.log("Calculating sum of:", arr);
  return arr.reduce((acc, val) => acc + val, 0);
}
function sumArrays(...arrays) {
  const combinedArray = arrays.reduce((acc, arr) => acc.concat(arr), []);
  return combinedArray.reduce((acc, val) => acc + val, 0);
}
//Memo
function memo(func, resolver) {
  const cache = new Map(); // O(1) cache without depend func
  return function (...args) {
    const key = resolver ? resolver(...args) : args.join("_");
    const cacheResult = cache.get(key); //O(n*m) args * this context
    if (cacheResult?.has(this)) return cacheResult.get(this);
    const result = func.apply(this, args);
    if (!cacheResult) cache.set(key, new Map([[this, result]]));
    else cacheResult.set(this, result);
    return result;
  };
}
function customResolver(args) {
  return args.sort().join("_");
}
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
//Apply Style
function applyStyletoString(string, styles) {
  let html = []; //O(n+m)
  let styleStack = [];
  let lastIndex = 0;
  for (let i = 0; i < string.length; i++) {
    closeStyle(i);
    while (lastIndex < styles.length && styles[lastIndex][0] === i) {
      const [start, end, tag] = styles[lastIndex];
      styleStack.push([start, end, tag]);
      html.push(`<${tag}>`);
      lastIndex++;
    }
    html.push(string[i]);
  }
  closeStyle(string.length);
  return html.join("");

  function closeStyle(currentIndex) {
    while (
      styleStack.length && //O(m)
      styleStack[styleStack.length - 1][1] === currentIndex
    ) {
      const tag = styleStack.pop()[2];
      html.push(`</${tag}>`);
    }
  }
}
// toBe
function expect(input) {
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


word-wrap: break-word; /* 长单词换行 */
word-break: break-all; /* 在任意字符处换行 */

function autoWrapText(container, text, maxWidth) {
    let words = text.split(' ');
    let currentLine = '';
    let formattedText = '';

    words.forEach(word => {
        let testLine = currentLine + word + ' ';
        let testWidth = measureTextWidth(testLine);

        if (testWidth > maxWidth && currentLine.length > 0) {
            formattedText += currentLine + '\n';
            currentLine = word + ' ';
        } else {
            currentLine = testLine;
        }
    });

    formattedText += currentLine;
    container.innerText = formattedText;
}

function measureTextWidth(text) {
    let dummyDiv = document.createElement("div");
    document.body.appendChild(dummyDiv);
    dummyDiv.style.position = 'absolute';
    dummyDiv.style.visibility = 'hidden';
    dummyDiv.style.height = 'auto';
    dummyDiv.style.width = 'auto';
    dummyDiv.style.whiteSpace = 'nowrap';
    dummyDiv.innerText = text;
    let width = dummyDiv.clientWidth;
    document.body.removeChild(dummyDiv);
    return width;
}
class Stack {
    constructor(){
      this.q1 = new Queue();
      this.q2 = new Queue();
    }
    push(element) {
      this.q2.enqueue(element);
      while(this.q1.size()){
        this.q2.enqueue(this.q1.dequeue())
      }
      while(this.q2.size()){
        this.q1.enqueue(this.q2.dequeue())
      }
    }
    peek() { 
      return this.q1.peek();
    }
    pop() { 
      return this.q1.dequeue();
    }
    size() { 
      return this.q1.size();
    }
  }

<div id="poll">
    <h3>What is your favorite programming language?</h3>
    <form id="pollForm">
        <input type="radio" id="java" name="language" value="Java">
        <label for="java">Java</label><br>

        <input type="radio" id="javascript" name="language" value="JavaScript">
        <label for="javascript">JavaScript</label><br>

        <input type="radio" id="python" name="language" value="Python">
        <label for="python">Python</label><br>

        <button type="submit">Vote</button>
    </form>
    <div id="pollResults" style="display:none;">
        <h3>Results</h3>
        <p id="results"></p>
    </div>
</div>

  document.getElementById('pollForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var radios = document.getElementsByName('language');
    var selectedLanguage = '';
    for (var radio of radios) {
        if (radio.checked) {
            selectedLanguage = radio.value;
            break;
        }
    }

    document.getElementById('results').innerHTML = `You voted for: ${selectedLanguage}`;
    document.getElementById('pollResults').style.display = 'block';
});


<div id="typeaheadWidget">
    <input type="text" id="typeaheadInput" placeholder="Start typing...">
    <div id="suggestions" class="suggestions"></div>
</div>

.suggestions {
    position: absolute;
    border: 1px solid #ddd;
    border-top: none;
    width: 100%;
    z-index: 1000;
    background: white;
}


const data = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew"];

document.getElementById('typeaheadInput').addEventListener('input', function(e) {
    const input = e.target.value;
    document.getElementById('suggestions').innerHTML = '';
    if (input.length > 0) {
        const suggestions = data.filter(item => item.toLowerCase().startsWith(input.toLowerCase()));
        suggestions.forEach(suggestion => {
            const div = document.createElement('div');
            div.innerHTML = suggestion;
            div.addEventListener('click', function() {
                document.getElementById('typeaheadInput').value = suggestion;
                document.getElementById('suggestions').innerHTML = '';
            });
            document.getElementById('suggestions').appendChild(div);
        });
    }
});
