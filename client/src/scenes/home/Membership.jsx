import React from 'react';
import { memDetails, whyMem, bulletPoint } from '../../assets';

const Membership = () => {

    return (
        <div
            id='membership'
            style={{
                padding: '50px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <div>
                <h2
                    style={{
                        fontSize: '36px',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                    }}
                >
                    Membership: Prepaid Package Option
                </h2>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h3>Purchase a set number of services upfront at a discounted rate.</h3>
            </div>
            <div
                style={{
                    marginBottom: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <h3
                    style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        textAlign: 'center',
                        marginBottom: '1rem',
                    }}
                >
                    Details:
                </h3>
                {memDetails.map((detail, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                listStyleType: 'disc',
                                paddingLeft: '2rem',
                                textAlign: 'left',
                                width: '100%',
                                maxWidth: '700px',
                            }}
                        >
                            <img
                                src={bulletPoint}
                                alt={`Checked icon for ${detail.name}`}
                                style={{
                                    flexShrink: 0,
                                    marginRight: "5px",
                                    width: "17px",
                                    height: "17px",
                                }}
                            />
                            <span style={{ lineHeight: 2 }}>{detail.name}</span>
                        </div>
                    );
                })}
            </div>
            <div
                style={{
                    marginBottom: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <h3
                    style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        textAlign: 'center',
                        marginBottom: '1rem',
                    }}
                >
                    Why Choose Our Membership Package?
                </h3>
                {whyMem.map((detail, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                listStyleType: 'disc',
                                paddingLeft: '2rem',
                                textAlign: 'left',
                                width: '100%',
                                maxWidth: '700px',
                            }}
                        >
                            <img
                                src={bulletPoint}
                                alt={`Checked icon for ${detail.name}`}
                                style={{
                                    flexShrink: 0,
                                    marginRight: "5px",
                                    width: "17px",
                                    height: "17px",
                                }}
                            />
                            <span style={{ lineHeight: 2 }}>{detail.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Membership;