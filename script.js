function fibonacci(num) {
let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 0;
    for (i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;  
}


module.exports = fibonacci

// Test cases
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(5)); // Output: 3
