const numbers = [32,33,16,40,12,99,66];

const res = numbers.filter( n => {
    return n>= 18 && n < 99
});

console.log(res);