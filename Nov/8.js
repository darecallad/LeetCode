class Emmmm {
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

//
class NodeStore {
  constructor() {
    this.keys = [];
    this.values = [];
  }

  set(node, value) {
    var index = this.keys.indexOf(node);
    if (index === -1) {
      this.keys.push(node);
      this.values.push(value);
    } else this.values[index] = value;
  }

  get(node) {
    var index = this.keys.indexOf(node);
    if (index !== -1) {
      return this.values[index];
    }
    return undefined;
  }

  has(node) {
    return this.keys.indexOf(node) !== -1;
  }
}

function NodeStore() {
  this.keys = [];
  this.values = [];
}

NodeStore.prototype.set = function (node, value) {
  var index = this.keys.indexOf(node);
  if (index === -1) {
    this.keys.push(node);
    this.values.push(value);
  } else {
    this.values[index] = value;
  }
};

NodeStore.prototype.get = function (node) {
  var index = this.keys.indexOf(node);
  if (index !== -1) {
    return this.values[index];
  }
  return undefined;
};

NodeStore.prototype.has = function (node) {
  return this.keys.indexOf(node) !== -1;
};

class NodeStore {
  constructor() {
    this.key = [];
    this.values = [];
  }

  set(node, value) {
    let index = this.keys.indexOf(node);
    if (index === -1) {
      this.key.push(node);
      this.values.psuh(value);
    } else this.values[index] = value;
  }

  get(node) {
    let index = this.keys.indexOf(node);
    if (index !== -1) return this.values[index];

    return undefined;
  }
  has(node) {
    return this.keys.indexOf(node) !== -1;
  }
}

class NodeStore {
  constructor() {
    this.key = [];
    this.values = [];
  }

  set(node, value) {
    let index = this.key.indexOf(node);
    if (index === -1) {
      this.key.push(node);
      this.values.push(value);
    } else this.values[index] = value;
  }
  get(node) {
    let index = this.key.indexOf(node);
    if (index !== -1) return this.values[index];
    else return undefined;
  }
  has(node) {
    return this.key.indexOf(node) !== -1;
  }
}

function NodeStore() {
  this.keys = [];
  this.values = [];
}

NodeStore.prototype.set = function (node, value) {
  let index = this.keys.indexOf(node);
  if (index === -1) {
    this.keys.push(node);
    this.values.push(value);
  } else this.values[index] = value;
};

NodeStore.prototype.get = function (node) {
  let index = this.keys.indexOf(node);
  if (index !== -1) return this.values[index];
  else return undefined;
};

NodeStore.prototype.has = function (node) {
  return this.keys.indexOf(node) !== -1;
};

function excludeItems(items, excludes) {
  const exclusionSet = new Set(excludes.map((pair) => `${pair.k}:${pair.v}`));
  return items.filter((item) => {
    return !Object.keys(item).some((key) =>
      exclusionSet.has(`${key}:${item[key]}`)
    );
  });
}

let items = [
  { color: "red", type: "tv", age: 18 },
  { color: "silver", type: "phone", age: 20 },
  { color: "blue", type: "book", age: 17 },
];

const excludes = [
  { k: "color", v: "silver" },
  { k: "type", v: "tv" },
];
function excludeItems(items, excludes) {
  excludes.forEach((pair) => {
    items = items.filter((item) => item[pair.k] !== pair.v);
  });
  return items;
}

function excludeItems(items, excludes) {
  excludes.forEach((pair) => {
    items = items.filter((item) => item[pair.k] !== pair.v);
  });
  return items;
}

function ex(items, excludes) {
  excludes.forEach((pair) => {
    items = items.filter((item) => item[pair.k] !== pair.v);
  });
  return items;
}
// time O(m * n);
// space O(m * n);

function better(items, excludes) {
  const excludesMap = new Map(
    excludes.map((pair) => [pair.k + ":" + pair.v, true])
  );
  return items.filter((item) => {
    return !Object.keys(item).some((key) =>
      excludesMap.has(key + ":" + item[key])
    );
  });
}

function dadpjif(items, excludes) {
  const exMap = excludes.map((pair) => [pair.k + ":" + pair.v, true]);

  return items.filter((item) => {
    return !Object.keys(item).some((key) => exMap.has(key + ":" + item[key]));
  });
}

// time O(m + n * k);
// space O(m + n)

function old(items, excludes) {
  excludes.forEach((pair) => {
    items = items.filter(item[pair.k] !== pair.v);
  });

  return items;
}
// time O(m * n)
// space O(m * n)

function newOne(items, excludes) {
  const exMap = excludes.map((pair) => [pair.k + ":" + pair.v, true]);
  return items.filter((item) => {
    return !Object.keys(item).some((key) => exMap.has(key + ":" + item[key]));
  });
}

const find = (rootA, rootB, target) => {
  if (rootA === target) return rootB;
  for (let i = 0; i < rootA.children.length; i++) {
    const res = find(rootA.children[i], rootB.children[i], target);
    if (res) return res;
  }
};

const fun = (rootA, rootB, target) => {
  if (rootA === target) return rootB;
  for (let i = 0; i < rootA.children.length; i++) {
    const res = find(rootA.children[i], rootB.children[i], target);
    if (res) return res;
  }
}; // time O(n) space O(h) h = high of tree

const ff = (rootA, rootB, target) => {
  const stack = [[rootA, rootB]];

  while (stack.length > 0) {
    const [leftNode, rightNode] = stack.pop();
    if (leftNode === target) return rightNode;

    for (let i = 0; i < leftNode.children.length; i++)
      stack.push([leftNode.children[i], rightNode.children[i]]);
  }
}; // time O(n) spaceO(w) w = width of tree

const re = (rootA, rootB, target) => {
  if (rootA === target) return rootB;

  for (let i = 0; i < rootA.children.length; i++) {
    const res = re(rootA.children[i], rootB.children[i], target);
    if (res) return res;
  }
}; // time O(n) space O(h) h = high of tree

const reee = (rootA, rootB, target) => {
  const stack = [[rootA, rootB]];

  while (stack.length > 0) {
    const [leftNode, rightNode] = stack.pop();
    if (leftNode === target) return rightNode;

    for (let i = 0; i < leftNode.children.length; i++) {
      stack.push([leftNode.children[i], rightNode.children[i]]);
    }
  }
  return null;
}; // time O(n) space O(w) w = tree width

const fff = (rootA, rootB, target) => {
  if (rootA === target) return rootB;

  for (let i = 0; i < rootA.children.length; i++) {
    const res = fff(rootA.children[i], rootB.children[i], target);
    if (res) return res;
  }
}; // time O(n) space O(h)

const ffff = (rootA, rootB, target) => {
  const stack = [[rootA, rootB]];

  while (stack.length > 0) {
    const [leftNode, rightNode] = stack.pop();
    if (leftNode === target) return rightNode;

    for (let i = 0; i < leftNode.children.length; i++) {
      stack.push([leftNode.children[i], rightNode.children[i]]);
    }
  }
  return null;
};
const avgd = (rootA, rootB, target) => {
  const stack = [[rootA, rootB]];

  while (stack.length > 0) {
    const [leftNode, rightNode] = stack.pop();

    if (leftNode === target) return rightNode;

    for (let i = 0; i < rootA.children.length; i++) {
      stack.push([leftNode.children[i], rightNode.children[i]]);
    }
  }
  return null;
};

const abc = (rootA, rootB, target) => {
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
  return null;
};

const be = (rootA, rootB, target) => {
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
  return null;
};

const aaaaa = (rootA, rootB, target) => {
  if (rootA === target) return rootB;

  for (let i = 0; i < rootA.children.length; i++) {
    const res = aaaaa(rootA.children[i], rootB.children[i], target);
    if (res) return res;
  }
  return null;
}; // time O(n) space O(h)

const bbbbb = (rootA, rootB, target) => {
  const stack = [[rootA, rootB]];

  while (stack.length) {
    const [leftNode, rightNode] = stack.pop();
    if (leftNode === target) return rightNode;

    for (let i = 0; i < leftNode.children.length; i++) {
      stack.push([leftNode.children, rightNode.children]);
    }
  }
  return null;
};

const cccc = (rootA, rootB, target) => {
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

  return null;
}; // time space O(n)

const dom = (rootA, rootB, target) => {
  if (rootA === target) return rootB;

  let path = getRootPath(rootA, target);

  return path.reduceRight((acc, curr, index) => {
    return acc.childredn[curr];
  }, rootB);
};

const awdkj = (rootA, rootB, target) => {
  if (rootA === target) return rootB;
  let path = getRootPath(rootA, target);
  return path.reduceRight((acc, curr, index) => {
    return acc.children[curr];
  }, rootB);
};

const aodjafie = (rootA, target) => {
  let path = [];
  let node = target;

  while (node !== rootA && node.parentNode) {
    const children = node.parentNode.children;
    path.push(children.indexOf(node));
    node = node.parentNode;
  }
  return path;
};

const getRootPath = (rootA, target) => {
  let path = [];
  let node = target;

  while (node !== rootA && node.parentNode) {
    const children = Array.from(node.parentNode.children);
    path.push(children.indexOf(node));
    node = node.parentNode;
  }
  return path;
};

const dommm = (rootA, rootB, target) => {
  if (rootA === target) return rootB;

  let path = getRootPath(rootA, target);

  return path.reduceRight((acc, cur, index) => {
    return acc.children[cur];
  }, rootB);
};

const ddddd = (rootA, rootB, target) => {
  if (rootA === target) return rootB;

  let path = getRootPath(rootA, target);
  return path.reduceRight((acc, cur, index) => {
    return acc.children[cur];
  }, rootB);
};

const de = (rootA, rootB, target) => {
  if (rootA === target) return rootB;
  let path = getRootPPath(rootA, target);

  return path.reduceRight((acc, curr, index) => {
    return acc.children[curr];
  });
};

const getRootPPath = (rootA, target) => {
  let path = [];
  let node = target;

  while (node !== rootA && node.parentNode) {
    const children = Array.from(node.parentNode.children);
    path.push(children.indexOf(node));
    node = node.parentNode;
  }
  return path;
};

const eifje = (rootA, target) => {
  let path = [];
  let node = target;

  while (node !== rootA && node.parentNode) {
    const children = Array.from(node.parentNode.children);
    path.push(children.indexOf(node));
    node = node.parentNode;
  }
  return path;
};

const adaijf = (rootA, target) => {
  let path = [];
  let node = target;

  while (node !== rootA && node.parentNode) {
    const children = Array.from(node.parentNode.children);
    path.push(children.indexOf(node));
    node = node.parentNode;
  }
  return path;
};

const faunfowaf = (rootA, target) => {
  let path = [];
  let node = target;

  while (node !== rootA && node.parentNode) {
    const children = node.parentNode.children;
    path.push(children.indexOf(node));
    node = node.parentNode;
  }
  return path;
};

// walker API
const walker = (rootA, rootB, target) => {
  const rootAWalker = document.createTreeWalker(rootA, NodeFilter.SHOW_ELEMENT);
  const rootBWalker = document.createTreeWalker(rootB, NodeFilter.SHOW_ELEMENT);

  let currentNode = [rootAWalker.currentNode, rootBWalker.currentNode];

  while (currentNode[0] !== target)
    currentNode = [rootAWalker.nextNode(), rootBWalker.nextNode()];

  return currentNode[1];
};

// O(n)
const sort = (items, newOrder) => {
  const ref = [...items];

  for (let i = 0; i < items.length; i++) {
    items[newOrder[i]] = ref[i];
  }
};

const sorttt = (items, newOrder) => {
  const ref = [...items];

  for (let i = 0; i < items.length; i++) {
    items[newOrder[i]] = ref[i];
  }
};

function sorts(items, newOrder) {
  for (let i = 0; i < items.length; i++) {
    // While the current index does not contain the correct item...
    while (newOrder[i] !== i) {
      // Swap the item at the current index with the item at the index it's supposed to be at
      let correctIndex = newOrder[i];
      [items[i], items[correctIndex]] = [items[correctIndex], items[i]];

      // Also swap the corresponding newOrder values to reflect the change in positions
      [newOrder[i], newOrder[correctIndex]] = [
        newOrder[correctIndex],
        newOrder[i],
      ];
    }
  }
}

const asdkljq = (items, newOrder) => {
  for (let i = 0; i < items.length; i++) {
    while (newOrder[i] !== i) {
      const currentIndex = newOrder[i];
      [items[i], items[currentIndex]] = [items[currentIndex], items[i]];
      [newOrder[i], newOrder[currentIndex]] = [
        newOrder[currentIndex],
        newOrder[i],
      ];
    }
  }
};

const cleanTimeOut = () => {
  let id = setTimeout(null, 0);
  while (id >= 0) {
    window.clearTimeout(id);
    id--;
  }
};

const cccasdsac = () => {
  let id = setTimeout(null, 0);
  while (id >= 0) {
    window.cleanTimeOut(id);
    id--;
  }
};

function dcalejfe() {
  let id = setTimeout(null, 0);
  while (id >= 0) {
    window.clearTimeout(id);
    id--;
  }
}
