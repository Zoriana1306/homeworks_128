"use strict";

// Якщо у нас проста умова 
// if (year == 2015) 
// alert (`You are right!`);
// Якщо умова складна - беремо в скісні дужки
//   ПРАВИЛА 
// Число 0, порожній рядок "", null, undefined та NaN перетворюються на false. Через це їх називають “хибними” (“falsy”) значеннями.
// Інші значення перетворюються на true, тому їх називають “правдивими”.
// ---------------------------------------------------------------------------------------------------------------------------------
// // === Objects ===
// const objName = {
//     usName: "Brues",
//     age: 29,
//     hobby: "chech"
// };
// console.log(objName);
function checkPeople(name, age) {
  if (age > 18) {
    console.log('Hello, people!');
  } else {
    console.log('Hello, children!');
  }
}