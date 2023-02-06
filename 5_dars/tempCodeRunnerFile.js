let array = [3 , 6, 2, 56, 32, 5, 89, 32];
let largest= 0;
array = new Set(array)
array = Array.from(array)
for (let i=0; i<array.length ;i++){
  if (array[i]>largest) {
    largest = array[i];
  }
}
array[array.indexOf(largest)] = 0
largest = 0
for (let j = 0; j < array.length; j++) {
  if (array[i]>largest) {
    largest = array[i];
  }
}


console.log(largest);