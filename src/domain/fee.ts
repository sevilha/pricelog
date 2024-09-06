interface AdministrationFeeProps {
    id?: string;
    fee: number;
    billingCycle: BillingCycle;
    product: string;
    createdAt: string;
}

type BillingCycle = "A.A." | "A.M." | "A.S." | "A.Q." | "A.T." | "A.Sm."

export default class AdministrationFee {
    id?: string;
    fee: number;
    billingCycle: BillingCycle;
    product: string;

    constructor(props: AdministrationFeeProps) {
        this.id = props.id;
        this.fee = props.fee;
        this.billingCycle = props.billingCycle;
        this.product = props.product;
    }
}