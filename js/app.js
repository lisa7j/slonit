
let min = 1;
let max = 100;

let firstNumber = Math.floor(Math.random() * (max - min)) + min;

console.log(`Компьютер загадал число: ${firstNumber}`);
console.log('');


function SearchNumber(firstNumber, min, max) {

    while (min <= max) {
        let secondNumber = Math.floor((min + max) / 2);
        console.log(`Пробую число ${secondNumber}`);
        
        if (secondNumber < firstNumber) {
            console.log('Больше');
            console.log('');
            min = secondNumber + 1;
        } else if (secondNumber > firstNumber) {
            console.log('Меньше');
            console.log('');
            max = secondNumber - 1; 
        } else {
            console.log("Угадал");
            return secondNumber;
        }
    }
}

SearchNumber(firstNumber, min, max);