interface Product {
    id: number;
    name: string;
    description: string;
}
interface SuccessResponse {
    success: true;
    data: Product;
}
interface ErrorResponse {
    success: false;
    message: string;
}
class ProductAPI {
    async getProductById(id: number): Promise<SuccessResponse | ErrorResponse> {
        if (id <= 10) {
            return {
                success: true,
                data: { id, name: `Product ${id}`, description: `Description for product ${id}` }
            };
        } else {
            throw new Error('Product ID is greater than 10. Request rejected.');
        }
    }
}
class ProductProxy {
    private api: ProductAPI;
    constructor(api: ProductAPI) {
        this.api = api;
    };
    async getProductById(id: number): Promise<SuccessResponse | ErrorResponse> {
        if (id > 10) {
            return {
                success: false,
                message: 'Invalid product ID. Cannot retrieve products with ID greater than 10.'
            };
        } else {
            return await this.api.getProductById(id);
        }
    };
};
(async () => {
    const api = new ProductAPI();
    const proxy = new ProductProxy(api);
    try {
        const result1 = await proxy.getProductById(5);
        console.log('Product 1:', result1);

        const result2 = await proxy.getProductById(15); 
        console.log('Product 2:', result2);
    } catch (error) {
        console.error('Error:', error);
    }
})();