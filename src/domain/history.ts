
interface ValuationHistoryProps {
    id?: string;
    createAt: string;
    dy: number;
    dailyLiquidity: number;
    equityValue: string;
    issuedQuotas: number;
    price: number;
    product: string;
    pvp: number;
}

export default class ValuationHistory {
    id?: string;
    createAt: string;
    dy: number;
    dailyLiquidity: number;
    equityValue: string;
    issuedQuotas: number;
    price: number;
    product: string;
    pvp: number;

    constructor(props: ValuationHistoryProps) {
        this.id = props.id;
        this.createAt = props.createAt;
        this.dy = props.dy;
        this.dailyLiquidity = props.dailyLiquidity;
        this.equityValue = props.equityValue;
        this.issuedQuotas = props.issuedQuotas;
        this.price = props.price;
        this.product = props.product;
        this.pvp = props.pvp;
    }
}