console.log("------------------Bài 1------------------");
const listCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generatorId(length, prefix = "") {
  // Xử lý và return về kết quả

  if (!Number.isInteger(length) || length < 1 || length > 99) {
    return "Độ dài chuỗi phải là số nguyên dương nhỏ hơn 100";
  }

  let id = prefix;
  for (let i = 0; i < length; i++) {
    // let randIndex = Math.ceil(Math.random() * listCharacters.length); // Sai vì có thể trả về index bằng độ dài của chuỗi, vượt ra ngoài phạm vi
    let randIndex = Math.floor(Math.random() * listCharacters.length); // Sửa lại để đảm bảo index luôn nằm trong phạm vi hợp lệ
    id += listCharacters[randIndex];
  }
  return id;
}

console.log(generatorId(8, "user"));
console.log(generatorId(4, "product - ")); // Output: "product - 3a2f"
console.log(generatorId(10)); // Output: "5a3Fb2DFc1"
console.log(generatorId(1000)); // Output: "5a3Fb2DFc1"