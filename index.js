let count = 0;

function increment() {
  count++;
  document.getElementById("count-el").innerText = count;
}

function decrement() {
  if (count == 0) {
    return;
  }
  count--;
  document.getElementById("count-el").innerText = count;
}

function save() {
  if (count == 0) return;
  var saveEl = document.getElementById("save-el");
  var result = saveEl.innerText;
  result += " " + count + " - ";
  saveEl.innerText = result;
  count = 0;
  document.getElementById("count-el").innerText = count;
}
