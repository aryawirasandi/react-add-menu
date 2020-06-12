import { v4 as uuidv4 } from 'uuid';

 const CartItems = [
    {
        id : uuidv4(),
        name : "Car",
        category : "Toy",
        quantity : 4,
    },
    {
        id : uuidv4(),
        name : "Harry Potter And Sorrority Stone",
        category: "Book",
        quantity:  5
    },
    {
        id : uuidv4(),
        name : "Nutricia",
        category:  "Food",
        quantity:  2,
    },
    {
        id : uuidv4(),
        name : "Lactamil",
        category: "Pregnant Milk",
        quantity: 15
    },
    {
        id : uuidv4(),
        name : "Lemari serba guna 4 in 1",
        category: "assets"
    }
];

 export default CartItems;

