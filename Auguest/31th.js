// 7. Reverse Integer

function reverseInteger(num) {
  const limit = 2147483648; // limit number
  const k = num < 0 ? -1 : 1;
  const n = Number(String(Math.abs(num)).split("").reverse().join(""));
  return n > limit ? 0 : n * k;
}
