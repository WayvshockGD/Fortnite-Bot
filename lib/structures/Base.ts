import Logger from "../../util/Logger";
import handleRequests from "../handlers/RequestHandler";

class Base {
    constructor() {
        
    }

    get RequestHandler() {
        return handleRequests;
    }

    get logger() {
        return Logger;
    }
}

export default Base;