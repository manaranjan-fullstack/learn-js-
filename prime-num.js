function prime_num(num) {

    let count = 0;

    for (let i = 1; i <= num; i++) {

        if (num % i === 0) {
            count++;
        }
    }

    if (count === 2)
        return "the num is prime";

    return "not prime";
}

let num = 5;
let result = prime_num(num);

console.log(result);