import { useState } from "react";
import CarouselFire from "./Carousel";
import CarouselSafety from "./CarouselSafety";
import CarouselSecurity from "./CarouselSecurity";

const solutionsData = {
    Fire: {
        title: "FIRE EXTINGUISHER",
        description: "GTL provides advanced fire safety solutions to protect lives, property, and critical infrastructure. Our services include fire detection, alarm systems, and cutting-edge suppression technologies, ensuring comprehensive prevention, monitoring, and response. Catering to governments, embassies, power stations, and major organizations, we deliver reliable, customized systems that meet the highest safety standards.",
    },
    Safety: {
        title: "SAFETY SOLUTIONS",
        description: "GTL provides advanced fire safety solutions to protect lives, propertyring comprehensive prevention, monitoring, and response. Catering to governments, embassies, power stations, and major organizations, we deliver reliable, customized systems that meet the highest safety standards., and critical infrastructure. Our services include fire detection, alarm systems, and cutting-edge suppression technologies, ensu ",

    },
    Security: {
        title: "SECURITY SYSTEMS",
        description: "GTL provides advanced fire safety solutions to protect lives, property, and critical infrastructure. Our services include fire detection, alarm systems, and cutting-edge suppression technologies, ensuring comprehensive prevention, monitoring, and response. Catering to governments, embassies, power stations, and major organizations, we deliver reliable, customized systems that meet the highest safetycture. Our services include fire detection, alarm systems, and cutting-edge suppression technologies, ensuring comprehensive prevention, monitoring, and response. Catering to governments, embassies, power stations, and major or standards.",
    }
};

export default function SolutionsSection() {
    const [activeTab, setActiveTab] = useState("Fire");
    const { title, description } = solutionsData[activeTab];

    return (
        <div className="mx-auto  py-12 text-center bg-[#F7F7F7]">
            <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="text-blue-500">Solutions</span>
            </h2>
            <p className="text-gray-600 mt-2">Explore our solutions to identify your need</p>

            <div className="flex justify-center mt-6 bg-gray-200 rounded-full p-1 w-fit mx-auto">
                {Object.keys(solutionsData).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 md:px-15 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${activeTab === tab ? "bg-white shadow-md" : "text-gray-600 hover:bg-gray-300"}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <p className="mt-6 text-gray-700 px-6 md:px-32">{solutionsData[activeTab].description}</p>

            <div className="mt-8">
                {activeTab === "Fire" && <CarouselFire />}
                {activeTab === "Safety" && <CarouselSafety />}
                {activeTab === "Security" && <CarouselSecurity />}
            </div>

        </div>
    );
}
