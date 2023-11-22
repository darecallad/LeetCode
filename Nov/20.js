// regular solution
const flat = (arr, depth = 1) => {
  const result = [];
  for (let item of arr) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flat(item, depth - 1));
    } else result.push(item);
  }
  return result;
};

// the last example our run time is O(n * d)
// however by using ... we need to repeat copy the prev array
// so here is the way we can reduce the run time bit

const flaten = (arr, depth = 1) => {
  const result = [];
  const stack = arr.map((item) => [item, depth]);

  while (stack.length) {
    const [item, depth] = stack.pop();
    if (Array.isArray(item) && depth > 0) {
      stack.push(...item.map((subItem) => [subItem, depth - 1]));
    } else result.push(item);
  }
  return result.reverse();
};

// this solution can prevent recursive calling function
// however run time is still the same but it should be faster

// here are some edge cases that we need to consider about
// first. the Array size is too big or the depth is too deep

const maxSize = 1000;
const maxDepth = 100;

if (arr.length > maxSize || depth > maxDepth) {
  throw new Error();
}
// solution is that we can assign the maxSize and maxDepth for the function
// that won't go too far so i won,t affect our run time

// the other edge case would be circular refence

let a = [];
a[0] = a; // a 中包含對自身的引用
flat(a, 2); // 這將無法處理循環引用

// to solve this kinda problem that we need to using WeakSet and mark the target that we have already visited
function flat(arr, depth = 1) {
  const seen = new WeakSet();

  function innerFunction(arr, d) {
    return arr.reduce((acc, item) => {
      if (seen.has(item)) {
        return acc;
      }
      if (Array.isArray(item)) {
        seen.add(item);
        if (d > 0) acc.push(...innerFunction(item, d - 1));
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
  }
  return innerFunction(arr, depth);
}

console.log(flat([1, [2, 2, [3, 4, [5]]], []], 1));

// another one is when we need to keep empty array
// that case we need to specific to store the empty array for future use

// the last one I think was about calling other function / class
// example
const arr = [1, new MyCurstomerObject([2, 3]), [4, 5]];

// in this case we give other parmeter to deal with it
// like
class MyCustomerObject {
  constructor(data) {
    this.data = data;
  }
  get() {
    return this.data;
  }
}

function curstomHandler(obj) {
  if (obj instanceof MyCustomerObject) {
    return obj.get();
  }
  return obj;
}
function flatten(arr, depth = 1, curstomHandler) {}

// after that we can do
const flatArray = flatten(arr, depth, curstomHandler);

const debounce = (func, wait) => {
  let timer = null;
  return function (...args) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};

// the debounce run time should depond on the func run time;
// and here are some edge case like if we want to apply debounce after first init
// so here we can do apply first imm

function deboundaw(func, wait, imm = false) {
  let timer = null;
  return function (...args) {
    const least = () => {
      timer = null;
      if (!imm) func.apply(this, args);
    };

    const callNow = imm && !timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(least, wait);
    if (callNow) func.apply(this, args);
  };
}

// and we also need some case that we might need to cancle the debouns
// like we add the cancle function to use

function debe(func, wait) {
  let timer = null;
  function ddd(...args) {
    window.clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  }

  ddd.cancle = () => window.clearTimeout(timer);
  return ddd;
}

// to understand debounce that we need to start build a basic debounce function
function debounce(func, wait) {
  let timer = null;
  return function (...args) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

// after that we have some beofre we keep going
// first that we need init the first debounce after first init action

function immde(func, wait, imm = false) {
  let timer = null;
  return function (...args) {
    const least = () => {
      timer = null;
      if (!imm) func.apply(this, args);
    };
    const callNow = imm && !timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(least, wait);
    if (callNow) func.apply(this, args);
  };
}

// and also we need to consider that we might need to stop during the time

function abccc(func, wait, imm = false) {
  let timer = null;
  function bebounced(...args) {
    const least = () => {
      if (!imm) func.apply(this, args);
      timer = null;
    };
    const firstCall = imm && !timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(least, wait);
    if (firstCall) func.apply(this, args);
  }

  bebounced.cancle = () => {
    window.clearTimeout(timer);
  };
  return bebounced;
}

// more over we caould do some debounce with leading, trailing
// however leading is equal the imm I created early

function dewithfunc(func, wait, option = { leading: false, trailing: true }) {
  let timer = null;
  let { leading, trailing } = option;
  return function debounced(...args) {
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

    cancle = () => {
      window.clearTimeout(timer);
    };
  };
}

// back to question first basic debouced that need to
// consider too many if
// so we starting with basic one

function basic(func, wait) {
  let timer = null;
  return function (...args) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

// so we need to consider with leading and trailing

function otherbe(func, wait, option = { leading: true, trailing: false }) {
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

    cancle = () => {
      window.clearTimeout(timer);
    };
  };
}

// after this we have test
const sub = otherbe(() => console.log("Hello"), 2000);

//next we are doing throttle function
// starting with basic

function throttle(func, wait) {
  let timer = null;
  let lastThis = null;
  let lastArgs = null;

  const invokeFUnction = () => {
    if (lastArgs) {
      func.apply(lastThis, lastArgs);
      lastThis = null;
      lastArgs = null;
      timer = window.setTimeout(invokeFUnction, wait);
    } else timer = null;
  };

  return function (...args) {
    if (!timer) {
      func.apply(this, args);
      timer = window.setTimeout(invokeFUnction, wait);
    } else {
      lastArgs = args;
      lastThis = this;
    }
  };
}

const flat = (arr, depth = 1) => {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr) && depth > 0) {
      acc.push(...flat(curr, depth - 1));
    } else acc.push(curr);

    return acc;
  }, []);
};

// so here is flat function we made
// and first the run time is O(n * d)

// for impoving our run time that we can change
// it to normal irelia

const flatten = (arr, depth = 1) => {
  const stack = arr.map((item) => [item, depth]);
  const result = [];

  while (stack.length) {
    const [top, d] = stack.pop();
    if (Array.isArray(top) && d > 0) {
      stack.push(...top.map((subItem) => [subItem, d - 1]));
    } else result.push(top);
  }

  return result.reverse();
};

// since the we only need to go tho the array once
// the run time should close to O(n)

// however there are some edge cases that we need to consider about
// first is the Array Size too big or too deep for depths

const flatten = (arr, depth = 1) => {
  const maxSize = 1000;
  const maxDepth = 1000;
  if (arr.length > maxSize || depth > maxDepth) throw new Error();
  const stack = arr.map((item) => [item, depth]);
  const result = [];

  while (stack.length) {
    const [top, d] = stack.pop();
    if (Array.isArray(top) && d > 0) {
      stack.push(...top.map((subItem) => [subItem, d - 1]));
    } else result.push(top);
  }

  return result.reverse();
};

// and the other is to control
// a[0] = a;
// flatten (a,2); issue

const flatten = (arr, depth = 1) => {
  const maxSize = 1000;
  const maxDepth = 1000;
  if (arr.length > maxSize || depth > maxDepth) throw new Error();

  const seen = new WeakSet();

  const stack = arr.map((item) => [item, depth]);
  const result = [];

  while (stack.length) {
    const [top, d] = stack.pop();

    if (Array.isArray(top)) {
      if (seen.has(top)) continue;
      seen.add(top);

      if (d > 0) {
        for (let i = top.length - 1; i >= 0; i--) {
          stack.push([top[i], d - 1]);
        }
      } else result.push(top);
    } else result.push(top);
  }

  return result;
};

// flat
function flat(arr, depth = 1) {
  //recursive
  const result = [];
  for (let item of arr) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flat(item, depth - 1));
    } else result.push(item);
  }
  return result;
}

// O(n * d)
function flatten(arr, depth = 1) {
  const result = [];
  const stack = arr.map((item) => [item, depth]);

  while (stack.length) {
    const [top, d] = stack.pop();
    // top.length === 0 empty array
    if (Array.isArray(top) && d > 0) {
      stack.push(...top.map((subItem) => [subItem, d - 1]));
    } else result.push(top);
  }
  return result.reverse();
}

// compare between two approach here that first one recursive way
// space O(d) and the second one O(n)
// and we also need to consider if we get an empty Array
// so if we meet empty we should keep in and store as [] array
// moreOver compare to the orginal array.flat function that
// custom flat function should give more flexibility

// MoreOver
// if we meet prameter like Date, Object that we should keep them there
// and if the array size or depth too big/deep we can consider to split
// it and reduce the memory

// if we meet function that should we handle in flat function?
// I think we should see it as normal element inside the array and not handle it
// or we can support callback function in flat like array.map();

// and the other case should consider that we get not array here
// so we check the prameter if it is not an array we throe an Error

// and also we need to conside that if we have a async function for this
// that we can create async/await version

async function asyncFlat(arr, depth = 1) {
  const result = [];
  for (let item of arr) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...(await asyncFlat(item, depth - 1)));
    } else if (item instanceof Promist) {
      result.push(await item);
    } else result.push(item);
  }
  return result;
}

// and other thing we need to think about is
// circular reference
// we can use WeakSet object and once the item is already in WeakSet
// that we throw Error for it

function flatWithCycleCheck(arr, depth = 1, seen = new WeakSet()) {
  const result = [];
  for (let item of arr) {
    if (seen.has(item)) {
      throw new Error("Circular reference detected");
    }

    if (Array.isArray(item) && depth > 0) {
      seen.add(item);
      result.push(...flatWithCycleCheck(item, depth - 1, seen));
      seen.delete(item);
    } else {
      result.push(item);
    }
  }
  return result;
}

// debounce
function debounce(func, wait) {
  let timer = null;
  return function (...args) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
// O(1)
// consider about leading and trailing
// also we should provide cancle option

function improveDebounced(
  func,
  wait,
  option = { leading: true, trailing: true }
) {
  let timer = null;
  let { leading, trailing } = option;

  function debounced(...args) {
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
    debounced.cancle = () => {
      window.clearTimeout(timer);
      timer = null;
    };
  }

  return debounced;
}
// O(1)

// handle this context
// in this debounced function this should refer to the obj

// if func is not a function we should throw the error
// using func instanceof Function to check the func input
// or typeof

// usually debounce is prefered over throttling on seach bar
// and we should write on some testing
const sub1 = improveDebounced(() => console.log("hello"), 2000, {
  leading: true,
  trailing: true,
});
sub1.cancle();

const myObject = {
  name: "MyObject",
  showName: function () {
    console.log(this.name);
  },
};

myObject.debounceShow = improveDebounced(myObject.showName, 1000);

// throttle

function throttle(func, wait) {
  let timer = null;
  let lastArgs = null;
  let lastThis = null;

  function invokedFunction() {
    if (lastArgs) {
      func.apply(lastThis, lastArgs);
      lastArgs = null;
      lastThis = null;
      timer = window.setTimeout(invokedFunction, wait);
    } else timer = null;
  }

  return function (...args) {
    if (!timer) {
      func.apply(this, args);
      timer = window.setTimeout(invokedFunction, wait);
    } else {
      lastArgs = args;
      lastThis = this;
    }
  };
}

// for the basic throttle that run time should be O(1)
// however we need to consider about leading and trailing
// so here we can improve this

function throttleOption(
  func,
  wait,
  option = { leading: true, trailing: true }
) {
  let timer = null;
  let lastArgs = null;
  let lastThis = null;
  let { leading, trailing } = option;

  function invokeFunction() {
    if (lastArgs && trailing) {
      func.apply(lastThis, lastArgs);
      lastArgs = null;
      lastThis = null;
      timer = window.setTimeout(invokeFunction, wait);
    } else timer = null;
  }
  function innerThrottle(...args) {
    if (!timer) {
      if (leading) {
        func.apply(this, args);
      }
      timer = window.setTimeout(invokeFunction, wait);
    } else {
      lastArgs = args;
      lastThis = this;
    }

    innerThrottle.cancle = () => {
      window.clearTimeout(timer);
      timer = null;
    };
  }

  return innerThrottle;
}

const sub2 = throttleOption(() => console.log("Hey"), 1000);

// in this case that throttle more use on like resize, scroll event
// and debounce using for like keyboard typing

// Throttling: Regulates the rate of function calls.
// Debouncing: Delays function calls until there's a pause in the events.

function decode(message) {
  if (!message.length || !message[0].length) return "";

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

// invalid input
// give an input validation checks before starting it

function firstBadVersion(isBad) {
  return (version) => {
    let left = 1;
    let right = version;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (isBad(mid)) right = mid;
      else left = mid + 1;
    }
    return isBad(left) ? left : -1;
  };
}

// the problem we using binary search which is faster than linear search
// to prevent overflow that we can use (left + right) /2 => left + (right - left) /2
// for the test

console.log(firstBadVersion((i) => i >= 4)(100));
// test should have singal bad version, all good version, bad at beginning / middle / end
// however smaller data linear should be faster

// class Event Emitter
class EventEmitter {
  constructor() {
    this.watcher = new Map();
  }
  subscribe(eventName, callback) {
    //O(1) O(n) n = number of callback
    // let watcher = this.watcher;
    // if (!watcher.has(eventName)) watcher.set(eventName, [callback]);
    // else watcher.set(eventName, [...watcher.get(eventName), callback]);

    let callbacks = this.watcher.get(eventName) || [];
    if (!callbacks.includes(callback)) callbacks.push(callback);

    this.watcher.set(eventName, [...callbacks, callback]); // js engines optimize
    // space O(m * n)
    return {
      release: function () {
        // watcher.get(eventName).map((item, index) => {
        //   if (item == callback) watcher.get(eventName).splice(index, 1);
        //   else return item;
        // });
        watcher.set(
          eventName,
          watcher.get(eventName).filter((item) => item !== callback)
        );
      },
    };
  }
  emit(eventName, ...args) {
    if (this.watcher.has(eventName)) {
      this.watcher.get(eventName).forEach((call) => {
        try {
          call.apply(this, args); // add error handling
        } catch (error) {
          console.error("Error in callback", error);
        }
      });
    }
  }
}

class EmitterClass {
  constructor() {
    this.watcher = new Map();
  }

  subscribe(eventName, callback) {
    // dup event name
    let callbacks = this.watcher.get(eventName) || [];
    this.watcher.set(eventName, [...callbacks, callback]); // js enginer optimice

    return {
      release: () => {
        this.watcher.get(eventName).map((item, index) => {
          if (item == callback) this.watcher.get(eventName).splice(index, 1);
          else return item;
        });
      },
    };
  }
  emit(eventName, ...args) {
    if (this.watcher.has(eventName))
      this.watcher.get(eventName).forEach((callback) => {
        try {
          callback.apply(this, args);
        } catch (error) {
          console.error("Error in callback", error);
        }
      });
  }
}

class ewitej {
  constructor() {
    this.watcher = new Map();
  }
  subscribe(eventName, callback) {
    let watcher = this.watcher;
    let callbacks = watcher.get(eventName) || [];
    watcher.set(eventName, [...callbacks, callback]);

    return {
      release: () => {
        // let found = false;
        // const filteredCallbacks = this.watcher.get(eventName).filter((item) => {
        //   if (!found && item === callback) {
        //     found = true;
        //     return false;
        //   }
        //   return true;
        // });
        // this.watcher.set(eventName, filteredCallbacks);
        let found = false;
        const filterCallbacks = watcher.get(eventName).filter((item) => {
          if (item === callback && !found) {
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
          console.error("Error in callback", error);
        }
      });
    }
  }
}

const emmiter = new EventEmitter();
emmiter.subscribe("myEvent", listener1);
const sub22 = emmiter.subscribe("myEvent", listener2);
emmiter.subscribe("myEvent", listener3);
sub22.release();
