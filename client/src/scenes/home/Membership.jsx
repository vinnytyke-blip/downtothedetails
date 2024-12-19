import React from 'react';

const Membership = () => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Membership: Prepaid Package Option</h2>
            <div className="mb-4">
                <h3 className="text-xl font-semibold">Offer:</h3>
                <p>Purchase a set number of services upfront at a discounted rate.</p>
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-semibold">Details:</h3>
                <ul className="list-disc list-inside">
                    <li>Number of Services: 4 auto details over a year (designed for one every 3 months)</li>
                    <li>Regular Price: 4 Gold Details at $246 each = $984</li>
                    <li>Discounted Price: $738 for 4 details upfront</li>
                    <li>Savings: Get 4 details for the price of 3 – save $246 plus tax over a 12-month period!</li>
                    <li>Validity: Offer is valid for a 12-month span from the date of purchase.</li>
                    <li>Terms: All purchases are final.</li>
                </ul>
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-semibold">Why Choose Our Membership Package?</h3>
                <ul className="list-disc list-inside">
                    <li>Cost-Effective: Enjoy significant savings by paying upfront.</li>
                    <li>Convenient: Schedule your details every 3 months or as needed.</li>
                    <li>Comprehensive Care: Ensure your vehicle stays in top condition year-round.</li>
                </ul>
            </div>
            <a href="/signup" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">
                Click here to sign up now and enjoy the peace of mind that comes with regular detailing services at a discounted rate.
            </a>
        </div>
    );
};

export default Membership;
