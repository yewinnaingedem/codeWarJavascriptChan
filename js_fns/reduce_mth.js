// const getReduce = (num) => {
//     return num.reduce((acc , el) => `this is el : ${el}` , 0);
// }
// console.log(getReduce([1,5,8,9,74]));

const numbers = [1, 2, 3, 4, 5];

// const printAll = numbers.reduce((acc, el) => {
//    console.log(acc + el );
// }, null); // Initial value for 'acc' (not used here)

// console.log(printAll);

const youReduce = ['this' , 'is'  , 'the' , 'reduce','method'];
const getMap = youReduce.map(el => el).join(' ');
const getReduce = youReduce.reduce((acc , el) => {
    if (acc !== null ) {
        return acc + " " + el
    }
    
}, null );
console.log(getReduce);