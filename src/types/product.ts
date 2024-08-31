export interface Product {
    id: string;
    type: ProductType;
    code: string;
}

export type ProductType = "FII" | "AÇÕES";

export interface ValuationHistory {
    product: Product;
    price: number;
    dy: number;
    dailyLiquidity: number;
    pvp: number;
    date: string;
}