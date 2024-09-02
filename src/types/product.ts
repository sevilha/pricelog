export interface Product {
    id: string;
    code: string;
    name: string;
    type: ProductType;
    segment: string;
    segmentType: string;
}

export type ProductType = "FII" | "AÇÕES";

export interface AdministrationFee {
    id: string;
    fee: number;
    billingCycle: BillingCycle;
    product: Product;
}

export type BillingCycle = "A.A." | "A.M." | "A.S." | "A.Q." | "A.T." | "A.Sm."

export interface ValuationHistory {
    id: string;
    createAt: string;
    dy: number;
    dailyLiquidity: number;
    equityValue: string;
    issuedQuotas: number;
    price: number;
    product: Product;
    pvp: number;

}