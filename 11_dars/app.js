// 1-masala

// class Home {
//   constructor(name, age) {
//     this._name = name;
//     this.age = age;
//   }
//   getName() {
//     console.log(this.name);
//   }
//   getAge() {
//     console.log(this.age);
//      } 
// }
// let user = new Home("Muhammad", 40);
// let user2 = new Home("Abu Bakir", 10);
// let user3 = new Home("Umar", 10);
// let user4 = new Home("Usmon", 10);
// let user5 = new Home("Ali", 10);

// console.log(user);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);

// 2-masala

// class Cars {
//   constructor(color, coast, name) {
//     this.color = color;
//     this.coast = coast;
//     this.name = name;
//   }
//   getColor() {
//     console.log(this.color);
//   }
//   getCoast() {
//     console.log(this.coast);
//   }
//   getName() {
//     console.log(this.name);
//   }
// }

// let bmw = new Cars("blue", 50000, "BMW");
// let ferrari = new Cars("black", 350000, "Ferrari");
// let bugatti = new Cars("red", 500000, "Bugatti");
// let audi = new Cars("blue", 50000, "Audi");
// let damas = new Cars("white", 2000, "Damas");

// audi.getColor();
// damas.getCoast();
// bmw.getName();

// 3-masala

// class MyMath {
//   static round(number) {
//     let string = number.toString();
//     let array = string.split(".");
//     let firstNumber = +array[0];
//     let secondNumber = +array[1];
//     let rounded = secondNumber < 5 ? firstNumber : firstNumber + 1;
//     return rounded;
//   }
//   static ceil(number) {
//     let string = number.toString();
//     let array = string.split(".");
//     let firstNumber = +array[0];
//     let secondNumber = +array[1];
//     let rounded = secondNumber < 1 ? firstNumber : firstNumber + 1;
//     return rounded;
//   }
//   static floor(number) {
//     let string = number.toString();
//     let array = string.split(".");
//     let firstNumber = +array[0];
//     let secondNumber = +array[1];
//     let rounded = secondNumber < 1 ? firstNumber : firstNumber;
//     return rounded;
//   }
//   static trunc(number) {
//     let string = number.toString();
//     let array = string.split(".");
//     let firstNumber = +array[0];
//     let secondNumber = +array[1];
//     let rounded = secondNumber < 1 ? firstNumber : firstNumber;
//     return rounded;
//   }
// }

// let res = MyMath.round(3.4);
// console.log(res);
// let res1 = MyMath.ceil(3.4);
// console.log(res1);
// let res2 = MyMath.floor(3.7);
// console.log(res2);
// let res3 = MyMath.trunc(33.44);
// console.log(res3);

// 4-masala

// class Shakl {
//   constructor(title, border_color) {
//     this.title = title;
//     this.border_color = border_color;
//   }
//   getTitle() {
//     console.log(this.title);
//   }
//   getBorederColor() {
//     console.log(this.border_color);
//   }
//   getFullData() {
//     console.log(this.title, this.border_color);
//   }
// }

// class Circle extends Shakl {
//   constructor(title, border_color) {
//     super(title, border_color);
//   }
// }
// let res = new Circle("aylana", "black");
// let res1 = new Circle("aylana", "blue");
// let res2 = new Circle("aylana", "red");
// console.log(res, res1, res2);

// class Rectangle extends Shakl {
//   constructor(title, border_color) {
//     super(title, border_color);
//   }
// }
// let res3 = new Rectangle("to'rt burchak", "black");
// let res4 = new Rectangle("to'rt burchak", "blue");
// let res5 = new Rectangle("to'rt burchak", "red");
// console.log(res3, res4, res5);

// class Rentagle extends Shakl {
//   constructor(title, border_color) {
//     super(title, border_color);
//   }
// }

// let res6 = new Rectangle("uch burchak", "black");
// let res7 = new Rectangle("uch burchak", "blue");
// let res8 = new Rectangle("uch burchak", "red");
// console.log(res3, res4, res5);

// class RectangleRight extends Shakl {
//   constructor(title, border_color) {
//     super(title, border_color);
//   }
// }

// let res9 = new RectangleRight("to'g'ri to'rt burchak", "black");
// let res10 = new RectangleRight("to'g'ri to'rt burchak", "blue");
// let res11 = new RectangleRight("to'gri to'rt burchak", "red");
// console.log(res9, res10, res11);

// class Rhombus extends Shakl {
//   constructor(title, border_color) {
//     super(title, border_color);
//   }
// }

// let res12 = new Rhombus("Romb", "black");
// let res13 = new Rhombus("Romb", "blue");
// let res14 = new Rhombus("Romb", "red");
// console.log(res12, res13, res14);

// class Square extends Shakl {
//   constructor(title, border_color) {
//     super(title, border_color);
//   }
// }

// let res15 = new Square("kvadrat", "black");
// let res16 = new Square("kvadrat", "blue");
// let res17 = new Square("kvadrat", "red");
// console.log(res15, res16, res17);

// res1.getBorederColor()
// res3.getFullData()
// res5.getTitle()

// 5-masala

// class MyMath {
//   static PI(number) {
//     return number = 3.14
//   }
// }

// let res = MyMath.PI();
// console.log(res);

// 6-masala

// class Mydate {
//   constructor(year, month, day, hour, minute, second, milsecund) {
//     this.year = year;
//     this.month = month;
//     this.day = day;
//     this.hour = hour;
//     this.minute = minute;
//     this.second = second;
//     this.milsecund = milsecund;
//   }

//   getFullYear() {
//     console.log(this.year);
//   }
//   getMonth() {
//     console.log(this.month);
//   }
//   getDay() {
//     console.log(this.day);
//   }
//   getHours() {
//     console.log(this.hour);
//   }
//   getMinute() {
//     console.log(this.minute);
//   }
//   getSecond() {
//     console.log(this.second);
//   }
//   getMilSecond() {
//     console.log(this.milsecund);
//   }
//   getTime() {
//     console.log(
//       `${this.year}.${this.month}.${this.day} ${this.hour}:${this.minute}:${this.second}:${this.milsecund}`
//     );
//   }
// }
// let res = new Mydate(2023, 01, 15, 15, 31, 31, 23);

// res.getTime();

// 7-masala

// class Animals {
//   constructor(wild, pet) {
//     this.wild = wild;
//     this.pet = pet;
//   }
// }
// class Wild extends Animals {
//   constructor(wild, lion, bear, wolf) {
//     super(wild, lion, bear, wolf);
//     this.lion = lion;
//     this.bear = bear;
//     this.wolf = wolf;
//   }
//   getFullData() {
//     console.log(this.lion, this.bear, this.wolf);
//   }
// }
// class Lion extends Wild {
//   constructor(lion) {
//     super(lion);
//     this.lion = lion;
//   }
//   getFullData() {
//     console.log(this.lion);
//   }
// }
// class Bear extends Wild {
//   constructor(bear) {
//     super(bear);
//     this.bear = bear;
//   }
//   getFullData() {
//     console.log(this.bear);
//   }
// }
// class Wolf extends Wild {
//   constructor(wolf) {
//     super(wolf);
//     this.lion = wolf;
//   }
//   getFullData() {
//     console.log(this.wolf);
//   }
// }
// class Pet extends Animals {
//   constructor(wild, dog, sheep, cow) {
//     super(wild, dog, sheep, cow);
//     this.dog = dog;
//     this.sheep = sheep;
//     this.cow = cow;
//   }
//   getFullData() {
//     console.log(this.dog, this.sheep, this.cow);
//   }
// }

// class Dog extends Pet {
//   constructor(dog) {
//     super(dog);
//     this.dog = dog;
//   }
//   getFullData() {
//     console.log(this.dog);
//   }
// }
// class Sheep extends Pet {
//   constructor(sheep) {
//     super(sheep);
//     this.sheep = sheep;
//   }
//   getFullData() {
//     console.log(this.sheep);
//   }
// }
// class Cow extends Pet {
//   constructor(cow) {
//     super(cow);
//     this.cow = cow;
//   }
//   getFullData() {
//     console.log(this.cow);
//   }
// }
// let res1 = new Cow("black");
// res1.getFullData();