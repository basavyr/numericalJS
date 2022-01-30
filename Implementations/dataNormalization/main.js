let app_name = "Normalization app running...";

clog = (object) => {
  console.log(object);
};

/* APP PRINT */
clog(app_name);
/* ********* */

function randomNumber(min, max) {
  delta = max - min;
  //random number between min and max
  rand = min + delta * Math.random();
  return rand;
}

function randomArray(size, seed) {
  // create the array with a fixed size
  let retArray = new Array(size);

  // change the element of the array to a random one
  for (let index = 0; index < retArray.length; index++) {
    retArray[index] = randomNumber(-seed, seed);
  }

  return retArray;
}

//returns the maximum value within the array
//if a cap is given, then the function returns the largest value of the array that is smaller than the cap
function getMaxArray(array, cap, ...args) {
  // the function works with variable number of arguments
  // function uses ES6 paradigm for declaring a variable number of arguments
  // source: https://levelup.gitconnected.com/how-to-write-function-with-n-number-of-parameters-in-javascript-a916de1be7a2#:~:text=When%20you%20call%20a%20function,is%20no%20function%20parameter%20limit.&text=In%20the%20above%20function%2C%20if,the%20first%20two%20parameters%20only.
  args.forEach((element) => clog(element));
}

// arr = randomArray(5, 2);
// clog(arr);

getMaxArray([1, 4, 5, 9], 2, 0, [1, 2], 0, 0);
