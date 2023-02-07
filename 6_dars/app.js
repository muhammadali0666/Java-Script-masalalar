// in group
// 1-masala
// function dublicateNumbers(num) {
//   let res = [];
//   for (let i = 0; i < num.length; i++) {
//     for (let x = i + 1; x < num.length; x++) {
//       if (num[i] === num[x]) {
//         res.push(num[i]);
//       }
//     }
//   }
//   return res;
// }
// console.log(dublicateNumbers([81, 72, 43, 72, 81, 99, 100,100, 12, 54, 99]));

// 2-masala

// function celsiesToFar(celsius) {
//   let cTemp = celsius;
//   let cToFahr = (cTemp * 9) / 5 + 32;
//   let message = cTemp + " C is " + cToFahr + " F.";
//   return message;
// }

// console.log(celsiesToFar(35));

// function fToC(fahrenheit) {
//   let fTemp = fahrenheit;
//   let fToCel = ((fTemp - 32) * 5) / 9;
//   let message = fTemp + " F is " + fToCel + " C.";
//   console.log(message);
// }
// console.log(fToC(19));
////////// HOMEWORK //////////

// 1-masala

// function twoArr(array1, array2) {
//   found = array1.find((val) => {
//     let res = array2.includes(val);
//     return res;
//   });
//   if (found > 0) {
//     return console.log(false);
//   } else {
//     return console.log(true);
//   }
// }
// twoArr([1, 2, 3, 4],[0, 6])

// 2-masala

// function sortArray(arr1, arr2, str) {
//   let added = arr1.concat(arr2);
//   let other = arr1.concat(arr2);
//   let arrToStr = arr1.concat(arr2);
//   let sorted = added.sort(function (a, b) {
//     return a - b;
//   });
//   let changed = other.sort(function (a, b) {
//     return b - a;
//   });
//   let filtered = arrToStr.map((val) => {
//     return (val = str);
//   });
//   console.log(sorted);
//   console.log(changed);
//   console.log(filtered);
// }
// sortArray([1, 10], [2, 3, 4], "nodejs");

// 3-masala

// function numberSplit(num) {
//   let freeArr = [];
//   let maths = num / 2;
//   freeArr.push(maths) && freeArr.unshift(maths);

//   return freeArr;
// }
// console.log(numberSplit(10));

// 4-masala

// function sortByLength(arr) {
//   let loop = arr.sort(function(a,b) {
//     return a.length - b.length
//   })
//   return loop
// }
// console.log(sortByLength(['a','dddd','ccc', "bb"]));

// 5-masala

// function filterArray(arr) {
//   let newArr = [];
//   arr.map((element) => {
//     if (element >= 0) {
//       let multiple = element * 100;
//       newArr.push(multiple);
//     }
//   });
//   let clener = newArr.sort(function (a, b) {
//     return a - b;
//   });
//   let leng = newArr.length;
//   newArr.push(leng);
//   return console.log(clener);
// }
// filterArray([2, 1, 3, "a", "b"]);

// 6-masala

// function sumOfCubes(arr) {
//   let freeArr = [];
//   arr.map((element) => {
//     let all = element ** 3;
//     freeArr.push(all);
//   });
//   let sumOfArr = freeArr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
//   );
//   let obj = {
//     add: sumOfArr,
//   };
//   freeArr.push(obj);
//   return freeArr;
// }
// console.log(sumOfCubes([1, 5, 9]));

// 7-masala

// function changeAndAddArray(arr) {
//   let freeArr = [];
//   let nextArr = [];
//   let newArr = [];
//   let newxtExtra = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       freeArr.push(arr[i]);
//     } else if (arr[i] % 2 === 1) {
//       nextArr.push(arr[i]);
//     }
//   }
//   freeArr.map((element) => {
//     let loopinner = element * 7;
//     newArr.push(loopinner);
//   });
//   nextArr.map((element) => {
//     let circleinner = element * 5;
//     newxtExtra.push(circleinner);
//   });
//   let added = newxtExtra.concat(newArr);
//   let cleaner = added.sort(function (a, b) {
//     return a - b;
//   });
//   return {
//     toq: newxtExtra,
//     juft: newArr,
//     add: added,
//     sort: cleaner,
//   };
// }
// console.log(changeAndAddArray([1, 3, 2, 4, 6, 8]));

// 8-masala

// function findNumber(arr) {
//   let findNum = arr.reduce((acc,next) => acc + next)
//   return findNum / 5
// }
// console.log(findNumber([1, 2, 3, 4, 7]));

// 9-masala

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const looping = (arr = []) => {
//    let res = '';
//    arr = arr.map(String);
//    res += `(${arr[0]+arr[1]+arr[2]}) `;
//    res += `${arr[3] + arr[4] + arr[5]}-`;
//    res += arr[6] + arr[7] + arr[8] + arr[9];
//    return res;
// };
// console.log(looping(arr));

// 10-masala

// function toArray(num) {
//   var myArr = String(num).split("").map((num)=>{
//     return Number(num)
//   })
//   return myArr
// }
// console.log(toArray(235));

// 11-masala

// function minMax(arr) {
//   let newArr = [];
//   let sliced = arr.slice(0, 1);
//   let otherSliced = arr.slice(-1);
//   let multipleOne = sliced * 5;
//   let multipleTwo = otherSliced * 5;
//   newArr.unshift(multipleOne);
//   newArr.push(multipleTwo);
//   return newArr;
// }
// console.log(minMax([1, 2, 3, 4, 1]));

// 12-masala

// const getArrayDepth = (value) =>
//   Array.isArray(value) ? 1 + Math.max(0, ...value.map(getArrayDepth)) : 0;
// console.log(getArrayDepth([[[[[]]]]]));

// console.log(Math.max(0, ...[[[[[]]]]].map(getArrayDepth)));

// 13-masala

// function reverseImg(arr) {
//   let newArr = [];
//   arr.map((element) => {
//     newArr.push(element.reverse());
//   });
//   return newArr.reverse();
// }
// console.log(
//   reverseImg([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// 14-masala

// function changeNumberToStr(num, nextNum) {
//   let obj = {
//     1: "one",
//     2: "two",
//     3: "three",
//     4: "four",
//     5: "five",
//     6: "six",
//     7: "seven",
//     8: "eight",
//     9: "nine",
//     10: "ten",
//   };
//   let objtoarr = Object.values(obj);
//   let otherObjToArr = Object.values(obj);
//   if (objtoarr.length) {
//     console.log(objtoarr.slice(num - 1, nextNum));
//   }
//   if (otherObjToArr.length) {
//     let reverseOfArr = otherObjToArr.slice(num - 1, nextNum);
//     let res = reverseOfArr.reverse();
//     console.log(res);
//   }
// }
// changeNumberToStr(1, 5);

// 15-masala

// function replace(str, secondStr, thirdStr) {
//   let all = "";
//   let toSplit = str.split("");
//   toSplit.map((element) => {
//     if (element === secondStr) {
//       all += thirdStr;
//     } else {
//       all += element;
//     }
//   });
//   return all;
// }
// console.log(replace("hello world", "l", "k"));
