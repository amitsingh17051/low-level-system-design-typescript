class Car {
    private brand: string;
    private model: string;
    private speed: number;


    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
        this.speed = 0;
    }

    accelerate(increment: number ): void {
        this.speed += increment;
    }

    displaStatus(): void {
         console.log(`${this.brand} with model ${this.model} is running at ${this.speed} km/h.`);
    }
}


function main() {
    const corolla = new Car('Toyota', 'Corolla');
    const mustang = new Car('Ford', 'Mustang');


    corolla.accelerate(20);
    mustang.accelerate(30);


    corolla.displaStatus();
    console.log('-----------------------------');
    mustang.accelerate(20);
    mustang.displaStatus();

}

main();



