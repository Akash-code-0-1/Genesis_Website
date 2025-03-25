"use client"

import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Search, MapPin, Calendar, Clock, ChevronDown, ChevronUp, Upload, Send } from "lucide-react"

const CareerPage = () => {
    const [expandedJob, setExpandedJob] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null)
    const fileInputRef = useRef(null)

    const toggleJobExpand = (index) => {
        if (expandedJob === index) {
            setExpandedJob(null)
        } else {
            setExpandedJob(index)
        }
    }

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setSelectedFile(e.target.files[0].name)
        }
    }

    const handleUploadClick = () => {
        fileInputRef.current.click()
    }

    const jobListings = [
        {
            id: 1,
            title: "FIRE ALARM TECHNICIAN",
            date: "06/24/2023",
            location: "Dubai, Sharjah",
            type: "Full Time",
            description:
                "With 2+ yrs UAE exp. Candidates should have experience in the same field, possess good communication skills & able to join immediately.",
        },
        {
            id: 2,
            title: "FIRE PUMP TECHNICIAN",
            date: "06/22/2023",
            location: "Dubai",
            type: "Full Time",
            description:
                "With 2+ yrs UAE exp. Candidates should have experience in the same field, possess good communication skills & able to join immediately.",
        },
        {
            id: 3,
            title: "FIRE FIGHTING TECHNICIAN",
            date: "05/18/2023",
            location: "Dubai, Sharjah",
            type: "Full Time",
            description:
                "With 2+ yrs UAE exp. Candidates should have experience in the same field, possess good communication skills & able to join immediately.",
        },
        {
            id: 4,
            title: "SALES EXECUTIVE",
            date: "04/30/2023",
            location: "Dubai",
            type: "Full Time",
            description:
                "With 2+ yrs UAE exp. Candidates should have exp. in fire alarm and fire fighting (mandatory), possess good communication skills & able to join immediately.",
        },
        {
            id: 5,
            title: "TELESALES CUM SALES CO-ORDINATOR (Female)",
            date: "04/28/2023",
            location: "Dubai",
            type: "Full Time",
            description:
                "Candidates should have exp. in the same role (mandatory), possess good communication skills & able to join immediately.",
        },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Header */}
            <header className="w-full h-[250px] bg-blue-500 py-6 px-8 shadow-lg flex items-center justify-center">
                <h1 className="text-white text-3xl font-bold text-center">Careers</h1>
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                {/* Navigation */}
                
                {/* <div className="container mx-auto px-8 py-4 max-w-7xl">
                    <div className="flex items-center gap-2 text-sm">
                        <Link to="/" className="text-blue-500">
                            Home
                        </Link>
                        <span>/</span>
                        <span className="text-gray-600">Careers</span>
                    </div>
                </div> */}

                {/* Search Section */}
                <section className="container mx-auto px-8 py-6 max-w-7xl">
                    <motion.div
                        className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-grow">
                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={18} />
                                <input
                                    type="text"
                                    placeholder="City, State or Zip Code"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="relative flex-grow">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={18} />
                                <input
                                    type="text"
                                    placeholder="Job Title"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="relative flex-grow">
                                <select className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="">Category</option>
                                    <option value="technical">Technical</option>
                                    <option value="sales">Sales</option>
                                    <option value="administrative">Administrative</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={18} />
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors duration-300 whitespace-nowrap font-medium shadow-md">
                                Find Jobs
                            </button>
                        </div>
                    </motion.div>
                </section>

                {/* Job Listings */}
                <section className="container mx-auto px-8 py-8 max-w-7xl">
                    <div className="space-y-8">
                        {jobListings.map((job, index) => (
                            <motion.div
                                key={job.id}
                                className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-md"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
                            >
                                <div className="border-b border-gray-100">
                                    <div className="p-8">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h2 className="text-xl font-bold text-blue-500 mb-3">{job.title}</h2>
                                                <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                                                    <div className="flex items-center">
                                                        <Calendar className="mr-2 text-blue-400" size={16} />
                                                        <span>{job.date}</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <MapPin className="mr-2 text-blue-400" size={16} />
                                                        <span>{job.location}</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Clock className="mr-2 text-blue-400" size={16} />
                                                        <span>{job.type}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => toggleJobExpand(index)}
                                                className="text-blue-400 hover:text-blue-600 bg-blue-50 p-2 rounded-full"
                                            >
                                                {expandedJob === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                            </button>
                                        </div>

                                        <div className="mt-5">
                                            <p className="text-gray-700">{job.description}</p>
                                        </div>

                                        <motion.div
                                            className="mt-6"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: expandedJob === index ? "auto" : 0,
                                                opacity: expandedJob === index ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="pt-4 border-t border-gray-100">
                                                <h3 className="font-semibold text-gray-800 mb-3">Requirements:</h3>
                                                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2">
                                                    <li>Minimum 2+ years of experience in UAE</li>
                                                    <li>Experience in fire safety systems installation and maintenance</li>
                                                    <li>Knowledge of local safety codes and regulations</li>
                                                    <li>Valid UAE driving license</li>
                                                    <li>Excellent communication skills in English</li>
                                                </ul>
                                            </div>

                                            <div className="pt-5">
                                                <h3 className="font-semibold text-gray-800 mb-3">Benefits:</h3>
                                                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2">
                                                    <li>Competitive salary package</li>
                                                    <li>Medical insurance</li>
                                                    <li>Transportation allowance</li>
                                                    <li>Annual leave as per UAE labor law</li>
                                                    <li>Career growth opportunities</li>
                                                </ul>
                                            </div>
                                        </motion.div>

                                        <div className="mt-6">
                                            <motion.button
                                                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors duration-300 font-medium shadow-md"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Apply
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Application Form */}
                <section className="container mx-auto px-8 py-12 mb-16 max-w-7xl">
                    <motion.div
                        className="bg-white p-10 rounded-xl shadow-xl border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold text-blue-500 mb-8 text-center">Apply for a Position</h2>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your Phone Number"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                                        Desired Position
                                    </label>
                                    <select
                                        id="position"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select Job</option>
                                        {jobListings.map((job) => (
                                            <option key={job.id} value={job.title}>
                                                {job.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                                    Upload CV
                                </label>
                                <div
                                    className="flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                                    onClick={handleUploadClick}
                                >
                                    <span className="text-gray-500">{selectedFile || "No file chosen"}</span>
                                    <button
                                        type="button"
                                        className="bg-blue-100 hover:bg-blue-200 text-blue-500 px-4 py-2 rounded-lg flex items-center font-medium"
                                    >
                                        <Upload size={16} className="mr-2" />
                                        Browse
                                    </button>
                                    <input
                                        type="file"
                                        id="resume"
                                        ref={fileInputRef}
                                        className="hidden"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Cover Letter/Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Tell us why you're a good fit for this position..."
                                ></textarea>
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="text-gray-700">
                                        I agree to the{" "}
                                        <a href="#" className="text-blue-500 hover:underline">
                                            Terms and Conditions
                                        </a>{" "}
                                        and{" "}
                                        <a href="#" className="text-blue-500 hover:underline">
                                            Privacy Policy
                                        </a>
                                    </label>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                                    <div className="flex items-center">
                                        <input
                                            id="recaptcha"
                                            type="checkbox"
                                            className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500 mr-2"
                                        />
                                        <label htmlFor="recaptcha" className="text-gray-700 text-sm">
                                            I'm not a robot
                                        </label>
                                    </div>
                                    <div className="mt-2 flex justify-center">
                                        <img src="/placeholder.svg?height=40&width=40" alt="reCAPTCHA logo" className="h-10" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <motion.button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-3 rounded-lg transition-colors duration-300 flex items-center font-medium shadow-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Send size={18} className="mr-2" />
                                    Submit Application
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </section>
            </main>
        </div>
    )
}

export default CareerPage;

