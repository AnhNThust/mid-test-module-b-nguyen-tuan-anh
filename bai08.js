function findSecondSmallestNumber(arr) {
  if (!Array.isArray(arr) || arr.length < 1) {
    return "Invalid";
  }

  let result = [...new Set(arr)].sort((a, b) => a - b);
  return result[1] || null;
}

console.log(findSecondSmallestNumber([5, 2, 9, 1, 7])); // Output: 2
console.log(findSecondSmallestNumber([3, 3, 3])); // Output: null
console.log(findSecondSmallestNumber([])); // Output: "Invalid"