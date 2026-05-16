console.log("------------------Bài 4------------------");
function findSecondLargestNumber(arr) {
  if (arr.length === 0) {
    return "Invalid";
  }

  if (arr.length === 1) {
    return null;
  }

  let second = 0;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      second = max;
      max = arr[i];
    } else if (arr[i] > second) {
      second = arr[i];
    }
  }
  return second;
}

console.log(findSecondLargestNumber([1, 2, 3, 4, 5, 6, 7]));
console.log(findSecondLargestNumber([10, 12, 3, 14, 25, 6, 7]));
console.log(findSecondLargestNumber([10]));
console.log(findSecondLargestNumber([12, 11]));
console.log(findSecondLargestNumber([]));