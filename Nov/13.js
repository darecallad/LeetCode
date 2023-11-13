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
