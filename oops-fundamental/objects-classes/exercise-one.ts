// Bank Account class

class BankAccount {
    private accountNumber: string;
    private ownerName: string;
    private balance: number;


    constructor(accountNumber: string, ownerName: string) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = 0;
    }

    getBalance(): number {
        return this.balance;
    }
    

    deposit(amount: number): void{

        if(amount < 0) {
            console.log("neegativ not allowed");
            return;
        }

        this.balance += amount;
        
    }

    withdraw(amount: number): boolean {
        if(this.balance < amount) {
            console.log("withdraw amount is more then current balance");
            return false;                    
        }
        this.balance -= amount;
        return true;
    }



}

const account = new BankAccount("123456", "John Doe");
account.deposit(1000);
account.withdraw(20);
console.log(account.getBalance().toFixed(1));  


let success = account.withdraw(500);
console.log(success);                          // Should print true
console.log(account.getBalance().toFixed(1));  // Should print 500.0

success = account.withdraw(1000);
console.log(success);    