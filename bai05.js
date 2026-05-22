const allowedCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generatePassword(length, suffix = "") {
  // Xử lý và return về kết quả
  if (!Number.isInteger(length) || length <= 0 || length >= 50) {
    return "length phải là số nguyên dương nhỏ hơn 50";
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * allowedCharacters.length);
    password += allowedCharacters[index];
  }
  return password + suffix;
}
console.log(generatePassword(6, "_pass")); // Output: "Xy2aB9_pass"
console.log(generatePassword(4, "_key")); // Output: "kL9m_key"
console.log(generatePassword(8)); // Output: "aB2cD9eF"
