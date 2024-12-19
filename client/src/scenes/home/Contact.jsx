import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from 'react-lottie';
import { lottieMessage } from '../../assets';
import { contactus } from '../../assets';

export const Contact = () => {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_3m8lq6v', 'template_3gozzmd', form.current, {
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
                backgroundColor: 'black',
                color: 'white',
                padding: '40px 20px',
                position: 'relative',
            }}
        >
            {messageSent && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim background
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
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ marginBottom: '15px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src={contactus}
                            alt="Appointment Icon"
                            style={{ width: '150px', height: '150px' }}
                        />
                        <div
                            style={{
                                padding: '20px',
                                borderRadius: '5px',
                                backgroundColor: '#1a1a1a',
                            }}
                        >
                            <form ref={form} onSubmit={sendEmail} noValidate>
                                {/* Row 1 */}
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
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            width: '100%',
                                            gap: '10px',
                                        }}
                                    >
                                        <label style={{ marginLeft: '5px' }}>Name</label>
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
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            width: '100%',
                                            gap: '10px',
                                        }}
                                    >
                                        <label style={{ marginLeft: '5px' }}>Email</label>
                                        <input
                                            type="email"
                                            name="from_email"
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
                                        />
                                    </div>
                                </div>
                                {/* Row 2 */}
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
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            width: '100%',
                                            gap: '10px',
                                        }}
                                    >
                                        <label style={{ marginLeft: '5px' }}>Message</label>
                                        <textarea
                                            rows={3}
                                            name="message"
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
                                            placeholder="Message"
                                        />
                                    </div>
                                </div>
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};