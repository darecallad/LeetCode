class Emitter {
  constructor() {
    this.watcher = new Map();
  }
  subscribe(eventName, callback) {
    let watcher = this.watcher;
    let callbacks = watcher.get(eventName) || [];
    watcher.set(eventName, [...callbacks, callback]);

    return {
      release: function () {
        let found = false;
        const filterCallbacks = watcher.get(eventName).filter((item) => {
          if (!found && item === callback) {
            found = true;
            return false;
          }
          return true;
        });
        watcher.set(eventName, filterCallbacks);
      },
    };
  }

  emit(eventName, ...args) {
    if (this.watcher.has(eventName)) {
      this.watcher.get(eventName).forEach((callback) => {
        try {
          callback.apply(this, args);
        } catch (error) {
          console.error("Error in Callback", error);
        }
      });
    }
  }
}

const emmiter = new Emitter();
const sub = emmiter.subscribe("event1", callback1);
emmiter.emit("event1", "console");
sub.release();

class NodeStore {
  constructor() {
    this.keys = [];
    this.values = [];
  }
  set(node, value) {
    const index = this.keys.indexOf(node);
    if (index === -1) {
      this.keys.push(node);
      this.values.push(value);
    } else this.values[index] = value;
  }
  get(node) {
    const index = this.keys.indexOf(node);
    if (index === -1) return undefined;
    else return this.values[index];
  }
  has(node) {
    return this.keys.indexOf(node) !== -1;
  }
}

// to improve the run time to O(1)
// we can do obj

class NodeeeStore {
  constructor() {
    this.store = {};
  }
  generKey(node) {
    if (!node._id) {
      node._id = Symbol();
    }
    return node._id;
  }
  set(node, value) {
    const index = this.generKey(node);
    this.store[index] = value;
  }
  get(node) {
    const index = this.generKey(node);
    return this.store[index];
  }
  has(node) {
    const index = this.generKey(node);
    return index in this.store;
  }
}

// improve a function
function excludeItems(items, excludes) {
  const store = {};
  excludes.forEach(({ k, v }) => {
    if (!store[k]) store[k] = {};
    store[k][v] = true;
  });

  return items.filter((subItem) => {
    for (let property in subItem) {
      let value = subItem[property];
      if (store[property] && store[property][value]) return false;
    }
    return true;
  });
}

function excludeItems(items, excludes) {
  const store = {};
  excludes.forEach(({ k, v }) => {
    if (!store[k]) store[k] = new Map();
    store[k].set(v, true);
  });

  return items.filter((subItem) => {
    for (let property in subItem) {
      let value = subItem[property];
      if (Object.hasOwn(store, property) && store[property].has(value))
        return false;
    }
    return true;
  });
}

function exclsad(items, excludes) {
  const store = {};
  excludes.forEach(({ k, v }) => {
    if (!store[k]) store[k] = new Map();
    store[k].set(v, true);
  });

  return items.filter((subItem) => {
    for (let property in subItem) {
      const value = subItem[property];
      if (Object.hasOwn(store, property) && story[property].has[value])
        return false;
    }
    return true;
  });
}

const findCorrespondingNode = (rootA, rootB, target) => {
  if (rootA === target) return rootB;

  for (let i = 0; i < rootA.children.length; i++) {
    const res = findCorrespondingNode(
      rootA.children[i],
      rootB.children[i],
      target
    );
    if (res) return res;
  }
};
// the first way to solve this question we can use recursive
// for the run time it would be O(n) / O(h)
// however the recursive way when we have very deep tree
// that will cause overflow problem which stack and queue can prevent this problem

const findCorrespondingNode1 = (rootA, rootB, target) => {
  const stack = [[rootA, rootB]];
  while (stack.length) {
    const [leftNode, rightNode] = stack.pop();
    if (leftNode === target) return rightNode;
    for (let i = 0; i < leftNode.children.length; i++) {
      stack.push([leftNode.children[i], rightNode.children[i]]);
    }
  }
};

// the second way we can use Stack to solve the problem that change the run time
// to O(n) / O(h)

const findCorrespondingNode2 = (rootA, rootB, target) => {
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

// the thrid solution we use Queue to solve the problem
// run time is O(n) / O(w)

// Deep tree DFS (stack)
// Wide Tree BFS (queue)
// balance tree -- not big diff all working fine
// unbalanced Tree --- DFS (stack)

// for the memeory part that DFS more suitable
// BFS need to store all node for wide tree

function sort(items, newOrder) {
  const ref = [...items];
  for (let i = 0; i < items.length; i++) {
    items[newOrder[i]] = ref[i];
  }
}

// first we use extra O(n) space to solve this question
// however we can reduce the space to O(1)

function sortt(items, newOrder) {
  for (let i = 0; i < items.length; i++) {
    while (newOrder[i] !== i) {
      const current = newOrder[i];
      [items[i], items[current]] = [items[current], items[i]];
      [newOrder[i], newOrder[current]] = [newOrder[current], newOrder[i]];
    }
  }
}

// for those solution that run time is O(n)

function clearAllTime() {
  let id = window.setTimeout(null, 0);
  while (id > 0) {
    window.clearTimeout(id--);
  }
}

function clearAllTimeout() {
  const originSetTimeout = setTimeout;
  const originClearTimeout = clearTimeout;
  const timers = new Set();

  window.clearAllTimeout = () => {
    for (const timerId of timers) {
      clearTimeout(timerId);
    }
  };

  window.setTimeout = (callback, time, ...args) => {
    const callbackWrapper = () => {
      callback(...args);
      timers.delete(timerId);
    };
    const timerId = originSetTimeout(callbackWrapper, time);
    timers.add(timerId);
    return timerId;
  };

  window.clearTimeout = (id) => {
    originClearTimeout(id);
    timers.delete(id);
  };
}
