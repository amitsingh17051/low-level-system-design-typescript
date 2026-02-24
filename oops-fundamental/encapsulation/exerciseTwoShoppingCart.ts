// Design ShoppingCart Class


class ShoppingCart {
    private isCheckoutOut: boolean = false;
    private items: Map<string, number> = new Map();
    private discountApplied: boolean = false;


    addItem(name: string, price: number): void {
        if(this.isCheckoutOut) {
             console.log("Cannot modify a checked-out cart");
            return;
        }
        this.items.set(name, price);
    }


    applyDiscount(code: string): boolean {
        if(code === "SAVE10" && !this.discountApplied && !this.isCheckoutOut) {
            this.discountApplied = true;
            return true;
        }
        return false;
    }

    getTotal(): number {
        let total = 0;
        this.items.forEach((price) => {
            total += price;
        })

        if(this.discountApplied) {
            total *= 0.9;
        }

        return Math.round(total * 100) / 100;
    }

    checkout(): void {
        if (this.items.size > 0 && !this.isCheckoutOut) {
            this.isCheckoutOut = true;
        }
    }
   
}

const cart = new ShoppingCart();
cart.addItem("Laptop", 999.99);
cart.addItem("Mouse", 29.99);

console.log(`Total: $${cart.getTotal().toFixed(2)}`);                    // 1029.98

console.log(`Discount: ${cart.applyDiscount("SAVE10")}`);                // true
console.log(`Total: $${cart.getTotal().toFixed(2)}`);                    // 926.98

console.log(`Discount: ${cart.applyDiscount("SAVE10")}`);                // false

cart.checkout();
cart.addItem("Keyboard", 79.99); // Should be rejected
console.log(`Total: $${cart.getTotal().toFixed(2)}`);                    // 926.98