const studentAge = [1 , 2 , 4 , 5];
const sortArr = studentAge.sort((a , b ) => {
    // console.log(a + "a sort " + "\n" + b + " b sort");
});
// filter and find method of array 
const findArr = studentAge.find((age)=> age > 2) ;
// that will return when the codition is true and break rest of code  and will return first element when the coditions are saitfieced
console.log(typeof findArr + " find method of array");
const filterArr = studentAge.filter((age) => age <= 2);
console.log( typeof Array.from(filterArr) + " filter method of array");
// code War solution 
function solution (str , ending ) {
    return str.endsWith(ending) ? true : false ;
}
// console.log(solution('abc' , 'd'));

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
function friend (friends) {
    if (Array.isArray(friends)) {
        return friends.filter((name) => {
            if (name.length === 4) {
                return name ;
            }
        });
    }
    return "Type Wrong expected Array " ;
}
// console.log(friend(["Ryan", "Kieran", "Mark"]));

function getSum(a, b)
{
    let sumB = [];
    let sumA = [] ;
   if (a !== b) {
        // this is for b
        let resultB ;
        let resultA ;
        if (b >= 0 ) {
            for(let i = 0 ; i <= b  ; i++) {
                sumB.push(i);
            };
        }else {
            sumB.push(b);
        }
        
        // if (a >= 0 ) {
        //     for(let i = 0 ; i <= b  ; i++) {
        //         sumA.push(i);
        //     };
        // }else {
        //     sumA.push(a)
        // }
        // sumA.forEach( item  => {
        //     resultA += item 
        // });
        sumB.forEach( item  => {
            resultB += item 
        });
        return resultB ;
        // return resultA + resultB ;        
   }
   return a ;
}
console.log(getSum(234, 324)); // (-1 , 0 , 1 , 2 , 3)