// Decode String

const decode = (s) => {
  const numStack = [];
  const charStack = [];
  let num = 0;

  for (let char of s) {
    if (!isNaN(char)) num = num * 10 + Number(char);
    else if (char === "[") {
      numStack.push(num);
      num = 0;
      charStack.push(char);
    } else if (char === "]") {
      let temp = [];
      while (charStack[charStack.length - 1] !== "[")
        temp.unshift(charStack.pop());
      charStack.pop(); // pop the [
      const repeatTime = numStack.pop();
      let decodedStr = temp.join("").repeat(repeatTime);
      for (let char of decodedStr) charStack.push(char);
    } else charStack.push(char);
  }
  return charStack.join("");
};

// time and space O(n)

// find all numbers disapperred in an Array
const findDisappear = (nums) => {
  let result = [];
};

// time O(n)
// space O(1)
