function findSumsFromСustomer(sumArray) {
    let  totalSum = 0;
    sumArray.forEach(num => {
        totalSum += num;
    });
    return totalSum;
}

let thereSalaries = [10000, 20000, 30000];
console.log(findSumsFromСustomer(thereSalaries));