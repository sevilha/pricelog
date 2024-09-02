export class ProductRepository {
    
    private dbConnection;
    
    constructor({dbConnection}) {
        this.dbConnection = dbConnection;    
    }
}