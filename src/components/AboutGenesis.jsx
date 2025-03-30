import fireImage from "../assets/images/fire.png";
import sheild from "../assets/images/sheild.png";
import security from "../assets/images/security.png";
import wave from "../assets/images/wave.png";
const AboutGenesis = () => {
    return (
        <div
            className="bg-white bg-bottom bg-no-repeat bg-[length:100%_300px] mb-20 bg-gradient-to-b from-gray-50 via-transparent to-white"
            style={{ backgroundImage: `url(${wave})` }}
        >
            <div className="bg-gradient-to-b from-gray-50 via-transparent to-white">

                <div className="container mx-auto px-15 py-10 ">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold">
                            Know <span className="text-sky-400">Genesis</span>
                        </h1>
                        <p className="text-gray-600 mt-2">Read about us at a glimpse</p>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold leading-tight">
                                COMPREHENSIVE <span className="text-sky-400">FIRE, SAFETY, SECURITY</span>, AND{" "}
                                <span className="font-bold">DATA SOLUTIONS.</span>
                            </h2>

                            <p className="text-gray-600 leading-relaxed">
                                GTL delivers world-class solutions for Fire, Safety, Security, Queue Management, and Data Center needs.
                                Serving governments, NGOs, embassies, banks, power stations, and critical infrastructure, GTL offers
                                products and services tailored to major organizations. Backed by an experienced team and robust resources,
                                GTL handles projects of any size or complexity with excellence.
                            </p>

                            <div className="flex gap-4 mt-8">
                                <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-black/90 transition-colors inline-flex items-center">
                                    Learn More
                                    <span className="ml-2 rotate- ">→</span>
                                </button>

                                <button className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
                                    Explore Us
                                </button>
                            </div>
                        </div>

                        <div className="relative flex flex-col items-center justify-center min-h-[400px]">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10 -z-10">
                                <img
                                    src="https://www.transparenttextures.com/patterns/asfalt-dark.png"
                                    alt="Background"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Fire, Safety, and Security Icons */}
                            <div className="relative flex flex-col items-center justify-center right-5">
                                {/* Top - Fire */}
                                <div className="flex flex-col items-center absolute top-[-75%] p-6 bg-gradient-to-b from-[#D9D9D9] to-[#aeaeae] border-[#C6C6C6] shadow-lg rounded-2xl z-100 border-1 ">
                                    <img src={fireImage} alt="" className="size-15 object-cover" />
                                    <span className="font-semibold mt-2">Fire</span>
                                </div>

                                {/* Dashed Lines with Center Node */}
                                <div className="relative w-[250px] h-[160px] flex items-center justify-center">
                                    {/* Dashed Line SVG */}
                                    <svg width="100%" height="100%" className="absolute">
                                        {/* Left Line (Fire to Safety) */}
                                        <line x1="50%" y1="10%" x2="15%" y2="85%" stroke="gray" strokeDasharray="4,5" strokeWidth="1" />
                                        {/* Right Line (Fire to Security) */}
                                        <line x1="50%" y1="10%" x2="85%" y2="85%" stroke="gray" strokeDasharray="4,5" strokeWidth="1" />
                                        {/* Bottom Line (Safety to Security) */}
                                        <line x1="15%" y1="85%" x2="85%" y2="85%" stroke="gray" strokeDasharray="4,5" strokeWidth="1" />

                                    </svg>

                                    {/* Center Node */}
                                    <div className="absolute w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>

                                {/* Bottom - Safety & Security */}
                                <div className="flex gap-28 md:gap-40 absolute top-[70%] justify-center items-center">
                                    {/* Safety */}
                                    <div className="flex flex-col items-center p-6 ml-2 bg-gradient-to-b from-[#D9D9D9] to-[#aeaeae] border-[#C6C6C6] shadow-lg rounded-2xl">
                                        <img src={sheild} alt="" />
                                        <span className="font-semibold mt-2">Safety</span>
                                    </div>

                                    {/* Security */}
                                    <div className="flex flex-col items-center p-6 bg-gradient-to-b from-[#D9D9D9] to-[#aeaeae] border-[#C6C6C6]shadow-lg rounded-2xl">
                                        <img src={security} alt="" />
                                        <span className="font-semibold mt-2">Security</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutGenesis;
