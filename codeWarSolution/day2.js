//qustion ?? 
// sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
var uniqueInOrder=function(iterable){
    let setCaharacter ;
    let returnArr = [] ;
    for(let cha of iterable) {
        if(setCaharacter !== cha) {
            setCaharacter = cha ;
            returnArr.push(cha) ;
        }
    }
    return returnArr ;
}

// console.log(uniqueInOrder([1,2,2,3,3,4]));

// // In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// function higthAndLow (numbers) {
//     let formattedNum = numbers.split(" ");
//     let nums = [] ;
//     for (const num of formattedNum) {
//         nums.push(Number(num))
//     }
//     return `${Math.max(...nums)}  ${Math.min(...nums)}` ;
// }

function higthAndLow (numbers) {
    return `${Math.max(...numbers.split(" ").map(Number))} ${Math.min(...numbers.split(" ").map(Number))}`;
}
console.log(higthAndLow(" 1 2 3 4 5 6 -9"));