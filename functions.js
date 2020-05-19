function standInLine(arr, item) {
   // A1: array
   // A2: item
   // R: item removed
   arr.push(item);
   console.log(arr);
   var removed = arr.shift();
   console.log(removed);
   return removed;
}

function unshift(arr, elem) {
   // A1: array
   // A2: element
   // R: an array with element added to the front.

   arr.unshift(elem);
   return arr;
}

function shift(array) {
   // A1: array
   // R: an array with first element removed from A1
   array.shift();
   return array;
}

function pop(array) {
   // A1: array
   // R: array with last element removed from A1
   array.pop();
   return array;
}

function push(array, elem) {
   // A1: array
   // A2: elem
   // R: array with element added to end
   array.push(elem);
   return array;
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

function nth(str, num) {
   // A1: string
   // A2: number
   var nthChar = str[num];
   return nthChar;

   //var lengthOfString = str.length;
   //console.log(lengthOfString);
   //var nthNum = lengthOfString -[num];
   //console.log(nthNum);
   //2nd attempt
   //var lengthOfString = str.length;

   //var nthNumber = str[nthNum];
   //return nthChar;
   // A1: string
   // A2: number
   // R: nth character
   //return str + num[2];
}

function first(str) {
   // A: string
   // R: first character of the string
   // return (input1 = input2[0]);
   return str[0];
}

function length(string) {
   // A1: string
   // R: number of characters in string
   //return (input1 = input2.length);
   return string.length;
}

function construct(str, var1) {
   // A1: string
   // A2: variable
   // R: string
   var ourStr = str;
   var ourVar = var1;
   return ourStr + ourVar;
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
