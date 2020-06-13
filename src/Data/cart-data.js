import {v4 as uuidv4} from 'uuid';
import BuscuitLogo from '../images/contents/biscuits.jpg';
import CarToyLogo from '../images/contents/car.jpg';
import BookLogo from '../images/contents/books.jpg';
import MilkLogo from '../images/contents/pregnant-milk.jpg';
import BriefCaseLogo from '../images/contents/briefcase.jpg'
const CartItems = [
    {
        id: uuidv4(),
        name: "Car",
        category: "Toy",
        quantity: 4,
        url : CarToyLogo,
        propName : "car-image",
        price : 50000
    },
    {
        id: uuidv4(),
        name: "The way of life",
        category: "Book",
        quantity: 5,
        url : BookLogo,
        propName : "Book-image",
        price : 250000
    },
    {
        id: uuidv4(),
        name: "Lucky Biscuit",
        category: "Food",
        quantity: 2,
        url : BuscuitLogo,
        propName : "biscuit-image",
        price : 8000
    },
    {
        id: uuidv4(),
        name: "Mommy Help",
        category: "Pregnant Milk",
        quantity: 15,
        url : MilkLogo,
        propName : "milk-image",
        price : 50000
    },
    {
        id: uuidv4(),
        name: "New Briefcase 2020",
        category: "assets",
        quantity: 29,
        url: BriefCaseLogo,
        propName : "briefcase-image",
        price : 1500000
    }
];

export default CartItems;

