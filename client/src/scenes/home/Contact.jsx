import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { contactus } from '../../assets';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_3m8lq6v', 'template_3gozzmd', form.current, {
                publicKey: 'K-1RrqgaTjullNpjd',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
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
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ marginBottom: '15px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src={contactus} // Replace with your image path
                            alt="Appointment Icon"
                            style={{ width: '150px', height: '150px' }} // Adjust size as needed
                        />
                        <div
                            style={{
                                padding: '20px',
                                borderRadius: '5px',
                                backgroundColor: '#1a1a1a',
                            }}
                        >
                            <form ref={form} onSubmit={sendEmail} noValidate>
                                {/* Row 1 of form */}
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
                                            width: '100%', // Make width consistent
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
                                                color: 'black', // Ensure text is readable
                                            }}
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            width: '100%', // Make width consistent
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
                                {/* Row 2 of form */}
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column', // Align with the row above
                                        gap: '15px',
                                        marginBottom: '15px',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            width: '100%', // Make width consistent
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







{/* <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="from_name" />
            <label>Email</label>
            <input type="email" name="from_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form> */}