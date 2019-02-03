const array = [ ...Array(10).keys() ]; // [0, 1, 2, 3 ... , 9]

const sumOddReducer = (acc, x) => (x % 2 === 0) ? acc : acc + x;

const n = array.reduce(sumOddReducer, 0);

console.log('result: ', n);
