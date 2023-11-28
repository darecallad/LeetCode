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

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(element) {
    this.stack1.push(element);
  }
  transferStack() {
    while (this.stack1.size()) {
      this.stack2.push(this.stack1.pop());
    }
  }
  dequeue() {
    if (this.stack2.size() === 0) {
      this.transferStack();
    }
    return this.stack2.pop();
  }
  peek() {
    if (this.stack2.size() === 0) {
      this.transferStack();
    }
    return this.stack2.peek();
  }
  size() {
    return this.stack1.size() + this.stack2.size();
  }
}

function detectType(data) {
  if (data instanceof FileReader) return "object";
  return Object.prototype.toString
    .call(data)
    .slice(1, -1)
    .split(" ")[1]
    .toLowerCase();
}

function detectType(data) {
  if (data instanceof FileReader) return "object";
  return Object.prototype.toString
    .call(data)
    .replace(/^\[object\s(.+)\]$/, "$1")
    .toLowerCase();
}

function detectType(data) {
  if (data instanceof fileReader) return "object";
  return Object.prototype.toString
    .call(data)
    .slice(1, -1)
    .split(" ")[1]
    .toLowerCase();
}

function detectType(data) {
  if (data instanceof fileReader) return "object";
  return Object.prototype.toString
    .call(data)
    .slice(1, -1)
    .split(" ")[1]
    .toLowerCase();
}

function improve(data) {
  if (data instanceof FileReader) return "object";
  return Object.prototype.toString
    .call(data)
    .replace(/^\[object\s(.+)\]$/, "$1")
    .toLowerCase();
}

repalce(/^\[object\s(.+)\]$/, "$1");
replace(/^\[object\s(.+)\]$/, "$1");
replace(/^\[object\s(.+)\]$/, "$1");

function stringify(data) {
  if (typeof data === "bigint") {
    throw new Error("Do not know how to serialize a BigInt at JSON.stringify");
  }
  if (typeof data === "string") {
    return `"${data}"`;
  }
  if (typeof data === "function") {
    return undefined;
  }
  if (data !== data) {
    return "null";
  }
  if (data === Infinity) {
    return "null";
  }
  if (data === -Infinity) {
    return "null";
  }
  if (typeof data === "number") {
    return `${data}`;
  }
  if (typeof data === "boolean") {
    return `${data}`;
  }
  if (data === null) {
    return "null";
  }
  if (data === undefined) {
    return "null";
  }
  if (typeof data === "symbol") {
    return "null";
  }
  if (data instanceof Date) {
    return `"${data.toISOString()}"`;
  }
  if (Array.isArray(data)) {
    const arr = data.map((el) => stringify(el));
    return `[${arr.join(",")}]`;
  }
  if (typeof data === "object") {
    const arr = Object.entries(data).reduce((acc, [key, value]) => {
      if (value === undefined) {
        return acc;
      }
      acc.push(`"${key}":${stringify(value)}`);
      return acc;
    }, []);
    return `{${arr.join(",")}}`;
  }
}

function sum(num) {
  const func = function (num2) {
    return num2 ? sum(num + num2) : num;
  };

  func.valueOf = () => num;
  return func;
}

function sum(num) {
  const func = function (num2) {
    return num2 ? sum(num + num2) : num;
  };

  func.valueOf = () => num;
  return func;
}

function sum(num) {
  const func = function (num2) {
    return num2 ? sum(num + num2) : num;
  };
  func.valueOf = () => num;
  return func;
} // O(n)

function sum(num) {
  const func = function (num2) {
    if (num2 === undefined) return sum(num + num2);
    return num;
  };

  func.valueOf = () => num;
  return func;
}

function sum(num) {
  const func = function (num2) {
    return num2 ? sum(num + num2) : num;
  };
  func.valueOf = () => num;
  return func;
}

function parse(str) {
  if (str === "") {
    throw Error();
  }
  if (str[0] === "'") {
    throw Error();
  }
  if (str === "null") {
    return null;
  }
  if (str === "{}") {
    return {};
  }
  if (str === "[]") {
    return [];
  }
  if (str === "true") {
    return true;
  }
  if (str === "false") {
    return false;
  }
  if (str[0] === '"') {
    return str.slice(1, -1);
  }
  if (+str === +str) {
    return Number(str);
  }
  if (str[0] === "{") {
    return str
      .slice(1, -1)
      .split(",")
      .reduce((acc, item) => {
        const index = item.indexOf(":");
        const key = item.slice(0, index);
        const value = item.slice(index + 1);
        acc[parse(key)] = parse(value);
        return acc;
      }, {});
  }
  if (str[0] === "[") {
    return str
      .slice(1, -1)
      .split(",")
      .map((value) => parse(value));
  }
}

class PriorityQueue {
  constructor(compare) {
    this.compare = (a, b) => compare(a, b) > 0;
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  add(element) {
    this.heap.push(element);
    if (this.heap.length > 1) {
      this.moveUp(this.heap.length - 1);
    }
  }

  poll() {
    if (this.heap.length <= 1) {
      return this.heap.pop();
    }
    this.swap(0, this.heap.length - 1);
    const removed = this.heap.pop();
    if (this.heap.length > 1) {
      this.moveDown(0);
    }
    return removed;
  }

  moveDown(index) {
    if (index >= this.heap.length - 1) return;

    const child = this.getChild(index);
    if (!child) return;

    if (this.compare(this.heap[index], this.heap[child])) {
      this.swap(index, child);
      this.moveDown(child);
    }
  }

  getChild(index) {
    let left = index * 2 + 1;
    if (left >= this.heap.length) left = null;
    let right = index * 2 + 2;
    if (right >= this.heap.length) right = null;

    if (left && right) {
      return this.compare(this.heap[left], this.heap[right]) ? right : left;
    }

    if (right) return right;

    if (left) return left;
  }

  moveUp(index) {
    if (index === 0) return;

    const parent = Math.floor((index - 1) / 2);
    if (this.compare(this.heap[parent], this.heap[index])) {
      this.swap(parent, index);
      this.moveUp(parent);
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
