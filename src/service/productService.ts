export class ProductService {

    private productRepository;

    constructor({ productRepository }) {
        this.productRepository = productRepository;
    }
}