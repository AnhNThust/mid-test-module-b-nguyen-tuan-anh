console.log("------------------Bài 2------------------");
function highlightKeyword(content, keyword) {
  if (typeof content !== "string" || typeof keyword !== "string") {
    return "Invalid";
  }

  let arr = content.trim().split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === keyword.toLowerCase()) {
      arr[i] = `<strong>${arr[i]}</strong>`;
    }
  }

  return arr.join(" ");
}

let content = "Học JavaScript không khó, Học javascript khó đã có CodeFarm lo, CodeFarm - Học là có việc!";
let keyword = "javascript";
console.log(highlightKeyword(content, keyword));

let content2 = "Học Java không khó, Học java khó đã có CodeFarm lo, CodeFarm - Học là có việc!";
let keyword2 = "javascript";
console.log(highlightKeyword(content2, keyword2));

function highlightKeywword2(content, keyword) {
  const regex = new RegExp(keyword);

  // if (!regex)
}