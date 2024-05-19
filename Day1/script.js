const mathTest = Math.floor(Math.random() * ( 3 - 1 + 1));
// console.log(mathTest);

const getH1 = document.querySelectorAll('h2').length;
const arrayFrom = Array.from(getH1);
// console.log(arrayFrom + "Array Like" + "\n" + getH1);

const hello = [
    "this" ,
    "is" ,
    "the" ,
    "greeting" ,
    "text" ,
];
// math function take 
// a function as a parameter and that function how many parameter will accept 
const greeting  = hello.map((index) => index).join(" ");
// console.log(greeting);
