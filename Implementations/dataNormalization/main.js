let app_name = "Normalization app running...";

clog = (object) => {
  console.log(object);
};

/* APP PRINT */
clog(app_name);
/* ********* */

function randomArray(size, seed) {
  // create the array with a fixed size
  let retArray = new Array(size);
  clog(retArray.length);
  for (let index = 0; index < retArray.length; index++) {
    retArray[index] = seed;
  }

  // change the element of the array to a random one
  retArray.forEach((val) => clog("->" + val));

  return retArray;
}

arr = randomArray(5, 2);
clog(arr);

// let arr = [1, 2, 3, 4];
// arr.forEach((val, index) => (arr[index] = val * val));
// console.log(arr);
