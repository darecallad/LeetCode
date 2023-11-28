function clearAlltimeout() {
  const orginalSetTimeout = setTimeout;
  const orginalClearTimeout = clearTimeout;
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
    const timerId = orginalSetTimeout(callbackWrapper, time);
    timers.add(timerId);
    return timerId;
  };

  window.clearTimeout = (id) => {
    orginalClearTimeout(id);
    timers.delete(id);
  };
}

function timeee() {
  const originSetTimeout = setTimeout;
  const originClearTimeout = clearTimeout;
  const timers = new Set();

  window.clearAllTimeout = () => {
    for (let timerId of timers) clearTimeout(timerId);
  };

  window.setTimeout = (callback, time, ...args) => {
    const timerWrapper = () => {
      callback(...args);
      timers.delete(timerId);
    };
    const timerId = originSetTimeout(timerWrapper, time);
    timers.add(timerId);
    return timerId;
  };

  window.clearTimeout = (id) => {
    originClearTimeout(id);
    timers.delete(id);
  };
}

function awdlkjwakd() {
  const originalSetTimeout = setTimeout;
  const originalClearTimeout = clearTimeout;
  const timers = new Set();

  window.clearAllTimeout = () => {
    for (let timerId of timers) clearTimeout(timerId);
  };

  window.setTimeout = (callback, time, ...args) => {
    const callbackWrapper = () => {
      callback(...args);
      timers.delete(timerId);
    };
    const timerId = originalSetTimeout(callbackWrapper, time);
    timers.add(timerId);
    return timerId;
  };

  window.clearTimeout = (id) => {
    originalClearTimeout(id);
    timers.delete(id);
  };
}

function aiwjdiwad() {
  const originalSetTimeout = setTimeout;
  const originalClearTimeout = clearTimeout;
  const timers = new Set();

  window.clearAllTimeout = () => {
    for (let timerId of timers) {
      clearTimeout(timerId);
    }
  };

  window.setTimeout = (callback, wait, ...args) => {
    const callbackWrapper = () => {
      callback(...args);
      timers.delete(timerId);
    };
    const timerId = originalSetTimeout(callbackWrapper, wait);
    timers.add(timerId);
    return timerId;
  };

  window.clearTimeout = (id) => {
    originalClearTimeout(id);
    timers.delete(id);
  };
}

function aidwjawijd() {
  const orginalSetTimeout = setTimeout;
  const originalClearTimeout = clearTimeout;
  const timers = new Set();

  window.clearAllTimeout = () => {
    for (let timerId of timers) {
      clearTimeout(timerId);
    }
  };

  window.setTimeout = (callback, wait, ...args) => {
    const callbackWrapper = () => {
      callback(...args);
      timers.delete(timerId);
    };
    const timerId = orginalSetTimeout(callbackWrapper, wait);
    timers.add(timerId);
    return timerId;
  };

  window.clearTimeout = (id) => {
    originalClearTimeout(id);
    timers.delete(id);
  };
}

// observable
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

function mySqrt(x) {
  if (x < 0 || isNaN(x) || typeof x !== "number") return NaN;
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

// float
// when x  = float

function getNthNumber(n) {
  let result = "1";
  for (let i = 1; i < n; i++) {
    result = helper(result);
  }
  return result;
}

function helper(number) {
  let Nth = "";
  let count = 1;

  for (let i = 0; i < number.length; i++) {
    if (number[i] === number[i + 1]) {
      count++;
    } else {
      Nth += count.toString() + number[i];
      count = 1;
    }
  }
  return Nth;
}

// roman Integer

function romanInteger(str) {
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
    const current = map[str[i]];
    const next = map[str[i + 1]];

    if (next > current) res -= current;
    else res += current;
  }
  return res;
}

// curry
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else return curried.bind(this, ...args);
  };
}

function withplace(func) {
  return function curried(...args) {
    const complete =
      args.length >= func.length &&
      args.slice(0, func.length).includes(curry.placeholder);

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
    const complete =
      args.length >= func.length &&
      args.slice(0, func.length).includes(curry.placeholder);

    if (complete) func.apply(this, args);

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

function move(element, distand, duration) {
  let interval = 10;
  let step = distand / (duration / interval);
  let position = 0;

  function keepMove() {
    position = position + step;
    element.style.left = position + "px";

    if (distand < position) {
      window.setTimeout(keepMove, interval);
    }
  }
  keepMove();
}

const bubbleSort = (arr) => {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return arr;
};

Array.prototype.myReduce = function (...args) {
  const hasInitiaValue = args.length > 1;
  if (!hasInitiaValue && this.length === 0) throw new Error();

  let result = hasInitiaValue ? args[1] : this[0];

  for (let i = hasInitiaValue ? 0 : 1; i < this.length; i++) {
    result = args[0](result, this[i], i, this);
  }

  return result;
};

Array.prototype.myRRR = function (...args) {
  let initialValue = args.length > 1;
  if (!initialValue && arg.length === 0) throw new Error();

  let result = initialValue ? args[1] : this[0];

  for (let i = initialValue ? 0 : 1; i < this.length; i++) {
    result = args[0](result, this[i], i, this);
  }

  return result;
};

Array.prototype.myReducee = function (...args) {
  let initialValue = args.length > 1;
  if (!initialValue && this.length === 0) throw new Error();

  let result = initialValue ? args[1] : this[0];

  for (let i = initialValue ? 0 : 1; i < this.length; i++) {
    result = args[0](result, this[i], i, this);
  }
  return result;
};

Array.prototype.mapp = function (callback, thisArg) {
  const length = this.length;
  const result = new Array(length);

  for (let i = 0; i < length; i++) {
    if (i in this) {
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }

  return result;
};

Array.prototype.mapp = function (callback, thisArg) {
  const length = this.length;
  const result = new Array(length);

  for (let i = 0; i < length; i++) {
    if (i in this) result[i] = callback.call(thisArg, this[i], i, this);
  }
  return result;
};

Array.prototype.myMap = function (callback, thisArg) {
  const length = this.length;
  const result = new Array(length);

  for (let i = 0; i < length; i++) {
    if (i in this) {
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }
  return result;
};

Array.prototype.myMap = function (callback, thisArg) {
  const length = this.length;
  const result = new Array(length);

  for (let i = 0; i < length; i++) {
    if (i in this) {
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }
  return result;
};

Array.prototype.myReducer = function (...args) {
  const initialValue = args.length > 1;
  if (!initialValue && this.length === 0) throw new Error();

  const result = initialValue ? args[1] : this[0];

  for (let i = initialValue ? 0 : 1; i < this.length; i++) {
    result = arg[0](result, this[i], i, this);
  }
  return result;
};

function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const j = i + Math.floor(Math.random() * (arr.length - i));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function shuffler(arr) {
  for (let i = 0; i < arr.length; i++) {
    const j = i + Math.floor(Math.random() * (arr.length - i));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const j = i + Math.floor(Math.random() * (arr.length - i));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function undefinedToNull(arg) {
  for (key in arg) {
    const val = arg[key];
    if (typeof val === "object" || Array.isArray(val)) {
      arg[key] = undefinedToNull(val);
    } else if (val === undefined) {
      arg[key] = null;
    }
  }
  return arg;
}

function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const j = i + Math.floor(Math.random() * (arr.length - i));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function undefinedToNull(arg) {
  for (key in arg) {
    const val = arg[key];
    if (typeof val === "object" || Array.isArray(val)) {
      arg[key] = undefinedToNull(val);
    } else if (val === undefined) {
      arg[key] = null;
    }
  }
  return arg;
}

function undefinedToNull(arg) {
  for (let key in arg) {
    const val = arg[key];
    if (typeof val === "object" || Array.isArray(val)) {
      undefinedToNull(val);
    } else if (val === undefined) {
      arg[key] = null;
    }
  }
  return arg;
}

function update(data, command) {
  for (const [key, value] of Object.entries(command)) {
    switch (key) {
      case "$push":
        return [...data, ...value];
      case "$set":
        return value;
      case "$merge":
        if (!(data instanceof Object)) {
          throw Error("bad merge");
        }
        return { ...data, ...value };
      case "$apply":
        return value(data);
      default:
        if (data instanceof Array) {
          const res = [...data];
          res[key] = update(data[key], value);
          return res;
        } else {
          return {
            ...data,
            [key]: update(data[key], value),
          };
        }
    }
  }
}

function updateee(data, command) {
  for (const [key, value] of Object.entries(command)) {
    switch (key) {
      case "$push":
        return [...data, ...value];
      case "$set":
        return value;
      case "$merge":
        if (!(data instanceof Object)) throw Error("bad merge");
        return { ...data, ...value };
      case "$apply":
        return value(data);
      default:
        if (data instanceof Array) {
          const res = [...data];
          res[key] = update(data[key], value);
          return res;
        } else {
          return {
            ...data,
            [key]: update(data[key], value),
          };
        }
    }
  }
}

function update(data, command) {
  for (let [key, value] of Object.entries(command)) {
    switch (key) {
      case "$push":
        return [...data, ...value];
      case "$set":
        return value;
      case "$merge":
        if (!(data instanceof Object)) throw Error("Bad Merge");
        return { ...data, ...value };
      case "$apply":
        return value(data);
      default:
        if (data instanceof Array) {
          const res = [...data];
          res[key] = update(data[key], value);
          return res;
        } else {
          return {
            ...data,
            [key]: update(data(key), value),
          };
        }
    }
  }
}

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(element) {
    // for (let i = 0; i < this.stack1.size(); i++) {
    //   this.stack2.push(this.stack1.pop());
    // }

    // this.stack1.push(element);

    // for (let i = 0; i < this.stack2.size(); i++) {
    //   this.stack1.push(this.stack2.pop());
    // }
    this.stack1.push(element); //O(1)
  }

  peek() {
    return this.stack1.peek(); //O(1)
  }
  size() {
    return this.stack1.size(); //O(1)
  }
  dequeu() {
    if (this.stack2.size() === 0) {
      while (this.stack1.size()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop(); //O(1) avg O(n) worst case
  }
}

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(element) {
    this.stack1.push(element);
  }

  transferStacks() {
    while (this.stack1.size()) {
      this.stack2.push(this.stack1.pop());
    }
  }

  dequeue() {
    if (this.stack2.size() === 0) {
      this.transferStacks();
    }
    return this.stack2.pop();
  }

  peek() {
    if (this.stack2.size() === 0) {
      this.transferStacks();
    }
    return this.stack2.peek();
  }

  size() {
    return this.stack1.size() + this.stack2.size();
  }
}
