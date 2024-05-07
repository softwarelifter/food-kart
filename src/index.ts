import RestaurantController from "./controllers/restaurantController";
import Restaurant from "./models/restaurant";
import Order from "./models/order";
import OrderController from "./controllers/orderController";

let restaurants: Restaurant[] = [];
let orders: Order[] = [];

class MyApp {
    static main() {
        const args = process.argv.slice(2);
        const flag = args[0];

        switch (flag) {
            case 'add_restuarant':
                const restuarant = RestaurantController.addRestaurant(args.slice(1));
                if (typeof restuarant !== 'undefined') {
                    restaurants.push(restuarant);
                    console.log('Restaurant added successfully', restuarant)
                }
                console.log(restaurants)

                break;
            case 'update_menu':
                const updatedRestaurant = RestaurantController.updateMenu(restaurants, args);
                if (typeof updatedRestaurant !== 'undefined')
                    console.log('Menu updated successfully', updatedRestaurant)
                break;
            case 'add_order':
                const order = OrderController.createOrder(restaurants, args);
                if (order !== undefined) {
                    console.log('Order placed successfully', order)
                    orders.push(order);
                }
                break;
            default:
                console.log('Unknown command');
                break;
        }
    }
}

MyApp.main();