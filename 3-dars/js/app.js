// 1-masala 
// function voteCount({upvote, downvote}) {
//   return upvote - downvote;
// }
// console.log(voteCount({upvote: 12, downvote: 10}));

// 2-masala 
// function volumeofbox({width, length, height}) {
//   return width * length * height;
// }
// console.log(volumeofbox({width: 2, length: 10, height: 2}));

// 3-masala 
// function returnName(str) {
//   // let concats = str.split('')
//   return str += " hello"
// }
// console.log(returnName("john"));

// 4-masala 

// function firstTwo(str) {
//     let taker = str.slice(0,2)
//   return taker
// }
// console.log(firstTwo("Hello"));

// 5-masala 

// function cutStr(str, second,third) {
//   let val = str.split('')
//   let addStr = [...val,...second, 11]
//   let delstr = addStr.slice(0,third)
//   let changer = delstr.join('').toUpperCase()
//   return changer
// }
// console.log(cutStr("About Javascript or", "Typescript!", 16 ));

// 6-masala 
// function retstr(str, nextstr) {
//   let concat = str += nextstr += str
//   let strlength = concat.length
//   let nextstrLength = concat.indexOf(nextstr)+1
//   let UpperCase = concat.toUpperCase()
//   return {
//     UpperCase,
//     strlength,
//     nextstrLength,
//   }
// }

// console.log(retstr("Hello", "World"));
// 7-masala 

// function strToArr(str) {
//   let js = str.split()
// return js
// }

// let result = strToArr(`'Solve','Programming','JavaScript','Problem','In'`)
// console.log(result);

  // 9-masala 

// function ASCIISuma(array) {
//   let sum = 0
//   for (let i = 0; i < array.length; i++) {
//     let char_at = array[i].charCodeAt(0)
//     sum += char_at
//   }
//   return sum
// }

// console.log(ASCIISuma("javaScript"));

// 10- masala 

// function ASCIISuma(array) {
//   let sum = 0
//   for (let i = 0; i < array.length; i++) {
//     let char_at = array[i].charCodeAt(0)
//     sum += char_at
//   }
//   return sum % 7
// }
// console.log(ASCIISuma("solve programming problems in javascript or typescript"));

// 11-masala 

// function inputNum(firstNum, secondNum) {
//   if(firstNum === secondNum) {
//     console.log(true);
//   }
//   else{
//     console.log(false);
//   }
// }
// inputNum(2,2);

// 12-masala 
// function lastnum(firstNum) {
//   let arr = firstNum.slice(-1)
//   nextArr = firstNum.slice(0)
//   if(arr === nextArr) {
//     console.log(true);
//   }
//   else{
//     console.log(false);
//   }
// }
// lastnum([1,2,3,4,1]); chala

// 13-masala

// function toRoundOf(num) {
//   let numes = Math.ceil(num)
//   return numes
// }
// console.log(toRoundOf(12.001));

// 14-masala 

// function toRoundOf(num) {
//   let res = num % 15
//   let numes = Math.ceil(res)
//   if(numes < 10) {
//     numes += +0
//   }
//   else {
//     numes += ""
//   }
//   return numes
// }
// console.log(toRoundOf(49));

// 15-masala 

// function findidx(find) {
//   let str = "Lorem ipsum DOLOR sit, amet consectetur adipisicing elit."
//   let finder = str.indexOf(find)
//   return{
//     value: find,
//     length: find.length,
//     index: finder
//   }
// }

// console.log(findidx("DOLOR"));

// 17-masala 

// second 
// 2-masala

// function totalAmountAdjectives(obj) {
//   let found = Object.keys(obj).length
//   return found
// }
// console.log(totalAmountAdjectives({a:"moron", b:"moron", c:"moron", d:"moron"}));

// 3-masala 
