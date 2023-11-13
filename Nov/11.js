function excludeItems(items, excludes) {
  const excludeMap = {};

  excludes.forEach(({ k, v }) => {
    if (!excludeMap[k]) {
      excludeMap[k] = {};
    }
    excludeMap[k][v] = true;
  });

  return items.filter((elem) => {
    for (let prop in elem) {
      let value = elem[prop];
      if (excludeMap[prop] && excludeMap[prop][value]) return false;
    }
    return true;
  });
}

function skfefjie(items, excludes) {
  const exmap = {};
  excludes.forEach(({ k, v }) => {
    if (!exmap[k]) exmap[k] = {};
    exmap[k][v] = true;
  });

  return items.filter((element) => {
    for (let item of element) {
      let value = element[item];
      if (exmap[item] && exmap[item][value]) return false;
    }
    return true;
  });
}

const apskdjif = (items, excludes) => {
  const exmap = {};
  excludes.forEach(({ k, v }) => {
    if (!exmap[k]) {
    }
    exmap[k][v] = true;
  });
  return items.filter((element) => {
    for (let item of element) {
      const value = element[item];
      if (exmap[item] && exmap[item][value]) return false;
    }
    return true;
  });
};

function askdhjwauhf(items, excludes) {
  const exmap = {};
  excludes.forEach(({ k, v }) => {
    if (!exmap[k]) exmap[k] = {};
    exmap[k][v] = true;
  });

  return items.filter((element) => {
    for (let item in element) {
      const value = element[item];
      if (exmap[item] && exmap[item][value]) return false;
    }
    return true;
  });
}

function curry(fn) {
  return function carried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else return carried.bind(this, ...args);
  };
}

function carry(fn) {
  return function carried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return carried.bind(this, ...args);
    }
  };
}
