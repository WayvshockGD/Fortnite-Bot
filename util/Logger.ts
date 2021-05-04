import { 
    green as g, 
    yellow as y ,
    red as r
} from 'chalk';

class Logger {

    public success(message: string) {
        console.log(`[Succeeded] ${g(message)}`);
    }

    public warn(message: string) {
        console.log(`[Warn] ${y(message)}`);
    }

    public error(message: string) {
        console.log(`[Error] ${r(message)}`);
    }
}

export default new Logger();