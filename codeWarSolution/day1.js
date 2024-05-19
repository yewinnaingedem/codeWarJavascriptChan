function findNextSquare(sq) {
    if (sq < 0) return -1;
    let square = Math.sqrt(sq);
    if (!Number.isInteger(square)) {
        return -1;
    }
    square++;
    return square * square;
}
// console.log( findNextSquare(114));

// Math Function Testing 

// what is round method 

function roundMath(num) {
    // The Math.round() function returns the number rounded to the nearest integer.
    // That is, 3.87 is rounded to 4 and 3.45 is rounded to 3.
    return Math.round(num);
}

// console.log(roundMath(5));

// Math Pow Method 
function powMath (x) {
    // The Math. pow() method returns the value of x to the power of y (xy).
    return Math.pow(x , x) ; 
}

// console.log(powMath(3));

// function isPangram (string ) {
//     // return /\d/.test(string) ? false : true ;
//     let orString = string.replace(/\s/g , "");
//     let sentence = new Set();
//     const alphard = "abcdefghijklmnopqrstuvwxyz" ;
//     for (let character of orString.toLowerCase()) {
//         if (/[a-z]/.test(orString)) {
//             sentence.add(character)
//         }
//     };
//     for(let al of alphard) {
//         if (!sentence.has(al)) {
//             return false ;
//         }
//     }
//     return true ;
//     // how to remove spcial character 
//     // let orString = string.replace(/[\s,0-9'"`]/g, '');
// }

function isPangram(string){
    let orString = string.replace(/[\s,0-9',"`]/g, '').toLowerCase();
      let sentence = new Set();
      const alphard = "abcdefghijklmnopqrstuvwxyz" ;
      for (let character of orString) {
          if (/[a-z0-9]/.test(orString)) {
              sentence.add(character)
          }
      };
      for(let al of alphard) {
          if (!sentence.has(al)) {
              return false ;
          }
      }
      return true ;
  }
// console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'));

function descendingOrder(n){
    if (Number.isInteger(n) && n >= 0) {
        let num = [...String(n)];
        const descending = num.sort((a, b ) => b - a) ;
        return Number(descending.map((nu) => nu).join(""));
    }
    return -1 ;
}

// descendingOrder(25698);
console.log(descendingOrder(42145 ));