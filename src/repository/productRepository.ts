import { DB } from "../utils/database";

export class ProductRepository {
    
    private dbConnection: DB;

    constructor({dbConnection}) {
        this.dbConnection = dbConnection;    
    }

    private async find(query: string) {
        return await this.dbConnection.find(query);
    }
}