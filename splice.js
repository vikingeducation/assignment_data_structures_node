String.prototype.splitString = function splitString(char) {
  console.log(this);
  const array = [];
  const length = this.length;

  let start = 0;

  for (let i = 0; i < length; i++) {
    if (this[i] === char || i === length - 1) {
      let str = "";
      let end = i === length - 1 ? i + 1 : i;
      for (let j = start; j < end; j++) {
        str += this[j];
      }
      array[array.length] = str;
      start = i + 1;
    }
  }
  return array;
};

console.log("rarmaryfieyrafeefee".splitString("f"));
