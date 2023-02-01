// 1 masala

// function missingChar(text, num) {
//  let js = text.trim();
//  let arr = js.split("")
//  arr.splice(num, 1)
//  return {
//   old_value: text.length,
//   new_value: js.length,
//   new_length: arr.join(""),
//  }
// }

// let obj = missingChar("      Javascript", 5)
// console.log(obj)

// 2 masala
// function myfunc(n) {
//   let res = []
//   let num = []
//   for (let i = 1; i <= n; i+=2) {
//     res.push(i)
//   }
//   for (let i = 2; i <= n; i+=2) {
//     num.push(i)
//   }
//   let total = res.reduce((acc, next) => acc + next)
//   let result = num.reduce((sanjar, sanjar2) => sanjar + sanjar2)
//   console.log(total);
//   console.log(result);
// } 
// myfunc(10)



// 3 masala
// function myfunc(){
//   let arr = [12, '34'];
//   return arr.reduce((a, b) => Math.max(a, b))
// }
// console.log(myfunc())
// console.log(typeof myfunc())

// 4masala

// let numbers = [8, "9"];
// goal = 10;

// let val = numbers.reduce(function myfunc(first, second) {
//   return (
//     (Math.abs(first - goal) < Math.abs(second - goal) ? first : second) - 1 + 1
//   );
// });
// console.log(val);
// console.log(typeof val);

// 5 masala

// function reapetEnd(str, n){
//   return str.slice(n+1).repeat(n).toUpperCase([1])
// }

// console.log(reapetEnd("JavaScript", 3))
// console.log(reapetEnd("JavaScript", 3).length)
// 6 masala

// function oneTwo(text) {
//   let val = text.trim();

//   return {
//     old_value: text.length,
//     new_value: val.length,
//   };
// }
// let result = oneTwo("     tjavascrip     ");
// console.log(result);

// 9 masala
// function func(total, num) {
//     return total + num
// }
// console.log(func(1, 3));

// function myfunc(first, second) {
//   return first + second * first + second
// }
// console.log(myfunc(2, 2));

// 12 masala

// function myfunc(n) {
//   if(n % 2 === 0) {
//     console.log("juft")
//   }
//   else{
//     console.log("toq")
//   }
//   return n * n / 2
// }
// console.log(myfunc(11));

// 13 masala
// function myfunc(array) {
//   var sum = 0,
//       i = array.length;
//   while (i--)
//    sum += Math.pow(array[i], 2);
//   return sum / 4;
// }
// console.log(myfunc([1,2,3,4]));
// 14 masala

// function backAround(n) {
//   let result = n.trim();
//   let myval = result.split("");
//   let res = myval.splice(-1);
//   myval.push(res + res) && myval.unshift(res);
//   let b = myval.join().toUpperCase();
//   return {
//     word: b,
//   };
// }
// let val = backAround("     cat     ");
// let vals = backAround("     hello     ");
// let vales = backAround("     a     ");
// console.log(val, vals, vales);

// 15 masala
// function myfunc(n){
//   return Math.round(n)
// }
// console.log(myfunc("34.8989889"));
// console.log(typeof myfunc("34.8989889"));

// in === class === 

// let n = 5;
// let word = "";
// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j <= n - i; j++) {
//     word += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     word += "*";
//   }
//   word += " \n";
// }
// console.log(word);