/*
    Data types -> string, number, boolean, null, undefined, symbol, bigint, object.
    Primitive data type -> string, number, boolean, null, undefined, symbol, bigint.



    Object key words
     - new Object() vs {} -> object literal.
     - delete user.age


     let user = { name: 'John , age: 12, "likes birds": true}
                             user['name']
                             user.name
     -  nusxalash -> let admin = user (admin == user) (admin === user)
     -  prototype
     -  key in user
     -  for in 
     -  for of not work
     -  Object.assign(user, {color: 'red'}, {isBool: false}) -> user objectiga birikish.
     -  Object.assign() qo`lda yozish
                        for (let key in user) {
                            clone[key] = user[key];
                        }

     - let user = {
            name: {
                firstName: 'John',
                lastName: 'Doe'
            },
            age: 12, 
        }

     - this
     - let { name, email } = { name: "John", email: "john@example.com" }
     - ?.prop, ?.(), ?.[prop]  -> console.log(user.name?.firstName);

     
*/

/*
----------------------- Object methods ------------------------------------
    - Object.assign() 
    - Object.defineProperty()                   
                    let user = { name: 'John', age: 12 };
                    let result = Object.defineProperty(user, 'name', {
                        value: 'Test',
                        enumerable: false, (for in) loop da sanalmaydi. 
                        writable: false   Qiymatini o`zgartirib bo`lmaydi.
                        configurable: false Propertini o`chira olmaslik.
                    });

    - Object.getOwnPropertyDescriptor()
                    let user = { name: 'John', age: 23 }
                    let res = Object.getOwnPropertyDescriptor(user, 'name');

    - Object.getOwnPropertyDescriptors()
                    let result = Object.getOwnPropertyDescriptors(user);
                    console.log(result);

    - Object.preventExtensions()
                let user = {}; Agar obyect bo`sh bo`lganda.
                let result = Object.preventExtensions(user); Ushbu obyectni kengaytirib bo`lmaydi.
                user.name = 'Anvar'
                console.log(user);

    - Object.seal()
              let user = { name: 'John', age: 12 };
              let result = Object.seal(user);
              user.name = 'Anvar';
              delete user.name;
              console.log(user); Obyect keyni o`chirib bo`lmaydi.

    - Object.isSealed()
               let user = { name: 'John', age: 12 };
               let result = Object.seal(user);
               let res = Object.isSealed(user)
               console.log(res);

    - Object.freeze()
                   let user = { name: 'John' };
                        user.name = 'Davlat';
                        Object.freeze(user);
                        user.name = 'Alisher';
                        console.log(user);

    - Object.isFrozen()
                  let user = { name: 'John' };
                  Object.freeze(user);
                  let res = Object.isFrozen(user)
                  console.log(res);

    
    - Object.entries()
                    let user = { name: 'John', age: 23 };
                        let res = Object.entries(user);
                        console.log(res);

    - Object.fromEntries()
                    let user = { name: 'John', age: 23 };
                        let res = Object.entries(user);
                        console.log(res);
                        let res2 = Object.fromEntries(res);
                        console.log(res2);

    - Object.is()
                  let test = { a: 1 };  
                  let res = Object.is(test, test);

    - Object.keys()
                let user = { name: 'John', age: 12 };
                let result = Object.keys(user);
                console.log(result);

    - Object.values()
                let user = { name: 'John', age: 12 };
                let result = Object.values(user);
                console.log(result);
*/