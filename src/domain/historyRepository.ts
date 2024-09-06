import ValuationHistory from "./history";

export interface IHistoryRepository {
    findProductHistoryByDate: (product: string, startDate: string, endDate: string) => Promise<ValuationHistory[] | null>
    findByProduct: (product: string) => Promise<IHistoryRepository[]>;
}