class NotificationPoly {
    protected recipient: string;
    protected message: string;

    constructor(recipient: string, message: string) {
        this.recipient = recipient;
        this.message = message;
    }

    send(): void {
        console.log(`Sending generic notification to ${this.recipient}`);
    }
}

class EmailNotification extends NotificationPoly {
    private subject: string;

    constructor(recipient: string, message: string, subject: string) {
        super(recipient, message);
        this.subject = subject;
    }

    send(): void {
        console.log(`Sending EMAIL to ${this.recipient} | Subject: ${this.subject}`);
    }
}

class SMSNotification extends NotificationPoly {
    private phoneNumber: string;

    constructor(recipient: string, message: string, phoneNumber: string) {
        super(recipient, message);
        this.phoneNumber = phoneNumber;
    }

    send(): void {
        console.log(`Sending SMS to ${this.phoneNumber} | Message: ${this.message}`);
    }
}

class PushNotification extends NotificationPoly {
    private deviceToken: string;

    constructor(recipient: string, message: string, deviceToken: string) {
        super(recipient, message);
        this.deviceToken = deviceToken;
    }

    send(): void {
        console.log(`Sending PUSH to device ${this.deviceToken.substring(0, 8)}`
            + `... | Alert: ${this.message}`);
    }
}

const notifications: NotificationPoly[] = [
    new EmailNotification("alice@example.com", "Your order shipped!", "Order Update"),
    new SMSNotification("Bob", "Code: 482910", "+1-555-0123"),
    new PushNotification("Charlie", "New message", "d8a3f4b2c1e5a9b7"),
];

for (const n of notifications) {
    n.send();
}