let count = 0;

let text1 = document.getElementById("count").innerText;

let text2 = document.getElementById("total").innerText;

function incre() {
  count++;
  document.getElementById("count").innerText = count;
}

function save() {
  let text3 = text2 + "-";
  let total = count + text3;
  document.getElementById("total").innerText += total;
}

function reset() {
  count = 0;
  document.getElementById("count").innerText = count;
  document.getElementById("total").innerText = "";
}
