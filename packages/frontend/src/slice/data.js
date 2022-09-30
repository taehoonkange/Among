let row = 0;
let col = 0;
export const data = [];
const sold = "#D8D8D8";
const unsold = "#01DF3A";
const clicked = "#FA58F4";
const cancelled = "#000000";
const myClicked = "#6495ED";

for (let i = 0; i < 40; i++) {
  if (i % 10 === 0) {
    row = 0;
    if (i !== 0) {
      col++;
    }
  }
  let ob = {
    id: i + 1,
    x: 50 + 20 * row,
    y: 50 + 20 * col,
    status: "none",
    color: "#D8D8D8",
  };
  data.push(ob);
  row++;
}

console.log(data);
