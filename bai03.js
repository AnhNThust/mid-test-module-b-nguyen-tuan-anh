console.log("------------------Bài 3------------------");
const categories = [
  { id: 1, name: "Chuyên mục 1" },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      { id: 4, name: "Chuyên mục 2.1" },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          { id: 10, name: "Chuyên mục 2.2.1" },
          { id: 11, name: "Chuyên mục 2.2.2" },
          { id: 12, name: "Chuyên mục 2.2.3" },
        ],
      },
      { id: 6, name: "Chuyên mục 2.3" },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      { id: 7, name: "Chuyên mục 3.1" },
      { id: 8, name: "Chuyên mục 3.2" },
      { id: 9, name: "Chuyên mục 3.3" },
    ],
  },
];

function flattenArrayToHTML(arr) {
  const prefix = "|--";
  arr.reduce((acc, cur) => {
    let numOfPrefix = cur.name.split(".").length;

    // if (!cur.children) {
    //   document.write(`<option value=\"${cur.id}\">${prefix.repeat(numOfPrefix - 1)}${cur.name}</option>`);
    // } else {
    //   document.write(`<option value=\"${cur.id}\">${prefix.repeat(numOfPrefix - 1)}${cur.name}</option>`);
    //   flattenArrayToHTML(cur.children);
    // }
    document.write(`<option value=\"${cur.id}\">${prefix.repeat(numOfPrefix - 1)}${cur.name}</option>`);
    if (cur.children) {
      flattenArrayToHTML(cur.children);
    }
  }, []);
}

function flatten() {
  document.write("<select id=\"chuyen-muc\">");
  flattenArrayToHTML(categories);
  document.write("</select>");
}

flatten();