/*
      Plan
        - Spread operator (array, object)
        - Spread vs Rest operators
        - in operator
        - Object Cloning
        - Garbage collection
        - this 
        - Object chaining
*/

/*
        Data type
    1 Primitive data type 
               string
               number
               boolean
               undefined
               null
               symbol
               bigint
    
    2. Constractive data type
              Object
              Array
              Map()
              Set()
              WeakMap()
              WeakSet()
*/

/*
    console.log(23.6 | 0) -> sonni yaxlitlash
*/

/*
     Spread operator
             array
             object
    ( in ) operator for object
    Spread vs rest operators

*/

/*
    Example: 
        let user = {
            name: "John",
            age: 30,
            "likes birds": true,
            $: 'dollor',
            _: 'past chiziq'  
            };
    console.log(user["likes birds"]);

    let key = "likes birds";
    user[key] = true;


    Example: 
          let obj = {
                true: 12,
                'true': 23,
                [true]: 123,
                undefined: '90',
                'undefined': '12345'
            }
          console.log(obj[true]);


    Example: 
          let obj = {};
          obj["8:30"] = "get up";
          console.log(obj);

*/

/*
     Object Cloning
        1. for in
        2. Object.assign()
        3. spread operator

      Ichki clonlash
                Example: 
                let user = {
                        name: "John",
                        sizes: {
                            height: 182,
                            width: 50
                            }
                    };
                    let clone = Object.assign({}, user);
                    console.log( user.sizes === clone.sizes );
                    clone.name = 'Alisher'; 
                    console.log(user.name);
*/


/*
     Garbage collection  -> Axlat yig'ish
     Har bir yaratilgan o`zgaruvchi, function va objectlar xotiradan joy oladi.
     
      Example: 
         let user = {
            name: "John"
        };
        let admin = user;
        user = null;
        console.log(admin, user);

*/

/*
  Example: 
        user = {
            sayHi: function() {
            console.log('Hi');
            },

            hello(){
                console.log('Hello');
            }
        };
        user.sayHi();
        user.hello()
*/


/*
   this -> faqat object yoki class scopelarda ishlaydi. Globalni scopeda ishlamaydi.
       let a = 12;
    console.log(this)  -> {} chiqadi.

    Example: 
         function sayHi() {
                alert(this);
            }
        sayHi(); // undefined


*/

/*
  Chaining
    let incrementOrDecrement = {
    step: 0,
    increment() {
      this.step++;
      return this;
    },
    decrement() {
      this.step--;
      return this;
    },
    showStep() {
      console.log( this.step );
      return this;
    }
  };
  
  ladder.up().up().down().showStep().down().showStep();
*/

/*
 Example:
    let calculator = {
        val(a, b){}
        add(){},
        minus(){},
        divide(){},
        miltiply(){}
    }
    calculator.add().divide().multiply().minus()

    let crypted = {
        crypt(){},
        decrypt(){}
    }

*/


/*
  JavaScript Matematik xususiyatlari sifatida foydalanish mumkin bo'lgan 8 ta matematik konstantalarni taqdim etadi:
     - Math.E        -> Eyler raqamini qaytaradi
     - Math.PI       -> PIni qaytaradi
     - Math.SQRT2    -> 2 ning kvadrat ildizini qaytaradi
     - Math.SQRT1_2  -> 1/2 kvadrat ildizini qaytaradi
     - Math.LN2      -> 2 ning natural logarifmini qaytaradi
     - Math.LN10     -> 10 ning natural logarifmini qaytaradi
     - Math.LOG2E    -> E ning 2 ta logarifmini qaytaradi
     - Math.LOG10E   -> E ning 10 ta logarifmini qaytaradi
*/

/*
    Math metodlari -> Sondan butun songa
         Raqamni butun songa yaxlitlashning 4 ta umumiy usuli mavjud:
    
    - Math.round(x)	->(3.4 -> 3, 3.5 -> 4) X ni eng yaqin butun songa yaxlitlangan holda qaytaradi
    - Math.ceil(x)	-> (3.4 -> 4, 3.9 -> 4) X ni eng yaqin butun songa yaxlitlangan holda qaytaradi
    - Math.floor(x)	-> (4.1 -> 4, 4.9 -> 4, -4.1 -> -5) X ni eng yaqin butun songa yaxlitlangan holda qaytaradi
    - Math.trunc(x) -> (4.1 -> 4, 4.9 -> 4, -4.1 -> -4) X ni eng yaqin butun songa yaxlitlangan holda qaytaradi


*/

/*
    - Math.sign(x)   -> x musbat bo`lsa 1 aks holda -1 qaytadi. 0 ga teng bo`lsa 0 qaytadi.
    - Math.pow(x, y) -> x ni y marta bir biriga ko`paytiradi.
    - Math.sqrt(x)   -> x = 8 = 64 x ning qiymatini kvadratga oshirib beradi.
    - Math.abs(x)    -> x = 4.2. x qiymatini modulda chiqaradi.
    
    
    - Math.min(0, 150, 30, 20, -8, -200) -> min qiymatni topish.
    - Math.max(0, 150, 30, 20, -8, -200) -> max qiymatni topish.

    - Math.random() -> 0 va 1 oralig`idagi sonni qaytaradi.

*/