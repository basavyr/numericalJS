let clog = (object) => console.log(object);

function giveRandom(seed) {
  min = -seed;
  max = seed;
  delta = max - min;
  rd = Math.random();
  random_number = min + delta * rd;
  return random_number;
}

function createArray(array_seed, array_length) {
  ret_Array = [];

  for (index = 0; index < array_length; index++) {
    current_random = giveRandom(array_seed);
    ret_Array.push(current_random);
  }
  return ret_Array;
}

w = createArray(5, 100);
clog(w);
