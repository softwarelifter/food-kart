import Restaurant from '../models/restaurant';


class RestaurantController {
    static addRestaurant(args: any[]) {
        console.log(args)
        if (args.length < 3) {
            console.log('Invalid number of arguments');
            return;
        }
        const name = args[0];
        const capacity = parseInt(args[1]);
        const menu = JSON.parse(args[2])
        const restaurant = new Restaurant(name, menu, capacity);
        return restaurant;
    }

    static updateMenu(restaurants: Restaurant[], args: any[]) {
        if (args.length < 2) {
            console.log('Invalid number of arguments');
            return;
        }
        const name = args[0];
        const menu = JSON.parse(args[1])
        const restaurant = restaurants.filter(restaurant => { restaurant.name === name })
        if (restaurant.length === 0) console.log('Restaurant not found');
        restaurant[0].menu = menu;
        return restaurant[0];
    }
}


export default RestaurantController;