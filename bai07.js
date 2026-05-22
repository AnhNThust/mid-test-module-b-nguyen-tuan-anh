const departments = [
  { id: 1, name: "Kinh doanh" },
  {
    id: 2,
    name: "Kỹ thuật",
    children: [
      { id: 4, name: "Frontend" },
      {
        id: 5,
        name: "Backend",
        children: [
          { id: 10, name: "API" },
          { id: 11, name: "Data" },
        ],
      },
      { id: 6, name: "QA" },
    ],
  },
  {
    id: 3,
    name: "Vận hành",
    children: [
      { id: 7, name: "Kho" },
      { id: 8, name: "Giao nhận" },
      { id: 9, name: "CSKH" },
    ],
  },
  {
    id: 10,
    name: "Vận hành",
    children: [
      { id: 11, name: "Kho" },
      {
        id: 12,
        name: "Giao nhận",
        children: [
          { id: 13, name: "Kho" },
          {
            id: 14,
            name: "Kho",
            children: [
              { id: 15, name: "Kho" },
              { id: 16, name: "Kho" },
            ]
          },
        ]
      },
    ],
  },
];

function flatMenu(arr, level = 0, result = "") {
  if (!Array.isArray(arr) || arr.length < 1) {
    return "Giá trị truyền vào không phải mảng hoặc là mảng rỗng!";
  }

  for (let i = 0; i < arr.length; i++) {
    result += `<label style=\"display:block\"><input type=\"checkbox\" value=\"${arr[i].id}\" /> ${"--".repeat(level)} ${arr[i].name}</label>\n`

    if (arr[i].children) {
      result += flatMenu(arr[i].children, level + 1);
    }
  }

  return result;
}

const dep = document.querySelector('.departments');
// let content = '<div class=\"departments\">';
let content = flatMenu(departments);
// content += '</div>';
// document.write(content);
dep.innerHTML = content;

