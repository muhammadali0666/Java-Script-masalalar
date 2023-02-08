// in group

// 1-masala

// function nextHappyYear(year) {
//   const nextYear = year + 1;
//   const isHappyYear = new Set(`${nextYear}`).size === `${year}`.length;
//   if (!isHappyYear) {
//     return nextHappyYear(nextYear);
//   }
//   return nextYear;
// }
// console.log(nextHappyYear(1990));

// 2-masala

// const sumMissingNumbers = (arr) => {
//   let a = arr.sort(function (a, b) {
//     return a - b;
//   });
//   let b = [];
//   let c = 0;
//   let d = 0;
//   for (let i = 0; i < a.length; i++) {
//     b.push(parseInt(a[i]));
//   }
//   for (let i = 0; i < b.length - 1; i++) {
//     if (b[i] !== b[i + 1] - 1) {
//       c = b[i + 1] - b[i] - 1;
//       for (let j = 0; j < c; j++) {
//         d += b[i] + j + 1;
//       }
//     }
//   }
//   return d;
// };

// console.log(sumMissingNumbers([10,7,5,3,1]));

//////////HOMEWORK//////////

// 1-masala

// function countArrayElemts(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]] += 1;
//     } else {
//       obj[arr[i]] = 1;
//     }
//   }
//   return obj;
// }
// console.log(countArrayElemts(["A", "A", "B", "C", "B", true, false]));

// 2-masala

// function checkForNumber(arr) {
//   if (arr[0] === 6) {
//     return true;
//   } else if (arr.slice(-1)[0] === 6) {
//     return true;
//   } else return false;
// }
// console.log(checkForNumber([2, 2, 5]) === true);

// 3-masala

// function checkForNumber(arr) {
//   if (arr[0] === arr.slice(-1)[0]) {
//     return true;
//   }  else return false;
// }
// console.log(checkForNumber([1, 2, 1]));

// 4-masala

// function commandEnd(...theArgs) {
  
//   let total = [];
//   total.push(theArgs);
//   let loop = total.flat(1);
//   loop.map((element) => {
//     if (element[2] === 3) {
//       return total.push(element[2]);
//     } else {
//       return total.pop();
//     }
//   });
//   if (total.length > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(commandEnd([1, 2, 3], [3, 2, 2], [3, 2, 3]));

// 5-masala

// function rotateLeft(arr) {
//   let newArr = [];
//   newArr.push(arr)
//   let flated = newArr.flat()
//   let sliced = flated.slice(0,1);
//   newArr.push(sliced)
//   let flatArr = newArr.flat(Infinity)
//   return flatArr.slice(1)
// }
// console.log(rotateLeft([5,11,9]));

// 6-masala

// function oneCount(...arrays) {
//   let arr = [];
//   let str = []
//   let obj = {
//     1: "ONE",
//     2: "TWO",
//     3: "TREE",
//     4: "FOUR",
//     5: "FIVE",
//     6: "SIX",
//     7: "SEVEN",
//     8: "EIGHT",
//     9: "NINE",
//     10: "TEN",
//   };
//   Object.values(obj);
//   arrays.map((element) => {
//     arr.push(element);
//   });
//   let looper = arr.flat()
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(looper);
//     if(arr[i] === 0){
//       console.log(arr[i]);
//      return str.push(arr)
//     }
//   }
//   return str
// }
// console.log(oneCount([1, 2, 3], [4, 2, 1], [1]));

// 7-masala

// function oneCount(arrays) {
//   let arr = [];
//   let obj = {
//     0: 'NOL',
//     1: "ONE",
//     2: "TWO",
//     3: "TREE",
//     4: "FOUR",
//     5: "FIVE",
//     6: "SIX",
//     7: "SEVEN",
//     8: "EIGHT",
//     9: "NINE",
//     10: "TEN",
//   };
//   let middleBefore = arrays[(arrays.length - 1) / 2 -1];
//   let middle = arrays[(arrays.length - 1) / 2];
//   let middleAfter = arrays[(arrays.length + 1) / 2];
//   let objToArr = Object.values(obj)
//   arr.push(objToArr[middleBefore])
//   arr.push(objToArr[middle])
//   arr.push(objToArr[middleAfter])
//   return arr;
// }
// console.log(oneCount([1, 6, 3, 0, 4, 8, 2]));

// 8-masala

// function trueOrFalse(...arr) {
//   let freArr = [];
//   freArr.push(arr);
//   let flated = freArr.flat()
//   for (let i = 0; i < flated.length; i++) {
//     if (!flated.includes(false)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(trueOrFalse(true, true, true, true));

// 9-masala

// function blackJack(...nums) {
//   let arr = []
//     let obj = {
//     0: 'NOL',
//     1: "ONE",
//     2: "TWO",
//     3: "TREE",
//     4: "FOUR",
//     5: "FIVE",
//     6: "SIX",
//     7: "SEVEN",
//     8: "EIGHT",
//     9: "NINE",
//     10: "TEN",
//   };
//   let max = Math.max(...nums)
//   let splited = String(nums).split('')
//   let toString = splited.toString()
//   let maxSplited = String(max).split('')
//   let toArr = Object.values(obj)
//   let first = arr.push(maxSplited[0])
//   let second = arr.push(maxSplited[1])
//   arr.push(toArr[first])
//   arr.push(toArr[second])

//   return {
//     max_number: max,
//     arr: arr,
//     arr_length: splited.length -1,
//     type: typeof toString
//   }

// }
// console.log(blackJack(19,21));

// 10-masala

// function strReverse(str) {
//   let tochange = str.split(' ')
//   let change = tochange.reverse()
//   let returnToStr = change.toString()
//   return returnToStr
// }
// console.log(strReverse("the sky is blue"));

// 11-masala

// let arr = ["olma", 15, [5, 4, 3]];

// let [olma, raqam1, [raqam2, raqam3, raqam4]] = arr;

// console.log(raqam4);

// 12-masala

// let arr = ["olma", 15, [5, 4, 3],[{name: 'A'}]];

// let [olma, raqam1, [raqam2, raqam3, raqam4], [{name}]] = arr;

// console.log(name);

//////////////////// MIDDLE ////////////////////

// 1-masala

// function removeDubs(arr) {
//   let newArr = [];
//   let unique = new Set(arr);
//   Object.values(unique);
//   newArr.push(unique);
//   return newArr;
// }
// console.log(removeDubs(["jon", "hello", "jon"]));

// 2-masala

// Array.prototype.myToString = Array.prototype.toString;
// Array.prototype.toString = function (val) {
//   if ("undefined" === typeof val) {
//     return this.myToString();
//   }
//   return this.join(val);
// };
// let myArray = ["zero", "one", "two", "three", "four", "five"];
// let result1 = myArray.myToString();
// console.log(result1);

// 3-masala

// let missingNumbers = (a, l = true) =>
//   Array.from(Array(Math.max(...a)).keys())
//     .map((n, i) => (a.indexOf(i) < 0 && (!l || i > Math.min(...a)) ? i : null))
//     .filter((f) => f);

// let array = [1, 3, 5, 7, 9,10];
// console.log(missingNumbers(array));

// 5-masala

// function findASCIITable(nums){
//   let res = nums.map(element => +element)
//   let all = res.map((element) => {
//     let a = res
//     let toLoop = String.fromCharCode(element)
//     return toLoop
//   })
//   return all
// }
// console.log(findASCIITable([97,98,99,100]));

// 6-masala

// function mumbling(str) {
//   let val = str.toLowerCase()
//   let toSplit = val.split('')
//   let result = toSplit.map((element, i) =>{
//     return element.toUpperCase() + element.repeat(i)
//   }).join('-')
//   return result
// }

// console.log(mumbling("MubAshIr"));

// 7-masala
// let a = [1, 4, 3, 2],
//   b = [0, 2, 1, 2],
//   x = [];

// for(let i = 0;i<=b.length-1;i++)
//   x.push(a[i] - b[i]);

// console.log(x);

// 8-masala
// function getSum(arr) {
//   let newArr = []
//   let obj = {
//     0: "NOL",
//     1: "ONE",
//     2: "TWO",
//     3: "TREE",
//     4: "FOUR",
//     5: "FIVE",
//     6: "SIX",
//     7: "SEVEN",
//     8: "EIGHT",
//     9: "NINE",
//     10: "TEN",
//   };
//   let flated = arr.flat();
//   let total = flated.reduce((acc, next) => acc + next);
//   let returnObj = Object.values(obj)
//   let res = returnObj[total]
//   newArr.push(res)
//   return 10 < total ? {sum: total} : {sum: newArr[0]}
// }
// console.log(
//   getSum([
//     [0, 1, 1, 0],
//     [0, 1, 0, 1],
//     [0, 1, 0, 1],
//     [0, 1, 0, 5],
//   ])
// );

// 9-masala

// function getFrequency(string) {
//   let freq = [];
//   let arr = []
//   for (let i = 0; i < string.length; i++) {
//     let character = string.charAt(i);
//     if (freq[character]) {
//       freq[character]++;
//     } else {
//       freq[character] = 1;
//     }
//   }
//   let res = Object.values(freq)
//   res.map((element) => {
//     if(element >= 2) {
//       arr.push(element)
//     }else if(element >= 1) {
//       return 0
//     }
//   })
//   return arr.length
// }
// console.log(getFrequency("aclocao"));

///////////////////// HARD ////////////////////

// Array.prototype.myReduce = function(fist, second){
//   let sum = second || this[0];
//   let i = second ? 0 : 1;
//   for(; i < this.length; i++){
//       sum = fist(sum, this[i]);
//   }
//   return sum;
// }

// let arr = [3, 5, 2];
// let res = arr.myReduce((acc, el)=>acc + el);

// console.log(res);
