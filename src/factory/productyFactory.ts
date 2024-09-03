import { DATABASE, DATABASE_NAME } from "../constants";
import { ProductRepository } from "../repository/productRepository";
import { ProductService } from "../service/productService";
import { DB } from "../utils/database";


export class ProductFactory {
    static async createInstance() {
        const dbConnection = await new DB({database: DATABASE, databaseName: DATABASE_NAME}).connection();
        const productRepository = new ProductRepository({ dbConnection })
        const productService = new ProductService({ productRepository })

        return productService;
    }
}