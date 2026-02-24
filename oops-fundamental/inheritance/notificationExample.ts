class NotificationOne {
    protected recipient: string;
    protected message: string;
    protected timestamp: string;

    constructor(recipient: string, message: string) {
        this.recipient = recipient + "-dddd";
        this.message = message + '-tesst';
        this.timestamp = new Date().toISOString().replace("T", " ").substring(0, 19);
    }

    formatHeader(): string {
        return `[${this.timestamp}] To: ${this.recipient}`;
    }

    send(): void {
        console.log(this.formatHeader());
        console.log(`Message: ${this.message}`);
    }
}

class EmailNotification extends NotificationOne {
    private subject: string;

    constructor(recipient: string, message: string, subject: string) {
        super(recipient, message);
        this.subject = subject;
    }

    send(): void {
        console.log(this.formatHeader());
        console.log(`Subject: ${this.subject}`);
        console.log(`Body: ${this.message}`);
        console.log("Status: Email delivered");
    }
}

class SMSNotification extends NotificationOne {
    private phoneNumber: string;
    private static readonly MAX_LENGTH = 160;

    constructor(recipient: string, message: string, phoneNumber: string) {
        super(recipient, message);
        this.phoneNumber = phoneNumber;
    }

    send(): void {
        console.log(this.formatHeader());
        console.log(`Phone: ${this.phoneNumber}`);
        const smsBody = this.message.length > SMSNotification.MAX_LENGTH
            ? this.message.substring(0, SMSNotification.MAX_LENGTH - 3) + "..."
            : this.message;
        console.log(`SMS: ${smsBody}`);
        console.log(`Status: SMS sent (${smsBody.length}/${SMSNotification.MAX_LENGTH} chars)`);
    }
}

class PushNotification extends NotificationOne {
    private deviceToken: string;
    private priority: string;

    constructor(recipient: string, message: string,
                deviceToken: string, priority: string) {
        super(recipient, message);
        this.deviceToken = deviceToken;
        this.priority = priority;
    }

    send(): void {
        console.log(this.formatHeader());
        console.log(`Device: ${this.deviceToken.substring(0, 8)}...`);
        console.log(`Priority: ${this.priority}`);
        console.log(`Alert: ${this.message}`);
        console.log("Status: Push notification delivered");
    }
}

// Usage
const email = new EmailNotification(
    "alice@example.com", "Your order has been shipped!", "Order Update");
email.send();

console.log();

const sms = new SMSNotification(
    "Bob", "Your verification code is 482910.", "+1-555-0123");
sms.send();

console.log();

const push = new PushNotification(
    "Charlie", "New message from Alice", "d8a3f4b2c1e5a9b7", "high");
push.send();