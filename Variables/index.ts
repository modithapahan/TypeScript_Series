let name1: string = "moditha";

let score1:number = 50;
let score2:number = 60;

console.log(name1);

const sum = score1 + score2;
console.log('Sum is ' + sum);

console.log("--------------------------------------");

let number1 = 12;
let number2: string = <string><any>number1;
console.log(typeof (number2));

let name22 = "modi";
let name23: number = <number><any>name22;
console.log(typeof(name23));


console.log("--------------------------------------");
