import { useState, useRef } from "react";
import { Typography } from "@mui/material";
import { rightArrow, downArrow } from "../../assets";
import { MemContact } from "./MemContact";

const MembershipButton = () => {
    const [showMemContact, setShowMemContact] = useState(false);

    // Create a ref for MemContact component
    const memContactRef = useRef(null);

    const handleInquireClick = () => {
        setShowMemContact((prevState) => !prevState);
        // Scroll to the MemContact component and center it on the screen
        if (memContactRef.current) {
            memContactRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center", // This centers the element on the screen
            });
        }
    };

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <button
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "50px",
                        backgroundColor: "black",
                        boxShadow: "0px 7px 8px rgba(0, 0, 0, 0.8)",
                        color: "white",
                        border: "none",
                        fontSize: "16px",
                        cursor: "pointer",
                        gap: "20px",
                    }}
                    onClick={handleInquireClick}
                >
                    <Typography
                        sx={{
                            letterSpacing: "2px",
                            fontSize: "20px",
                            fontWeight: 300,
                        }}
                    >
                        Inquire About Membership
                    </Typography>
                    <img
                        src={showMemContact ? downArrow : rightArrow}
                        alt="right arrow png"
                        style={{
                            width: "35px",
                            height: "35px",
                        }}
                    />
                </button>
            </div>

            <div
                style={{
                    maxHeight: showMemContact ? "800px" : "0", // Adjust 1000px to a reasonable max height based on your content
                    overflow: "hidden", // Hide overflow when collapsed
                    transition: "max-height 1s ease-in-out",
                    visibility: showMemContact ? "visible" : "hidden",
                }}
            >
                {/* Attach the ref to MemContact component */}
                <div ref={memContactRef}>
                    {showMemContact && <MemContact />}
                </div>
            </div>
        </>
    );
};

export default MembershipButton;
