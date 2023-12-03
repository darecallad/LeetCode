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
function customResolver(a, b) {
  return a; // Only use the first argument for caching
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
const memoizedSum = memoOne(sumArray);
console.log(memoizedSum([1, 2, 3]));
