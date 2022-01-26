let text = "Hi";

// declaration of arrays

let array1 = [];
let array2 = new Array(10);

for (let index = 0; index < array2.length; index++) {
  array2[index] = index;
}

// console.log(array2);
//get the type of an object
type = typeof array2;
// console.log(type);
// check if an object is an array
// console.log(Array.isArray(array2));

//create an array from a set of parameters
function createArray(size, initValue) {
  resArray = new Array(size);
  for (let index = 0; index < size; index++) {
    resArray[index] = initValue;
    initValue = initValue + 1;
  }
  return resArray;
}

//create a dynamical array
function createDynamicArray(size, initValue) {
  returnArr = new Array();
  for (let index = 0; index < returnArr.length; index++) {
    initValue = initValue + 1;
    returnArr.push(initValue);
  }
}

//arrow function
let simpleArray = (size, random) => {
  arr = new Array();
  for (let i = 0; i < size; i++) {
    arr.push(random);
    random = random + 2;
  }
  return arr;
};

//even more simple arrow function
fun1 = (var1, var2) => Array(var1,var2).sort();

x = createArray(100, 1);
// console.log(x);
x = createDynamicArray(100, 1);
// console.log(x);
console.log(simpleArray(3, 1));
console.log(fun1(5, 1));
