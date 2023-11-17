// FLAT []
const flat = (arr, depth = 1) => {
  // O(n) totaly number of element in arr
  const result = []; // O(N + d) // O(n) d is less or same to depth
  for (let item of arr) {
    // n is storage of result array
    if (Array.isArray(item) && depth > 0) result.push(...flat(item, depth - 1));
    else result.push(item);
  }
  return result;
};
const flatten = (arr, depth = 1) => {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr) && depth > 0) acc.push(...flatten(curr, depth - 1));
    else acc.push(curr);
    return acc;
  }, []);
};
const fallten = (arr, depth = 1) => {
  const result = [];
  const stack = arr.map((item) => [item, depth]);
  while (stack.length) {
    const [item, depth] = stack.pop();
    if (Array.isArray(item) && depth > 0)
      stack.push(...item.map((subItem) => [subItem, depth - 1]));
    else result.push(item);
  }
  return result.reverse();
};
// Debounce
const devounce = (func, wait) => {
  // O(1) for each call
  let timer = null; //
  return function (...args) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};
const debounce = (func, wait, option = { leading: false, trailing: false }) => {
  let timer = null;
  let { leading, trailing } = option;
  return function (...args) {
    let isInvoked = false;
    if (!timer && leading) {
      func.apply(this, args);
      isInvoked = true;
    }
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (trailing && !isInvoked) func.apply(this, args);
      timer = null;
    }, wait);
  };
};
// Throttle
const throttle = (func, wait) => {
  //O(1)
  let timer = null;
  let lastArgs = null;
  let lastThis = null;
  const invokeFunction = () => {
    if (lastArgs) {
      func.apply(lastThis, lastArgs);
      lastArgs = null;
      lastThis = null;
      timer = window.setTimeout(invokeFunction, wait);
    } else timer = null;
  };
  return function (...args) {
    if (!timer) {
      func.apply(this, args);
      timer = window.setTimeout(invokeFunction, wait);
    } else {
      lastArgs = args;
      lastThis = this;
    }
  };
};
function throttle(func, wait, options = {}) {
  let { leading, trailing } = option;
  let lastArgs = null;
  let timer = null;

  const setTimer = () => {
    if (lastArgs && trailing) {
      func.apply(this, lastArgs);
      lastArgs = null;
      timer = setTimeout(setTimer, wait);
    } else {
      timer = null;
    }
  };

  return function (...args) {
    if (!timer) {
      if (leading) {
        func.apply(this, args);
      }
      timer = setTimeout(setTimer, wait);
    } else {
      lastArgs = args;
    }
  };
}
// Decode Message
const decode = (message) => {
  if (!message.length || !message[0].length) return "";
  let row = 0; //O(n) n = length of first string
  let col = 0; // O(1)
  let isTop = true;
  let result = "";

  while (col < message[0].length) {
    if (isTop) result += message[row++][col++];
    else result += message[row--][col++];
    if (row === message.length - 1) isTop = false;
    if (row === 0) isTop = true;
  }
  return result;
};
// First Bad Version
const firstBadVersion = (isBad) => {
  return (version) => {
    let left = 1; // O(log n);  // O(1)
    let right = version; // firstBadVersion((i) => i >= 4)(100)
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (isBad(mid)) right = mid;
      else left = mid + 1;
    }
    return isBad(left) ? left : -1;
  };
};
// Class EventEmitter
class EventEmitter {
  constructor() {
    // const emitter = new Emitter();
    this.watcher = new Map(); // const sub1 = emitter.subscribe('event1', callback1);
  }
  subscribe(eventName, callback) {
    let watcher = this.watcher; // O(1) spaceO(m) unique events
    if (!watcher.has(eventName)) watcher.set(eventName, [callback]);
    else watcher.set(eventName, [...watcher.get(eventName), callback]);

    return {
      release: function () {
        watcher.get(eventName).map((item, index) => {
          //O(k) # of callback event
          if (item == callback) watcher.get(eventName).splice(index, 1); // O(1)
          else return item;
        });
      },
    };
  }
  emit(eventName, ...args) {
    if (this.watcher.has(eventName)) {
      //O(j) # of callbacks
      this.watcher.get(eventName).forEach((call) => {
        // O(1)
        call.apply(this, args);
      });
    }
  }
}
// Class NodeStore
class NodeStore {
  constructor() {
    this.keys = [];
    this.values = [];
  }
  set(node, value) {
    let index = this.keys.indexOf(node); //O(n) keys array
    if (index !== -1) this.values[index] = value; //O(m) node stored
    else {
      this.keys.push(node);
      this.values.push(value);
    }
  }
  get(node) {
    let index = this.keys.indexOf(node);
    if (index === -1) return undefined; //O(n)
    else return this.values[index]; //O(1)
  }
  has(node) {
    return this.keys.indexOf(node) !== -1; //O(n) O(1)
  }
}
// Improve a function
function excludeItems(items, excludes) {
  const exmap = {};
  excludes.forEach(({ k, v }) => {
    if (!exmap[k]) exmap[k] = {};
    exmap[k][v] = true; // O(e + i*p) e = number of item , i = number of item * properties of item
  }); // O(e) space

  return items.filter((element) => {
    for (let item in element) {
      const value = element[item];
      if (exmap[item] && exmap[item][value]) return false;
    }
    return true;
  });
}
// corresponding node in DOM
const findCorr = (rootA, rootB, target) => {
  if (rootA === target) return rootB;
  for (let i = 0; i < rootA.children.length; i++) {
    const res = findCorr(rootA.children[i], rootB.children[i], target);
    if (res) return res; //O(n) total number O(h) h = highet
  }
};
const findCorrrr = (rootA, rootB, target) => {
  const stack = [[rootA, rootB]];
  while (stack.length) {
    const [leftNode, rightNode] = stack.pop();
    if (leftNode === target) return rightNode;
    for (let i = 0; i < leftNode.children.length; i++)
      stack.push([leftNode.children[i], rightNode.children[i]]);
  } // time O(n) spaceO(w) w = width of tree
};
const findQueue = (rootA, rootB, target) => {
  if (rootA === target) return rootB;
  const queueA = [rootA];
  const queueB = [rootB];
  while (queueA.length) {
    const currentA = queueA.shift();
    const currentB = queueB.shift();
    if (currentA === target) return currentB;
    queueA.push(...currentA.children);
    queueB.push(...currentB.children);
  }
};
const findAPI = (rootA, rootB, target) => {
  if (rootA === target) return rootB;
  let path = helper(rootA, target);
  return path.reduceRight((acc, curr) => {
    return acc.children[curr];
  }, rootB);
};
const helper = (rootA, target) => {
  let path = [];
  let node = target;
  while (node !== rootA && node.parentNode) {
    const children = Array.from(node.parentNode.children);
    path.push(children.indexOf(node));
    node = node.parentNode;
  }
  return path;
};
// sort
function sort(items, newOrder) {
  const ref = [...items];
  for (let i = 0; i < items.length; i++) {
    items[newOrder[i]] = ref[i]; //O(n)
  }
}
function sortt(items, newOrder) {
  for (let i = 0; i < items.length; i++) {
    while (newOrder[i] !== i) {
      const current = newOrder[i];
      [items[i], items[current]] = [items[current], items[i]]; //O(n)
      [newOrder[i], newOrder[current]] = [newOrder[current], newOrder[i]]; //O(1)
    }
  }
}
// clean all
const clearAll = () => {
  let id = window.setTimeout(null, 0); // assume highest timeout we get here
  while (id > 0) {
    //O(n) //O(1)
    window.clearTimeout(id);
    id--;
  }
};
// Observable
class Observable {
  constructor(setup) {
    this.setup = setup;
  }
  subscribe(subscriber) {
    const subscriberWrapper = {
      unsubscribed: false, // O(1)
      next(value) {
        if (this.unsubscribed) return;
        if (subscriber instanceof Function) return subscriber(value);
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
    return subscriberWrapper;
  }
}
// mySqrt
const mySqrt = (x) => {
  if (x < 0 || isNaN(x) || typeof x !== "number") return NaN;
  if (x < 2) return x;
  let left = 1;
  let right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midsqrt = mid * mid;
    if (midsqrt === x) return mid;
    else if (midsqrt > x) right = mid - 1;
    else left = mid + 1;
  }
  return right; // O(logn) O(1)
};
// number-sequence
const getNthNumber = (x) => {
  if (x <= 0) return "";
  let result = "1"; //O(n) n is result of string.length
  for (let i = 1; i < x; i++) {
    result = hhelper(result);
  }
  return result;
};
const hhelper = (number) => {
  let nextN = "";
  let count = 1;
  for (let i = 0; i < number.length; i++) {
    if (number[i] === number[i + 1]) count++;
    else {
      nextN += count.toString() + number[i];
      count = 1;
    }
  }
  return nextN;
};
// roman
const romanToInt = (str) => {
  const map = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  let result = 0; //O(n) //O(1)
  for (let i = 0; i < str.length; i++) {
    const curr = map[str[i]];
    const next = map[str[i + 1]];
    if (next > curr) result -= curr;
    else result += curr;
  }
  return result;
};
// two way binding
const model = (state, element) => {
  // init the element value with state value
  element.value = state.value;
  // 2 condition
  // update state = update element value
  // update element value = update state
  Object.defineProperty(state, "value", {
    get() {
      return element.value; //O(1)
    },
    set(new_value) {
      element.value = new_value;
      return;
    },
  });
  element.addEventListener("change", (event) => {
    state.value = event.target.value;
  });
};
// DOM1
function virtualize(element) {
  // virtualize top level recursively to children
  const result = {
    type: element.tagName.toLowerCase(),
    props: {},
  };
  // props
  for (let att of element.attributes) {
    const name = att.name === "class" ? "className" : att.name;
    result.props[name] = att.value;
  }
  //children
  const children = [];
  for (let node of element.childNodes) {
    if (node.nodeType === 3)
      // text node
      children.push(node.textContent);
    else children.push(virtualize(node));
  }

  result.props.children = children.length === 1 ? children[0] : children;
  return result;
}

function render(json) {
  if (typeof json === "string") return document.createTextNode(json);
  // element
  const {
    type,
    props: { children, ...attrs },
  } = json;
  const element = document.createElement(type);

  for (let [att, value] of Object.entries(attrs)) element[att] = value;

  const childrenArr = Array.isArray(children) ? children : [children];

  for (let child of childrenArr) element.append(render(child));
  return element;
}
// curry
const curry = (fn) => {
  return function carried(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    else return carried.bind(this, ...args); //O(1) O(M) number of function carried return
  };
};
//carry with placeholder
function curry(func) {
  return function curried(...args) {
    const complete =
      args.length >= func.length && //O(n) O(kn)
      !args.slice(0, func.length).includes(curry.placeholder);
    if (complete) return func.apply(this, args);
    return function (...newArgs) {
      // replace placeholders in args with values from newArgs
      const res = args.map((arg) =>
        arg === curry.placeholder && newArgs.length ? newArgs.shift() : arg
      );
      return curried(...res, ...newArgs);
    };
  };
}

curry.placeholder = Symbol();

// Invert binart tree
const invert = (node) => {
  const nodes = [node]; //O(n) O(w)
  while (nodes.length) {
    const pop = nodes.shift();
    if (pop) {
      [pop.left, pop.right] = [pop.right, pop.left];
      nodes.push(pop.left, pop.right);
    }
  }
  return node;
};

// reverse Linked List
const rever = (list) => {
  let next = null;
  let prev = null;

  while (list) {
    next = list.next; //O(n) O(1)
    list.next = prev;
    prev = list;
    list = next;
  }
  return prev;
};
function akdjaspidj(list) {
  if (!list || !list.next) return list;

  let newHead = akdjaspidj(list.next);

  list.next.next = list;
  list.next = null;

  return newHead;
}

// DOM / JQuery
function $(e1) {
  return new Wrapper(e1);
}

class Wrapper {
  constructor(e1) {
    this.e1 = e1;
  }
  css(propertyName, value) {
    this.e1.style[propertyName] = value;
    return this;
  }
}
//Memo
function memo(func, resolver) {
  const cache = new Map();

  return function (...args) {
    const key = resolver ? resolver(...args) : args.join("_");
    const cacheResult = cache.get(key);

    if (cacheResult?.has(this)) return cacheResult.get(this);

    const result = func.apply(this, args);
    if (!cacheResult) {
      cache.set(key, new Map([[this, result]]));
    } else cacheResult.set(this, result);
    return result;
  };
}

//Memo One
function defaultIsEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((item, i) => item === b[i]);
}

function memoizeOne(func, isEqual = defaultIsEqual) {
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

// animation
let elem = document.getElementById("myElement");
let position = 0;
let distance = 1000;
let duration = 100;
let interval = 10;
let step = distance / (duration / interval);

function move() {
  position = position + step;
  elem.style.left = position + "px";

  if (position < distance) {
    setTimeout(move, interval);
  }
}
move();

let intervalId = setInterval(function () {
  position = position + step;
  elem.style.left = position + "px";

  if (position >= distance) {
    clearInterval(intervalId);
  }
}, interval);

// K-element
const kElement = (arr, k) => {
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

  return miniHeap[0];

  function heapfy() {
    let index = minHeap.length - 1;
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
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
      if (index !== smallest) {
        [minHeap[index], minHeap[smallest]] = [
          minHeap[smallest],
          minHeap[index],
        ];
        index = smallest;
      } else break;
    }
  }
};

function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}
function renderHtml(text, styles) {
  // Sort styles by start index
  styles.sort((a, b) => a[0] - b[0]);

  let result = "";
  let lastIndex = 0;

  styles.forEach((style) => {
    // Add text before the current style if any
    if (style[0] > lastIndex) {
      result += text.slice(lastIndex, style[0]);
    }

    // Apply the current style
    result +=
      `<${style[2]}>` + text.slice(style[0], style[1] + 1) + `</${style[2]}>`;

    // Update the lastIndex
    lastIndex = style[1] + 1;
  });

  // Add any remaining text after the last style
  if (lastIndex < text.length) {
    result += text.slice(lastIndex);
  }

  return result;
}

let timeout1Executed = false;
let timeout2Executed = false;

const timeout1 = setTimeout(() => {
  console.log("Timeout 1");
  timeout1Executed = true;
}, 3000);
const timeout2 = setTimeout(() => {
  console.log("Timeout 2");
  timeout2Executed = true;
}, 5000);

// Call clearAll function
clearAll();

// Check if the timeouts are cleared after a short delay
setTimeout(() => {
  console.log("Timeout 1 executed:", timeout1Executed);
  console.log("Timeout 2 executed:", timeout2Executed);
}, 100); // short delay to allow immediate timeouts to execute
