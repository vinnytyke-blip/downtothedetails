import React, { useRef, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { images } from "../../assets";

const Gallery = ({ onClose }) => {
    const galleryRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (galleryRef.current && !galleryRef.current.contains(event.target)) {
                onClose(); // Close the gallery when clicked outside
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="gallery-overlay">
            <div className="gallery-container" ref={galleryRef} style={{ padding: '10px' }}>
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
    <Masonry gutter="5px">
        {images.map((image, index) => (
            <img
                key={index}
                src={image}
                alt=""
                style={{
                    width: "100%",
                    display: "block",
                    borderRadius: "8px",
                    objectFit: "cover",
                }}
            />
        ))}
    </Masonry>
</ResponsiveMasonry>

            </div>
        </div>
    )
}

export default Gallery;