import Menu from './menu';

class Restaurant {
    name: string;
    menu: Menu;
    capacity: number;
    orderCount: number = 0;

    constructor(name: string, menu: Menu, capacity: number) {
        this.name = name;
        this.menu = menu;
        this.capacity = capacity;
    }
}

export default Restaurant;