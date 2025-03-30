"use client"

import { useState } from "react"

const tabs = [
  { id: "design", label: "Design" },
  { id: "installation", label: "Installation" },
  { id: "implementation", label: "Implementation" },
  { id: "maintenance", label: "Maintenance" },
]

const tabContent = {
  design: [
    {
      id: "c1",
      title: "Fire System Design",
      description: "Specialized in designing fire systems with advanced safety protocols.",
      image:
        "https://images.pexels.com/photos/30788050/pexels-photo-30788050/free-photo-of-firefighter-tackles-intense-car-blaze-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "c2",
      title: "Safety System Design",
      description: "Expert safety system design with modern compliance standards.",
      image:
        "https://images.pexels.com/photos/29379358/pexels-photo-29379358/free-photo-of-portrait-of-female-firefighter-in-gear.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "c3",
      title: "Security System Design",
      description: "Comprehensive security system design and architecture.",
      image:
        "https://images.pexels.com/photos/18299007/pexels-photo-18299007/free-photo-of-silhouette-of-a-fireman-with-a-fire-behind-his-back.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "c4",
      title: "Innovative Architecture",
      description: "Creating cutting-edge architectural solutions.",
      image:
        "https://images.pexels.com/photos/29904329/pexels-photo-29904329/free-photo-of-fire-station-with-emergency-vehicles-in-houston.jpeg?auto=compress&cs=tinysrgb&w=600",
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
}

// Related content for design section
const relatedContent = {
  design: [
    {
      title: "Fire Safety Compliance",
      description: "Our fire system designs meet all international safety standards and local regulations.",
      icon: "🔥",
    },
    {
      title: "Advanced Detection Systems",
      description: "Early warning systems with smart sensors and AI-powered detection algorithms.",
      icon: "🔍",
    },
    {
      title: "Emergency Response Planning",
      description: "Comprehensive emergency protocols integrated with building management systems.",
      icon: "🚨",
    },
  ],
  installation: [
    {
      title: "Professional Installation Team",
      description: "Certified technicians with years of experience in safety system installation.",
      icon: "👷",
    },
    {
      title: "Minimal Disruption",
      description: "Our installation process is designed to minimize impact on your daily operations.",
      icon: "⚙️",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and quality control for all installed systems.",
      icon: "✓",
    },
  ],
  implementation: [
    {
      title: "Seamless Integration",
      description: "Our systems integrate with your existing infrastructure without compatibility issues.",
      icon: "🔄",
    },
    {
      title: "User Training",
      description: "Comprehensive training for your staff on system operation and management.",
      icon: "👥",
    },
    {
      title: "Documentation",
      description: "Detailed documentation and manuals for all implemented systems.",
      icon: "📋",
    },
  ],
  maintenance: [
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and emergency assistance.",
      icon: "🕒",
    },
    {
      title: "Preventive Maintenance",
      description: "Regular check-ups to prevent system failures before they occur.",
      icon: "🔧",
    },
    {
      title: "System Updates",
      description: "Regular software and firmware updates to keep your systems current.",
      icon: "🔄",
    },
  ],
}

export default function ServiceDetails() {
  const [activeTab, setActiveTab] = useState("design")
  const [selected, setSelected] = useState("c1")

  return (
    <div className="relative min-h-screen bg-[#020817] overflow-x-hidden">
      <div className="mx-auto px-4 py-8 md:py-16">
        <h2 className="text-center text-3xl md:text-4xl lg:text-[48px] font-bold text-white">
          Service <span className="text-[#00A3FF]">Details</span>
        </h2>
        <p className="mt-2 text-sm md:text-md text-center text-gray-400">Find our service which matches you</p>

        {/* Tabs - Responsive with flex-wrap */}
        <div className="mx-auto mt-6 md:mt-10 mb-6 md:mb-10 flex flex-wrap justify-center gap-2 md:gap-0 md:justify-between rounded-full md:rounded-full bg-transparent md:bg-gray-800/50 p-2 max-w-4xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full font-medium px-4 py-2 text-sm md:text-base lg:text-lg transition-all ${
                activeTab === tab.id
                  ? "bg-white text-black"
                  : "bg-gray-800/50 md:bg-transparent text-gray-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Slider - Desktop/Tablet view with 4 cards and gaps */}
        <div className="flex flex-col items-center justify-center w-full mt-6 md:mt-10">
          <div className="hidden md:flex justify-center w-full max-w-6xl">
            <div className="flex justify-center items-center gap-4 h-[410px] w-full">
              {tabContent[activeTab].map((card) => (
                <div
                  key={card.id}
                  onClick={() => setSelected(card.id)}
                  className={`relative h-[410px] rounded-xl cursor-pointer shadow-lg transition-all duration-500 ease-in-out overflow-hidden ${
                    selected === card.id ? "w-[38%]" : "w-[18%]"
                  }`}
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {selected === card.id ? (
                    <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent">
                      <h4 className="text-white uppercase text-lg font-bold">{card.title}</h4>
                      <p className="text-gray-300 text-sm mt-2">{card.description}</p>
                    </div>
                  ) : (
                    <div className="absolute top-3 left-3 bg-white p-2 rounded-md text-black font-semibold text-sm">
                      {card.title.split(" ")[0]}
                    </div>
                  )}

                  {selected !== card.id && (
                    <button
                      className="absolute bottom-3 left-2 bg-white p-2 px-3 rounded-xl"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelected(card.id)
                      }}
                    >
                      ➝
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile view - stacked cards */}
          <div className="md:hidden w-full">
            <div className="grid grid-cols-1 gap-4">
              {tabContent[activeTab].map((card) => (
                <div
                  key={card.id}
                  className={`relative rounded-xl cursor-pointer shadow-lg overflow-hidden ${
                    selected === card.id ? "h-[280px]" : "h-[120px]"
                  }`}
                  onClick={() => setSelected(card.id)}
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className={`absolute inset-0 p-3 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent`}
                  >
                    <h4 className="text-white uppercase text-base font-bold">{card.title}</h4>
                    {selected === card.id && <p className="text-gray-300 text-xs mt-1">{card.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Content Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Related <span className="text-[#00A3FF]">Information</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedContent[activeTab].map((item, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-5 hover:bg-gray-700/50 transition-all">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-white text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

