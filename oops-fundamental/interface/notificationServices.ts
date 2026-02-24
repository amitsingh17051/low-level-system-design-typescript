interface NotificationService {
    send(recipient: string, message: string): void;
}


class EmailNotifier implements NotificationService {
    send(recipient: string, message: string): void {
        console.log(`[Email] To: ${recipient} | ${message}`);
    }
}


class SlackNotifier implements NotificationService {
    send(recipient: string, message: string): void {
        console.log(`[Slack] Channel: ${recipient} | ${message}`);
    }
}


class WebhookNotifier implements NotificationService {
    send(recipient: string, message: string): void {
        console.log(`[Webhook] URL: ${recipient} | ${message}`);
    }
}

class AlertService {
    private notifiers: NotificationService;

    constructor(notifiers: NotificationService) {
        this.notifiers = notifiers;
    }

    triggerAlert(recipient: string, issue: string): void {
        const alertMessage = `Alert: ${issue}`;
        this.notifiers.send(recipient, alertMessage);
    }

}

const emailAlerts = new AlertService(new EmailNotifier());
emailAlerts.triggerAlert("ops@company.com", "CPU usage at 95%");


const slackAlerts = new AlertService(new SlackNotifier());
slackAlerts.triggerAlert("#incidents", "Database connection pool exhausted");


const webhookAlerts = new AlertService(new WebhookNotifier());
webhookAlerts.triggerAlert("https://hooks.example.com/alerts", "Disk usage at 90%");