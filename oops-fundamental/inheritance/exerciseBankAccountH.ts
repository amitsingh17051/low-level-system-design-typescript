// Bank Account Hierarchy

class BankAccount {
    protected ownerName: string;
    protected accountNumber: string;
    protected balance: number;



    constructor(ownerName: string, accountNumber: string, balance: number) {
        this.ownerName = ownerName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }

    displayAccount(): void {
        console.log(`Owner: ${this.ownerName}`);
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Balance: $${this.balance}`);
    }


}

class SavingsAccount extends BankAccount {
    private interestRate: number;

    constructor(ownerName: string, accountNumber: string, balance: number, interestRate: number) {
        super(ownerName, accountNumber, balance);
        this.interestRate = interestRate;
    }

    withdraw(amount: number): void {
         // TODO: only allow if (balance - amount) >= 100
        if (amount > 0 && (this.balance - amount) >= 100) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Withdrawal not allowed. Balance would fall below $100.");
        }
        
    }
    
    applyInterest(): void {
        const interest = this.balance * this.interestRate / 100;
        this.balance += interest;
        console.log(`Interest applied: ${interest}. New balance: ${this.balance}`);
    }   

}

const savings = new SavingsAccount("Alice", "SAV-001", 1000, 2.0);
savings.displayAccount();
savings.withdraw(900);
savings.applyInterest();
savings.displayAccount();