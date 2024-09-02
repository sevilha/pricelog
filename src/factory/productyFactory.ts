import { DATABASE, DATABASE_NAME } from "../constants";
import { ProductRepository } from "../repository/productRepository";
import { ProductService } from "../service/productService";
import { Database } from "../utils/database";


class ProductFactory {
    static async createInstance() {
        const db = new Database({database: DATABASE, databaseName: DATABASE_NAME}).connection();
        const dbConnection = await db.connect()
        const productRepository = new ProductRepository({ dbConnection })
        const userService = new ProductService({ productRepository })

        return userService
    }
}