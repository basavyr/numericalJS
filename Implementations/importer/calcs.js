function getArea(dimensions) {
  let [dim1, dim2] = dimensions;
  return (dim1 * dim2).toPrecision(5);
}

function getCircle(size) {
  pi = Math.PI;
  diameter = (2 * pi * size).toPrecision(4);
  return diameter;
}

//export the method to be used in the main module
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
module.exports = {
  getArea,
  getCircle,
};
