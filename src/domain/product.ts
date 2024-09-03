interface ProductProps {
    id?: string;
    code: string;
    name: string;
    type: ProductType;
    segment: string;
    segmentType: string;
}

type ProductType = "FII" | "AÇÕES";

export default class Product {
    id?: string;
    code: string;
    name: string;
    type: ProductType;
    segment: string;
    segmentType: string;

    constructor(props: ProductProps) {
        this.id = props.id;
        this.code = props.code;
        this.name = props.name;
        this.type = props.type;
        this.segment = props.segment;
        this.segmentType = props.segmentType;
    }
}

