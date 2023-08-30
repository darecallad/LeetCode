// 344. Reverse String

function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }
}

// 3. Longest Substring Without Repeating Characters

function longestSubstring(s) {
  let currentSub = "";
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    let index = currentSub.indexOf(s[i]);
    if (index !== -1) currentSub = currentSub.substring(index + 1);
    currentSub += s[i];
    maxLength = Math.max(maxLength, currentSub.length);
  }
  return maxLength;
}
