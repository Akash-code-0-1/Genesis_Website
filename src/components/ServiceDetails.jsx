import { useState } from "react";
// import { FaArrowRight } from "react-icons/fa6";

const tabs = [
    { id: "design", label: "Design" },
    { id: "installation", label: "Installation" },
    { id: "implementation", label: "Implementation" },
    { id: "maintenance", label: "Maintenance" },
];

const tabContent = {
    design: [
        {
            id: "c1",
            title: "Fire System Design",
            description: "Specialized in designing fire systems with advanced safety protocols.",
            image: "https://images.pexels.com/photos/30788050/pexels-photo-30788050/free-photo-of-firefighter-tackles-intense-car-blaze-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: "c2",
            title: "Safety System Design",
            description: "Expert safety system design with modern compliance standards.",
            image: "https://images.pexels.com/photos/29379358/pexels-photo-29379358/free-photo-of-portrait-of-female-firefighter-in-gear.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: "c3",
            title: "Security System Design",
            description: "Comprehensive security system design and architecture.",
            image: "https://images.pexels.com/photos/18299007/pexels-photo-18299007/free-photo-of-silhouette-of-a-fireman-with-a-fire-behind-his-back.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: "c4",
            title: "Innovative Architecture",
            description: "Creating cutting-edge architectural solutions.",
            image: "https://images.pexels.com/photos/29904329/pexels-photo-29904329/free-photo-of-fire-station-with-emergency-vehicles-in-houston.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ],
    installation: [
        {
            id: "c1",
            title: "Electrical Installation",
            description: "Reliable electrical setup for safety and efficiency.",
            image: "https://source.unsplash.com/400x300/?electricity,installation",
        },
        {
            id: "c2",
            title: "Network Installation",
            description: "Advanced networking solutions for enterprises.",
            image: "https://source.unsplash.com/400x300/?network,technology",
        },
        {
            id: "c3",
            title: "Surveillance Systems",
            description: "Installing high-tech surveillance systems for security.",
            image: "https://source.unsplash.com/400x300/?surveillance,security",
        },
        {
            id: "c4",
            title: "Home Automation",
            description: "Smart home automation systems for modern living.",
            image: "https://source.unsplash.com/400x300/?home,automation",
        },
    ],
    implementation: [
        {
            id: "c1",
            title: "Software Development",
            description: "Efficient and scalable software solutions.",
            image: "https://source.unsplash.com/400x300/?software,code",
        },
        {
            id: "c2",
            title: "Cloud Deployment",
            description: "Deploying secure cloud infrastructure.",
            image: "https://source.unsplash.com/400x300/?cloud,server",
        },
        {
            id: "c3",
            title: "AI & Automation",
            description: "Implementing AI-driven solutions for businesses.",
            image: "https://source.unsplash.com/400x300/?ai,robotics",
        },
        {
            id: "c4",
            title: "Cybersecurity Implementation",
            description: "Securing systems against cyber threats.",
            image: "https://source.unsplash.com/400x300/?cybersecurity,hacker",
        },
    ],
    maintenance: [
        {
            id: "c1",
            title: "Routine Checkups",
            description: "Regular maintenance to ensure smooth operations.",
            image: "https://source.unsplash.com/400x300/?maintenance,tools",
        },
        {
            id: "c2",
            title: "Security Audits",
            description: "Ensuring top-notch security with regular audits.",
            image: "https://source.unsplash.com/400x300/?audit,security",
        },
        {
            id: "c3",
            title: "Software Updates",
            description: "Keeping software up-to-date and secure.",
            image: "https://source.unsplash.com/400x300/?update,technology",
        },
        {
            id: "c4",
            title: "Emergency Repairs",
            description: "Quick response for critical failures.",
            image: "https://source.unsplash.com/400x300/?repair,emergency",
        },
    ],
};

export default function ServiceDetails() {
    const [activeTab, setActiveTab] = useState("design");
    const [selected, setSelected] = useState("c1");

    return (
        <div className="relative min-h-screen bg-[#020817] px-4 py-16">
            <div className="mx-auto max-w-full">
                <h2 className="text-center text-[48px] font-bold text-white">
                    Service <span className="text-[#00A3FF]">Details</span>
                </h2>
                <p className="mt-2 text-md text-center text-gray-400">Find our service which matches you</p>

                {/* Tabs */}
                <div className="mx-auto mt-10 mb-10 flex max-w-4xl items-center justify-between rounded-full bg-gray-800/50 p-2 py-x-5">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`rounded-full font-medium px-10 py-2 text-lg transition-all ${activeTab === tab.id ? "bg-white text-black" : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Slider */}
                <div className="flex items-center justify-center h-[550px] w-[100%]">
                    <div className="flex space-x-3 justify-center  w-full max-w-4xl">
                        {tabContent[activeTab].map((card) => (
                            <div
                                key={card.id}
                                onClick={() => setSelected(card.id)}
                                className={`relative flex-shrink-0 h-[400px] rounded-2xl cursor-pointer shadow-lg transition-all duration-500 ease-in-out overflow-hidden ${selected === card.id ? "w-[65%] lg:w-[500px]" : "w-60"
                                    }`}
                                style={{ backgroundImage: `url(${card.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                            >
                                <div className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 transition-all duration-300 ease-in-out transform ${selected === card.id ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                    }`}>
                                    <h4 className="text-white uppercase text-lg">{card.title}</h4>
                                    <p className="text-gray-300 text-sm">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
