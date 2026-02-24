// Input validator

interface Validator {
    Validate(input: string): boolean;
}


class EmailValidator implements Validator {
    Validate(input: string): boolean {
        return input.includes('@') ? true : false;
    }
}

class PasswordValidator implements Validator {
    Validate(input: string): boolean {
        return input.length > 8 ? true : false;
    }
}

class RegistrationService {
    private validators: Validator[];

    constructor(validators: Validator[]) {
        this.validators = validators;
    }

    register(input: string): void {
        
        const allPassed = this.validators.every(v => v.Validate(input));
        console.log(`"${input}" - ${allPassed ? "PASSED" : "FAILED"}`);
    }
}
const emailReg = new RegistrationService([new EmailValidator()]);
emailReg.register("user@example.com");
emailReg.register("invalid-email");

const passReg = new RegistrationService([new PasswordValidator()]);
passReg.register("strongpassword");
passReg.register("short");