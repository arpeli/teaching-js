//class - blueprint
/**
 * PROPERTIES - Account number, account name, Pin, balance, email, id_number
 * METHODS - deposit, withdraw, check balance, transfer funds, 
 * GETTERS and SETTERS - get balance, get name, get email, set email, set balance, set......
 */

class BankAccount {
    constructor(id_number, account_number, account_name, opening_balance = 0,pin=1234){
        this.id_number = id_number;
        this.account_number=account_number;
        this.account_name = account_name;
        this.balance = opening_balance;
        this.pin = pin;
    }

    //getters
    getName(){
        return this.account_name;
    }

    getBalance(){
        return this.balance;
    }

    //setter
    setEmail(new_email){
        this.email = new_email;
    }

    setPin(new_pin){
        this.pin = new_pin;
    }
    

    //methods
    deposit(deposit_amount){
        this.balance = this.balance+deposit_amount;
    }

    withdraw(withdrawal_amount){
        this.balance = this.balance-withdrawal_amount;
    }

}

let myAccount = new BankAccount(12324634,65437436,"Ariel");
let oliveAccount = new BankAccount(84364738, 38863402, "Olive");
let quentinAccount = new BankAccount(526472364, 8366655264, "Quentin");
//console.log(myAccount);

myAccount.deposit(56373783);
console.log(myAccount);

oliveAccount.deposit(3646373792937);
console.log(oliveAccount);

quentinAccount.deposit(3764736577392988);
console.log(quentinAccount);
