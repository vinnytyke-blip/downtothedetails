import { checked } from "../../assets";

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

export {
  interiorServices,
  exteriorServices
};