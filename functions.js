function standInLine(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   input1.push(input2);
   var removed = input1.shift();
   return removed;
}

function unshift(arr, elem) {
   // A1: array
   // A2: element
   // R: a single JavaScript value

   arr.unshift(elem);
   return arr;
}

function shift(input1) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   input1.shift(input2);
   return input1;
}

function pop(input1) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   input1.pop();
   return input1;
}

function push(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   input1.push(input2);
   return input1;
}

function findNthToLast(str, num) {
   // A1: string
   // A2: number
   // R: a character of a string

   var lengthOfString = str.length;
   var nthToLastNum = lengthOfString - num;
   var nthLetter = str[nthToLastNum];
   return nthLetter;
}

function lastCharacter(str) {
   // A1: string
   // R: a character of a string
   var lengthOfString = str.length;
   var lastNum = lengthOfString - 1;
   var lastLet = str[lastNum];
   console.log(lastLet);

   //var lastLet = str[str.length - 1];
   return lastLet;
   //return str[str.length - 1];
}

function nth(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return input1 + input2[2];
}

function first(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return (input1 = input2[0]);
}

function length(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return (input1 = input2.length);
}

function construct(str, var1) {
   // A1: variable
   // A2: string
   // R: string
   var ourVar = var1;
   var ourStr = str;
   return str + var1;
}

function concatenat(str1, str2) {
   // A1: string
   // A2: string
   // R:   a new string
   return (str1 += str2);
}

function concatenatep(str1, str2) {
   // A1: string
   // A2: string
   // R: a new string
   return str1 + str2;
}

function remainder(dec1, dec2) {
   // A1: number
   // A2: number
   // R: remainder number
   return dec1 / dec2;
}

function product(dec1, dec2) {
   // A1: decimal number
   // A2: decimal number
   // R: decimal number
   return dec1 * dec2;
}

function decrement(num) {
   // A1: number
   // R: number
   num--;
   return num;
}
function increment(num) {
   // A1: number
   // R: number
   num++;
   return num;
}

function quotient(num1, num2) {
   // A1: number
   // A2: number
   // R: number
   return num1 / num2;
}

function multiply(num1, num2) {
   // A1: number
   // A2: number
   // R: number
   return num1 * num2;
}

function subtract(num1, num2) {
   // A1: number
   // A2: number
   // R: number
   return num1 - num2;
}

function add(num1, num2) {
   // A1: number
   // A2: number
   // R: number
   return num1 + num2;
}
