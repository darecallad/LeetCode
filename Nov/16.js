const flat = (arr, depth = 1) => {
  const result = [];
  for (let item of arr) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flat(item, depth - 1));
    } else result.push(item);
  }
  return result;
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

function testfunction() {
  console.log("print the time at", new Date().toISOString());
}

const test123 = throttle(testfunction, 2000);
test123();
test123();

function devounce(func, wait, option = { leading: false, trailing: true }) {
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
      }
      timer = null;
    }, wait);
  };
}

const throttle = (func, wait) => {
  let timer = null;
  let lastArgs = null;
  let lastThis = null;

  const setTimer = () => {
    if (lastArgs) {
      func.apply(lastThis, lastArgs);
      lastArgs = null;
      lastThis = null;
      timer = window.setTimeout(setTimer, wait);
    } else timer = null;
  };
  return function (...args) {
    if (!timer) {
      func.apply(this, args);
      timer = window.setTimeout(setTimer, wait);
    } else {
      lastArgs = args;
      lastThis = this;
    }
  };
};

function throttleEx(func, wait, option = { leading: true, trailing: true }) {
  let timer = null;
  let lastArgs = null;
  let lastThis = null;
  let { leading, trailing } = option;

  const setTimer = () => {
    if (lastArgs && trailing) {
      func.apply(lastThis, lastArgs);
      lastArgs = null;
      lastThis = null;
      timer = window.setTimeout(setTimer, wait);
    } else timer = null;
  };

  return function (...args) {
    if (!timer) {
      if (leading) {
        func.apply(this, args);
      }
      timer = window.setTimeout(setTimer, wait);
    } else {
      lastArgs = args;
      lastThis = this;
    }
  };
}

const virtualize = (element) => {
  const result = {
    type: element.tagName.toLowerCase(),
    peops: {},
  };
  //props
  for (let att of element.attributes) {
    const name = att.name === "class" ? "className" : att.name;
    result.peops[name] = att.value;
  }
  //children
  const children = [];
  for (let node of element.childNodes) {
    if (node.nodeType === 3)
      // text
      children.push(node.textContent);
    children.push(virtualize(node));
  }
  // return
  result.peops.children = children.length === 1 ? children[0] : children;
  return result;
};

const render = (json) => {
  if (typeof json === "string") return document.createTextNode(json);
  let {
    type,
    props: { children, ...attrs },
  } = json;
  // deal with type
  let element = document.createElement(type);
  // deal with attrs
  for (let [att, value] of Object.entries(attrs)) element[att] = value;
  // deal children
  const childrenArr = Array.isArray(children) ? children : [children];
  // append
  for (let child of childrenArr) element.append(render(child));

  return element;
};

const memo = (func, resolver) => {
  const cache = new Map();
  return function (...args) {
    const key = resolver ? resolver(...args) : args.join("_");
    const cacheResult = cache.get(key);

    if (cacheResult?.has(this)) return cacheResult.get(this);

    const result = func.apply(this, args);
    if (!cacheResult) {
      cache.set(key, new Map([[this, result]]));
    } else cacheResult.set(key, result);
    return result;
  };
};
function memo(func, resolver) {
  const cache = new Map();
  return function (...args) {
    const key = resolver ? resolver(...args) : args.join("_");
    const cacheResult = cache.get(key);

    if (cacheResult?.has(this)) return cacheResult.get(this);

    const result = func.apply(this, args);
    if (!cacheResult) {
      cache.set(key, new Map([[this, result]]));
    } else cacheResult.set(key, result);

    return result;
  };
}

const mooooe = (element, distance, duration) => {
  let position = 0;
  let interval = 10;
  let step = distance / (duration / interval);

  function move() {
    position = position + step;
    element.style.left = position + "px";

    if (position < distance) {
      setTimeout(move, interval);
    }
  }
  move();
};

const momofem = (element, distance, duration) => {
  let position = 0;
  let interval = 10;
  let step = distance / (duration / interval);

  let intervalId = setInterval(function () {
    position = position + step;
    element.style.left = position + "px";

    if (position >= distance) {
      clearInterval(intervalId);
    }
  }, interval);
};
