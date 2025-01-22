// Задача 1

let userSrt = '';

function wordUpper(userSrt) {
    let newStr = userSrt[0].toUpperCase() + userSrt.slice(1)
    
    console.log(newStr);
}
wordUpper('Маша');
wordUpper('таня');


// 2 задача
let myString = ''

function findDots(myString) {
    if (myString.length >= 40) {
        let newMySrt = myString.slice(0, 40);
        console.log(newMySrt + '...');
    }
}

findDots('«Любопытно, чего люди больше всего боятся? Нового шага, нового собственного слова они всего больше боятся».');

// 2 задача +

function findDotsPlus(myStringPlus) {
    if (myStringPlus.length > 40) {
        let newMySrtPlus = myStringPlus.slice(0, 40);
        let match = newMySrtPlus.match(/[ ,.!?:;)/]/g);
        
        if (match) {
            let lastMatch = newMySrtPlus.lastIndexOf(match[match.length - 1]);
            return newMySrtPlus.slice(0, lastMatch) + '...';
        }
    }
    return myStringPlus;
}

console.log(findDotsPlus('«Вот мой секрет, он очень прост: зорко одно лишь сердце. Самого главного глазами не увидишь»'));

// 3 задача

let string = '';
let substring = '';

function findmMatches(string, substring) {
  let foundPos = string.indexOf(substring);
  if (foundPos >= 0) {
    return true;
    }else {
        return false;
    }
}
console.log(findmMatches('Вот мой секрет', 'секрет'));
console.log(findmMatches('Вот мой секрет', 'собака'));
