// 205. Isomorphic Strings

function isomorphic(s, t) {
  if (s.length !== t.length) return false;

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (!sMap.has(sChar) && !tMap.has(tChar)) {
      sMap.set(sChar, tChar);
      tMap.set(tChar, sChar);
    } else if (sMap.get(sChar) !== tChar || tMap.get(tChar) !== sChar)
      return false;
  }

  return true;
}
