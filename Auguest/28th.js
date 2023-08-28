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

// 2806. Account Balance After Rounded Purchase

function accountBalance(p) {
  const initNumber = 100;
  const afterCalNumber = Math.around(p / 10) * 10; // 四捨五入
  return initNumber - afterCalNumber;
}
