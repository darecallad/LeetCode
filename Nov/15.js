const roamanToInt = (str) => {
  const map = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let result = 0;
  for (let i = 0; i < str.length; i++) {
    const curr = map[str[i]];
    const next = map[str[i + 1]];

    if (next > curr) result -= curr;
    else result += curr;
  }
  return result;
};

function getNthNumber(x) {
  let result = "1";
  for (let i = 1; i < x; i++) {
    result = helper(result);
  }
  return result;
}

function helper(number) {
  let count = 1;
  let resultNumber = "";

  for (let i = 0; i < number.length; i++) {
    if (number[i] === number[i + 1]) count++;
    else {
      resultNumber += count.toString() + number[i];
      count = 1;
    }
  }
  return resultNumber;
}

function mySqrt(x) {
  if (x < 0 || typeof x !== "number" || isNaN(x)) return NaN;
  if (x < 2) return x;
  let left = 0;
  let right = x;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const mid1 = mid * mid;

    if (mid1 === x) return mid;
    else if (mid1 > x) right = mid - 1;
    else left = mid + 1;
  }
  return right;
}

class Observable {
  constructor(setup) {
    this.setup = setup;
  }
  subscribe(subscriber) {
    const subscriberWrapper = {
      unsubscribed: false,
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
        return (this.unsubscribed = true);
      },
    };
    this.setup(subscriberWrapper);
    return subscriberWrapper;
  }
}

const test = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  setTimeout(() => {
    subscriber.complete();
  }, 1000);
});

const print = {
  next: (value) => {
    console.log("we get value", value);
  },
  error: (value) => {
    console.log("we get error", value);
  },
  complete: () => {
    console.log("done");
  },
};

const subscr = test.subscribe(print);

function clearAllTimeout() {
  let id = window.setTimeout(null, 0);
  while (id > 0) {
    window.clearTimeout(id--);
  }
}

function sort(items, newOrder) {
  const ref = [...items];
  for (let i = 0; i < items.length; i++) {
    items[newOrder[i]] = ref[i];
  }
}

function sorto1(items, newOrder) {
  for (let i = 0; i < items.length; i++) {
    while (newOrder[i] !== i) {
      const current = newOrder[i];
      [items[i], items[current]] = [items[current], items[i]];
      [newOrder[i], newOrder[current]] = [newOrder[current], newOrder[i]];
    }
  }
}

const find = (rootA, rootB, target) => {
  if (rootA === target) return rootB;
  for (let i = 0; i < rootA.children.length; i++) {
    const res = find(rootA.children[i], rootB.children[i], target);
    if (res) return res;
  }
};

const fun1 = (rootA, rootB, target) => {
  const stack = [[rootA, rootB]];
  while (stack.length) {
    const [leftNode, rightNode] = stack.pop();
    if (leftNode === target) return rightNode;

    for (let i = 0; i < leftNode.children.length; i++) {
      stack.push([leftNode.children[i], rightNode.children[i]]);
    }
  }
};

const funca2 = (rootA, rootB, target) => {
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

const duanduw = (rootA, rootB, target) => {
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

function excludeItems(items, excludes) {
  const map = {};
  excludes.forEach(({ k, v }) => {
    if (!map[k]) map[k] = {};
    map[k][v] = true;
  });

  return items.filter((item) => {
    for (let element in item) {
      const value = item[element];
      if (map[element] && map[element][value]) return false;
    }
    return true;
  });
}

class NodeStore {
  constructor() {
    this.keys = [];
    this.values = [];
  }
  set(node, value) {
    let index = this.keys.indexOf(node);
    if (index !== -1) this.values[index] = value;
    else {
      this.keys.push(node);
      this.values.push(node);
    }
  }
  get(node) {
    let index = this.keys.indexOf(node);
    if (index !== -1) return this.values[index];
    else return undefined;
  }
  has(node) {
    return this.keys.indexOf(node) !== -1;
  }
}

class EventEmitter {
  constructor() {
    this.watcher = new Map();
  }
  subscribe(eventName, callback) {
    let watcher = this.watcher;
    if (!watcher.has(eventName)) watcher.set(eventName, [callback]);
    else watcher.set(eventName, [...watcher.get(eventName), callback]);

    return {
      release: function () {
        watcher.get(eventName).map((item, index) => {
          if (item == callback) watcher.get(eventName).splice(index, 1);
          else return item;
        });
      },
    };
  }

  emit(eventName, ...args) {
    if (this.watcher.has(eventName)) {
      this.watcher.get(eventName).forEach((call) => {
        call.apply(this, args);
      });
    }
  }
}

function firsTBad(isBad) {
  return (version) => {
    let left = 0;
    let right = version;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (isBad(mid)) right = mid;
      else left = mid + 1;
    }
    return isBad(left) ? left : -1;
  };
}

function decoded(message) {
  if (!message.length || !message[0].length) return "";
  let row = 0;
  let col = 0;
  let isTop = true;
  let result = "";

  while (col < message[0].length) {
    if (isTop) result += message[row++][col++];
    else result += message[row--][col++];

    if (row === message.length - 1) isTop = false;
    if (row === 0) isTop = true;
  }
  return result;
}

const result = decode([
  ["A", "A", "A"],
  ["B", "B", "B"],
  ["C", "C", "C"],
]);

function debounce(func, wait) {
  let timer = null;
  return function (...args) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

function throttle(func, wait) {
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
}

function throttleIm(func, wait, option = { leading: true, trailing: true }) {
  let timer = null;
  let lastArgs = null;
  let lastThis = null;
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
      if (leading) {
        func.apply(this, args);
      }
      timer = window.setTimeout(invokeFunction, wait);
    } else {
      lastArgs = args;
      lastThis = this;
    }
  };
}

function deboudncexe(func, wait, option = { leading: false, trailing: true }) {
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
      if (!isInvoked && trailing) {
        func.apply(this, args);
        timer = null;
      }
    }, wait);
  };
}

const flat = (arr, depth = 1) => {
  const stack = arr.map((item) => [item, depth]);
  const result = [];
  while (stack.length) {
    const [item, depth] = stack.pop();
    if (Array.isArray(item) && depth > 0) {
      stack.push(...item.map((subItem) => [subItem, depth - 1]));
    } else result.push(item);
  }
  return result.reverse();
};

const mode = (state, element) => {
  element.value = state.value;
  // state => element
  // element => state
  Object.defineProperty(state, "value", {
    set(new_value) {
      element.value = new_value;
    },
    get() {
      return element.value;
    },
  });
  element.addEventListener(
    "change",
    (event) => (state.value = event.target.value)
  );
};

const inputElemet = document.createElement("input");

const virtualize = (element) => {
  const result = {
    type: element.tagName.toLowerCase(),
    props: {},
  };
  // props
  for (let attr of element.attributes) {
    const name = attr.name === "class" ? "className" : attr.name;
    result.props[name] = attr.value;
  }
  // children
  const children = [];
  for (let node of element.childNodes) {
    if (node.nodeType === 3)
      // text;
      children.push(node.textContent);
    else children.push(virtualize(node));
  }
  // return
  result.props.children = children.length === 1 ? children[0] : children;
  return result;
};

const render = (json) => {
  if (typeof json === "string") return document.createTextNode(json);
  let {
    type,
    props: { children, ...attrs },
  } = json;

  const element = document.createElement(type);

  for (let [att, value] of Object.entries(attrs)) element[att] = value;

  const childrenArr = Array.isArray(children) ? children : [children];

  for (let child of childrenArr) element.append(render(child));
  return element;
};

function virtualizzze(element) {
  const result = {
    type: element.tagName.toLowerCase(),
    props: {},
  };
  // props
  for (let att of element.attributes) {
    const name = att.name === "class" ? "className" : att.name;
    result.props[name] = att.value;
  }
  // children
  const children = [];
  for (let node of element.childNodes) {
    if (node.nodeType === 3)
      // text
      children.push(node.textContent);
    else children.push(virtualize(node));
  }
  // return
  result.props.children = children.length === 1 ? children[0] : children;
  return result;
}

function renderdrrr(json) {
  if (typeof json === "string") return document.createTextNode(json);

  const {
    type,
    props: { children, ...attrs },
  } = json;

  // element
  const element = document.createElement(type);

  // attrs
  for (let [att, value] of Object.entries(attrs)) {
    element[att] = value;
  }
  // children
  const childrenArr = Array.isArray(children) ? children : [children];
  //return
  for (let child of childrenArr) {
    element.append(renderdrrr(child));
  }
  return element;
}

function ivertTree(node) {
  const nodes = [node];
  while (nodes.length) {
    const pop = nodes.shift();
    if (pop) {
      [pop.left, pop.right] = [pop.right, pop.left];
      nodes.push(pop.left, pop.right);
    }
  }
  return node;
}

function reverList(list) {
  if (!list || !list.next) return list;

  const newHead = reverList(list.next);
  list.next.next = list;
  list.next = null;

  return newHead;
}

function reverList(list) {
  let next = null;
  let prev = null;

  while (list) {
    next = list.next;
    list.next = prev;
    prev = list;
    list = next;
  }
  return prev;
}

function carry(func) {
  return function carried(...args) {
    if (args.length >= func.length) return func.apply(this, args);
    else return carried.bind(this, ...args);
  };
}

function carry(func) {
  return function carried(...args) {
    if (args.length >= func.length) return func.apply(this, args);
    else return carried.bind(this, ...args);
  };
}

function curry(func) {
  return function curried(...args) {
    const complete =
      args.length >= func.length &&
      !args.slice(0, func.length).includes(curried.placeholder);

    if (complete) return func.apply(this, args);
    return function (...newArgs) {
      const res = args.map((arg) => {
        arg === curry.placeholder && newArgs.length ? newArgs.shift() : arg;
      });
      return curried(...res, ...newArgs);
    };
  };
}

function carry(func) {
  return function carried(...args) {
    const complete =
      args.length >= func.length &&
      !args.slice(0, func.length).includes(carried.placeholder);
    if (complete) return func.apply(this, args);
    return function (...newArgs) {
      const res = args.map((arg) =>
        arg === curry.placeholder && newArgs.length ? newArgs.shift() : arg
      );
      return carried(...res, ...newArgs);
    };
  };
}

function carry(func) {
  return function carried(...args) {
    const complete =
      args.length >= func.length &&
      !args.slice(0, func.length).includes(carried.placeholder);
    if (complete) return func.apply(this, args);
    return function (...newArgs) {};
  };
}

function basiccurry(func) {
  return function carried(...args) {
    if (args.length >= func.length) return func.apply(this, args);
    else return carried.bind(this, ...args);
  };
}

function placeholderCurry(func) {
  return function curried(...args) {
    const complete =
      args.length >= func.length &&
      !args.slice(0, func.length).includes(curried.placeholder);

    if (complete) func.apply(this, args);
    return function (...newArgs) {
      const res = args.map((arg) =>
        arg === placeholderCurry.placeholder && newArgs.length
          ? newArgs.shift()
          : arg
      );
      return curried(...res, ...newArgs);
    };
  };
}

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else return curried.bind(this, args);
  };
}

function curry(func) {
  return function curried(...args) {
    const complete =
      args.length >= func.length &&
      !args.slice(0, func.length).includes(curried.placeholder);
    if (complete) func.apply(this, args);

    return function (...newArgs) {
      const res = args.map((arg) =>
        arg === curry.placeholder && newArgs.length ? newArgs.shift() : arg
      );
      return curried(...res, ...newArgs);
    };
  };
}

curry.placeholder = symbol();

function curry(func) {
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

function curry(func) {
  return function curried(...args) {
    const compelte =
      args.length >= func.length &&
      !args.slice(0, func.length).includes(curry.placeholder);
    if (compelte) return func.apply(this, args);
    return function (...newArgs) {
      const res = args.map((arg) =>
        arg === curry.placeholder && newArgs.length ? newArgs.shift() : arg
      );
      return curried(...res, ...newArgs);
    };
  };
}

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

function $(el) {
  return new Wrapper(el);
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

function memo(func, resolver) {
  const cache = new Map();
  return function (...args) {
    const key = resolver ? resolver(...args) : args.join("_");
    const cacheResult = cache.get(key);

    if (cacheResult?.has(this)) return cacheResult.get(this);

    const result = func.apply(this, args);
    if (!cacheResult) cache.set(key, new Map([[this, result]]));
    else cacheResult.set(this, result);

    return result;
  };
}

function memmemmeemmee(func, resolver) {
  const cache = new Map();
  return function (...args) {
    const key = resolver ? resolver(...args) : args.join("_");
    const cacheResult = cache.get(key);

    if (cacheResult?.has(this)) return cacheResult.get(this);

    const result = func.apply(this, args);
    if (!cacheResult) cache.set(key, new Map([[this, result]]));
    else cache.set(key, result);

    return result;
  };
}

function memo(func, resolver) {
  const cache = new Map();
  return function (...args) {
    const key = resolver ? resolver(...args) : args.join("_");
    const cacheResult = cache.get(key);

    if (cacheResult?.has(this)) return cacheResult.get(this);

    const result = func.apply(this, args);
    if (!cacheResult) cache.set(key, new Map([[this, result]]));
    else cache.set(key, result);

    return result;
  };
}

function mememe(func, resolver) {
  const cache = new Map();
  return function (...args) {
    const key = resolver ? resolver(...args) : args.join("_");
    const cacheResult = cache.get(key);

    if (cacheResult?.has(this)) return cacheResult.get(this);

    const result = func.apply(this, args);

    if (!cacheResult) cache.set(key, new Map([[this, result]]));
    else cache.set(key, result);

    return result;
  };
}

const testMemo = (n) => {
  console.log(`calau ${n}`);
  return n * 2;
};
const ressss = (n) => n % 2;
const testResult = mememe(testMemo);
console.log(testResult(5));
