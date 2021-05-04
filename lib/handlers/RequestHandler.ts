import axios from 'axios';
import IRequestOptions from '../constants/interfaces/IRequestOptions';
import { Methods } from '../constants/Types';

class RequestHandler {

    method: Methods;

    url: string;

    options: IRequestOptions|undefined;

    constructor(method: Methods, url: string, options?: IRequestOptions) {
        this.method = method;
        this.url = url;
        this.options = options;
    }

    public request() {
        axios.request({ 
            url: this.url, 
            method: this.method, 
            headers: this.options?.headers 
        }).then(res => {
            return { code: res.status, data: res.data };
        }).catch(e => {
            console.log(e);
        })
    }

    public post() {
        axios.post(this.url, null, {
            method: this.method,
            headers: this.options?.headers
        }).then(res => {
            return { code: res.status, data: res.data };
        }).catch(e => {
            console.log(e);
        })
    }
}

export default RequestHandler;