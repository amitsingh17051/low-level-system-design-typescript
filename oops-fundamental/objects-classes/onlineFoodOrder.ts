class FoodOrder {
    private orderId: string;
    private customerName: string;
    private items: string[];
    private totalAmount: number;
    private isPlaces: boolean;


    constructor(orderId: string, customerName: string){
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = [];
        this.totalAmount = 0;
        this.isPlaces = false;
    }

    addItem(name: string, price: number): void {
       if (this.isPlaces) {
            console.log("Cannot modify a placed order.");
            return;
        }

        this.items.push(name);
        this.totalAmount += price;
    }


    placeOrder(): boolean {

        if (this.isPlaces || this.items.length === 0) {

            return false;

        }

        this.isPlaces = true;
        return true;

    }


    getItemCount(): number {
        return this.items.length;
    }

    displayOrder(): void {
        const status = this.isPlaces ? "Placed" : "Not Placed";
        console.log(`Order ID: ${this.orderId} ${this.customerName} - ${status}`);
        for(const item of this.items) {
            console.log(`- ${item}`);
        }

        console.log(` Total Amount: ${this.totalAmount.toFixed(2)}`);
    }
}

const order1 = new FoodOrder("123", "John Doe");

order1.addItem("Pizza", 12.99);
order1.placeOrder();
order1.addItem("Burger", 8.99);

order1.displayOrder();