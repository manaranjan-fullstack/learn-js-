const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        let result = n * factorial(n - 1);
        return result;
    }
};

let num = 5;
console.log(`Factorial of ${num} is: ${factorial(num)}`);
