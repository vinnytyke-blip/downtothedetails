import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { images } from "../../assets";
import testImage from './dangers-of-rust.jpg'

const Gallery = ({ onClose }) => {
    return (
        <div className="gallery-overlay">
            <div className="gallery-container">
                <button className="close-button" onClick={onClose}>Close Gallery</button>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry style={{ padding: '10px' }}>
                        {images.map((image, i) => (
                            <div key={i} >
                                <img
                                    src={image}
                                    style={{ width: '100%', display: 'block' }}
                                    alt={`Image ${i}`}
                                />
                            </div>
                        ))}
                        <img
                            src={testImage}
                            style={{ width: '100%', display: 'block' }}
                        />
                    </Masonry>
                </ResponsiveMasonry>
            </div>
            {/* <img
                src={testImage}
                style={{ width: '100%', display: 'block' }}
            /> */}
            Hello
        </div>
    )
}

export default Gallery;