// let arr = [1, "test", true, () => {}, 1, true];

// let obj = {
//   add() {
//     console.log(2 + 3);
//   },
// };

// let obj = {
//   true: 12,
//   'true': 23,
//   [true]: 123,
//   undefined: "90",
//   undefined: "12345",
// };

// let map = new Map([
//   [true, 12],
//   [true, 23],
//   [[true], 123],
// ]);

// console.log(map);

// let nums = [1, 2, 3, 4, 5, 6]
//console.log([...nums]);

// let user = {
//   name: 'A',
//   age: 12
// }

//  let admin = user

//  user = true

//  console.log(admin);

// let admin = Object.assign({}, user)
//  user.age = 45

// console.log(admin);
// console.log(user);

// let obj = {
//   name: 'A'
// }
// let obj2 = {
//   surname: 'B'
// }

// let obj3 = {
//   age: 12
// }

// let newObj = Object.assign({}, obj, obj2, obj3, )
// obj.name = 'Bahrom'

// console.log(newObj);

// let increAndDec = {
//   step: 0,
//   increment() {
//     this.step++
//     return this
//   },
//   decrement() {
//     this.step--;
//     return this
//   },
//   show() {
//     console.log(this.step);
//     return this
//   }
// }

// increAndDec.increment().decrement().increment().increment().decrement().show()

// let user = {
//   name: 'A',
//   age: 12,
//   show(){
//     console.log(this);
//   }
// }

// user.show()

// console.log(Math.PI);
// console.log(Math.SQRT1_2);

//Object chaining
// let cal = {
//   a:0,
//   b: 0,
//   val(a, b){
//     this.a = a,
//     this.b = b
//   },
//   add(){

//   }
// }
// cal.val(2, 4).add().devide().minus()

//////////////////////////////////////////////////////////////////////////////////

// let cal = {
//   a: 0,
//   b: 0,
//   res: 0,
//   val(a,b){
//     this.a = a,
//     this.b = b
//     return this
//   },
//   add(a,b){
//    this.res = this.a + this.b

//     return this
//   },
//   minus(a,b){
//     this.res = this.a - this.b
//     return this
//   },
//   divide(a,b){
//     this.res = this.a / this.b
//     return this
//   },
//   multiple(a,b){
//     this.res = this.a * this.b
//     return this
//   },
//   show(a,b){
//     console.log(this.res)

//     return this;
//   }
// }

// cal.val(2,4).add().show().minus().show()

// let crypted = {
//   a: 99,
//   b: 0,
//   res: 0,
//   val(a) {
//     this.a = a;
//     return this;
//   },
//   crypt(a) {
//     this.res = a.fromCharCode(99);
//     return this;
//   },
//   decrypt() {},
//   show() {
//     console.log(this.res);
//     return this;
//   },
// };

// crypted.val(99).show()

// in group
// 1-masala

// function chunks(arr, num) {
//   let res = [];
//   for (let i = 0; i < arr.length; i += num) {
//     let chunk = arr.slice(i, i + num);
//     res.push(chunk);
//   }
//   return res;
// }
// console.log(chunks([1, 2, 3, 4, 5, 6], 2));

// const num = 76;
// const roundOffTo = (num, factor = 1) => {
//    const quotient = num / factor;
//    const res = Math.round(quotient) * factor;
//    return res;
// };
// console.log(roundOffTo(num, 10));

////////////////////// HOMEWORK //////////////////////

// 1-masala

// function reverse(num) {
//  let change = num.toString().split('').reverse()
//  let totalFunc = change.join('')
//  return totalFunc
// }
// console.log(reverse(123457));

// 2-masala

// function uniqueSort(arr) {
//   let newArr = [];
//   let sorted = arr.sort(function (a, b) {
//     return a - b;
//   });
//   let unique = new Set(sorted);
//   Object.values(unique);
//   newArr.push(unique);
//   return newArr;
// }
// console.log(uniqueSort([3, 5, 2, 1, 4, 5, 4]));

// 3-masala

// function nums(a, b, c) {
//   let one = a * a;
//   let two = b * b;
//   let three = c * c;
//   if (one + two === three) {
//     return console.log(true);
//   } else {
//     return console.log(false);
//   }
// }
// nums(3, 4, 5);

// 4-masala

// function specialReverse(str, f){
//   let res = str.split(' ')
//   return res
// }
// console.log(specialReverse("word  searches are super fun", "s"));

// 5-masala

//////////////////// MIDDLE ////////////////////

// 1-masala

// function chunks(arr, num) {
//   let res = [];
//   for (let i = 0; i < arr.length; i += num) {
//     let chunk = arr.slice(i, i + num);
//     res.push(chunk);
//   }
//   return res;
// }
// console.log(chunks([1, 2, 3, 4, 5, 6], 2));

// 2-masala

// function occurrences(string, subString, allowOverlapping) {
//   string += "";
//   subString += "";
//   let obj = {};
//   if (subString.length <= 0) return string.length + 1;

//   let n = 0,
//     pos = 0,
//     step = allowOverlapping ? 1 : subString.length;

//   while (true) {
//     pos = string.indexOf(subString, pos);
//     if (pos >= 0) {
//       ++n;
//       pos += step;
//     } else break;
//   }
//   let splite = string.split(" ");
//   for (let i = 0; i < string.length; i++) {
//     if (obj[splite[i]]) {
//       obj[splite[i]] = +1;
//     } else {
//       obj[splite[i]] = 1;
//     }
//   }
//   return obj;
// }
// console.log(occurrences("fofo fo", "f"));
