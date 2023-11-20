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
