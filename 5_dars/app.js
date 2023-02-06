
// in group
// const isPandigital = num => /0+1+2+3+4+5+6+7+8+9/.test(String(num).split('').sort().join(''));
// console.log(isPandigital(1234567890));
// 1-masala

// function maxSubNum(num, secondNum) {
//   for (let i = 0; i < num.length; i++) {
//     for (let j = 0; j < num.length; j++) {
//       if(num[i] + num[j] === secondNum){
//         console.log(num[i], '+', num[j]);
//       }
//     }
//   }
// }

// let result = maxSubNum([2,-1,2,3,9], 8)

// 2-masala

// function actionNumber(n) {
//   const initialValue = 0;
// const sumWithInitial = n.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
// );
// const divide = n.reduce(
//   (accumulator, currentValue) => accumulator % currentValue,
//   initialValue + 1
// );
// const minus = n.reduce(
//   (accumulator, currentValue) => accumulator - currentValue,
// );
// const multy = n.reduce(
//   (accumulator, currentValue) => accumulator * currentValue,
// );
//   return {
//     add: sumWithInitial,
//     divide: divide,
//     minus: minus,
//     multy: multy,
//   }
// }

// console.log(actionNumber([15,3,5]));

// 3-masala

// function getFirstvalueAnToArr(n) {
//   let num = n.splice(0,1)
//       n.push(num)
//   return n.flat()
// }
// let result = getFirstvalueAnToArr([1,2,3])
// console.log(result);

// 4-masala

// function actionNumber(n) {
//   let sumWithInitial = n.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
//   );
//   n.push(sumWithInitial);
//   return n;
// }

// console.log(actionNumber([12, 13]));

// 5-masala

// function drop(arr, n) {
//   for (let i = 0; i <= arr.length; i++) {
//     if(arr[i] === n) {
//       arr.splice(i);
//      return arr
//     }
//   }
// }

// let num = drop([1,2,4,22],22)
// console.log(num);

// 6-masala

// function changeToArray(obj, n) {
//   let res = Object.values(obj)
//   console.log(res);
//   for (let i = 0; i < res.length; i++) {
//     if(res[i] === n) {
//        return true
//     }else if(res[i] !== n){
//       return false
//     }
//   }
// }

// let num = changeToArray({a: 11, b: 22},11)
// console.log(num);

// 8-masala
// function incrementItems(arr) {
//  let result = arr.map(i => i + 1)
//   return result

// }
// console.log(incrementItems([0,1,2,3,4,5]));

// 9- masala

// function getStringLength(arr) {
//  let result = arr.map(i => i.length)
//   return result

// }
// console.log(getStringLength(["cat","cow","lion","elephant","snack","bear"]));

// 10-masala

// function stringToArray(str, n) {
//   let strToArr = str.split('')
//   for (let i = 0; i < strToArr.length; i++) {
//     let end = str.slice(0, n)
//     return end.split('')
//   }
// }
// let result = stringToArray("Hello", 3)
// console.log(result);

// 11-masala

// function addArray(arr1, arr2) {
//   let newArr = []
//   let concats = arr1.concat(arr2)
//   newArr.push(concats)
//   let obj = {
//     arrLength: concats.length
//   }
//   newArr.push(obj)
//   return newArr
// }

// let arrays = addArray([1,3,4], [1,2,3,3])
// console.log(arrays);

// 12-masala

// function findindex(arr, idx) {
//   let find = arr.indexOf(idx)
//   return find
// }
// let datas = findindex(["hello", "world", "my", "name"], "name")
// console.log(datas);

///////////////////// MIDDLE /////////////////////

// 1-masala

// function countTrue(arr) {
//   let freeArr = [];
//   let element = true;
//   let findtrue = arr.indexOf(element)
//   while (findtrue !== -1) {
//     freeArr.push(findtrue)
//     findtrue = arr.indexOf(element, findtrue + 1)
//   }
//   let res = freeArr.push([freeArr.length])
//   return freeArr
// }
// let arrays = countTrue([true, false, false, true,false,true])
// console.log(arrays);

// 2-masala

// function toArray(obj) {
//   let toArr = Object.entries(obj)
//   return toArr
// }
// let obj = toArray({a: 1, b: 12})
// console.log(obj);

// 4-masala

// function toArray(obj) {
//   let toArr = Object.entries(obj)
//   return toArr
// }
// let obj = toArray({a: 1, b: 12, c: 22, d: 33})
// console.log(obj);

// 5-masala

// function sortIt(arr) {
//   let sorted = arr.sort()
//   return sorted
// }
// let arrays = sortIt([4,5,1,2,3])
// console.log(arrays);

// 6-masala

// const array = ["string1", -35, "string2", 888, "string3", 987, NaN];

// const mapArray = array.filter((item) => {
//   let arr = [];
//   if (item < 0 || item >= 0) {
//     arr.push(item);
//     console.log(arr);
//   }
// });

// 9-masala

// function strToArr(str) {
//   let arr = [];
//   let changer = str.split(" ");
//   let obj = {
//     text: str,
//     word_length: changer.length,
//   };
//   if(str.length > 0){
//     arr.push(obj)
//     arr.push(true)
//   }else{
//     arr.push(false)
//   }
//   return arr;
// }
// console.log(strToArr("I'm js dev"));

// 10-masala

// function showArr(arr) {
//   let freeArr = [];
//   let show = arr.flat(Infinity);
//   let cut = show.slice(0, 1);
//   let cut2 = show.slice(2, 3);
//   let cut3 = show.slice(4, 5);
//   freeArr.push(cut)
//   freeArr.push(cut2)
//   freeArr.push(cut3)
//   return {
//     text: freeArr.join(' '),
//   }
// }
// console.log(showArr([[["I'm"], 3],[["Nodejs"], 4],[["Developer"], 4,34],]));

/////////////////// Hard ///////////////////

// 1-masala

// function arrays(arr,s,f) {
//   let dataBase = [...arr, ...s, ...f]
//   return dataBase
// }

// console.log(arrays([1,2],[123,4,5],[1,4,6]));

// 2-masala

// let array = [3, 6, 2, 56, 32, 5, 89, 32];
// let largest = 0;
// array = new Set(array);
// array = Array.from(array);
// let max_val = Math.max(...array);
// array[array.indexOf(max_val)] = Number.MIN_VALUE;
// max_val = Math.max(...array);
// console.log(max_val);

// for (let i=0; i<array.length ;i++){
//   if (array[i]>largest) {
//     largest = array[i];
//   }
// }
// array[array.indexOf(largest)] = 0
// largest = 0
// for (let j = 0; j < array.length; j++) {
//   if (array[j]>largest) {
//     largest = array[j];
//   }
// }

// console.log(largest);

// 5-masala 

function getLength(arr) {
  let openArr = arr.flat(Infinity)
  return openArr.length
}
console.log(getLength([12,33,3], 33,3[3]));
