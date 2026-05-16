console.log("------------------Bài 1------------------");
const listCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generatorId(length, prefix) {
  // Xử lý và return về kết quả

  if (length < 1 || length > 99) {
    return "Độ dài chuỗi phải là số nguyên dương nhỏ hơn 100";
  }

  let id = "";
  for (let i = 0; i < length; i++) {
    let randIndex = Math.ceil(Math.random() * listCharacters.length);
    id += listCharacters[randIndex];
  }
  return prefix ? prefix + id : id;
}

console.log(generatorId(8, "user"));
console.log(generatorId(4, "product - ")); // Output: "product - 3a2f"
console.log(generatorId(10)); // Output: "5a3Fb2DFc1"