const faat = (arr, depth = 1) => {
  const result = [];
  const flatten = (ar, d) => {
    for (let i of ar) {
      if (Array.isArray(i) && d > 1) {
        flatten(i, d - 1);
      } else result.push(i);
    }
  };
  flatten(arr, depth);
  return result;
};

function excludeItems(items, excludes) {
  let map = new Map();
  let exclude_keys = new Set();

  excludes.forEach(({ k, v }) => {
    exclude_keys.add(k);
    if (!map.has(k)) {
      map.set(k, new Set());
    }
    map.get(k).add(v);
  });

  return items.filter((item) => {
    return [...exclude_keys].every((ex_key) => {
      return !map.get(ex_key).has(item[ex_key]);
    });
  });
}

const findCorrespondingNode = (rootA, rootB, target) => {
  if (rootA === target) return rootB;

  let path = getPath(rootA, target);

  return path.reduceRight((acc, curr, index) => {
    return acc.children[curr];
  }, rootB);
};

const getPath = (rootA, target) => {
  let path = [];

  let node = target;

  while (node !== rootA && node.parentNode) {
    // we will iterate till we reach top of the DOM tree
    const children = Array.from(node.parentNode.children); // convert HTMLCollection into Array
    path.push(children.indexOf(node)); // push index where 'node' found
    node = node.parentNode; // this will make sure we move from down to top
  }
  return path;
};

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

const mySqert = (x) => {
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
};

const sss = (x) => {
  if (x < 0 || isNaN(x) || typeof x !== "number") return NaN;
  if (x < 2) return x;

  let left = 0;
  let right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midTimesMid = mid * mid;

    if (midTimesMid === x) return mid;
    else if (midTimesMid > x) right = mid - 1;
    else left = mid + 1;
  }

  return right;
};

const getNth = (n) => {
  if (n <= 0) return "";
  let result = "1";

  for (let i = 1; i < n; i++) {
    result = getNextNumber(result);
  }
  return result;
};

const getNextNumber = (number) => {
  let nextNumber = "";
  let count = 1;

  for (let i = 0; i < number.length; i++) {
    if (number[i] === number[i + 1]) {
      count++;
    } else {
      nextNumber += count.toString() + number[i];
      count = 1;
    }
  }
  return nextNumber;
};

const getN = (x) => {
  if (x <= 0) return "";
  let result = "1";

  for (let i = 1; i < n; i++) {
    result = helper(result);
  }
  return result;
};

const helper = (n) => {
  let nextN = "";
  let count = 1;

  for (let i = 0; i < n.length; i++) {
    if (n[i] === n[i + 1]) count++;
    else {
      nextN += count.toString() + n[i];
      count = 1;
    }
  }
  return nextN;
};

const aknfgkf = (n) => {
  if (n <= 0) return "";
  let result = "1";

  for (let i = 1; i < n; i++) {
    result = helper(result);
  }

  return result;
};
