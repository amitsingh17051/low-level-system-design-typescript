class BankAccount {
    private accountHolder: string;
    private balance: number;

    constructor(accountHolder: string) {
        this.accountHolder = accountHolder;
        this.balance = 0;
    }

    deposit(amount: number) {
        if(amount <=  0) {
            throw new Error("Deposit amount must be positive")
        }

        this.balance += amount;
    }

    withdraw(amount: number): void {
        if(amount <=  0) {
            throw new Error("Withdrawal amount must be positive")
        }

        if(amount > this.balance) {
            throw new Error("Insufficient funds");
        }

        this.balance -= amount;
    }

    getBalance(): number {
        return this.balance;
    }

    getAccountHolder(): string {
        return this.accountHolder;
    }

}


const acc1 = new BankAccount("amitsingh");

acc1.deposit(22);
acc1.withdraw(10);
const acc1balance = acc1.getBalance();
console.log(acc1balance);