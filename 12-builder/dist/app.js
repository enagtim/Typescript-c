"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class RequestBuilder {
    constructor() {
        this.method = 'GET';
        this.url = '';
        this.headers = {};
        this.body = null;
    }
    setMethod(method) {
        this.method = method;
        return this;
    }
    setUrl(url) {
        this.url = url;
        return this;
    }
    addHeader(key, value) {
        this.headers[key] = value;
        return this;
    }
    setBody(body) {
        this.body = body;
        return this;
    }
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const options = {
                    method: this.method,
                    headers: this.headers,
                    body: this.body ? JSON.stringify(this.body) : null,
                };
                const response = yield fetch(this.url, options);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = yield response.json();
                console.log('Response Data:', data);
            }
            catch (error) {
                console.error('Error executing request:', error);
            }
        });
    }
}
const request = new RequestBuilder()
    .setMethod('POST')
    .setUrl('https://jsonplaceholder.typicode.com/posts')
    .addHeader('Content-Type', 'application/json')
    .setBody({
    title: 'foo',
    body: 'bar',
    userId: 1
});
request.exec();
