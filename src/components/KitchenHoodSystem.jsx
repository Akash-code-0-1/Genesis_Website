"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
    Utensils,
    CheckCircle,
    AlertTriangle,
    Flame,
    Info,
    Settings,
    ArrowRight,
    ChevronDown,
    ChevronUp,
    ShieldAlert,
    Clock,
} from "lucide-react"
// import ServiceLayout from "./ServiceLayout"

const KitchenHoodSystem = () => {
    const [openFaq, setOpenFaq] = useState(null)

    const toggleFaq = (index) => {
        if (openFaq === index) {
            setOpenFaq(null)
        } else {
            setOpenFaq(index)
        }
    }

    // FAQ data
    const faqs = [
        {
            question: "How often should kitchen hood fire suppression systems be inspected?",
            answer:
                "Kitchen hood fire suppression systems should be inspected every 6 months by a certified technician in accordance with NFPA 96 and manufacturer requirements. Additionally, monthly visual inspections should be performed by staff to check for obvious issues like damaged components or missing safety pins.",
        },
        {
            question: "Can kitchen operations continue after a system discharge?",
            answer:
                "No. After a system discharge, kitchen operations must be suspended until the system has been properly cleaned, recharged, and reset by a certified technician. This includes thorough cleaning of cooking equipment, hood, and ductwork to remove extinguishing agent residue, as well as replacement of fusible links and reset of the system.",
        },
        {
            question: "What types of fires do kitchen hood systems protect against?",
            answer:
                "Kitchen hood systems are specifically designed to protect against Class K fires (cooking oils and fats) as well as Class A (ordinary combustibles) and Class B (flammable liquids) fires that may occur in commercial kitchen environments. The wet chemical agents used are particularly effective against high-temperature grease fires.",
        },
        {
            question: "How does the automatic detection work in kitchen hood systems?",
            answer:
                "Kitchen hood systems typically use fusible links for automatic detection. These links are made of metals with specific melting points. When the temperature in the hood exceeds the rated temperature (usually around 275-325°F/135-165°C), the link melts, allowing the system to activate and discharge the extinguishing agent onto the cooking surfaces and into the exhaust system.",
        },
    ]

    return (
        <div className="container mx-auto py-12 px-4">
            {/* Hero Section with Interactive Animation */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-8 relative">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 h-72 md:h-96 relative overflow-hidden">
                    {/* Animated kitchen fire simulation */}
                    <div className="absolute inset-0">
                        <motion.div
                            className="absolute bottom-0 left-1/4 w-12 h-24 bg-yellow-500 opacity-80 rounded-t-full"
                            animate={{
                                height: [24, 48, 36, 60, 24],
                                width: [12, 20, 16, 24, 12],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                            }}
                            style={{
                                filter: "blur(4px)",
                                transformOrigin: "bottom",
                            }}
                        />

                        <motion.div
                            className="absolute bottom-0 left-1/3 w-16 h-32 bg-orange-500 opacity-80 rounded-t-full"
                            animate={{
                                height: [32, 64, 48, 72, 32],
                                width: [16, 24, 20, 28, 16],
                            }}
                            transition={{
                                duration: 1.5,
                                delay: 0.2,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                            }}
                            style={{
                                filter: "blur(4px)",
                                transformOrigin: "bottom",
                            }}
                        />

                        <motion.div
                            className="absolute bottom-0 left-1/2 w-20 h-40 bg-red-500 opacity-80 rounded-t-full"
                            animate={{
                                height: [40, 80, 60, 90, 40],
                                width: [20, 32, 24, 36, 20],
                            }}
                            transition={{
                                duration: 2.2,
                                delay: 0.4,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                            }}
                            style={{
                                filter: "blur(5px)",
                                transformOrigin: "bottom",
                            }}
                        />

                        {/* Nozzle simulation */}
                        <motion.div
                            className="absolute top-1/3 left-0 right-0 mx-auto w-1/2 h-1 bg-white opacity-0"
                            animate={{
                                opacity: [0, 0, 0, 0.8, 0],
                                scaleY: [1, 1, 1, 40, 1],
                                scaleX: [1, 1, 1, 1.2, 1],
                            }}
                            transition={{
                                duration: 5,
                                times: [0, 0.6, 0.62, 0.8, 1],
                                repeat: Number.POSITIVE_INFINITY,
                                repeatDelay: 3,
                            }}
                            style={{
                                filter: "blur(3px)",
                                transformOrigin: "center",
                            }}
                        />
                    </div>

                    <div className="relative z-10 h-full flex items-center justify-center p-8">
                        <div className="text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg inline-block mb-4"
                            >
                                <Utensils className="w-12 h-12 text-orange-600 mx-auto mb-2" />
                                <h1 className="text-3xl font-bold text-orange-800">Kitchen Hood Fire Suppression</h1>
                            </motion.div>

                            <motion.p
                                className="text-lg text-white max-w-2xl mx-auto text-shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.7 }}
                            >
                                Specialized protection for commercial cooking operations, ensuring safety where fire risks are highest
                            </motion.p>
                        </div>
                    </div>
                </div>

                {/* Key highlights at bottom */}
                <div className="grid grid-cols-1 md:grid-cols-3 bg-white">
                    <motion.div
                        className="flex items-center p-5 border-b md:border-b-0 md:border-r border-orange-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <AlertTriangle className="w-8 h-8 text-orange-500 mr-4" />
                        <div>
                            <h3 className="font-semibold text-gray-800">24/7 Protection</h3>
                            <p className="text-sm text-gray-600">Automatic detection and suppression even when staff isn't present</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex items-center p-5 border-b md:border-b-0 md:border-r border-orange-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <Flame className="w-8 h-8 text-orange-500 mr-4" />
                        <div>
                            <h3 className="font-semibold text-gray-800">Specialized for Grease Fires</h3>
                            <p className="text-sm text-gray-600">Wet chemical agents specifically designed for kitchen hazards</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex items-center p-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <CheckCircle className="w-8 h-8 text-orange-500 mr-4" />
                        <div>
                            <h3 className="font-semibold text-gray-800">Code Compliant</h3>
                            <p className="text-sm text-gray-600">Meets NFPA 96 and local regulatory requirements</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* System Overview */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <div className="flex items-center mb-6">
                    <div className="p-2 bg-orange-100 text-orange-500 rounded-lg mr-4">
                        <Info className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Kitchen Hood Fire Suppression Systems</h2>
                </div>

                <p className="text-gray-700 mb-6">
                    Kitchen hood fire suppression systems are specialized automatic fire protection systems designed specifically
                    for commercial cooking operations. These systems are engineered to quickly detect and suppress fires that
                    occur in cooking equipment, exhaust hoods, and ductwork where grease and oil accumulation creates significant
                    fire hazards.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">How Kitchen Hood Systems Work</h3>
                        <ol className="space-y-4">
                            <li className="flex items-start">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-semibold flex-shrink-0 mr-3">
                                    1
                                </span>
                                <div>
                                    <p className="text-gray-700">
                                        <span className="font-medium">Detection:</span> Heat-sensitive fusible links or electronic heat
                                        detectors monitor the cooking area. When excessive heat is detected, the system is activated.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-semibold flex-shrink-0 mr-3">
                                    2
                                </span>
                                <div>
                                    <p className="text-gray-700">
                                        <span className="font-medium">Activation:</span> Upon detection, the system releases a wet chemical
                                        agent (typically potassium-based) through strategically placed nozzles.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-semibold flex-shrink-0 mr-3">
                                    3
                                </span>
                                <div>
                                    <p className="text-gray-700">
                                        <span className="font-medium">Suppression:</span> The agent rapidly cools the hot surfaces and
                                        reacts with cooking oils to form a soap-like foam that prevents re-ignition.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-semibold flex-shrink-0 mr-3">
                                    4
                                </span>
                                <div>
                                    <p className="text-gray-700">
                                        <span className="font-medium">Fuel Shutdown:</span> The system automatically shuts off the fuel or
                                        power supply to cooking equipment, eliminating the heat source.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-semibold flex-shrink-0 mr-3">
                                    5
                                </span>
                                <div>
                                    <p className="text-gray-700">
                                        <span className="font-medium">Alarm Notification:</span> The system triggers local alarms and can be
                                        integrated with building fire alarm systems for facility-wide notification.
                                    </p>
                                </div>
                            </li>
                        </ol>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Key System Components</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <div className="p-1 bg-orange-100 text-orange-500 rounded-full mr-2 mt-0.5">
                                    <CheckCircle className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="font-medium">Agent Storage Tank:</span> Contains the wet chemical extinguishing agent
                                    under pressure
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="p-1 bg-orange-100 text-orange-500 rounded-full mr-2 mt-0.5">
                                    <CheckCircle className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="font-medium">Distribution Piping:</span> Network of pipes that deliver the agent to
                                    discharge nozzles
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="p-1 bg-orange-100 text-orange-500 rounded-full mr-2 mt-0.5">
                                    <CheckCircle className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="font-medium">Discharge Nozzles:</span> Specially designed for different appliances
                                    (fryers, ranges, etc.)
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="p-1 bg-orange-100 text-orange-500 rounded-full mr-2 mt-0.5">
                                    <CheckCircle className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="font-medium">Fusible Links:</span> Heat-sensitive devices that melt at specific
                                    temperatures
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="p-1 bg-orange-100 text-orange-500 rounded-full mr-2 mt-0.5">
                                    <CheckCircle className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="font-medium">Manual Pull Station:</span> Allows for manual activation in case of
                                    emergency
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="p-1 bg-orange-100 text-orange-500 rounded-full mr-2 mt-0.5">
                                    <CheckCircle className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="font-medium">Control System:</span> Monitors the system and controls gas/electrical
                                    shutoffs
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="p-1 bg-orange-100 text-orange-500 rounded-full mr-2 mt-0.5">
                                    <CheckCircle className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="font-medium">Gas/Electrical Shutoffs:</span> Automatically cuts power/fuel to cooking
                                    equipment
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* System Types */}
            <motion.div
                className="bg-white rounded-xl shadow-md p-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className="text-xl font-bold text-gray-800 mb-6">Types of Kitchen Hood Systems</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
                        whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                        <div className="h-48 bg-orange-500 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="p-4 bg-white rounded-full">
                                    <Utensils className="w-12 h-12 text-orange-500" />
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-3">Wet Chemical Systems</h3>
                            <p className="text-gray-700 mb-4">
                                The most common type of kitchen hood suppression system, using potassium-based agents that form a foam
                                blanket over burning cooking oil, preventing re-ignition. These systems are specifically designed for
                                Class K fires (cooking oils and fats).
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Excellent for high-temperature cooking oil fires</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Creates a cooling and saponification effect</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Complies with NFPA 17A standards</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
                        whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                        <div className="h-48 bg-orange-500 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="p-4 bg-white rounded-full">
                                    <Settings className="w-12 h-12 text-orange-500" />
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-3">Water Mist Systems</h3>
                            <p className="text-gray-700 mb-4">
                                Advanced systems that use ultra-fine water droplets to suppress fires. The tiny water particles provide
                                excellent cooling and oxygen displacement while using significantly less water than traditional
                                sprinklers.
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Environmentally friendly option</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Minimal water damage to kitchen equipment</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Effective for multiple fire classifications</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Application Areas */}
            <motion.div
                className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <h2 className="text-2xl font-bold mb-6">Where Kitchen Hood Systems Are Essential</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 border border-white border-opacity-20">
                        <h3 className="text-xl font-semibold mb-3m text-orange-500">Restaurants</h3>
                        <p className="text-orange-400 mb-4">
                            From fast food to fine dining, all commercial kitchens with cooking equipment that produces grease-laden
                            vapors require proper fire suppression systems.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <CheckCircle className="w-5 h-5 mr-2 text-orange-400" />
                                <span className="text-orange-400">Cooking lines with fryers, grills, and ranges</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="w-5 h-5 mr-2 text-orange-400" />
                                <span className="text-orange-400">Wok stations and charbroilers</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 border border-white border-opacity-20">
                        <h3 className="text-xl font-semibold mb-3 text-orange-500">Institutional Kitchens</h3>
                        <p className="text-orange-400 mb-4">
                            Large-scale food preparation facilities serving schools, hospitals, corporate cafeterias, and other
                            institutions.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <CheckCircle className="w-5 h-5 mr-2 text-orange-400" />
                                <span className="text-orange-400">High-volume cooking equipment</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="w-5 h-5 mr-2 text-orange-400" />
                                <span className="text-orange-400">Multiple cooking lines and stations</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 border border-white border-opacity-20">
                        <h3 className="text-xl font-semibold mb-3 text-orange-500">Food Service Venues</h3>
                        <p className="text-orange-400 mb-4">
                            Any location where commercial cooking takes place, including food courts, stadiums, and event centers.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <CheckCircle className="w-5 h-5 mr-2 text-orange-400" />
                                <span className="text-orange-400">Concession stands and food kiosks</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="w-5 h-5 mr-2 text-orange-400" />
                                <span className="text-orange-400">Mobile food preparation units</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Benefits Section */}
            <motion.div
                className="bg-white rounded-xl shadow-md p-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-2 text-orange-500" />
                    Key Benefits of Our Kitchen Hood Systems
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="p-2 bg-orange-100 text-orange-500 rounded-lg mr-3 flex-shrink-0">
                                <ShieldAlert className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">Enhanced Safety</h3>
                                <p className="text-gray-700">
                                    Rapid detection and suppression of fires before they can spread, protecting both people and property.
                                    Our systems are designed to respond within seconds of fire detection.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="p-2 bg-orange-100 text-orange-500 rounded-lg mr-3 flex-shrink-0">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">Business Continuity</h3>
                                <p className="text-gray-700">
                                    Minimizes damage and downtime in the event of a fire. Quick suppression means less damage to equipment
                                    and structure, allowing for faster cleanup and return to operations.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="p-2 bg-orange-100 text-orange-500 rounded-lg mr-3 flex-shrink-0">
                                <Settings className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">Automatic Operation</h3>
                                <p className="text-gray-700">
                                    Systems work 24/7, even when the kitchen is unattended. Automatic detection and activation ensures
                                    protection at all times, regardless of staff presence.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="p-2 bg-orange-100 text-orange-500 rounded-lg mr-3 flex-shrink-0">
                                <AlertTriangle className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">Regulatory Compliance</h3>
                                <p className="text-gray-700">
                                    Meets or exceeds all local fire codes and insurance requirements. Our systems are designed to comply
                                    with NFPA 96, UL 300 standards, and UAE Civil Defense regulations.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="p-2 bg-orange-100 text-orange-500 rounded-lg mr-3 flex-shrink-0">
                                <Flame className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">Specialized Protection</h3>
                                <p className="text-gray-700">
                                    Specifically designed for the unique hazards of commercial kitchens. Our systems are engineered to
                                    combat high-temperature grease fires that conventional systems cannot handle effectively.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="p-2 bg-orange-100 text-orange-500 rounded-lg mr-3 flex-shrink-0">
                                <Info className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">Comprehensive Coverage</h3>
                                <p className="text-gray-700">
                                    Protects the entire cooking area, including appliances, hood, and ductwork. Our systems provide
                                    complete protection for all potential fire sources in the kitchen environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
                className="bg-white rounded-xl shadow-md p-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <h2 className="text-xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                                onClick={() => toggleFaq(index)}
                            >
                                <span className="font-semibold text-gray-800">{faq.question}</span>
                                <span className="text-orange-500">
                                    {openFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                </span>
                            </button>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: openFaq === index ? "auto" : 0,
                                    opacity: openFaq === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="p-4 bg-white border-t border-gray-200">
                                    <p className="text-gray-700">{faq.answer}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Installation Process */}
            <motion.div
                className="bg-white rounded-xl shadow-md p-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <h2 className="text-xl font-bold text-gray-800 mb-6">Our Installation Process</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-5">
                        <div className="flex items-start">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-semibold flex-shrink-0 mr-4">
                                1
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">Site Assessment</h3>
                                <p className="text-gray-700">
                                    Our technicians evaluate your kitchen layout, cooking equipment, and ventilation system to determine
                                    the appropriate system design.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-semibold flex-shrink-0 mr-4">
                                2
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">Custom System Design</h3>
                                <p className="text-gray-700">
                                    We create a tailored system design that meets your specific needs and complies with all applicable
                                    codes and standards.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-semibold flex-shrink-0 mr-4">
                                3
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">Professional Installation</h3>
                                <p className="text-gray-700">
                                    Our certified technicians install all system components according to manufacturer specifications and
                                    industry best practices.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div className="flex items-start">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-semibold flex-shrink-0 mr-4">
                                4
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">Testing & Commissioning</h3>
                                <p className="text-gray-700">
                                    We thoroughly test all system components to ensure proper operation and compliance with regulatory
                                    requirements.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-semibold flex-shrink-0 mr-4">
                                5
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">Staff Training</h3>
                                <p className="text-gray-700">
                                    We provide comprehensive training for your kitchen staff on system operation, manual activation
                                    procedures, and basic maintenance.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-semibold flex-shrink-0 mr-4">
                                6
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">Ongoing Maintenance</h3>
                                <p className="text-gray-700">
                                    We offer regular inspection and maintenance services to ensure your system remains in optimal working
                                    condition.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
                className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.3)" }}
            >
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">Protect Your Commercial Kitchen</h3>
                        <p className="text-orange-100">
                            Contact us today to schedule a consultation and learn how our kitchen hood fire suppression systems can
                            safeguard your business.
                        </p>
                    </div>
                    <motion.button
                        className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-lg flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Request a Quote
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.button>
                </div>
            </motion.div>
        </div>
    )
}

export default KitchenHoodSystem

