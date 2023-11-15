const flat = (arr, depth) => {
  const result = [];
  for (let item of arr) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flat(item, depth - 1));
    } else result.push(item);
  }
  return result;
};

const fllat = (arr, depth) => {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr) && depth > 0) {
      acc.push(...fllat(curr, depth - 1));
    } else acc.push(curr);
    return acc;
  }, []);
};

const flllat = (arr, depth) => {
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

const debounce = (func, wait) => {
  let timer = null;
  return function (...args) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};

const debounced = (func, wait, option = { leading: false, trailing: true }) => {
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

function aspodjiw(func, wait, option = { laeding: true, trailing: false }) {
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
      if (trailing && !isInvoked) {
        func.apply(this, args);
      }
      timer = null;
    }, wait);
  };
}

function daiwjfi(func, wait, option = { leading: true, trailing: false }) {
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
      if (trailing && !isInvoked) {
        func.apply(this, args);
      }
      timer = null;
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

function aoiwdjdi(func, wait) {
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

function aidjwadi(func, wait) {
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

function ehfiaef(func, wait, option = { leading: true, trailing: true }) {
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

function iawjdiwajd(func, wait, option = { leading: true, trailing: true }) {
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

function decode(message) {
  if (!message.length || !message[0].length) return "";
  let row = 0;
  let col = 0;
  let isTop = true;
  let result = "";

  while (col < message[0].length) {
    if (isTop) {
      result += message[row++][col++];
    } else result += message[row--][col++];

    if (row === message.length - 1) isTop = false;
    if (row === 0) isTop = true;
  }
  return result;
}

function firstBadVersion(isBad) {
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
  emitter(eventNamt, ...args) {
    if (this.watcher.has(eventNamt)) {
      this.watcher.get(eventNamt).forEach((call) => {
        call.apply(this, args);
      });
    }
  }
}

class NodeStore {
  constructor() {
    this.keys = [];
    this.values = [];
  }
  set(node, value) {
    let index = this.keys.indexOf(node);
    if (index === -1) {
      this.keys.push(node);
      this.values.push(value);
    } else this.values[index] = value;
  }
  get(node) {
    let index = this.keys.indexOf(node);
    if (index === -1) return undefined;
    else return this.values[index];
  }
  has(node) {
    return this.keys.indexOf(node) !== -1;
  }
}

function excludeItems(items, excludes) {
  const exmap = {};
  excludes.forEach(({ k, v }) => {
    if (!exmap[k]) exmap[k] = {};
    exmap[k][v] = true;
  });
  return items.filter((element) => {
    for (let item in element) {
      const value = element[item];
      if (exmap[item] && exmap[item][value]) return false;
    }
    return true;
  });
}

function coss(rootA, rootB, target) {
  if (rootA === target) return rootB;
  for (let i = 0; i < rootA.children.length; i++) {
    const res = coss(rootA.children[i], rootB.children[i], target);
    if (res) return res;
  }
}

function cosss(rootA, rootB, target) {
  const stack = [[rootA, rootB]];
  while (stack.length) {
    const [leftNode, rightNode] = stack.pop();
    if (leftNode === target) return rightNode;
    for (let i = 0; i < leftNode.children.length; i++) {
      stack.push([leftNode.children[i], rightNode.children[i]]);
    }
  }
}

function corsad(rootA, rootB, target) {
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
}

function apdiwajif(rootA, rootB, target) {
  if (rootA === target) return rootB;

  let path = helper(targetA, target);
  return path.reduceRight((acc, curr) => {
    return acc.children[curr];
  }, rootB);
}
const helper = (rootA, target) => {
  const path = [];
  let node = target;

  while (node !== rootA && node.parentNode) {
    const children = node.parentNode.children;
    path.push(children.indexOf(node));
    node = node.parentNode;
  }
  return path;
};

function aab(items, newOrder) {
  const ref = [...items];
  for (let i = 0; i < items.length; i++) {
    items[newOrder[i]] = ref[i];
  }
}

function aiwdj(items, newOrder) {
  for (let i = 0; i < items.length; i++) {
    while (newOrder[i] !== i) {
      const current = newOrder[i];
      [items[i], items[current]] = [items[current], items[i]];
      [newOrder[i], newOrder[current]] = [newOrder[current], newOrder[i]];
    }
  }
}

function clearAll() {
  let id = window.setTimeout(null, 0);
  while (id > 0) {
    window.clearTimeout(id);
    id--;
  }
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
        this.unsubscribed = true;
      },
    };
    this.setup(subscriberWrapper);
    return subscriberWrapper;
  }
}

function asiqwie(x) {
  if (x < 0 || typeof x !== "number" || isNaN(x)) return NaN;
  if (x < 2) return x;
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

const numberSquence = (x) => {
  let result = "1";

  for (let i = 1; i < x; i++) {
    result = helperrrr(result);
  }
  return result;
};
const helperrrr = (number) => {
  let theNumber = "";
  let count = 1;

  for (let i = 0; i < number.length; i++) {
    if (number[i] === number[i + 1]) count++;
    else {
      theNumber += count.toString() + number[i];
      count = 1;
    }
  }
  return theNumber;
};

const romanInt = (str) => {
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

const model = (state, element) => {
  element.value = state.value;
  // 2 state = update element value;
  // element = update state
  Object.defineProperty(state, "value", {
    set(new_value) {
      element.value = new_value;
      return;
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

const dmaiwjf = (state, element) => {
  element.value = state.value;

  Object.defineProperty(state, "value", {
    set(new_value) {
      element.value = new_value;
      return;
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

const twoway = (state, element) => {
  state.value = element.value;
  Object.defineProperty(state, "value", {
    set(new_value) {
      element.value = new_value;
      return;
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

const twoWay = (state, element) => {
  state.value = element.value;

  Object.defineProperty(state, "value", {
    set(new_value) {
      element.value = new_value;
      return;
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

const awidjw = (state, element) => {
  //init the value with state value
  state.value = element.value;

  Object.defineProperty(state, "value", {
    set(new_value) {
      element.value = new_value;
      return;
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

function virtualize(element) {
  const result = {
    type: element.tagName.toLowercase(),
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
    if (node.nodeType === 3) children.push(node.textContent);
    else children.push(virtualize(node));
  }

  result.props.children = children.length === 1 ? children[0] : children;
  return result;
}

function twoadai(state, element) {
  state.value = element.value;
  Object.defineProperty(state, "value", {
    set(new_value) {
      element.value = new_value;
      return;
    },
    get() {
      return element.value;
    },
  });
  element.addEventListener(
    "change",
    (event) => (state.value = event.target.value)
  );
}

function aiwdjwaid(state, element) {
  state.value = element.value;
  Object.defineProperty(state, "value", {
    set(new_value) {
      element.value = new_value;
      return;
    },
    get() {
      return element.value;
    },
  });

  element.addEventListener(
    "change",
    (event) => (state.value = event.target.value)
  );
}

function virtualize(element) {
  const result = {
    type: element.tagName.toLowercase(),
    props: {},
  };
  // props
  for (let attr of element.attributes) {
    const name = attr.name === "class" ? "className" : attr.name;
    result.props[name] = attr.value;
  }
  // children
  for (let node of element.childNodes) {
    if (node.nodeType === 3)
      // text
      children.push(node.textContent);
    else children.push(virtualize(node));
  }

  result.props.children = children.length === 1 ? children[0] : children;
  return result;
}

const virtualize = (element) => {
  const result = {
    props: {},
    type: element.tagName.toLowercase(),
  };
  //props
  for (let attr of element.attributes) {
    const name = attr.name === "class" ? "className" : attr.name;
    result.props[name] = attr.value;
  }
  //children
  const children = [];
  for (let node of element.childNodes) {
    if (node.nodeType === 3) children.push(node.textContent);
    else children.push(virtualize(node));
  }

  result.props.children = children.length === 1 ? children[0] : children;
  return result;
};

function render(json) {
  if (typeof json === "string") return document.createTextNode(json);

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

function virtualize(element) {
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
      // text
      children.push(node.textContent);
    else children.push(virtualize(node));
  }

  result.props.children = children.length === 1 ? children[0] : children;
  return result;
}

function render(object) {
  if (typeof object === "string") return document.createTextNode(object);

  const {
    type,
    props: { children, ...attrs },
  } = object;
  const element = document.createElement(type);

  for (let [att, value] of Object.entries(attrs)) element[att] = value;
  const childrenArr = Array.isArray(children) ? children : [children];

  for (let child of childrenArr) element.append(render(child));
  return element;
}

const dwaijd = (state, element) => {
  element.value = state.value;
  Object.defineProperty(state, "value", {
    get() {
      return element.value;
    },
    set(new_value) {
      element.value = new_value;
      return;
    },
  });

  element.addEventListener(
    "change",
    (event) => (state.value = event.target.value)
  );
};

const aiwdiawd = (state, element) => {
  element.value = state.value;
  Object.defineProperty(state, "value", {
    set(new_value) {
      element.value = new_value;
      return;
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

function virtualize(element) {
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
    if (childNodes === 3)
      // text
      children.push(node.textContent);
    else children.push(virtualize(node));
  }
  result.props.children = children.length === 1 ? children[0] : children;
  return result;
}

function vereiad(element) {
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
    else children.push(vereiad(node));
  }
  result.props.children = children.length === 1 ? children[0] : children;
  return result;
}

function render(object) {
  if (typeof object === "string") return document.createTextNode(object);

  const {
    type,
    props: { children, ...attrs },
  } = object;
  const element = document.createElement(type);

  for (let [att, value] of Object.entries(attrs)) element[att] = value;

  const childrenArr = Array.isArray(children) ? children : [children];
  for (let child of childrenArr) element.append(render(child));

  return element;
}
