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
    let yourAge = prompt('Введіть Ваш вік:');
    if (yourAge >= 0 && yourAge <=12) {
        alert(`Дитина`)
    } else if (yourAge >= 12 && yourAge <=18) {
        alert(`Підліток`)
    } else if (yourAge >= 18 && yourAge <=60) {
        alert(`Дорослий`)
    } else if (yourAge >= 60 && yourAge <=120) {
        alert(`Пенсіонер`)
    } else {
        alert(`Ви ввели не корректні дані. Повторіть спробу!`)
    }
}

// === 1.2. ===
function mintask2() {
    let customsNumber = prompt('Введіть довільне число від 0 до 9:');
    switch(customsNumber){
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
            alert(`Ви ввели число поза запитом. Прочитайте умову ще раз та повторіть спробу!`) 
                break;
    }
}

// === 1.3. ===
function mintask3() {
    let num1 = Number(prompt("Введіть першу цифру"));
    let num2 = Number(prompt("Введіть другу цифру"));
    let sum = 0;

    let biggerNumber = 0;
    let smallerNumber = 0;
    if (num1 > num2) {
        biggerNumber = num1;
        smallerNumber = num2;
    } else {
        biggerNumber = num2;
        smallerNumber = num1;
    }

    for (let i = smallerNumber; i <= biggerNumber; i++) {
        sum = sum + i;
    }
    alert(`Сума ${sum}`);
}

// === 1.4. ===
function mintask4() {

}

// === 1.5. ===
function mintask5() {

}

// Block "Norm"
// === 2.1. ===
function checkSum() {
    let shoppingSum = document.getElementById('shoppingSum').valueAsNumber;
    let sumWithDiscount = '';


    if (shoppingSum >= 200 && shoppingSum <= 300){
         sumWithDiscount = shoppingSum - shoppingSum*0.03;
    } else if (shoppingSum >= 300 && shoppingSum <= 500) {
        sumWithDiscount = shoppingSum - shoppingSum*0.05;
    } else if (shoppingSum >= 500) {
        sumWithDiscount = shoppingSum - shoppingSum*0.07;
    } else {
        console.log("Можливо, Ви ввели не цифри, спробуйте ще раз");
    }

    document.getElementById(`result`).innerText = sumWithDiscount
}
// // ----------------------
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