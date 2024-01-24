function throttle(func, wait, option = { leading: true, trailing: true }) {
  let lastArgs = [];
  let timer = null;
  let { leading, trailing } = option;

  const setTimer = () => {
    if (lastArgs && trailing) {
      func.apply(this, lastArgs);
      lastArgs = [];
      timer = setTimeout(setTimer, wait);
    } else timer = null;
  };
  return function (...args) {
    if (!timer) {
      if (leading) {
        func.apply(this, args);
      }
      timer = setTimeout(setTimer, wait);
    } else lastArgs = [...args];
  };
}

function throttle(func, wait) {
  let timer = null;
  let lastArgs = [];
  return function (...args) {
    let that = this;
    if (!timer) {
      func.apply(that, args);
      timer = window.setTimeout(() => {
        if (lastArgs.length) func.apply(that, lastArgs);
        timer = null;
        lastArgs = [];
      }, wait);
    } else lastArgs = [...args];
  };
}

function curry(fn) {
  return function innerCurry(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...args2) => innerCurry(...args, ...args2);
  };
}

function curry(func) {
  return function innerCurry(...args) {
    if (args.length >= func.length) return func(...args);
    return (...args2) => innerCurry(...args, ...args2);
  };
}

function curry(func) {
  return function innerCurry(...args) {
    const compelte =
      args.length >= func.length &&
      !args.slice(0, func.length).includes(curry.placeholder);
    if (compelte) return func.apply(this, args);
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

function throttle(func, wait) {
  let timer = null;
  let lastArgs = null;
  return function (...args) {
    let that = this;
    if (!timer) {
      func.apply(that, args);
      timer = window.setTimeout(() => {
        if (lastArgs) func.apply(that, lastArgs);
        lastArgs = null;
        timer = null;
      }, wait);
    } else lastArgs = args;
  };
}

function throttle(func, wait, option = { leading: true, trailing: true }) {
  let timer = null;
  let lastArgs = null;
  let { leading, trailing } = option;

  const setTimer = () => {
    if (lastArgs && trailing) {
      func.apply(this, lastArgs);
      timer = window.setTimeout(setTimer, wait);
      lastArgs = null;
    } else timer = null;
  };

  return function (...args) {
    if (!timer) {
      if (leading) {
        func.apply(this, args);
      }
      timer = window.setTimeout(setTimer, wait);
    } else {
      lastArgs = args;
    }
  };
}

function debounce(func, wait) {
  let timer = null;
  return (args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

function debounce(func, wait) {
  let timer = null;
  return (args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => func(...args), wait);
  };
}

function debounce(func, wait) {
  let timer = null;
  return (args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => func(...args), wait);
  };
}

function debounce(func, wait, option = { leading: false, trailing: true }) {
  let timer = null;
  return (...args) => {
    let invoke = false;
    if (!timer && option.leading) {
      func.apply(this, args);
      invoke = true;
    }

    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (option.trailing && !invoke) func.apply(this, args);
      timer = null;
    }, wait);
  };
}

function debounce(func, wait) {
  let timer = null;
  return (args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => func(...args), wait);
  };
}

function debounce(func, wait, option = { leading: false, trailing: true }) {
  let timer = null;
  return (...args) => {
    let invoke = false;
    if (option.leading && !timer) {
      func.apply(this, args);
      invoke = true;
    }

    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (option.trailing && !invoke) func.apply(this, args);
      timer = null;
    }, wait);
  };
}

function debounce(func, wait) {
  let timer = null;
  return (...args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => func(...args), wait);
  };
}

function debounce(func, wait, option = { leading: false, trailing: true }) {
  let timer = null;
  return (...args) => {
    let invoke = false;
    if (option.leading && !timer) {
      func.apply(this, args);
      invoke = true;
    }

    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (option.trailing && !invoke) {
        func.apply(this, args);
      }
      timer = null;
    }, wait);
  };
}

function debounce(func, wait) {
  let timer = null;
  return (...args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => func(...args), wait);
  };
}

function debounce(func, wait, option = { leading: false, trailing: true }) {
  let timer = null;
  return (...args) => {
    let invoke = false;
    if (!timer && option.leading) {
      func.apply(this, args);
      invoke = true;
    }

    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (!invoke && option.trailing) {
        func.apply(this, args);
      }
      timer = null;
    }, wait);
  };
}

function debounce(func, wait) {
  let timer = null;
  return (...args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => func(...args), wait);
  };
}

function debounce(func, wait, option = { leading: false, trailing: true }) {
  let timer = null;

  return (...args) => {
    let invoke = false;
    if (!timer && option.leading) {
      func.apply(this, args);
      invoke = true;
    }

    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (!invoke && option.trailing) func.apply(this, args);
      timer = null;
    }, wait);
  };
}

function shuffler(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const randIdx = Math.floor(Math.random() * (i + 1));
    const storedItem = arr[i];
    arr[i] = arr[randIdx];
    arr[randIdx] = storedItem;
  }
  return arr;
}

function shuffler(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const randIdx = Math.floor(Math.random() * (i + 1));
    const storedItem = arr[i];
    arr[i] = arr[randIdx];
    arr[randIdx] = storedItem;
  }
  return arr;
}

function shuffler(arr) {
  let n = arr.length;
  for (let i = n - 1; i > 0; i++) {
    const randIdx = Math.floor(Math.random() * (i + 1));
    const storedItem = arr[i];
    arr[i] = arr[randIdx];
    arr[randIdx] = storedItem;
  }
  return arr;
}

function shuffler(arr) {
  let n = arr.length;
  for (let i = n - 1; i > 0; i--) {
    const randIdx = Math.floor(Math.random() * (i + 1));
    const storedItem = arr[i];
    arr[i] = arr[randIdx];
    arr[randIdx] = storedItem;
  }
  return arr;
}

function shuffler(arr) {
  let n = arr.length;
  for (let i = n - 1; i > 0; i++) {
    const randIdx = Math.floor(Math.random() * (i + 1));
    const storedItem = arr[i];
    arr[i] = arr[randIdx];
    arr[randIdx] = storedItem;
  }
  return arr;
}
