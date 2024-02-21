import instaphoto from './prophotos/instagram.png';
import satisfaction from './prophotos/satisfaction.png';
import portrait from './prophotos/IMG_6599.jpeg';
import checked from './prophotos/acceptb.png';
import greenCheck from './prophotos/accept.png';
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
        { icon: checked, name: 'Steam Cleaning (if necessary)' },
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
        { name: 'Foam Cannon Hand Wash/Dry' },
        { name: 'Tires and Rims Cleaned/Polished' },
        { name: 'Windows Cleaned' },
        { name: 'Bug Removal' },
        { name: 'Spray Wax/Hand Polish for Glossy Finish + Protect the Paint' },
        { name: 'Tire Shine Applied' },
        { name: 'Clay Bar Treatment' },
        { name: 'Clay Bar Treatment (if necessary)' },
    ],
    silver: [
        { name: 'Foam Cannon Hand Wash/Dry' },
        { name: 'Clay Bar Treatment (if necessary)' },
        { name: 'Tires and Rims Cleaned/Polished' },
        { name: 'Windows Cleaned' },
        { name: 'Bug Removal' },
        { name: 'Spray Wax/Hand Polish for Glossy Finish + Protect the Paint' },
    ],
    bronze: [
        { name: 'Foam Cannon Hand Wash/Dry' },
        { name: 'Tires and Rims Cleaned/Polished' },
        { name: 'Windows Cleaned' },
        { name: 'Bug Removal' },
        { name: 'Spray Wax/Hand Polish for Glossy Finish + Protect the Paint' },
    ],
};

const interiorServicesTwo = [
    { name: 'Interior Vacuum' },
    { name: 'Seats Vacuumed/Shampooed/ Cleaned/Disinfected' },
    { name: 'Carpets Cleaned/Spot Treatment' },
    { name: 'Full Interior Dust/Wipe Down/Disinfect' },
    { name: 'In-Depth Detail of the Center Console' },
    { name: 'Windows Cleaning' },
    { name: 'Door Panels/Jams Cleaning' },
    { name: 'AC Vents Cleaning' },
    { name: 'Dashboard Cleaning' },
    { name: 'Floor Mats Extracted Cleaned/Shampooed' },
    { name: 'Steam Cleaning (if necessary)' },
    { name: 'Steam Cleaning' },
    { name: 'All Stains Removed to the Best of Their Ability' }, // Repeated in silver // Repeated in silver
    // Any other repeated services from silver or bronze can be added here as well
];

const exteriorServicesTwo = [
    { name: 'Foam Cannon Hand Wash/Dry' },
    { name: 'Tires and Rims Cleaned/Polished' },
    { name: 'Windows Cleaned' },
    { name: 'Bug Removal' },
    { name: 'Spray Wax/Hand Polish for Glossy Finish + Protect the Paint' },
    { name: 'Clay Bar Treatment (if necessary)' },
    { name: 'Clay Bar Treatment' },
    { name: 'Tire Shine Applied' },// Repeated in silver
];

// Now you can handle interiorServices and exteriorServices as arrays without the categorization.


const quoteConfig = {
    Gold: {
        car: {
            full: "$205",
            interior: "$165",
            exterior: "$150",
        },
        suv: {
            full: "$220",
            interior: "$175",
            exterior: "$160",
        },
        truck: {
            full: "$235",
            interior: "$185",
            exterior: "$170",
        },
    },
    Silver: {
        car: {
            full: "$190",
            interior: "$150",
            exterior: "$140",
        },
        suv: {
            full: "$205",
            interior: "$160",
            exterior: "$150",
        },
        truck: {
            full: "$220",
            interior: "$170",
            exterior: "$160",
        },
    },
    Bronze: {
        car: {
            full: "$175",
            interior: "$140",
            exterior: "$130",
        },
        suv: {
            full: "$190",
            interior: "$150",
            exterior: "$140",
        },
        truck: {
            full: "$205",
            interior: "$160",
            exterior: "$150",
        },
    },
};

export {
    instaphoto,
    satisfaction,
    portrait,
    checked,
    greenCheck,
    menu,
    close,
    animationData,
    testimonials,
    navLinks,
    interiorServices,
    exteriorServices,
    interiorServicesTwo,
    exteriorServicesTwo,
    quoteConfig,
};