import instaphoto from './prophotos/instagram.png';
import tiktok from './prophotos/tiktok.png';
import satisfaction from './prophotos/satisfaction.png';
import portrait from './prophotos/IMG_0760.jpg'; 

import checked from './prophotos/acceptb.png';
import greenCheck from './prophotos/accept.png';
import menu from './prophotos/menu.svg';
import close from './prophotos/close.svg';
import animationData from './animation_lksxakfb.json';

import photo7 from './prophotos/IMG_0057.jpeg';
import photo8 from './prophotos/E3D84A4F-031A-46B7-B17D-CE1FF5C87F22.jpg';
import photo9 from './prophotos/IMG_0760.jpg';
import photo10 from './prophotos/IMG_1517.jpg';

import photo13 from './prophotos/photo13.jpeg';
import photo14 from './prophotos/photo14.jpeg';

import car from './prophotos/car.png';
import contactus from './prophotos/contactus.png';
import phone from './foursteps/phone-call.png';
import sunbathe from './foursteps/sunbathing.png';
import valet from './foursteps/valet-parking.png';
import pickup from './foursteps/rental-car.png';
import portraitmain from './holder.jpg';
import heroOne from './heroOne.jpeg';
import heroTwo from './heroTwo.jpg';
import lottieMessage from './Animation - 1734629701669.json';
import bulletPoint from './bullet-point.png';
import vipicon from './vipicon.png';
import rightArrow from './right-arrow.png';
import downArrow from './down-arrow.png';

const testimonials = [
    {
        text: "Came in with my PORSCHE Cayenne that I was ready to sell. He did a great job especially for the pricing. Returned it looking better than ever! Would highly recommend and will be coming back with my daily as well. He doesn’t just sell his service but himself as well!",
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
        title: "SERVICES",
    },
    {
        id: 'membership',
        title: 'MEMBERSHIP',
    },
    {
        id: "about",
        title: "ABOUT US",
    },
    {
        id: "quote",
        title: "QUOTE",
    },
    {
        id: "footer",
        title: "CONTACT"
    }
];

const interiorServices = {
    gold: [
        { name: 'Full Interior Vacuum' },
        { name: 'All Seats Vacuumed and Wiped Down' },
        { name: 'Dash, Center Console, Door Panels Cleaned and Disinfected' },
        { name: 'All Windows Cleaned and Polished' },
        { name: 'AC Vents Cleaning' },
        { name: 'Floor Mats Extracted Cleaned/Shampooed' },
        { name: 'Steam Cleaning Treatment' },
        { name: 'Full Interior Dust/Wipe Down/Disinfect' },
        { name: 'Stain Spot Treatment Throughout Vehicle' },
    ],
    silver: [
        { name: 'Full Interior Vacuum' },
        { name: 'All Seats Vacuumed and Wiped Down' },
        { name: 'Dash, Center Console, Door Panels Cleaned and Disinfected' },
        { name: 'All Windows Cleaned and Polished' },
        { name: 'AC Vents Cleaning' },
        { name: 'Floor Mats Extracted Cleaned/Shampooed' },
    ],
    bronze: [
        { name: 'Full Interior Vacuum' },
        { name: 'All Seats Vacuumed and Wiped Down' },
        { name: 'Dash, Center Console, Door Panels Cleaned and Disinfected' },
        { name: 'All Windows Cleaned and Polished' },
    ],
};

const exteriorServices = {
    gold: [
        { name: 'Foam Cannon Hand Wash/Dry' },
        { name: 'Tires and Rims Cleaned/Polished' },
        { name: 'Windows Cleaned' },
        { name: 'Bug/Tar Removal' },
        { name: 'Spray Wax/Hand Polish for Glossy Finish + Protect the Paint' },
        { name: 'Tire Dressing Applied' },
        { name: 'Plastic Shine Restorer' },
        { name: 'Paint Decontamination/Clay Bar Treatment' },
        { name: 'Compressed Air Dry' },
    ],
    silver: [
        { name: 'Foam Cannon Hand Wash/Dry' },
        { name: 'Tires and Rims Cleaned/Polished' },
        { name: 'Windows Cleaned' },
        { name: 'Bug/Tar Removal' },
        { name: 'Spray Wax/Hand Polish for Glossy Finish + Protect the Paint' },
        { name: 'Tire Dressing Applied' },
    ],
    bronze: [
        { name: 'Foam Cannon Hand Wash/Dry' },
        { name: 'Tires and Rims Cleaned/Polished' },
        { name: 'Windows Cleaned' },
        { name: 'Bug/Tar Removal' },
    ],
};

const interiorServicesTwo = [
    { name: 'Full Interior Vacuum' },
    { name: 'All Seats Vacuumed and Wiped Down' },
    { name: 'Dash, Center Console, Door Panels Cleaned and Disinfected' },
    { name: 'All Windows Cleaned and Polished' },
    { name: 'AC Vents Cleaning' },
    { name: 'Floor Mats Extracted Cleaned/Shampooed' },
    { name: 'Full Interior Dust/Wipe Down/Disinfect' },
    { name: 'Stain Spot Treatment Throughout Vehicle' },
    { name: 'Steam Cleaning Treatment' },
];

const exteriorServicesTwo = [
    { name: 'Foam Cannon Hand Wash/Dry' },
    { name: 'Tires and Rims Cleaned/Polished' },
    { name: 'Windows Cleaned' },
    { name: 'Bug/Tar Removal' },
    { name: 'Spray Wax/Hand Polish for Glossy Finish + Protect the Paint' },
    { name: 'Tire Dressing Applied' }, // Repeated in silver
    { name: 'Plastic Shine Restorer' },
    { name: 'Paint Decontamination/Clay Bar Treatment' },
    { name: 'Compressed Air Dry' },
];

const lowMotoService = [
    { name: 'Seat Removed' },
    { name: 'Plastic/tape off Batery / air intake / wiring' },
    { name: 'Overall hand foam wash' },
    { name: 'Tires and rims cleaned' },
]

const highMotoService = [
    { name: 'Seat Removed' },
    { name: 'Plastic/tape off Batery / air intake / wiring' },
    { name: 'Overall hand foam wash' },
    { name: 'Tires and rims cleaned' },
    { name: 'Engine degreased / cleaned /dress' },
    { name: 'Frame degreased / cleaned / ploished' },
]
const memDetails = [
    { name: '4 gold details for the price of 3' },
    { name: 'Quarterly cleaning for year-round beauty' },
    { name: 'Emergency detail services' },
    { name: 'Prepaid service saves a minimum of $246 over 12 months!' },
    { name: 'Expires 12 Months After Purchase Date' },
];


const whyMem = [
    { name: 'Cost-Effective' },
    { name: 'Convenient' },
    { name: 'Comprehensive Care' },
];

const quoteConfig = {
    Gold: {
        car: {
            full: 185,
            interior: 120,
            exterior: 105,
        },
        suv: {
            full: 195,
            interior: 135,
            exterior: 120,
        },
        truck: {
            full: 205,
            interior: 150,
            exterior: 135,
        },
    },
    Silver: {
        car: {
            full: 175,
            interior: 105,
            exterior: 95,
        },
        suv: {
            full: 185,
            interior: 120,
            exterior: 110,
        },
        truck: {
            full: 195,
            interior: 135,
            exterior: 125,
        },
    },
    Bronze: {
        car: {
            full: 165,
            interior: 95,
            exterior: 85,
        },
        suv: {
            full: 175,
            interior: 105,
            exterior: 95,
        },
        truck: {
            full: 185,
            interior: 120,
            exterior: 115,
        },
    },
};

const images = [
    photo7,
    photo8,
    photo9,
    photo10,
    photo13,
    photo14,
]
export { images };

const fourstep = [
    {
        image: phone,
        title: "Call or Schedule Online",
        text: "Easily book your appointment on our website by selecting the date, time, and service package (Gold, Silver, or Bronze) for interior, exterior, or both",
        num: "1"
    },
    {
        image: valet,
        title: "Drop Your Vehicle Off at Our Location",
        text: "We’re located ¼ mile from Tempe Marketplace, at the corner of Rio Salado Pkwy and McClintock. Drop off your vehicle for detailing",
        num: "2"
    },
    {
        image: sunbathe,
        title: "Uber/Lyft",
        text: "As we don’t have a waiting room, plan accordingly. You’ll receive a text when your vehicle is ready for pickup",
        num: "3"
    },
    {
        image: pickup,
        title: "Pick Up Your Vehicle/See and Feel the Difference",
        text: "Enjoy a walkthrough of the completed detailing and drive away with a car that looks, smells, and feels like new",
        num: "4"
    }
]

export {
    instaphoto,
    tiktok,
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
    lowMotoService,
    highMotoService,
    memDetails,
    whyMem,
    quoteConfig,
    car,
    fourstep,
    portraitmain,
    heroOne,
    heroTwo,
    contactus,
    lottieMessage,
    bulletPoint,
    vipicon,
    rightArrow,
    downArrow,
};