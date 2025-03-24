"use client"

import { useState, useEffect } from "react"
import {
    FaBitcoin,
    FaTrophy,
    FaAmazon,
    FaApple,
    FaMicrosoft,
    FaGoogle,
    FaFacebook,
    FaTwitter,
    FaDropbox,
    FaYoutube,
    FaLinkedin,
    FaPaypal,
} from "react-icons/fa"
import {
    SiRipple,
    SiCoinbase,
    SiTether,
    SiBinance,
    SiSamsung,
    SiNetflix,
    SiAdobe,
    SiOracle,
    SiNvidia,
    SiAmd,
} from "react-icons/si"
import { motion } from "framer-motion"

export default function PartnersAwardsSection() {
    const [activeTab, setActiveTab] = useState("Strategic")
    const [trophiesVisible, setTrophiesVisible] = useState(false)

    useEffect(() => {
        // Trigger trophy animations after a short delay
        const timer = setTimeout(() => {
            setTrophiesVisible(true)
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    // Partner logos for each tab
    const partnerLogos = {
        Strategic: [
            { icon: <SiBinance size={28} className="mr-2" />, name: "BINANCE", color: "text-purple-600" },
            { icon: <SiRipple size={24} className="mr-2" />, name: "ripple", color: "text-purple-500" },
            { icon: <SiCoinbase size={24} className="mr-2" />, name: "coinbase", color: "text-gray-500" },
            { icon: <FaBitcoin size={24} className="mr-2" />, name: "bitcoin", color: "text-gray-600", italic: true },
            { text: "BITFINEX", symbol: "⟁", color: "text-purple-600" },
            { symbol: "Ⓜ", name: "MONERO", color: "text-purple-500" },
            { icon: <SiTether size={24} className="mr-2" />, name: "tether", color: "text-gray-500" },
            { symbol: "Ⓢ", name: "steemit", color: "text-purple-400" },
        ],
        Business: [
            { icon: <FaAmazon size={28} className="mr-2" />, name: "Amazon", color: "text-orange-500" },
            { icon: <FaApple size={24} className="mr-2" />, name: "Apple", color: "text-gray-800" },
            { icon: <FaMicrosoft size={24} className="mr-2" />, name: "Microsoft", color: "text-blue-600" },
            { icon: <FaGoogle size={24} className="mr-2" />, name: "Google", color: "text-green-500" },
            { icon: <SiSamsung size={24} className="mr-2" />, name: "Samsung", color: "text-blue-800" },
            { icon: <SiNetflix size={24} className="mr-2" />, name: "Netflix", color: "text-red-600" },
            { icon: <FaFacebook size={24} className="mr-2" />, name: "Facebook", color: "text-blue-500" },
            { icon: <FaTwitter size={24} className="mr-2" />, name: "Twitter", color: "text-blue-400" },
        ],
        Product: [
            { icon: <SiAdobe size={28} className="mr-2" />, name: "Adobe", color: "text-red-700" },
            { icon: <SiOracle size={24} className="mr-2" />, name: "Oracle", color: "text-red-500" },
            { icon: <FaLinkedin size={24} className="mr-2" />, name: "LinkedIn", color: "text-blue-700" },
            { icon: <FaYoutube size={24} className="mr-2" />, name: "YouTube", color: "text-red-600" },
            { icon: <SiNvidia size={24} className="mr-2" />, name: "NVIDIA", color: "text-green-600" },
            { icon: <SiAmd size={24} className="mr-2" />, name: "AMD", color: "text-red-600" },
            { icon: <FaPaypal size={24} className="mr-2" />, name: "PayPal", color: "text-blue-700" },
            { icon: <FaDropbox size={24} className="mr-2" />, name: "Dropbox", color: "text-blue-500" },
        ],
    }

    // Trophy data with positions - now all same size but different colors
    const trophies = [
        { id: 1, color: "text-yellow-500", delay: 0 },
        { id: 2, color: "text-blue-400", delay: 0.2 },
        { id: 3, color: "text-red-500", delay: 0.4 },
        { id: 4, color: "text-green-500", delay: 0.6 },
    ]

    return (
        <div className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16 relative">
            {/* World Map Background */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: "url('https://via.placeholder.com/1200x800')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Partners Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-1">
                        Our <span className="text-blue-500">Partners</span>
                    </h2>
                    <p className="text-gray-600 mb-8">Our Partner we proud</p>

                    {/* Filter Tabs */}
                    <div className="inline-flex bg-white rounded-full p-1 shadow-sm mb-12">
                        {["Strategic", "Business", "Product"].map((tab) => (
                            <button
                                key={tab}
                                className={`px-6 py-2 rounded-full text-sm ${activeTab === tab ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Partners Logos Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {partnerLogos[activeTab]?.map((partner, index) => (
                            <motion.div
                                key={index}
                                className="flex justify-center items-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <div className={`flex items-center ${partner.color}`}>
                                    {partner.icon && partner.icon}
                                    {partner.symbol && <span className="text-2xl mr-2">{partner.symbol}</span>}
                                    {partner.name && (
                                        <span className={`text-xl font-semibold ${partner.italic ? "italic" : ""}`}>{partner.name}</span>
                                    )}
                                    {partner.text && (
                                        <span className="text-lg font-semibold">
                                            {partner.text}
                                            {partner.symbol && <span className="text-2xl">{partner.symbol}</span>}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Awards Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-1">
                        Our <span className="text-blue-500">Awards & Achievements</span>
                    </h2>
                    <p className="text-gray-600 mb-12">
                        Our achievements proves
                        <br />
                        our existent
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="text-left">
                            <h3 className="text-3xl font-bold">BOSCH</h3>
                            <h4 className="text-2xl font-bold mb-1">Security Systems</h4>
                            <div className="flex items-center mb-4">
                                <h4 className="text-2xl font-bold mr-2">AWARD</h4>
                                <span className="text-xs align-top">TM</span>
                                <h4 className="text-2xl font-bold ml-1">2019</h4>
                            </div>
                            <p className="text-gray-700 mb-2">
                                <span className="font-bold">5</span> times <span className="font-bold">BOSCH</span> security systems
                                award
                            </p>
                            <p className="text-gray-700">winner in Bangladesh</p>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <div className="relative h-40 w-full flex items-center justify-center">
                                {trophies.map((trophy, index) => (
                                    <motion.div
                                        key={trophy.id}
                                        className="absolute w-20 h-20"
                                        style={{
                                            left: `${15 + index * 22}%`, // Increased spacing between trophies
                                            top: trophiesVisible ? "50%" : "-100%",
                                            transform: "translateY(-50%)",
                                        }}
                                        initial={{ top: "-100%" }}
                                        animate={{
                                            top: trophiesVisible ? "50%" : "-100%",
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            delay: trophy.delay,
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 15,
                                        }}
                                    >
                                        <FaTrophy className={`${trophy.color} w-full h-full`} />
                                    </motion.div>
                                ))}
                            </div>
                            <div className="border-t border-gray-300 w-full pt-4 text-right">
                                <p className="text-gray-700 italic">BOSCH ACKNOWLEDGMENT.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

