export const mystery3 = (string1, string2) => {
  const len1 = string1.length;
  // could check that the lengths are compatible

  let diffs = 0;
  for (let i = 0; i < len1; ++i) {
    if (string1[i] !== string2[i]) {
      ++diffs;
    }
  }

  return diffs;
};
