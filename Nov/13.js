function throttle(func, wait, option = { leading: true, trailing: true }) {
  let { leading, trailing } = option;
  let lastArgs = null;
  let timer = null;

  const setTimer = () => {
    if (lastArgs && trailing) {
      func.apply(this, lastArgs);
      lastArgs = null;
      timer = setTimeout(setTimer, wait);
    } else {
      timer = null;
    }
  };

  return function (...args) {
    if (!timer) {
      if (leading) {
        func.apply(this, args);
      }
      timer = setTimeout(setTimer, wait);
    } else {
      lastArgs = args;
    }
  };
}

function teiafdjiaf(func, wait, option = { leading: true, trailing: true }) {
  let timer = null;
  let lastArgs = null;
  let { leading, trailing } = option;

  const setTimer = () => {
    if (lastArgs && trailing) {
      func.apply(this, lastArgs);
      lastArgs = null;
      timer = setTimeout(setTimer, wait);
    } else timer = null;
  };

  return function (...args) {
    if (!timer) {
      if (leading) {
        func.apply(this, args);
      }
      timer = setTimeout(setTimer, wait);
    } else lastArgs = args;
  };
}

function adwajidjwa(func, wait, option = { leading: true, trailing: true }) {
  let timer = null;
  let lastArgs = null;
  let { leading, trailing } = option;

  const setTimer = () => {
    if (lastArgs && trailing) {
      func.apply(this, lastArgs);
      lastArgs = null;
      timer = setTimeout(setTimer, wait);
    } else timer = null;
  };

  return function (...args) {
    if (!timer) {
      if (leading) {
        func.apply(this, args);
      }
      timer = setTimeout(setTimer, wait);
    } else lastArgs = args;
  };
}

function adkljapjdf(func, wait, option = { leading: true, trailing: true }) {
  let timer = null;
  let lastArgs = null;
  let { leading, trailing } = option;

  const setTimer = () => {
    if (lastArgs && trailing) {
      func.apply(this, lastArgs);
      lastArgs = null;
      timer = setTimeout(setTimer, wait);
    } else timer = null;
  };

  return function (...args) {
    if (!timer) {
      if (leading) {
        func.apply(this, args);
      }
      timer = setTimeout(setTimer, wait);
    } else lastArgs = args;
  };
}

function deaksdj(func, wait, option = { leading: true, trailing: true }) {
  let timer = null;
  let { leading, trailing } = option;
  return function (...args) {
    let isInvoked = false;
    if (!timer && leading) {
      func.call(this, ...args);
      isInvoked = true;
    }

    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (trailing && !isInvoked) func.call(this, ...args);
      timer = null;
    }, wait);
  };
}

function aldjapkjd(func, wait) {
  let timer = null;

  return function (...args) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

function apskdjiwdj(func, wait, option = { leading: true, trailing: true }) {
  let timer = null;
  let { leading, trailing } = option;

  return function (...args) {
    let isInvoked = false;
    if (!timer && leading) {
      func.call(this, ...args);
      isInvoked = true;
    }

    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (trailing && !isInvoked) {
        func.call(this, ...args);
      }
      timer = null;
    }, wait);
  };
}

function adikwnif(list, next) {
  if (!list) return;
  const current = list.next;
  list.next = next;
  if (current) return adikwnif(current, list);
  return list;
}

function alsdjapifj(list) {
  let next = null;
  let prev = null;

  while (list) {
    next = list.next;
    list.next = prev;
    prev = list;
    list = next;
  }

  return prev;
}

function listadk(list, next) {
  if (!list) return;
  const current = list.next;
  list.next = next;
  if (current) return listadk(current, list);
  return list;
}

function rrrrr(list) {
  let next = null;
  let prev = null;

  while (list) {
    next = list.next;
    list.next = prev;
    prev = list;
    list = next;
  }
  return prev;
}

function akdjawpdj(list) {
  let next = null;
  let prev = null;

  while (list) {
    next = list.next;
    list.next = prev;
    prev = list;
    list = next;
  }

  return prev;
}

const reverseLinkedList = (list) => {
  if (!list || !list.next) return list;

  let newHead = reverseLinkedList(list.next);

  list.next.next = list;
  list.next = null;

  return newHead;
};

const veijaeif = (list) => {
  if (!list || !list.next) return next;

  let newHead = veijaeif(list.next);

  list.next.next = list;
  list.next = null;

  return newHead;
};

const reverseList = (list) => {
  if (!list || !list.next) return list;

  let newHead = reverseList(list.next);

  list.next.next = list;
  list.next = null;

  return newHead;
};

function asdkjawid(list) {
  if (!list || !list.next) return list;

  let newHead = asdkjawid(list.next);

  list.next.next = list;
  list.next = null;

  return newHead;
}

function asdlasjkd(list) {
  let next = null;
  let prev = null;

  while (list) {
    next = list.next;
    list.next = prev;
    prev = list;
    list = next;
  }
  return prev;
}

function lisdajiwd(list) {
  let next = null;
  let prev = null;

  while (list) {
    next = list.next;
    list.next = prev;
    prev = list;
    list = next;
  }
  return prev;
}

function akdjaspidj(list) {
  if (!list || !list.next) return list;

  let newHead = akdjaspidj(list.next);

  list.next.next = list;
  list.next = null;

  return newHead;
}

function iversddaw(node) {
  let nodes = [node];

  while (nodes.length) {
    const pop = nodes.shift();
    if (pop) {
      [pop.left, pop.right] = [pop.right, pop.left];
      nodes.push(pop.left, pop.right);
    }
  }
  return node;
}

function iefea(node) {
  let nodes = [node];

  while (nodes.length) {
    const [left, right] = nodes.shift();
    [];
  }
}

function firstdup(str) {
  const map = new Map();
  for (let i of str) {
    map.set(i, (map.get(i) || 0) + 1);
    if (map.get(i) === 2) {
      return i;
    }
  }
  return null;
}

Array.prototype.myReduce = function (...args) {
  const hasInitialValue = args.length > 1;
  if (!hasInitialValue && this.length === 0) throw new Error();

  let result = hasInitialValue ? args[1] : this[0];
  for (let i = hasInitialValue ? 0 : 1; i < this.length; i++) {
    result = args[0](result, this[i], i, this);
  }
  return result;
};

Array.prototype.wdmwad = function (...args) {
  let hasInitialValue = args.length > 1;
  if (!hasInitialValue && args.length === 0) throw new Error();

  let result = hasInitialValue ? args[1] : this[0];

  for (let i = hasInitialValue ? 0 : 1; i < this.length; i++) {
    result = args[0](result, this[i], i, this);
  }
  return result;
};

Array.prototype.asikdj = function (...args) {
  let hasInitialValue = args.length > 1;
  if (!hasInitialValue && args.length === 0) throw new Error();

  let result = hasInitialValue ? arg[1] : this[0];

  for (let i = hasInitialValue ? 0 : 1; i < this.length; i++) {
    result = args[0](result, this[i], i, this);
  }
  return result;
};

Array.prototype.myRRReduce = function (...args) {
  let hasInitialValue = args.length > 1;
  if (!hasInitialValue && this.length === 0) throw new Error();

  let result = hasInitialValue ? args[1] : this[0];

  for (let i = hasInitialValue ? 0 : 1; i < this.length; i++) {
    result = args[0](result, this[i], i, this);
  }
  return result;
};

Array.prototype.myMap = function (callback, args) {
  const length = this.length;
  const result = new Array(length);

  for (let i = 0; i < length; i++) {
    if (i in this) {
      result[i] = callback.call(args, this[i], i, this);
    }
  }
  return result;
};

Array.prototype.myMMMap = function (callback, args) {
  const length = this.length;
  const result = new Array(length);

  for (let i = 0; i < length; i++) {
    result[i] = callback.call(args, this[i], i, this);
  }
  return result;
};
