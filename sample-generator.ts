interface MenuItem {
    itemName: string;
    price: number;
}

interface Restaurant {
    name: string;
    capacity: number;
    menu: MenuItem[];
}

// Generate example restaurant menu data
function generateRestaurantMenuData(restaurantName: string, capacity: number, menuItems: { itemName: string, price: number }[]): Restaurant {
    return {
        name: restaurantName,
        capacity: capacity,
        menu: menuItems
    };
}

// Example restaurant menu data
const restaurantMenuData: Restaurant = generateRestaurantMenuData(
    "Delicious Delights",
    50,
    [
        { itemName: "Burger", price: 10 },
        { itemName: "Pizza", price: 12 },
        { itemName: "Salad", price: 8 },
        // Add more menu items as needed
    ]
);

console.log(restaurantMenuData);
