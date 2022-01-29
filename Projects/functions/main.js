function giveText(w1, w2) {
  x = 12.4;
  return w1 + " + " + w2;
}

ws = (w1, w2) => {
  return w1 + " + " + w2;
};

console.log(giveText("w1", "w2"));
console.log(ws("w1", "w2"));

clog = (obj) => {
  console.log(obj);
};

clog(ws("r", "r"));
