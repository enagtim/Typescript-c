class RequestBuilder {
    private method: string = 'GET';
    private url: string = '';
    private headers: { [key: string]: string } = {};
    private body: any = null;
    setMethod(method: string): RequestBuilder {
        this.method = method;
        return this;
    }
    setUrl(url: string): RequestBuilder {
        this.url = url;
        return this;
    }
    addHeader(key: string, value: string): RequestBuilder {
        this.headers[key] = value;
        return this;
    }
    setBody(body: any): RequestBuilder {
        this.body = body;
        return this;
    }
    async exec(): Promise<void> {
        try {
            const options = {
                method: this.method,
                headers: this.headers,
                body: this.body ? JSON.stringify(this.body) : null,
            };
            const response = await fetch(this.url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Response Data:', data);
        } catch (error) {
            console.error('Error executing request:', error);
        }
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