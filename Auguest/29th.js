// 1071. Greatest Common Divisor of Strings

function gcdOfStrings(s, t) {
  if (s + t !== t + s) return "";

  // create helper function to check if 's' string is a multiple of length of 't'
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const length = gcd(s.length, t.length);

  return s.slice(0, length);
}
