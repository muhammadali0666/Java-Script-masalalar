/*  
      mutability ->  data type ning biron bir qismini o`zgartirish yoki o`zgartirmaslik holati.
         - immutable  -> primitive type
         - mutable    -> object, array

      reassignment

      Example: 
          let arr = [1, 2, 3];
          Object.seal(arr)
          arr[0] = 12222
          console.log(arr);
*/

/*
      Declaration
          let arr = new Array()
          let arr = []

      let fruits = ["Apple", "Orange", "Plum"];
      fruit[0]
      let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
      fruits[fruits.length-1]
      fruits.at(-1)  === str.at()
*/

/*
  Taqqoslash amallari
       console.log([] === [])  -> false
       console.log([0] == [0]) -> false
       console.log(0 == [])    -> true -> Number([])
*/


/*
   typeof 
      console.log(typeof {}); // object
      console.log(typeof []);
*/


/*
   Ko`p o`lchovli massivlar
      let matrix = [
            [[6, 7], 2, 3],
            [4, 5, 6],
            [7, 8, 9]
            ];
    console.log(matrix[0][0][0]);
*/


/*
   Loops on the Array
      - for
      - for in
      - for of
*/

/*
 Array methods
   let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 0);
   arr.join(';')
   indexOf()
   includes()
   lastIndexOf()
                example: 
                    alert( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
                    alert( arr.includes(NaN) )
            

    push()    -> massiv oxiridan qo`shadi.
    pop()     -> massiv oxiridan elementni olib tashlaydi.
    unshift() -> massiv boshidan elementni qo`shadi.
    shift()   -> massiv boshidan elementni olib tashlaydi.

    splice()  -> yuqoridagi 4 ta metod o`rnini bosadi.
    delete    -> massiv elementini o`chirish mumkin, Lekin tavsiya etilmaydi.

    slice(start, end)   -> qirqib olish.
    concat()  -> bir nechta massivlarni birlashtirish uchun ishlatiladi.
              let arrayLike = {
                    0: "something",
                    length: 1 };
              let res = arr.concat(arrayLike)

    reverse()
    Array.isArray([]) -> true

   


    let arr = [ 1, 2, 3]
    let arr2 = arr;
    arr.pop() -> arr o`zgaruvchiga massiv metodini ishlatsak, ikkala o`zgaruvchidan ham qiymatni olib tashlaydi.

    matrix.toString() -> massivni stringga aylantirish
-------------------------------------------------------------------------------------


   Homework 
    arr.every()
    arr.some()
    reduce()
    slice()

    Array.prototype -> push(), pop(), unshift() shift()
*/



















































/*
  Iterator metodlar
    let arr = [1, 2, 15, 3, 4];

     - arr.forEach(function(item, index, array){})
     - arr.find(function(item, index, array){})
     - arr.findIndex(function(item, index, array){})
     - arr.filter(function(item, index, array){})
     - arr.map(function(item, index, array){})
     - arr.sort(function(a, b) { return a - b; })


   

    Homework
    every()
    some()
    Array.prototype.mypush = function(){}
    Array.prototype.myshift = function(){}

       

*/



/*

Example unShift method

    Array.prototype.myUnShift = function(element){
        for(let i = this.length - 1; i >= 0; i-- ){
            console.log(this[i+1], this[i]);
            this[i+1] = this[i] }
        this[0] = element;
        return this.length;
      }

    let arr = ['A', 'B', 'C', 'D'];
        arr.myUnShift('W')
        arr.myUnShift('d')
        console.log(arr);
*/