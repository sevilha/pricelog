import AdministrationFee from "./fee";

export interface IFeeRepository {
    findByProduct: (productId: string) => Promise<AdministrationFee>;
    saveAdministrationFee: (fee: AdministrationFee) => Promise<string>;
    deleteAdministrationFee: (feeId: string) => Promise<string>
}