function objectAssign(target, ...sources) {
  if (target == null) {
    throw Error();
  }

  target = Object(target);

  for (let source of sources) {
    if (source == null) continue;

    merge(Object.keys(source), source);
    merge(Object.getOwnPropertySymbols(source), source);
  }

  function merge(keys = [], currSource) {
    for (let key of keys) {
      target[key] = currSource[key];
      if (target[key] !== currSource[key]) {
        throw Error();
      }
    }
  }

  return target;
}

function merge(ArrayList) {
  let length = ArrayList.length;
  if (length === 0) return [];
  if (length === 1) return ArrayList[0];
  if (length === 2) return helper(ArrayList[0], ArrayList[1]);

  let mid = Math.floor(length / 2);
  let left = merge(ArrayList.slice(0, mid));
  let right = merge(ArrayList.slice(mid, length));

  return helper(left, right);
}

function helper(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (i >= arr1.length || arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }
  return result;
}

function merge(arrList) {
  let length = arrList.length;
  if (length === 0) return [];
  if (length === 1) return arrList[0];
  if (length === 2) return helper(arrList[0], arrList[1]);

  let mid = Math.floor(length / 2);
  let left = merge(arrList.slice(0, mid));
  let right = merge(arrList.slice(mid, length));

  return helper(left, right);
}

function helper(arr1, arr2) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (i >= arr1.length || arr1[i] > arr2[j]) {
      result.push(arr2[j++]);
    } else result.push(arr1[i++]);
  }
  return result;
}

function check(str) {
  const stack = [];

  for (const char of str) {
    if (char !== ")") {
      stack.push(char);
    } else {
      let word = "";
      let count = "";

      while (stack.length && stack[stack.length - 1] !== "(") {
        word = stack.pop() + word;
      }
      stack.pop();

      while (stack.length && isNumber(stack[stack.length - 1])) {
        count = stack.pop() + count;
      }
      stack.push(word.repeat(Number(count)));
    }
  }
  return stack.join("");
}

function isNumber(str) {
  return !isNaN(parseFloat(str)) && isFinite(Number(str));
}

function isNumber(str) {
  return !isNaN(str) && isFinite(Number(str));
}

function compare(str) {
  const stack = [];
  for (const char of str) {
    if (char !== ")") {
      stack.push(char);
    } else {
      let word = "";
      let count = "";

      while (stack.length && stack[stack.length - 1] !== "(") {
        word = stack.pop() + word;
      }
      stack.pop();
      while (stack.length && isNumber(stack[stack.length - 1])) {
        count = stack.pop() + count;
      }
      stack.push(word.repeat(Number(count)));
    }
  }
  return stack.join("");
}

function all(promise) {
  const op = [];
  let promisesToComplete = promise.length;

  return new Promise((res, rej) => {
    if (!promise.length) res([]);

    for (let i in promise) {
      Promise.resolve(promise[i])
        .then((data) => {
          op[i] = data;
          if (!--promisesToComplete) res(op);
        })
        .catch(rej);
    }
  });
}

function all(promise) {
  let op = [];
  let promiseToComplete = promise.length;

  return new Promise((res, rej) => {
    if (!promise.length) res([]);

    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((data) => {
          op[i] = data;
          if (!--promiseToComplete) res(op);
        })
        .catch(rej);
    });
  });
}

function all(promises) {
  let op = [];
  let promiseToComplete = promises.length;

  return new Promise((res, rej) => {
    if (!promises.length) res([]);

    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((data) => {
          op[i] = data;
          if (!--promiseToComplete) res(op);
        })
        .catch(rej);
    });
  });
}

function validate(str) {
  // your code here
  const stack = [];
  for (let char of str) {
    if (char === "(" || char === "[" || char === "{") stack.push(char);
    else {
      const temp = stack.pop();
      if (
        (char === ")" && temp !== "(") ||
        (char === "]" && temp !== "[") ||
        (char === "}" && temp !== "{")
      )
        return false;
    }
  }

  return !stack.length;
}

const map = new Map();
let globalId = 0;

function mySetInterval(func, delay, period) {
  let count = 0;
  let id = globalId++;

  function run() {
    let _id = setTimeout(() => {
      func();
      count++;
      run();
    }, delay + period * count);

    map.set(id, _id);
  }

  run();

  return id;
}

/**
 * @param { number } id
 */
function myClearInterval(id) {
  clearTimeout(map.get(id));
  map.delete(id);
}

function get(source, path, defaultValue = undefined) {
  // your code here
  const props = Array.isArray(path)
    ? path
    : path.replaceAll("[", ".").replaceAll("]", "").split(".");
  let curNode = source;
  for (let i = 0; i < props.length; i++) {
    let k = props[i];
    if (curNode[k] === undefined) return defaultValue;
    if (i === props.length - 1) return curNode[k];
    else curNode = curNode[k];
  }
}

function longestUniqueSubstr(str) {
  // your code here
  const map = new Map();
  let count = -1;
  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
    count++;
    if (map.get(char) === 2) return str.slice(0, count);
  }
  return str;
}
