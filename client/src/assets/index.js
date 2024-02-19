import instaphoto from './prophotos/instagram.png';
import satisfaction from './prophotos/satisfaction.png';
import portrait from './prophotos/IMG_6599.jpeg';
import checked from './prophotos/checked.png';
import menu from './prophotos/menu.svg';
import close from './prophotos/close.svg';
import animationData from './animation_lksxakfb.json';

const testimonials = [
    {
        text: "Came in with my PORSHE Cayenne that I was ready to sell. He did a great job especially for the pricing. Returned it looking better than ever! Would highly recommend and will be coming back with my daily as well. He doesn’t just sell his service but himself as well!",
        name: 'AMADEUS COLEMAN'
    },
    {
        text: "Had my Jeep detailed both the interior and exterior with dog hair. Vinny did an AMAZING job, it 100% looks better than when I had originally gotten it years ago. Definitely recommend, I knew my car was in the right hands, I will be back without hesitation.",
        name: 'KYMONIE W'
    },
    {
        text: "I took in my long overdue Jetta for a detail and man was I impressed. I got my car back like as if it was new from the lot. The business owner Vinny is very professional and passionate about the work that is being done. From a business aspect, quotes and prices on different options were simple and affordable for the quality of work. If y’all get the chance to stop by and use Down to the Details you should definitely do so!",
        name: 'BRANDON CARO'
    },
];
const navLinks = [
    {
        id: "services",
        title: "Services",
    },
    {
        id: "about",
        title: "About Us",
    },
    {
        id: "quote",
        title: "Quote",
    },
    {
        id: "footer",
        title: "Contact"
    }
];

const interiorServices = {
    gold: [
        { icon: checked, name: 'Interior Vacuum' },
        { icon: checked, name: 'Seats Vacuumed/Shampooed/ Cleaned/Disinfected' },
        { icon: checked, name: 'Carpets Cleaned/Spot Treatment' },
        { icon: checked, name: 'Floor Mats Extracted Cleaned/Shampooed' },
        { icon: checked, name: 'Full Interior Dust/Wipe Down/Disinfect' },
        { icon: checked, name: 'In-Depth Detail of the Center Console' },
        { icon: checked, name: 'AC Vents Cleaning' },
        { icon: checked, name: 'Dashboard Cleaning' },
        { icon: checked, name: 'Windows Cleaning' },
        { icon: checked, name: 'Door Panels/Jams Cleaning' },
        { icon: checked, name: 'All Stains Removed to the Best of Their Ability' },
        { icon: checked, name: 'Steam Cleaning' },
    ],
    silver: [
        { icon: checked, name: 'Interior Vacuum' },
        { icon: checked, name: 'Floor Mats Extracted Cleaned/Shampooed' },
        { icon: checked, name: 'Carpets Cleaned/Spot Treatment' },
        { icon: checked, name: 'Seats Vacuumed/Shampooed/ Cleaned/Disinfected' },
        { icon: checked, name: 'Full Interior Dust/Wipe Down/Disinfect' },
        { icon: checked, name: 'In-Depth Detail of the Center Console' },
        { icon: checked, name: 'Steam Cleaning (if necessary)' },
        { icon: checked, name: 'AC Vents Cleaning' },
        { icon: checked, name: 'Dashboard Cleaning' },
        { icon: checked, name: 'Windows Cleaning' },
        { icon: checked, name: 'Door Panels/Jams Cleaning' },
    ],
    bronze: [
        { icon: checked, name: 'Interior Vacuum' },
        { icon: checked, name: 'Seats Vacuumed/Shampooed/ Cleaned/Disinfected' },
        { icon: checked, name: 'Carpets Cleaned/Spot Treatment' },
        { icon: checked, name: 'Full Interior Dust/Wipe Down/Disinfect' },
        { icon: checked, name: 'In-Depth Detail of the Center Console' },
        { icon: checked, name: 'Windows Cleaning' },
        { icon: checked, name: 'Door Panels/Jams Cleaning' },
    ],
};

const exteriorServices = {
    gold: [
        { icon: checked, name: 'Foam Cannon Hand Wash/Dry' },
        { icon: checked, name: 'Tires and Rims Cleaned/Polished' },
        { icon: checked, name: 'Windows Cleaned' },
        { icon: checked, name: 'Bug Removal' },
        { icon: checked, name: 'Spray Wax/Hand Polish for Glossy Finish + Protect the Paint' },
        { icon: checked, name: 'Tire Shine Applied' },
        { icon: checked, name: 'Clay Bar Treatment' },
    ],
    silver: [
        { icon: checked, name: 'Foam Cannon Hand Wash/Dry' },
        { icon: checked, name: 'Clay Bar Treatment (if necessary)' },
        { icon: checked, name: 'Tires and Rims Cleaned/Polished' },
        { icon: checked, name: 'Windows Cleaned' },
        { icon: checked, name: 'Bug Removal' },
        { icon: checked, name: 'Spray Wax/Hand Polish for Glossy Finish + Protect the Paint' },
    ],
    bronze: [
        { icon: checked, name: 'Foam Cannon Hand Wash/Dry' },
        { icon: checked, name: 'Tires and Rims Cleaned/Polished' },
        { icon: checked, name: 'Windows Cleaned' },
        { icon: checked, name: 'Bug Removal' },
        { icon: checked, name: 'Spray Wax/Hand Polish for Glossy Finish + Protect the Paint' },
    ],
};

const quoteConfig = {
    Gold: {
        car: {
            full: "$225",
            interior: "$175",
            exterior: "$175",
        },
        suv: {
            full: "$242",
            interior: "$175",
            exterior: "$175",
        },
        truck: {
            full: "$259",
            interior: "$169.99",
            exterior: "$169.99",
        },
    },
    Silver: {
        car: {
            full: "$210",
            interior: "$150",
            exterior: "$150",
        },
        suv: {
            full: "$225",
            interior: "$175",
            exterior: "$175",
        },
        truck: {
            full: "$242",
            interior: "$175",
            exterior: "$175",
        },
    },
    Bronze: {
        car: {
            full: "$175",
            interior: "$145",
            exterior: "$145",
        },
        suv: {
            full: "$210",
            interior: "$150",
            exterior: "$150",
        },
        truck: {
            full: "$225",
            interior: "$175",
            exterior: "$175",
        },
    },
};

export {
    instaphoto,
    satisfaction,
    portrait,
    checked,
    menu,
    close,
    animationData,
    testimonials,
    navLinks,
    interiorServices,
    exteriorServices,
    quoteConfig,
};