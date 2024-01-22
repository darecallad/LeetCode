function carry(fn) {
  return function innerCarry(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...args2) => innerCarry(...args, ...args2);
  };
}

function carry(fn) {
  return function innerCarry(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...args2) => innerCarry(...args2, ...args);
  };
}

function carry(fn) {
  return function innerCurry(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...args2) => innerCurry(...args2, ...args);
  };
}

function carry(fn) {
  return function innerCarry(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...args2) => innerCarry(...args2, ...args);
  };
}

function carry(fn) {
  return function innerCarry(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...args2) => innerCarry(...args2, ...args);
  };
}

function curry(fn) {
  return function innerCurry(...args) {
    const complete =
      args.length >= fn.length &&
      !args.slice(0, fn.length).includes(curry.placeholder);
    if (complete) return fn.apply(this, args);
    return function (...args2) {
      const res = args.map((arg) =>
        arg === curry.placeholder && args2.length ? args2.shift() : arg
      );
      return innerCurry(...res, ...args2);
    };
  };
}

curry.placeholder = Symbol();

function carry(fn) {
  return function innerCarry(...args) {
    const complete =
      args.length >= fn.length &&
      !args.slice(0, fn.lnegth).includes(carry.placeholder);
    if (complete) return fn.apple(this, args);
    return function (...args2) {
      const res = args.map((arg) =>
        arg === carry.placeholder && args2.length ? args2.shift() : arg
      );
      return innerCarry(...res, ...args2);
    };
  };
}

carry.placeholder = Symbol();

function curry(fn) {
  return function innerCurry(...args) {
    const complete =
      args.length >= fn.length &&
      !args.slice(0, fn.length).includes(curry.placeholder);
    if (complete) return fn.apply(this, args);
    return function (...args2) {
      const res = args.map((arg) =>
        arg === curry.placeholder && args2.length ? args.shift() : arg
      );
      return innerCurry(...res, ...args2);
    };
  };
}

curry.placeholder = Symbol();

function curry(fn) {
  return function innerCurry(...args) {
    const complete =
      args.length >= fn.length &&
      !args.slice(0, fn.length).includes(curry.placeholder);
    if (complete) return fn.apply(this, args);
    return function (...args2) {
      const res = args.map((arg) =>
        arg === curry.placeholder && args2.length ? args2.shift() : arg
      );
      return innerCurry(...res, ...args2);
    };
  };
}

curry.placeholder = Symbol();

function flat(arr, depth = 1) {
  return depth
    ? arr.reduce((acc, curr) => {
        return [
          ...acc,
          ...(Array.isArray(curr) ? flat(curr, depth - 1) : [curr]),
        ];
      }, [])
    : arr;
}

function flat(arr, depth = 1) {
  return depth
    ? arr.reduce((acc, curr) => {
        return [
          ...acc,
          ...(Array.isArray(curr) ? flat(curr, depth - 1) : [curr]),
        ];
      }, [])
    : acc;
}

function flat(arr, depth = 1) {
  return depth
    ? arr.reduce((acc, curr) => {
        return [
          ...acc,
          ...(Array.isArray(curr) ? flat(curr, depth - 1) : [curr]),
        ];
      }, [])
    : acc;
}

function flat(arr, depth = 1) {
  return depth
    ? arr.reduce((acc, curr) => {
        return [
          ...acc,
          ...(Array.isArray(curr) ? flat(curr, depth - 1) : [curr]),
        ];
      }, [])
    : acc;
}

function flat(arr, depth = 1) {
  return depth
    ? arr.reduce((acc, curr) => {
        return [
          ...acc,
          ...(Array.isArray(curr) ? flat(curr, depth - 1) : [curr]),
        ];
      }, [])
    : arr;
}

function flat(arr, depth = 1) {
  return depth
    ? arr.reduce((acc, curr) => {
        return [
          ...acc,
          ...(Array.isArray(curr) ? flat(curr, depth - 1) : [curr]),
        ];
      }, [])
    : arr;
}

function flat(arr, depth = 1) {
  return depth
    ? arr.reduce((acc, curr) => {
        return [
          ...acc,
          ...(Array.isArray(curr) ? flat(curr, depth - 1) : [curr]),
        ];
      }, [])
    : arr;
}

function throttle(func, wait) {
  let timer;
  let lastArgs = [];

  return function (...args) {
    let that = this;
    if (!timer) {
      func.apply(that, args);
      timer = setTimeout(() => {
        if (lastArgs.length) func.apply(this, lastArgs);
        timer = null;
        lastArgs = [];
      }, wait);
    } else lastArgs = [...args];
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
        if (lastArgs.length) func.apply(this, lastArgs);
        timer = null;
        lastArgs = [];
      }, wait);
    } else lastArgs = [...args];
  };
}

function thottle(func, wait) {
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
}

function thottle(func, wait) {
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

function thottle(func, wait) {
  let lastArgs = [];
  let timer = null;
  return function (...args) {
    let that = this;
    if (!timer) {
      func.apply(that, args);
      timer = window.setTimeout(() => {
        if (lastArgs.length) func.apply(that, lastArgs);
        lastArgs = [];
        timer = null;
      }, wait);
    } else {
      lastArgs = [...args];
    }
  };
}

function avdancethottle(
  func,
  wait,
  option = { leading: true, trailing: true }
) {
  let { leading, trailing } = option;
  let lastArgs = [];
  let timer = null;

  const setTimer = () => {
    if (lastArgs && trailing) {
      func.apply(this, lastArgs);
      lastArgs = null;
      timer = setTimeout(setTimer, wait);
    } else timer = null;
  };

  return function (...args) {
    if (!timer) {
      if (leading) func.apply(this, args);
      timer = setTimeout(setTimer, wait);
    } else lastArgs = args;
  };
}

function advanthrottle(func, wait, option = { leading: true, trailing: true }) {
  let { leading, trailing } = option;
  let lastArgs = [];
  let timer = null;

  const setTimer = () => {
    if (lastArgs && trailing) {
      func.apply(this, lastArgs);
      lastArgs = null;
      timer = setTimeout(setTimer, wait);
    } else timer = null;
  };

  return function (...args) {
    if (!timer) {
      if (leading) func.apply(this, args);
      timer = setTimeout(setTimer, wait);
    } else lastArgs = args;
  };
}

