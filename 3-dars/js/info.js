/*
    var let const - binding, declaration, assignment,   (camelCase, PascalCase, snake_case, kebab-case)-> nomlash usullari
    o`zgaruvchilarni nomlashda $ va _
    ' ', " ", ` `, ${}
    Operators -> Arithmetic Operators(+, -, *, /, **, ++, --, %)
    Assignment Operators(=, +=, -=, *=, /=, %=, **=)
    Comparison Operators(==, ===, !=, !==, >, <, >=, <=, ? )
    Logical Operators(&&, ||, !)
    function
    if statement
*/

/*----------------------------- IF statement --------------------------------------------------------------*/
// 0 "" '' undefined null false
if(0){
    
}

/*---------------------------------Logical operators (!, &&, ||)--------------------------------------------------------------------*/


//Mantiqiy ! operator quyidagi qoidalar asosida ishlaydi:
   
     console.log(!undefined) // - Agar a undefined bo'lsa, natija true. 
     console.log(!null)      //- Agar a null bo'lsa, natija true. 
     console.log(!20)       //- Agar a 0 dan katta bo'lsa, natija false. 
     console.log(!NaN)      //- Agar a NaN bo'lsa, natija true. 
     console.log(!{})       //- Agar a obyekt bo'lsa, natija false.
     console.log(!'')      //- Agar a bo'sh satr bo'lsa, natija true.
     console.log(!'OK')   // - Agar a bo'sh bo'lmagan qator bo'lsa, natija noto'g'ri bo'ladi
     console.log(!false)  //true
     console.log(!true)  //false

     console.log(!!!!!!true) //true
    
//Mantiqiy AND operatori (&&)
     let a = 0;
     let b = 4;
     console.log(a && b)
     console.log(b && (1 / 0)) // Infinity
     console.log(false && (1 / 0)) // false
     // true && true = true
     // true && false = false
     // false && true = false
     // false && false = false 
     // 0 "" '' undefined null false


     //&& operatori quyidagicha ishlaydi
          //  - Chapdan o'ngga qiymatlarni baholaydi.
          // - Har bir qiymat uchun uni mantiqiy qiymatga aylantiradi.Natija false bo'lsa, to'xtatiladi va asl qiymatini qaytaradi.Agar barcha qiymatlar true bo'lsa, oxirgi qiymatni qaytaradi.
          // - Boshqacha qilib aytganda, && operatori birinchi noto'g'ri qiymatni yoki topilmasa oxirgi qiymatni qaytaradi.

     
     //Mantiqiy OR operatori (||)
          // true && true = true
          // true && false = true
          // false && true = true
          // false && false = false 

     //|| operator quyidagilarni bajaradi:
         //Chapdan o'ngga qiymatlarni baholaydi.
         //Har bir qiymat uchun uni mantiqiy qiymatga aylantiradi.Agar konversiya natijasi rost boʻlsa, toʻxtatiladi va qiymat qaytariladi.
         //Agar barcha qiymatlar noto'g'ri deb baholangan bo'lsa, oxirgi qiymatni qaytaradi.


     // || va ?? farqi

     //Logical Assignment Operators Mantiqiy tayinlash operatorlari
          let title; //let title = 'JavaScript Awesome';
          console.log(title ||= 'untitled'); //x || (x = y)

          // let person = {
          //      firstName: 'Jane',
          //      lastName: 'Doe',
          //  };
           
          //  person.lastName &&= 'Smith';
           
          //  console.log(person); x &&= y; x && (x = y);


     //x ??=y
     // let userName = 'Satoshi'
     //  userName ??= 'anonymous';
      
     //  console.log(user);

// -----------------------------------------------------------------------------------------------
//data types
//data type 8 ta number, string, boolean, bigint, null, undefined, symbol, object


//javascript dynamic type hisoblanadi
//typeof -> turni aniqlash

//number turlari Infinity, -Infinity, NaN
// alert( 1 / 0 ); // Infinity
// alert( Infinity ); // Infinity
// alert( NaN + 1 ); // NaN
// alert( 3 * NaN ); // NaN
// alert( "not a number" / 2 - 1 ); // NaN

//let y = new Number(500);// obyect
//let y = Number(500); //number
let x = 500; //(x==y) true, (x===y) false


//number metodlari

/*
    let a = 12;
    a = a.toString(); qiymatni string typega aylantirib beradi, string qaytardi.

    let x = 9.656;
    x = x.toExponential(1); //string qiymat qaytaradi. Raqam bilan yaxlitlangan va eksponensial belgilar yordamida yoziladi.
    let a = 5e+3 //1e-3

    let x = 9.656;
    x = x.toFixed(2); //string qaytaradi. Yaxlitlangan qiymatni qaytaradi.

    let x2 = 9.656;
    x2 = x2.toPrecision(2);

    let x = 123;
    x.valueOf();  new Number(300); typeof numberga aylantiradi.

*/

/*
    Number.MAX_VALUE;
    Number.MIN_VALUE
    Number.POSITIVE_INFINITY; let x = 1 / 0;
    Number.NEGATIVE_INFINITY; let x = -1 / 0;
    let x = Number.NaN let x = 100 / "Apple";
    let x = 6;
    x.MAX_VALUE -> undefined qaytaradi. Chunki Number clasiga tegishni.
*/


// String metodlari

/*
    text.length;
    Satrning bir qismini ajratib olishning 3 ta usuli mavjud:
            slice(start, end)
            substring(start, end)
            substr(start, length)

    let text = "Nodejs Vuejs Full stack programmist";
    text.slice(7, 13); text.slice(7); text.slice(-7);

    text.substring(0, 7) text.substring(7) -> ishlaydi.
    text.substring(-1)-> (-) qiymatda ishlamaydi.

    substr() slice() ga o'xshaydi.
    text.substr(7, 6);

    replace() ->  usuli belgilangan qiymatni satrdagi boshqa qiymat bilan almashtiradi, Yangi string qaiymat qaytaradi.
    faqat birinchi o'yinni almashtiradi
    let text = "Nodejs Vuejs Full stack programmist"; 
    text.replace('Vuejs', 'ReactJs');

    text.replace("MICROSOFT", "W3Schools")->katta kichik harflar bilan ishlash uchun (/i) kerak.
    text.replace(/MICROSOFT/i, "W3Schools");
    text.replace(/Microsoft/g, "W3Schools")-> globalniy almashtirish


    2021 yilda JavaScript replaceAll() string usulini taqdim etdi:
    /text.replaceAll('js', 'Ts') /g kalit so`zini o`rnida ishlaydi
    text.replaceAll(/VUEJS/i, 'ReactJs') (/i) regular expression ishlamaydi.

    text.toUpperCase()-> Stringni katta harfga aylantirib, yanggi string qaytaradi
    text1.toLowerCase()


    let str = "Widget with id";
*/

