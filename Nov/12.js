function carry(fn) {
  return function carried(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    else return carried.bind(this, ...args);
  };
}

function throttle(func, wait) {
  let timer;
  let lastArgs = [];

  return function (...args) {
    let that = this;

    if (!timer) {
      func.apply(that, args);
      timer = setTimeout(() => {
        if (lastArgs.length) func.apply(that, lastArgs);
        timer = null;
        lastArgs = [];
      }, wait);
    } else {
      lastArgs = [...args];
    }
  };
}

const trasodaksd = (func, wait) => {
  let timer;
  let lastArgs = [];

  return function (...args) {
    let that = this;
    if (!timer) {
      func.apply(that, args);
      timer = setTimeout(() => {
        if (lastArgs.length) func.apply(that, lastArgs);
        timer = null;
        lastArgs = [];
      }, wait);
    } else {
      lastArgs = [...args];
    }
  };
};

const bounced = (func, wait) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};

const trrrrrottle = (func, wait) => {
  let timer;
  let lastArgs = [];

  return function (...args) {
    let that = this;
    if (!timer) {
      func.apply(that, args);
      timer = setTimeout(() => {
        if (lastArgs.length) func.apply(that, lastArgs);
        timer = null;
        lastArgs = [];
      }, wait);
    } else lastArgs = [...args];
  };
};

const aidjaoif = (func, wait) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};

const dadnawod = (func, wait) => {
  let timer;
  let lastArgs = [];

  return function (...args) {
    if (!timer) {
      func.apply(this, args);
      timer = setTimeout(() => {
        if (lastArgs.length) {
          func.apply(this, lastArgs);
          timer = null;
          lastArgs = [];
        }
      }, wait);
    } else lastArgs = [...args];
  };
};

function carrrrrry(func) {
  return function carrrrried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else return carrrrried.bind(this, ...args);
  };
}

function cadddwad(fn) {
  return function carried(...args) {
    if (args.length > fn.length) return fn.apply(this, args);
    else return carried.bind(this, ...args);
  };
}

function debouced(fn, wait) {
  let timeoutid;
  return function (...args) {
    clearTimeout(timeoutid);
    timeoutid = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}

function basicTro(fn, wait) {
  let timer;
  let lastArgs = [];

  return function (...args) {
    if (!timer) {
      fn.apply(this, args);
      timer = setTimeout(() => {
        if (lastArgs.length) {
          fn.apply(this, lastArgs);
          timer = null;
          lastArgs = [];
        }
      }, wait);
    } else lastArgs = [...args];
  };
}

function basicT(fn, wait) {
  let timer;
  let lastArgs = [];

  return function (...args) {
    if (!timer) {
      fn.apply(this, args);
      timer = setTimeout(() => {
        if (lastArgs.length) {
          fn.apply(this, lastArgs);
          timer = null;
          lastArgs = [];
        }
      }, wait);
    } else lastArgs = [...args];
  };
}
