let text = "Hi";

console.log(text);

// declaration of arrays

let array1 = [];
let array2 = new Array(10);

for (let index = 0; index < array2.length; index++) {
  array2[index] = index;
}

console.log(array2);
type = typeof array2;
console.log(type);
// check if everything is an array
console.log(Array.isArray(array2));


//create an array from a set of parameters
function createArray(size, initValue) {
  resArray = new Array(size);
  for (let index = 0; index < size; index++) {
    resArray[index] = initValue;
    initValue = initValue + 1;
  }
  return resArray;
}

x = createArray(100, 1);
console.log(x)