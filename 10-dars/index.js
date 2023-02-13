// in group

// 1-masala

// function max(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < i.length; j++) {
//       return console.log(j[i]);
//     }
//     return nums[i];
//   }
// }
// console.log(max([1, 4, 6, 8, 4, 2]));
// let res = args.reduce( (min, val) => min < val ? val : min );
// console.log(res);

// 2-masala

// function circularShift(arr1, arr2, n) {
//   arr1 = arr1.slice(n).concat(arr1.slice(0,n))
//   for (let i = 0; i < arr1.length; i++) {
//     if(arr1[i] !== arr2[i]){
//         return false
//     }
//   }
//   return true
// }
// console.log(circularShift([1, 2, 3, 4], [3, 4, 1, 2], 2));

////////////////////// HOMEWORK //////////////////////

// 1-masala

// function pow(number, power) {
//  return number ** power
// }
// console.log(pow(7, 3));

// 2-masala

// function max(arr) {
//   let max = -Infinity
//   for (const number of arr) {
//     if(number > max) {
//       max = number
//     }
//   }
//   return max
// }
// console.log(max([5,5,5,8,2,7,4,7]));

// 3-masala

// function check(a) {
//   return function (b) {
//     return function (c) {
//       if (a + b === c) {
//         return true;
//       } else if (a - b === c) {
//         return true;
//       } else if (a * b === c) {
//         return true;
//       } else if (a / b === c) {
//         return true;
//       } else {
//         return false;
//       }
//     };
//   };
// }

// console.log(check(5)(2)(10));

// 4-masala

// function checkNum(num) {
//   let arr = [];
//   for (let i = 2; i < num + 1; i += 2) {
//     arr.push(i);
//   }
//   let total = arr.reduce((a, b) => a+b);
//   return {
//     arr: arr,
//     sum: total
//   };
// }
// console.log(checkNum(10));

// 6-masala

// function calc(a, b, c) {
//   if (c === "+") {
//     return a + b;
//   } else if (c === "-") {
//     return a - b;
//   } else if (c === "*") {
//     return a * b;
//   } else if (c === "/") {
//     return a / b;
//   }
// }
// console.log(calc(4, 3, "+"));

/////////////////// SECOND ///////////////////

/////////////////// EASY ///////////////////

// 1-masala

// setTimeout(() => {
//   function equal(a,b,c){
//     let res = 0
//     return a + c === b ? res : a + c
//   }
//   console.log(equal(1,4,3));
// },'2000')

// 2-masala

// setInterval(()=>{
//   let date = new Date()
//   let hour = date.getHours()
//   let minut = date.getMinutes()
//   let secund = date.getSeconds()
//   let dates = date.getDate()
//   let month = date.getMonth()
//   let year = date.getFullYear()
//   console.log(`${hour}:${minut}:${secund} ${dates}.${month}.${year}`);
// },"1000")

// 5-masala

// function changeValue(arr) {
//   let newArr = [];
//   switch (arr[0]) {
//     case "a":
//       newArr.push("A!");
//       break;
//     case "b":
//       newArr.push("B!");
//       break;
//     case "c":
//       newArr.push("C!");
//       break;
//     case "d":
//       newArr.push("D!");
//       break;
//     case "e":
//       newArr.push("E!");
//       break;
//     case "f":
//       newArr.push("F!");
//       break;
//     case "g":
//       newArr.push("G!");
//       break;
//     case "h":
//       newArr.push("H!");
//       break;
//     case "i":
//       newArr.push("I!");
//       break;
//     case "j":
//       newArr.push("J!");
//       break;
//     case "k":
//       newArr.push("K!");
//       break;
//     case "l":
//       newArr.push("L!");
//       break;
//     case "m":
//       newArr.push("M!");
//       break;
//     case "n":
//       newArr.push("N!");
//       break;
//     case "o":
//       newArr.push("O!");
//       break;
//     case "p":
//       newArr.push("P!");
//       break;
//     case "q":
//       newArr.push("Q!");
//       break;
//     case "r":
//       newArr.push("R!");
//       break;
//     case "s":
//       newArr.push("S!");
//       break;
//     case "t":
//       newArr.push("T!");
//       break;
//     case "u":
//       newArr.push("U!");
//       break;
//     case "v":
//       newArr.push("V!");
//       break;
//     case "w":
//       newArr.push("W!");
//       break;
//     case "x":
//       newArr.push("X!");
//       break;
//     case "y":
//       newArr.push("Y!");
//       break;
//     case "z":
//       newArr.push("Z!");
//       break;
//   }
//   newArr.push(arr[1] + 1);
//   if (arr[2] === true) {
//     newArr.push(false);
//   } else {
//     newArr.push(true);
//   }
//   return newArr;
// }
// console.log(changeValue(["c", 1, false]));

////////////////////// MIDDLE //////////////////////
// const elFirst = document.querySelector(".first");
// const elSecond = document.querySelector(".second");
// const elThird = document.querySelector(".third");

// setInterval(() => {
//   let date = new Date();
//   let hour = date.getHours();
//   let minut = date.getMinutes();
//   let secund = date.getSeconds();
//   let dates = date.getDate();
//   let month = date.getMonth();
//   let year = date.getFullYear();
//   let day = date.getDay();
//   function days(day) {
//     switch (day) {
//       case 1:
//         return "Mon";
//       case 2:
//         return "Thu";
//       case 3:
//         return "Wed";
//       case 4:
//         return "Thu";
//       case 5:
//         return "Fri";
//       case 6:
//         return "Sun";
//       case 7:
//         return "Sat";
//     }
//   }
//   elFirst.innerHTML = `${dates}.${month}.${year} ${days(day)}`;
//   elSecond.innerHTML = `${hour}:${minut}:${secund}`;
//   elThird.innerHTML = `Digital clock with HTML and CSS`;
// }, "1000");
