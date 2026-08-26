
function atm(balance = 0) {

    let checkBalance = function () {
        return balance;
    }
    let addBalance = function (amount) {
        balance += amount;
        return balance;
    }
    let withdrawbalance = function (amount) {
        if (amount > balance) {
            return "Insufficient funds";
        } else {
            balance -= amount;
            return balance;
        }
    }
    return {
        checkBalance: checkBalance,
        addBalance: addBalance,
        withdrawbalance: withdrawbalance
    }
}


let myATM = atm(1000);
console.log(myATM.checkBalance());
console.log(myATM.addBalance(500));
console.log(myATM.withdrawbalance(200));
console.log(myATM.checkBalance());



