"use strict";

// Якщо у нас проста умова 
// if (year == 2015) 
// alert (`You are right!`);
// Якщо умова складна - беремо в скісні дужки
// !!!ПРАВИЛА 
// Число 0, порожній рядок "", null, undefined та NaN перетворюються на false. Через це їх називають “хибними” (“falsy”) значеннями.
// Інші значення перетворюються на true, тому їх називають “правдивими”.
// Block "Min"
// === 1.1. ===
function mintask1() {
  var yourAge = prompt('Введіть Ваш вік:');

  if (yourAge >= 0 && yourAge <= 12) {
    alert("\u0414\u0438\u0442\u0438\u043D\u0430");
  } else if (yourAge >= 12 && yourAge <= 18) {
    alert("\u041F\u0456\u0434\u043B\u0456\u0442\u043E\u043A");
  } else if (yourAge >= 18 && yourAge <= 60) {
    alert("\u0414\u043E\u0440\u043E\u0441\u043B\u0438\u0439");
  } else if (yourAge >= 60 && yourAge <= 120) {
    alert("\u041F\u0435\u043D\u0441\u0456\u043E\u043D\u0435\u0440");
  } else {
    alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456. \u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u0441\u043F\u0440\u043E\u0431\u0443!");
  }
} // === 1.2. ===


function mintask2() {
  var customsNumber = prompt('Введіть довільне число від 0 до 9:');

  switch (customsNumber) {
    case '0':
      alert(')');
      break;

    case '1':
      alert('!');
      break;

    case '2':
      alert('@');
      break;

    case '3':
      alert('#');
      break;

    case '4':
      alert('$');
      break;

    case '5':
      alert('%');
      break;

    case '6':
      alert('^');
      break;

    case '7':
      alert('&');
      break;

    case '8':
      alert('*');
      break;

    case '9':
      alert('(');
      break;

    default:
      alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u0447\u0438\u0441\u043B\u043E \u043F\u043E\u0437\u0430 \u0437\u0430\u043F\u0438\u0442\u043E\u043C. \u041F\u0440\u043E\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0443\u043C\u043E\u0432\u0443 \u0449\u0435 \u0440\u0430\u0437 \u0442\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u0441\u043F\u0440\u043E\u0431\u0443!");
      break;
  }
} // === 1.3. ===


function mintask3() {
  var num1 = Number(prompt("Введіть першу цифру"));
  var num2 = Number(prompt("Введіть другу цифру"));
  var sum = 0;
  var biggerNumber = 0;
  var smallerNumber = 0;

  if (num1 > num2) {
    biggerNumber = num1;
    smallerNumber = num2;
  } else {
    biggerNumber = num2;
    smallerNumber = num1;
  }

  for (var i = smallerNumber; i <= biggerNumber; i++) {
    sum = sum + i;
  }

  alert("\u0421\u0443\u043C\u0430 ".concat(sum));
} // === 1.4. ===


function mintask4() {} // === 1.5. ===


function mintask5() {} // Block "Norm"
// === 2.1. ===


function checkSum() {
  var shoppingSum = document.getElementById('shoppingSum').valueAsNumber;
  var sumWithDiscount = '';

  if (shoppingSum >= 200 && shoppingSum <= 300) {
    sumWithDiscount = shoppingSum - shoppingSum * 0.03;
  } else if (shoppingSum >= 300 && shoppingSum <= 500) {
    sumWithDiscount = shoppingSum - shoppingSum * 0.05;
  } else if (shoppingSum >= 500) {
    sumWithDiscount = shoppingSum - shoppingSum * 0.07;
  } else {
    console.log("Можливо, Ви ввели не цифри, спробуйте ще раз");
  }

  document.getElementById("result").innerText = sumWithDiscount;
} // // ----------------------
// let i = 1; 
// // function add(a, b, c) {
//     // Change code below this line
//     return x + y + z;
//     // Change code above this line
//   }
//   add(2, 5, 8); // 15
//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));