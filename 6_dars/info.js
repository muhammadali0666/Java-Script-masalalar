/*
    HOMEWORK
---------------------------------------------------------------------------------------------------
    const ages = [32, 33, 16, 40];
    every() -> funksiyada kiritilgan shart massivning har bir 
         elementi bilan tekshirganda to`g`ri bo`lsa true qiymat qaytadi. 
         Aks holda false.

        Example: 
            let res = ages.every((v)=> v >= 16);

---------------------------------------------------------------------------------------------------

    some() -> funksiyaga kiritilgan shart massivning elementlari bilan tekshirganimizda,
         hech bo`lmaganda bitta elementi true bo`lsa true qiymat qaytadi. 
         Aks holda false.

        Example: 
            let res = ages.some((v)=> v > 40);

---------------------------------------------------------------------------------------------------
      reduce() -> massivning har bir elementi uchun shartni bajaradi.
        
        Example: 
                const ages = [1, 2, 3, 4, 5];
                let res = ages.reduce((acc, item, idx, arr)=> acc / item , 1);

---------------------------------------------------------------------------------------------------

   slice( start, end ) -> (start) indexli elementdan boshlab, 
         (end) indexli elementgacha ( (end) index kirmaydi ) bo`lgan massiv elementlarni 
         yanngi massivga olib qaytaradi.

       Example: 
          const ages = [8, 2, 3, 4, 5];
          let res = ages.slice(1, 3); result: [2, 3] 

-----------------------------------------------------------------------------------------------------

    Array.prototype -> push()
                Array.prototype.myPush = function(el){
                this[this.length] = el;
                return this.length; }

-----------------------------------------------------------------------------------------------------   
    Array.prototype -> pop()
                Array.prototype.myPop = function(){
                let lastItem = this[this.length - 1];
                this.length = this.length - 1;
                return lastItem; }


-----------------------------------------------------------------------------------
    Array.prototype -> unShift()
                Array.prototype.myUnShift = function(element){
                    for(let i = this.length - 1; i >= 0; i--){
                        this[i + 1] = this[i];
                    }
                    this[0] = element;
                    return this.length - 1;
                }

-----------------------------------------------------------------------------------
   Array.prototype -> shift()
                Array.prototype.myShift = function(){
                    for (let i = 0; i < this.length - 1; i++) {
                        this[i] = this[i + 1];
                    };
                    this.length = this.length - 1 
                    return this.length;}
*/

/*
     METHOD CHAINING
        let arr = [1, 2, 3];
        str.toLowerCase().toUpperCase().split();

        let result = arr.map((n)=> n*2).sort((a,b)=> b-a)
        console.log(result);
*/

/*
       Referencing vs Copying
       Js da biron bir o`zgaruvchini boshqa bir o`zgaruvchiga tenglashtirsak. 
       O`zlashtirilgan o`zgaruvchi Referencing yoki Copying bo`ladi.

       Referencing example
            let obj2 = obj;
            obj.age = 45;
            console.log(obj, obj2);

      Copying example
           let a = 12;
           let b = a;
           console.log(a, b)
*/

/*
----------------------------------------------------------------------------------------
    forEach(item, index, array) -> Massivning har bir elementi uchun 
        kiritilgan shartni bajaradi. Va hech qanday qiymat qaytarmaydi.

        Example: 
              let res = ages.forEach(function(item, idx, arr){
                    arr[idx] > 2 ? arr[idx] = item * 2 : arr[idx] = item
                })
----------------------------------------------------------------------------------------
   find() -> Ushbu metod shartdan o`tgan birinchi elementni qaytaradi.

       Example: 
             let res = ages.find(function(item){
                    return item > 3 
              })
----------------------------------------------------------------------------------------
   findIndex(item, idex, array) -> Qiymat sifatida funksiya qabul qiladi. 
                   Va birinchi element indexini qaytaradi.
                   Agar shart bajarilmasa (-1) qiymatini qaytaradi.
                   Massiv bo`sh bo`lsa ushbu funksiya bajarilmaydi.

        Example: 
             let res = ages.findIndex(function(item){
                    return item > 5
                });

----------------------------------------------------------------------------------
     filter(item, index, array) -> shartda true bo`lgan barcha elementlarni 
                               yanggi massivga joylab qaytaradi.
            
        Example: 
            let res = ages.filter(function(item){
                    return item > 30 
                })

----------------------------------------------------------------------------------

    map() -> massivning har bir elementiga murojat qiladi. Va yanggi massivni qaytaradi.

    Example: 
            const ages = [1, 2, 3, 4, 5];
            let res = ages.map(function(item){
                return item * 3 
            })

-------------------------------------------------------------------------------------------

    sort() -> massiv elementini tartiblash uchun ishlatiladi.


    Example: 
        const ages = [10, 2, 3, 4, 5];
        let res = ages.sort(function(a, b){
            return b - a
        })

--------------------------------------------------------------------------------
    
    copyWithin(target, start, end) -> array elementlarini nusxalash uchun kerak bo`ladi. 
                                       Asosiy massivnio`zgartiradi.
              target -> qaysi indexgacha nusxalash. (target) index kirmaydi.
              start -> ko`rinishda qaysi indexdan boshlanishi.
              end -> index tugashi.
              
        Example: 
             const fruits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
             let res = fruits.copyWithin(3, 0, 3)

--------------------------------------------------------------------------------------------------
Create Iterator methods
  entries(value, start, end) -> key/value juftligida array iterator obyectini qaytaradi.
             Asosiy arrayni o`zgartirmaydi. 
  
        Example: 
            const fruits = ["Banana", "Orange", "Apple", "Mango"];
            const f = fruits.entries();
            for(let x of f){
                console.log(x);
            }

 keys() -> massiv index olish uchun iteratsiyani hosil qilib beradi.
        Example: 
           const fruits = ["Banana", "Orange", "Apple", "Mango"];
            let res = fruits.keys();
            for(let r of res){
                console.log(r);
            }

---------------------------------------------------------------------------------------------------

    fill('text') -> Massivni 'test' qiymati bilan to`ldiradi.
        Asosiy massivni o`zgartiradi. Boshlang`ich (start) va tugash (end) indexlarini berish mumkin.

    Example: 
       const fruits = ["Banana", "Orange", "Apple", "Mango"];
       let res = fruits.fill("Kiwi", 1, 3);

---------------------------------------------------------------------------------------------------------------
  from() -> Har qanday string qiymatni massivga aylantirib beradi.

  Example: 
       let text = 'Nodejs';
        let res = Array.from(text)
        console.log(res);

        text.from()-> ishlamaydi.

*/



/*

   Array index ni olish usullari
     - for()
     - for in
     - forEach()
     - map()
     - find()
     - findIndex()
     - filter()
     - indexOf()
     - lastIndexOf()
*/