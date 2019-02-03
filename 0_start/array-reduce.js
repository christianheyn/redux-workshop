const array = [ ...Array(10).keys() ]; // [0, 1, 2, 3 ... , 9]

const sumReducer = (acc, x) => acc + x;

const n = array.reduce(sumReducer, 0);

console.log('result: ', n);
