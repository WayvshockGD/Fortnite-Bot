import { tokenLink } from './constants/Links';
import Base from "./structures/Base";

class Api extends Base {
    constructor() {
        super();
    }

    /**
     * @param email The email the api will connect to.
     * @param password The password used for logging in.
     */
    public _connect(email?: string, password?: string) {
        this.check(email, password);

        let header = {}

        let ConnectPlayer = new this.RequestHandler('POST', tokenLink, { headers: header });
        
    }

    private check(email: string|undefined, password: string|undefined) {
        let problems = [];

        if (typeof email === 'undefined') {
            problems.push('Email must be defined in constructor.');
        }
        if (typeof password === 'undefined') {
            problems.push('Password must be defined as part of the email.');
        }
        if (problems.length) {
            throw this.logger.error(problems.join('\n'));
        }
    }
}

export default Api;