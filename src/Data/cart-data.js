import {v4 as uuidv4} from 'uuid';

const CartItems = [
    {
        id: uuidv4(),
        name: "Car",
        category: "Toy",
        quantity: 4,
    },
    {
        id: uuidv4(),
        name: "The way of life",
        category: "Book",
        quantity: 5
    },
    {
        id: uuidv4(),
        name: "Lucky Biscuit",
        category: "Food",
        quantity: 2,
    },
    {
        id: uuidv4(),
        name: "Mommy Help",
        category: "Pregnant Milk",
        quantity: 15
    },
    {
        id: uuidv4(),
        name: "New Briefcase 2020",
        category: "assets"
    }
];

export default CartItems;

