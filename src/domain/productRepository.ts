import Product, { ProductType } from "./product";

export interface IProductRepository {
    findProductById: (id: string) => Promise<Product | null>;
    findProductByCode: (code: string) => Promise<Product | null>;
    findProductsByType: (type: ProductType) => Promise<Product[] | null>;
    findProductBySegment: (segment: string) => Promise<Product[] | null>;
    findProductBySegmentType: (segmentType: string) => Promise<Product[] | null>;
    saveProduct: (product: Product) => Promise<Product>;
    deleteProduct: (id: string) => Promise<void>;
}