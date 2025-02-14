import { useState, useEffect } from "react";
import logo1 from "../assets/images/23.png";
import logo2 from "../assets/images/24.png";
import logo3 from "../assets/images/25.png";
import logo4 from "../assets/images/26.png";
import logo5 from "../assets/images/27.png";
import logo6 from "../assets/images/23.png";
import logo7 from "../assets/images/24.png";
import logo8 from "../assets/images/25.png";
import logo9 from "../assets/images/26.png";
import logo10 from "../assets/images/27.png";

const images = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo3, logo4, logo5, logo6, logo7];

const LogoShocase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(2); // Default is 2 slides for mobile

    // Update visible slides based on window size
    const updateVisibleCount = () => {
        if (window.innerWidth < 640) {
            setVisibleCount(2); // 2 slides on mobile
        } else if (window.innerWidth < 1024) {
            setVisibleCount(3); // 3 slides on tablet/laptop
        } else {
            setVisibleCount(4); // 3 slides on large laptop
        }
    };

    useEffect(() => {
        window.addEventListener("resize", updateVisibleCount);
        updateVisibleCount(); // Initial call to set visible slides count

        // Set up automatic transition every 3 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 10); // Loop through the 10 slides
        }, 7000);

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full flex justify-center bg-gradient-to-r from-[#F2F1F1] to-[#C7C7C7]">
            <div className="overflow-hidden w-5/6">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${(currentIndex % 10) * (100 / visibleCount)}%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="flex-shrink-0" style={{ width: `${100 / visibleCount}%` }}>
                            <div className=" h-[170px] ml-3 lg:ml-0 lg:w-[200px] lg:h-[170px] flex justify-center items-center">
                                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoShocase;
