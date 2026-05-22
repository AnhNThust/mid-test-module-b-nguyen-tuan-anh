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
    } else if (arr[i] > second && arr[i] < max) {
      second = arr[i];
    }
  }
  return second === max ? null : second;
}

function findSecondLargestNumber2(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid";

  const newArr = arr.reduce((acc, cur) => {
    if (!acc.includes(cur)) acc.push(cur);
    return acc;
  }, []);
  newArr.sort((a, b) => b - a);

  if (newArr.length < 2) return null;
  return newArr[1];
}

console.log(findSecondLargestNumber2([1, 2, 3, 4, 5, 6, 7])); // 6
console.log(findSecondLargestNumber2([10, 12, 3, 14, 25, 6, 7])); // 14
console.log(findSecondLargestNumber2([10])); // null
console.log(findSecondLargestNumber2([12, 11])); // 11
console.log(findSecondLargestNumber2([])); // Invalid
console.log(findSecondLargestNumber2([1, 1])); // null
console.log(findSecondLargestNumber2([1, -1, 2, 2, , , , ,])); // 1
