// Class NodeStore
// When I have this class in interview I have been asked for optimiza run time to O(1)
// without useing Map

class NodeStore {
  constructor() {
    this.keys = [];
    this.values = [];
  }
  set(node, value) {
    let index = this.keys.indexOf(node); //O(n) keys array
    if (index !== -1) this.values[index] = value; //O(m) node stored
    else {
      this.keys.push(node);
      this.values.push(value);
    }
  }
  get(node) {
    let index = this.keys.indexOf(node);
    if (index === -1) return undefined; //O(n)
    else return this.values[index]; //O(1)
  }
  has(node) {
    return this.keys.indexOf(node) !== -1; //O(n) O(1)
  }
}
// Improve a function
// for this solution I have been asked for what if we have toString in value it will return true
// how do we solve the problem
function excludeItems(items, excludes) {
  const exmap = {};
  excludes.forEach(({ k, v }) => {
    if (!exmap[k]) exmap[k] = {};
    exmap[k][v] = true; // O(e + i*p) e = number of item , i = number of item * properties of item
  }); // O(e) space

  return items.filter((element) => {
    for (let item in element) {
      const value = element[item];
      if (exmap[item] && exmap[item][value]) return false;
    }
    return true;
  });
}

// base on the those two different follow up question
// can you provide simliar follow up question for the code below?
// and answers for follow up question
