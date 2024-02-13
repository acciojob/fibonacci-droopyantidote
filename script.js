function fibonacci(num) {
if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);  
}


module.exports = fibonacci

// Test cases
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(5)); // Output: 3
