import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from 'react-lottie';
import { lottieMessage } from '../../assets';

export const MemContact = () => { // Pass `show` as a prop
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_3m8lq6v', 'template_men71fc', form.current, {
                publicKey: 'K-1RrqgaTjullNpjd',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setMessageSent(true);
                    form.current.reset();
                    setTimeout(() => setMessageSent(false), 3000); // Hide message after 3 seconds
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div
            style={{
                padding: '40px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                overflow: 'hidden',
                backgroundColor: 'rgba(0, 0, 0, 0.9)', // Black with 90% opacity
                color: 'white',
            }}
        >
            {messageSent && (
                <div
                    style={{
                        position: 'fixed', // Fixes the position relative to the screen
                        top: '50%', // Centers vertically
                        left: '50%', // Centers horizontally
                        transform: 'translate(-50%, -50%)', // Offsets the element to truly center it
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim background
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Lottie
                        options={{
                            loop: false, // Play the animation only once
                            autoplay: true,
                            animationData: lottieMessage,
                        }}
                        height={200}
                        width={200}
                    />
                </div>
            )}
            <div
                style={{
                    padding: '20px',
                }}
            >
                <form ref={form} onSubmit={sendEmail} noValidate>
                    {/* Row 1: Name and Email */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '15px',
                            marginBottom: '15px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '15px',
                                marginBottom: '15px',
                            }}
                        >
                            <input
                                type="text"
                                name="from_name"
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    fontSize: '16px',
                                    borderRadius: '5px',
                                    boxSizing: 'border-box',
                                    marginBottom: '10px',
                                    backgroundColor: 'white',
                                    color: 'black',
                                }}
                                placeholder="First and Last Name"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    fontSize: '16px',
                                    borderRadius: '5px',
                                    boxSizing: 'border-box',
                                    marginBottom: '10px',
                                    backgroundColor: 'white',
                                    color: 'black',
                                }}
                                placeholder="Email"
                                required
                            />
                        </div>
                        {/* Row 2: Phone and Vehicle Info */}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '15px',
                                marginBottom: '15px',
                            }}
                        >
                            <input
                                type="tel"
                                name="phone_number"
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    fontSize: '16px',
                                    borderRadius: '5px',
                                    boxSizing: 'border-box',
                                    marginBottom: '10px',
                                    backgroundColor: 'white',
                                    color: 'black',
                                }}
                                placeholder="Phone Number"
                                required
                            />
                            <input
                                type="text"
                                name="vehicle_info"
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    fontSize: '16px',
                                    borderRadius: '5px',
                                    boxSizing: 'border-box',
                                    marginBottom: '10px',
                                    backgroundColor: 'white',
                                    color: 'black',
                                }}
                                placeholder="Vehicle Make, Model, Year"
                                required
                            />
                        </div>
                        {/* Row 3: Desired Package */}
                        <div
                            style={{
                                marginBottom: '15px',
                            }}
                        >
                            <label style={{ marginBottom: '5px', display: 'block' }}>
                                Desired Package
                            </label>
                            <select
                                name="desired_package"
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    fontSize: '16px',
                                    borderRadius: '5px',
                                    boxSizing: 'border-box',
                                    backgroundColor: 'white',
                                    color: 'black',
                                }}
                                required
                            >
                                <option value="">Select Package</option>
                                <option value="gold">Gold</option>
                                <option value="silver">Silver</option>
                                <option value="bronze">Bronze</option>
                            </select>
                        </div>
                        {/* Row 4: Interior/Exterior Options */}
                        <div
                            style={{
                                marginBottom: '15px',
                            }}
                        >
                            <label style={{ marginBottom: '5px', display: 'block' }}>
                                Service Type
                            </label>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '15px',
                                }}
                            >
                                <label>
                                    <input
                                        type="radio"
                                        name="selected_option"
                                        value="interior_and_exterior"
                                        required
                                        defaultChecked
                                    />{' '}
                                    Interior and Exterior Both
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="selected_option"
                                        value="interior_only"
                                        required
                                    />{' '}
                                    Interior Only
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="selected_option"
                                        value="exterior_only"
                                        required
                                    />{' '}
                                    Exterior Only
                                </label>
                            </div>
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            style={{
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                fontSize: '16px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease',
                            }}
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

