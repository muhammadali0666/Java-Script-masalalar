// 1-masala

// setTimeout(() => {
//   let dates = new Date();
//   let year = dates.getFullYear();
//   let month = dates.getMonth() + 1;
//   let day = dates.getDate();
//   let hours = dates.getHours();
//   let minut = dates.getMinutes();
//   let second = dates.getSeconds();
//   let milsecund = dates.getMilliseconds();
//   return (
//     console.log(`${year}-${month}-${day}`), console.log(`${hours}:${minut}:${second}:${milsecund}`)
//   );
// }, 1000);

/////////////////////TYPES/////////////////////

// 1-masala

// function unique(arr) {
//   let res = [...arr = new Set(arr)]
//   let joined = res.join()
//   return joined
// }
// console.log(unique(['Hare', 'krishna', 'Hare', 'krishna', 'Hare', '0:1']));

// 2-masala

// function unique(arr) {
//   let res = [...new Set(arr)]
//   let joined = res.join()
//   return joined
// }
// console.log(unique(['hello', 'teachers', 'world', 'chareckters', 'pan','hello']));

// 3-masala

// let map = new Map()
// map.set("name","john")
// let keys = map.keys()
// map.set("more")
// console.log(keys)

// 5-masala

// let arr = [
//   {
//     name: "A",
//     country: {
//       name: "Uzbekistan",
//       region: "Tashkent",
//     },
//   },
//   {
//     name: "B",
//     country: {
//       name: "Kazakhstan",
//       region: "Astana",
//     },
//   },
// ];

// let map = new Map();
// let res = map.set(arr[0])
// let nextres = map.set(arr[1]);

// console.log(res,nextres);

// 6-masala

// let map = new Map([
//   ["cucamber", 500],
//   ["tomatoes", 350],
//   ["onions", 50],
// ]);
// function converter(map, val) {
//   let arr = []
//   if(val === "Object") {
//     arr.push(map.values())
//   }else if(val === "Array") {
//     arr.push(map.entries())
//   }
//  return arr
// }
// console.log(converter(map, "Array"));

// 7-masala

// let map = new Map([
//   ["mevalar",["olma", "shaftoli"]],
//   [1, 'hello world'],
//   ["1", 'bye world'],
// ]);

// function converter(map, val) {
//   let arr = []
//   if(val === "Array") {
//     arr.push(map.values())
//   }else if(val === "Array") {
//     arr.push(map.entries())
//   }
//  return arr
// }
// console.log(converter(map, "Array"));

// 8-masala 

// function unique(arr) {
//   let uniqueItems = [...new Set(arr)]
//   return uniqueItems
// }
// console.log(unique(["olma", "gilos", "olma", "uzum", "gilos"]));