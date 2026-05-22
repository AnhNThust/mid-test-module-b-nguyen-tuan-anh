function censorWord(content, badword) {
  const regex = new RegExp(badword, "gi");
  if (!regex.test(content)) {
    return content;
  }
  const result = content.replaceAll(regex, (match) => "*".repeat(match.length));
  return result;
}
console.log(censorWord("Đừng nói bí mật ở đây. BÍ MẬT là điều cần tránh!", "bí mật"));
console.log(censorWord("Đừng nói bí mật ở đây. BÍ MẬT là điều cần tránh!", "bật mí"));
// Kết quả kỳ vọng: "Đừng nói ****** ở đây. ****** là điều cần tránh!"