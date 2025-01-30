
const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
};
    
function calculate(num1, num2, operation) {
    return operations[operation](num1, num2);
}
    
    console.log(calculate(6, 3, "*")); 
    console.log(calculate(5, 10, "+")); 
    console.log(calculate(1, 1, "/")); 