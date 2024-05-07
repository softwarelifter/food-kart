export class OrderItem {
    name: string;
    quantity: number;
    fullFilledBy: string;//restaurant name

    constructor(name: string, quantity: number, fullFilledBy: string) {
        this.name = name;
        this.quantity = quantity;
        this.fullFilledBy = fullFilledBy;

    }
}

class Order {
    items: OrderItem[];
    totalAmount: number;


    constructor(items: OrderItem[], totalAmount: number) {
        this.items = items;
        this.totalAmount = totalAmount
    }
}

export default Order;