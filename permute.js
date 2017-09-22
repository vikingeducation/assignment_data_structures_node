const permutes = arr => {
  return arr.length < 2
    ? arr
    : arr.reduce((acc, element, index) => {
        const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
        const combos = permutes(rest).map(c => [element, ...c]);
        return [...acc, ...combos];
      }, []);
};

const hasPermuations = (pattern, strInput) => {
  const perms = permutes(pattern.split(""));
  for (let perm of perms) {
    if (strInput.indexOf(perm.join("")) !== -1) return true;
  }
  return false;
};

console.log(hasPermuations("ABbC", "fooCBA4bar"));
