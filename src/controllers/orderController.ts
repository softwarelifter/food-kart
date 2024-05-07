import Order, { OrderItem } from "../models/order";
import Restaurant from "../models/restaurant";

function findMinPriceAvailableForItem(availableRestaurants: Restaurant[], item: any) {
    let minPrice: number = Number.MAX_SAFE_INTEGER;
    let minPriceRestaurant: Restaurant[] = [];
    availableRestaurants.map(restaurant => {
        const itemInMenu = restaurant.menu.items.find(menuItem => menuItem.name === item.name);
        if (itemInMenu) {
            if (itemInMenu.price < minPrice) {
                minPrice = itemInMenu.price;
                minPriceRestaurant = [restaurant];
            } else if (itemInMenu.price === minPrice) {
                minPriceRestaurant.push(restaurant);
            }
        }

    })
    if (minPrice !== Number.MAX_SAFE_INTEGER && minPriceRestaurant.length !== 0) { return { minPrice, minPriceRestaurant } }
    console.log('Item not available in any restaurant');
    return {}
}


function placeOrder(availableRestaurants: Restaurant[], items: any[]) {
    let total = 0

    const orderItems: OrderItem[] = [];

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const { minPrice, minPriceRestaurant } = findMinPriceAvailableForItem(availableRestaurants, item);

        if (minPrice === undefined || minPriceRestaurant.length === 0) {
            console.log("Order can't be placed as item not available in any restaurant");
            continue;
        }

        const restaurant = minPriceRestaurant[0];
        restaurant.orderCount += 1;

        const orderItem = new OrderItem(item.name, item.quantity, restaurant.name);
        total += minPrice * item.quantity;

        orderItems.push(orderItem);
    }
    if (orderItems.length !== items.length) {
        console.log('Order can\'t be placed as some items are not available in any restaurant');
        return {}
    }
    return { orderItems, total }
}

class OrderController {
    static createOrder(restaurants: Restaurant[], ...args: any[]) {
        if (args.length < 1) {
            console.log('Invalid number of arguments');
            return;
        }
        const availableRestaurants = restaurants.filter(restaurant => restaurant.orderCount < restaurant.capacity);
        const items = JSON.parse(args[1]);
        const { orderItems, total } = placeOrder(availableRestaurants, items);
        if (orderItems === undefined || total === undefined) return;
        const order = new Order(orderItems, total);
        return order;
    }
}

export default OrderController;