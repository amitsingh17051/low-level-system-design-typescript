interface PaymentGateway {
    initiatePayment(amount: number): void;
}


class CheckoutService {
    private paymentGateway: PaymentGateway;

    constructor(paymentGateway: PaymentGateway) {
        this.paymentGateway = paymentGateway;
    }

    setPaymentGateway(paymentGateway: PaymentGateway): void {
        this.paymentGateway = paymentGateway;
    }

    checkout(amount: number): void {
        this.paymentGateway.initiatePayment(amount);
    }
}

class StripePayment implements PaymentGateway {
    initiatePayment(amount: number): void {
       console.log(`Processing payment via Stripe: $${amount}`);
    }
}


class RazorpayPayment implements PaymentGateway {
    initiatePayment(amount: number): void {
        console.log(`Processing payment via Razorpay: ₹${amount}`);
    }
}


function main(): void {
    const stripeGateway: PaymentGateway = new StripePayment();
    const service = new CheckoutService(stripeGateway);
    service.checkout(120.50);  // Output: Processing payment via Stripe: $120.5

    // Switch to Razorpay
    const razorpayGateway: PaymentGateway = new RazorpayPayment();
    service.setPaymentGateway(razorpayGateway);
    service.checkout(150.50);  // Output: Processing payment via Razorpay: ₹150.5
}

main();