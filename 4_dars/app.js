// in group
// 1-masala
// function hoursPassed(hour1, hour2) {
//     let res = ""

//     hour1 = hour1.split(':').join(" ")
//     hour2 = hour2.split(':').join(' ')
//     hour1 = hour1.split(" ")
//     hour2 = hour2.split(" ")

//     if (hour1[2].toUpperCase() == "PM" && hour2[2].toUpperCase() == "PM") {
//         res = Math.abs(+hour2[0] - +hour1[0])
//         res += ":" + (+hour2[1] - +hour1[1]) + " hours"
//     }
//     if (hour1[2].toUpperCase() == "AM" && hour2[2].toUpperCase() == "AM") {
//         res = Math.abs(+hour2[0] - +hour1[0])
//         res += ":" + (+hour2[1] - +hour1[1]) + " hours"
//     }
//     if (hour1[2].toUpperCase() == "AM" && hour2[2].toUpperCase() == "PM") {
//         res = +hour2[0] - +hour1[0] + 12
//         res += ":" + (+hour2[1] - +hour1[1]) + " hours"
//     }else{
//         console.log("G'ishmat kalla qo'yding");
//     }
//     console.log(res);

// }

// hoursPassed("02:00 AM", "19:00 AM")

// const morseCode = {
//     "A": ".-",
//     "B": "-...",
//     "C": "-.-.",
//     "D": "-..",
//     "E": ".",
//     "F": "..-.",
// "G": "--.",
// "H": "....",
// "I": "..",
// "J": ".---",
// "K": "-.-",
// "L": ".-..",
// "M": "--",
// "N": "-.",
// "O": "---",
// "P": ".--.",
// "Q": "--.-",
// "R": ".-.",
// "S": "...",
// "T": "-",
// "U": "..-",
//     "W": ".--",
//     "X": "-..-",
//     "Y": "-.--",
//     "Z": "--..",
//     "!": "-.-.--",
//     " ": " "
//  }
//  const convertToMorse = (str) => {
//     return str.toUpperCase().split("").map(el => {
//        return morseCode[el] ? morseCode[el] : el;
//     }).join("");
//  };
//  console.log(convertToMorse('EDABBIT CHALLANGE'));
//  console.log(convertToMorse('HELP ME !'));

// Homework //
// 1-masala
// values
// function keys(user) {
//     let mydata = []
//     for (const value in user) {
//         mydata.push(value)
//     }
//     console.log(mydata);
// }
// function values(user) {
//     let mydata = []
//     for (const value in user) {
//         mydata.push(user[value])
//     }
//     console.log(mydata);
// }
// function key_values(user) {
//     let mydata = []
//     let nextdata = []
//     for (const value in user) {
//         mydata.push(value)
//         nextdata.push(user[value])
//     }
//     console.log(mydata, nextdata);
// }
// console.log(key_values({name: "Toshmat",surname: "Toshmatov",age: 23,}));

// 2-masala

// function drop(n, nextN) {
//     for (let value in n) {
//         if(n[value] == nextN) {
//             let del = delete n[value]
//             console.log(n);
//         }
//     }
// }

// let result = drop({one:1,two:2,three:3,},2);
// console.log(Object.isFrozen());

// 3-masala

// function connact(one, two) {
//   let num = {number: Number(one + '' + two)};
//   Object.seal(num)
//   return num
// }
// let res = connact(123, 4);
// console.log(res);
// console.log(Object.isFrozen(res));
// console.log(Object.isSealed(res));

// 4-masala


// function fruit(str) {
//     if(str.length >= 6) {
//         return{bool: true}
//     }
//     else{
//         return{bool: false}
//     }
// }
// let res = fruit("apples")
// console.log(res);
// console.log(Object.isFrozen());

// 6-masala

// function getLastItem(n){
//     let nums = n.slice(-1)
//     let sample = nums.join()
//     return {
//         lastItem: sample
//     }
// }
// let arr = getLastItem(["duck",'cat','monkey'])
// console.log(arr);
// console.log(Object.isFrozen(arr));

////////SECOND/////////

// 1-masala 

// function twoObj(firstobj,secondobj) { 
  
//   for (const val in firstobj) {
//     if(firstobj[val] === secondobj[val]) {
//      let changer = Object.seal(firstobj)
//      console.log(changer);
//       }else{
//         console.log("tengmas");
//       }
//   }
// }
// let res = twoObj({nickname:"toshmat", age: 20},{nickname:"toshmat", age: 20})
// console.log(res);

// 2-masala 

// function findMaxNum(obj) {
//   let arr = Object.values(obj)
//   let max = Math.max(...arr);
//   Object.freeze(max)
//   obj.piano = 100
//  console.log(max);
// }
// let newobj = findMaxNum({piano:500, stereo: 300})

// 3-masala 

function findMaxNum(obj) {
  let arr = Object.values(obj)
  let max = Math.max(...arr);
  // Object.freeze(max)
  // obj.piano = 100
 console.log(max);
}
let newobj = findMaxNum({piano:500, stereo: 300})
// const chars = {a: 1, b: 2, undefined: 1}

// let max = 0;
// let maxKey = "";

// for(let char in chars){
//   if(chars[char]> max){
//     max = chars[char];
//     maxKey= char
//     console.log(maxKey[max]);
//   }
// }

// console.log(maxKey)
