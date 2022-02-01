let app_name = "Normalization app running...";

clog = (object, ...args) => {
  console.log(object);
  args.forEach((element) => console.log(element));
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
  // modify the values of an array
  // https://bobbyhadz.com/blog/javascript-modify-all-array-elements
  for (let index = 0; index < retArray.length; index++) {
    retArray[index] = randomNumber(-seed, seed);
  }

  return retArray;
}

function arraySorter(array, type) {
  if (array.length == 0) return "no good";
  if (type == "asc") {
    retArr = array.sort((a, b) => a - b);
  } else if (type == "desc") {
    retArr = array.sort((a, b) => b - a);
  } else return array.sort((a, b) => a - b);
  return retArr;
}

//returns the maximum value within the array
//if a cap is given, then the function returns the largest value of the array that is smaller than the cap
// if no cap is given, the absolute max of array is returned, with the total number of duplicates (if any)
function getMaxValue(array, cap) {
  N = array.length;
  array.sort((a, b) => b - a);
  for (index = 0; index < N; index++) {
    if (array[index] > cap) {
      array.splice(index, 1);
      // splice will skip the next index after loop finished the iteration
      //source https://love2dev.com/blog/javascript-remove-from-array/
      index--;
    }
  }
  max_value = array[0];
  nmax = 1;
  for (index = 1; index < N; index++) {
    if (array[index] == max_value) nmax++;
  }

  return [array, nmax];
}

//get the maximum value of an array together with the position of that maximum value within the array
function maxArray(array) {
  let maxval = array[0];
  let maxindex = 0;
  for (index = 1; index < array.length; index++) {
    if (array[index] > maxval) {
      maxval = array[index];
      maxindex = index;
    }
  }
  return [maxval, maxindex];
}

function Normalize(array, cap) {
  let maxes = maxArray(array);
  let maxval = maxes[0];
  array.forEach((element, index) => (array[index] = (element / maxval).toPrecision(2)));
  clog(array);
}

function variableArgs(array, cap, ...args) {
  // the function works with variable number of arguments
  // function uses ES6 paradigm for declaring a variable number of arguments
  // source: https://levelup.gitconnected.com/how-to-write-function-with-n-number-of-parameters-in-javascript-a916de1be7a2#:~:text=When%20you%20call%20a%20function,is%20no%20function%20parameter%20limit.&text=In%20the%20above%20function%2C%20if,the%20first%20two%20parameters%20only.
  //   args.forEach((element) => clog(element));
  args.forEach((element) => {
    if (element >= cap) array.push(element);
  });
  return array;
}

// arr = randomArray(5, 2);
// clog(arr);

t_arr = [1, 4, 5, 9, 3, 5, 2, 11];
clog(maxArray(t_arr));
Normalize(t_arr);
// clog(arraySorter(t_arr, "desc"));
// clog(arraySorter(t_arr, "asc"));
// clog(arraySorter(t_arr));
