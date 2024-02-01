"use strict";

// Блок "Min"
function mintask1() {
  var elementOfEquation1 = 0.1;
  var elementOfEquation2 = 0.2;
  var sumOfEquation = Math.floor(elementOfEquation1 + elementOfEquation2);
  alert("\u0421\u0443\u043C\u0430 \u0434\u0432\u043E\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u044C \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(sumOfEquation));
}

function mintask2() {
  var stringElement1 = "1";
  var numberElement2 = 2;
  var sumOfElements = stringElement1 + numberElement2;
  alert("\u0421\u0443\u043C\u0430 \u0434\u0432\u043E\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u044C \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(sumOfElements));
}

function mintask3() {
  var fleshHolder = 1000;
  var fileSize = 850;
  var countOfFiles = Math.floor(fleshHolder / fileSize);
  alert("\u041D\u0430 \u0444\u043B\u0435\u0448\u043A\u0443 \u043E\u0431\u0441\u044F\u0433\u043E\u043C 1 \u0413\u0411 \u043C\u043E\u0436\u043D\u0430 \u0432\u043C\u0456\u0441\u0442\u0438\u0442\u0438 ".concat(countOfFiles, " \u0444\u0430\u0439\u043B"));
  console.log("countOfFiles");
} // Блок "Norm"


function normtask1() {
  var moneyInWallet = parseInt(prompt("Введіть доступну Вам сумму для покупки:"));
  var chocolatePrice = parseInt(prompt("Введіть ціну однієї шоколадки:"));
  var countOfChocolates = Math.floor(moneyInWallet / chocolatePrice);
  var changesInWallet = moneyInWallet - chocolatePrice * countOfChocolates;
  alert("\u041D\u0430 \u0441\u0443\u043C\u0443 ".concat(moneyInWallet, " \u0433\u0440\u043D. \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u0434\u0431\u0430\u0442\u0438 ").concat(countOfChocolates, " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043A\u0438(\u043E\u043A). \u0420\u0435\u0448\u0442\u0430 \u0432\u0456\u0434 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438\u043C\u0435 ").concat(changesInWallet, " \u0433\u0440\u043D."));
}

function normtask2() {
  var customerNumber = parseInt(prompt("Введіть тризначне число:"));
  var hundredsNumber = parseInt(customerNumber / 100);
  var dozensNumber = parseInt(customerNumber / 10) % 10;
  var unitNumber = parseInt(customerNumber % 10);
  var reflectionNumbers = String(unitNumber) + String(dozensNumber) + String(hundredsNumber);
  alert("\u0412\u0456\u0434\u0434\u0437\u0435\u0440\u043A\u0430\u043B\u0435\u043D\u0438\u0439 \u0432\u0430\u0440\u0456\u0430\u043D\u0442 \u0412\u0430\u0448\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 ".concat(reflectionNumbers));
} // Блок "Max"


function maxtask1() {
  var depositeSum = parseInt(prompt("Введіть бажану сумму для депозиту:"));
  var percentForYear = depositeSum * 12 * 0.05;
  var termOfDeposite = 2;
  var persentForPeriod = percentForYear / 12 * termOfDeposite;
  alert("\u0421\u0443\u043C\u0430 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432 \u0437\u0430 ".concat(termOfDeposite, " \u043C\u0456\u0441\u044F\u0446\u0456 \u0437 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u043E\u044E \u0441\u0442\u0430\u0432\u043A\u043E\u044E \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0443 5% \u0440\u0456\u0447\u043D\u0438\u0445 \u0432\u0456\u0434 \u0432\u043D\u0435\u0441\u0435\u043D\u043E\u0457 \u0412\u0430\u043C\u0438 \u0441\u0443\u043C\u0438 \u0432 \u0440\u043E\u0437\u043C\u0456\u0440\u0456 ").concat(depositeSum, " \u0433\u0440\u043D. \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ").concat(persentForPeriod, " \u0433\u0440\u043D."));
}