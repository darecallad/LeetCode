Array.prototype.customFlat = function (depth = 1) {
  const result = [];

  const flatten = (arr, d) => {
    for (let item of arr) {
      if (Array.isArray(item)) flatten(item, d - 1);
      else result.push(item);
    }
  };

  flatten(this, depth);
  return result;
};

// time O(n * d) n would be the number of element inside array, d = depth
// space( n + d)

Array.prototype.custom = function (depth = 1) {
  const stack = [
    ...this.map((item) => {
      item, depth;
    }),
  ];
  const reuslt = [];

  while (stack.length) {
    const { item, depth } = stack.pop();

    if (Array.isArray(item) && depth > 0) {
      stack.push(
        ...item.map((subItem) => {
          item: subItem, depth - 1;
        })
      );
    } else result.push(item);
  }

  return result.reverse();
};

// time O(n)
// space O(n)

Array.prototype.customFlattenRe = function (depth = 1) {
  const result = [];
  const flatten = (arr, d) => {
    for (let item of arr) {
      if (Array.isArray(item)) flatten(item, d - 1);
      else result.push(item);
    }
  };
  flatten(this, depth);
  return result;
};

// time O(n * d ) n = number of element inside array and D = depth;
// space O (n + d);

Array.prototype.customFlattenitera = function (depth = 1) {
  const stack = [
    ...this.map((item) => {
      item, depth;
    }),
  ];
  const result = [];

  while (stack.length) {
    const { item, depth } = stack.pop();

    if (Array.isArray(item) && depth > 0) {
      stack.push(
        ...item.map((subItem) => {
          item: subItem, depth - 1;
        })
      );
    } else result.push(item);
  }

  return result.reverse();
};

// time O(n)
// space O(n)

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);

    // set new time out
    timeoutId = setTimeout(() => {
      func.apply(this.args);
    }, delay);
  };
}

// time O(1) spaceO(1)

function deboucesss(func, delay) {
  let timeoutId;

  // clean time out
  return function (...args) {
    clearTimeout(timeoutId);

    // set new time out
    timeoutId = setTimeout(() => {
      func.apply(this.args);
    }, delay);
  };
}

Array.prototype.customF = function (depth = 1) {
  const result = [];
  const flatten = (arr, d) => {
    for (let item of arr) {
      if (Array.isArray(item) && depth > 0) flatten(item, depth - 1);
      else result.push(item);
    }
  };
  flatten(this, depth);
  return result;
};
// time O ( n * d);
// space O(n + d);

Array.prototype.curstomFF = function (depth = 1) {
  const stack = [
    ...this.map((item) => {
      item, depth;
    }),
  ];

  const result = [];

  while (stack.length) {
    const { item, depth } = stack.pop();
    if (Array.isArray(item) && depth > 0) {
      stack.push(
        ...item.map((subItem) => {
          item: subItem, depth - 1;
        })
      );
    } else result.push(item);
  }

  return result.reverse();
};

// time O(n) space O(n);

function deboucesssss(func, delay) {
  let timeoutId;
  return function (...args) {
    //celan time out
    clearTimeout(timeoutId);

    // set new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// time O(1) space O(1)

function de(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function decode(message) {
  if (!message.length || !message[0].length) return "";
  let i = 0,
    j = 0,
    top = true,
    result = "";
  while (j < message[0].length) {
    if (top) {
      result = result + message[i++][j++];
    } else result = result + message[i--][j++];

    if (i === message.length - 1) top = false;
    if (i === 0) top = true;
  }
  return result;
}

function decode(message) {
  if (!message.length || !message[0].length) return "";

  let top = true,
    i = 0,
    j = 0,
    result = "";

  while (j < message[0].length) {
    if (top) {
      result += message[i++][j++];
    } else result += message[i--][j++];

    if (i === message.length - 1) top = false;
    if (i === 0) top = true;
  }
  return result;
}

function deeeeeee(message) {
  if (!message.length || !message[0].length) return "";

  let i = 0,
    j = 0,
    res = "",
    top = true;

  while (j < message[0].length) {
    if (top) res += message[i++][j++];
    else res += message[i--][j++];

    if (i === message.length - 1) top = false;
    if (i === 0) top = true;
  }

  return res;
}

// time O(n) space O(1)

const firstBad = (isBad) => {
  return (version) => {
    let left = 0;
    let right = version;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (isBad(mid)) right = mid - 1;
      else left = mid + 1;
    }
    return isBad(left) ? left : -1;
  };
};

// time O (logn)
// space O(1)

const firstBadVersion = (isBad) => {
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
};

const badVersion = (isBad) => {
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
};
