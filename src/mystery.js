export const mystery3 = (string1, string2) => {
  if (!string1 && !string2) {
    return 0;
  };

  let diff = 0;
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      diff += 1;
    }
  };
  return diff;
};
