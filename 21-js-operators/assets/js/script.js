// Блок "Min"
function mintask1() {
    const elementOfEquation1 = 0.1;
    const elementOfEquation2 = 0.2;

    const sumOfEquation = Math.floor(elementOfEquation1 + elementOfEquation2);
    alert(`Сума двох значень дорівнює ${sumOfEquation}`);
}

function mintask2() {
    const stringElement1 = "1";
    const numberElement2 = 2;

    const sumOfElements = (stringElement1 + numberElement2);
    alert(`Сума двох значень дорівнює ${sumOfElements}`);
}

function mintask3() {
    const fleshHolder = 1000;
    const fileSize = 850;

    const countOfFiles = Math.floor(fleshHolder / fileSize);
    alert(`На флешку обсягом 1 ГБ можна вмістити ${countOfFiles} файл`);
    console.log("countOfFiles");
}

// Блок "Norm"
function normtask1() {
    const moneyInWallet = parseInt(prompt("Введіть доступну Вам сумму для покупки:"));
    const chocolatePrice = parseInt(prompt("Введіть ціну однієї шоколадки:"));

    const countOfChocolates = Math.floor(moneyInWallet / chocolatePrice);
    const changesInWallet = moneyInWallet - (chocolatePrice * countOfChocolates);
    alert(`На суму ${moneyInWallet} грн. Ви можете придбати ${countOfChocolates} шоколадки(ок). Решта від покупки становитиме ${changesInWallet} грн.`);
}

function normtask2() {
    const customerNumber = parseInt(prompt("Введіть тризначне число:"));
    const hundredsNumber = parseInt(customerNumber / 100);
    const dozensNumber = parseInt(customerNumber / 10) % 10;
    const unitNumber = parseInt(customerNumber % 10);

    const reflectionNumbers = String(unitNumber) + String(dozensNumber) + String(hundredsNumber);
    alert(`Віддзеркалений варіант Вашого числа ${reflectionNumbers}`);
}


// Блок "Max"
function maxtask1() {
    const depositeSum = parseInt(prompt("Введіть бажану сумму для депозиту:"));
    const percentForYear = depositeSum * 12 * 0.05;
    const termOfDeposite = 2;

    const persentForPeriod = (percentForYear / 12) * termOfDeposite;
    alert(`Сума відсотків за ${termOfDeposite} місяці з процентною ставкою депозиту 5% річних від внесеної Вами суми в розмірі ${depositeSum} грн. становить ${persentForPeriod} грн.`);
}

