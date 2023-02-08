/*  Execution context  

Javascriptda codning o`qilishi va ishga tushurilish jarayoni 2 ga bo`linadi.    
  1. (Memory) creating phase
  2. Execution phase

  (1) bsoqichida global object yasaladi. Sheap memory ishga tushadi.
    Js dagi barcha o`zgaruvchi va funksiyalar sheap memoryga saqlanadi.
    Barcha o`zgaruvchila default undefined qiymati bilan saqlanadi. 
    Bu bosqichda hech qanday code ishga tushmaydi.

 (2) -> bosqichida javascript codelari ishga tushuriladi. O`zgaruvchilarga ularning qiymatlari biriktirib chiqiladi.
 Barcha chaqirilgan funksiyalar ishga tushiriladi.
 */

// let num = 12;
// let obj = {name: 'A'};
// let arr = [1, 2, 3];
// function main(){}

/*
 
        Creation phase
        1. Global object.
        2. Declare variables and save into heap memory.
        3. Declare functions and save into heap memory.


        let num = undefined;
        let obj = undefined;
        let arr = undefined;
        function main(){}
 */

/*
      Execution phase
      1. Assign values to variables.
      2. Call functions and execute them. 

        var num = 12;
        let obj = {name: 'A'};
        const arr = [1, 2, 3];
        function main(){}

Execution context -> har bir scope uchun alohida bo`ladi. Global scopeda ham local scope da ham.
*/

/* 
    let a;
    var b;
    const x;  -> const bilan e`lon qilingan o`zgaruvchiga qiymat berilmasa syntax xatolik beradi.
    console.log(a, b, x); -> declaratsiya qilingan o`zgaruvchilar globalda saqlanmaydi.
*/

/*
    n = 12
    y = 34
    c = 9
    add();
    function add(){
    this.x = 12345;
    }
    console.log(global);
-------------------------------------------------------------------------------
*/

/*
Localniy symbollar bir biriga teng emas
    let a = Symbol('id');
    let b = Symbol('id');
    a.description -> Localniyda symbol qiymatini olish uchun ishlatiladi. Globalniyda ham ishlaydi


Globalniy symbollar bir biriga teng
    let g = Symbol.for('id');
    let g2 = Symbol.for('id');
    console.log(g == g2); false
    Symbol.keyFor(g) -> ushbu metod faqat globalniy symbolda ishlaydi.
    console.log(g.description);

*/
