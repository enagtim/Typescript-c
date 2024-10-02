"use strict";
// Класс для работы с реальным API
class ProductAPI {
    async getProductById(id) {
        // Логика запроса к реальному API
        if (id <= 10) {
            return {
                success: true,
                data: { id, name: `Product ${id}`, description: `Description for product ${id}` }
            };
        }
        else {
            throw new Error('Product ID is greater than 10. Request rejected.');
        }
    }
}
// Прокси-класс для фильтрации запросов по ID
class ProductProxy {
    constructor(api) {
        this.api = api;
    }
    async getProductById(id) {
        if (id > 10) {
            // Фильтрация запросов по ID
            return {
                success: false,
                message: 'Invalid product ID. Cannot retrieve products with ID greater than 10.'
            };
        }
        else {
            // Проксирование реального запроса
            return await this.api.getProductById(id);
        }
    }
}
// Пример использования прокси и API
(async () => {
    const api = new ProductAPI();
    const proxy = new ProductProxy(api);
    try {
        const result1 = await proxy.getProductById(5); // Успешный запрос
        console.log('Product 1:', result1);
        const result2 = await proxy.getProductById(15); // Ошибка, так как ID > 10
        console.log('Product 2:', result2);
    }
    catch (error) {
        console.error('Error:', error);
    }
})();
