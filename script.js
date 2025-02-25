

//problem 1.

let input = "Hello, world!";
let isString = typeof input === 'string';

console.log(isString); 


let input1 = "abc";
let input2 = 190;

let isString1 = typeof input1 === 'string';
let isString2 = typeof input2 === 'string';

console.log(isString1); 
console.log(isString2); 


//problem 2.

let input1 = "";
let input2 = " ";
let input3 = "fjfjf";

let isBlankString1 = typeof input1 === 'string' && input1.length === 0 || /^[\s]*$/.test(input1);
let isBlankString2 = typeof input2 === 'string' && input2.length === 0 || /^[\s]*$/.test(input2);
let isBlankString3 = typeof input3 === 'string' && input3.length === 0 || /^[\s]*$/.test(input3);

console.log(isBlankString1); 
console.log(isBlankString2); 
console.log(isBlankString3); 


//problem 3.

let str = "abcdef";
str = str.charAt(0).toUpperCase() + str.slice(1);

console.log(str);  

//problem 4.

let name = "Ryan Curtis";
let nameParts = name.split(" ");
let abbreviatedName = nameParts[0] + " " + nameParts[1].charAt(0) + ".";

console.log(abbreviatedName); 

//problem 5.

let sentence = "I am a long sentence";
let maxLength = 6;

let truncatedSentence = sentence.length > maxLength ? sentence.slice(0, maxLength) + "..." : sentence;

console.log(truncatedSentence);  

//problem 6.

const str = "The practitioners grappled on the road side!";
let slicedStr = str.slice(17);  

console.log(slicedStr);  





