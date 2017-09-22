function merge(arr_1, arr_2) {
  arr_3 = [];

  while (arr_1.length && arr_2.length) {
    if (arr_1[0] > arr_2[0]) {
      arr_3.push(arr_2.shift());
    } else {
      arr_3.push(arr_1.shift());
    }
  }

  while (arr_1.length) {
    arr_3.push(arr_1.shift());
  }

  while (arr_2.length) {
    arr_3.push(arr_2.shift());
  }
  return arr_3;
}

function merge_sort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  return merge(
    merge_sort(arr.slice(0, Math.floor(arr.length / 2))),
    merge_sort(arr.slice(Math.floor(arr.length / 2)))
  );
}

// console.log(merge([1, 2, 3, 4], [1, 2, 4, 9]));
console.log(merge_sort([1, 5, 6, 45, 1, 2, 8, 4, 6, 7]));
