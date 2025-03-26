"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Calendar,
  Clock,
  ChevronRight,
  Search,
  ArrowRight,
  Mail,
  Share2,
  MessageCircle,
  Eye,
  Bookmark,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [visibleArticles, setVisibleArticles] = useState(6)
  const [expandedArticle, setExpandedArticle] = useState(null)
  const [email, setEmail] = useState("")

  // Categories for filtering
  const categories = [
    { id: "all", name: "All News" },
    { id: "company", name: "Company Updates" },
    { id: "industry", name: "Industry News" },
    { id: "safety", name: "Safety Tips" },
    { id: "events", name: "Events" },
    { id: "technology", name: "Technology" },
  ]

  // Featured news article
  const featuredArticle = {
    id: 1,
    title: "Genesis Launches New Advanced Fire Detection System",
    category: "technology",
    date: "August 15, 2023",
    readTime: "5 min read",
    image: "/placeholder.svg?height=600&width=1200",
    excerpt:
      "Genesis has unveiled its latest fire detection technology that uses AI to predict potential fire hazards before they occur, revolutionizing the fire safety industry.",
    content:
      'Genesis has unveiled its latest fire detection technology that uses artificial intelligence to predict potential fire hazards before they occur, revolutionizing the fire safety industry. The new system, called FirePredict AI, combines thermal imaging, smoke particle analysis, and machine learning algorithms to detect abnormal heat patterns and environmental changes that could lead to fires.\n\nDuring the product launch event, Genesis CEO demonstrated how the system can identify risk factors up to 30 minutes before a traditional fire alarm would be triggered, giving building occupants and emergency services crucial extra time to respond.\n\n"This technology represents a paradigm shift in how we approach fire safety," said the CEO. "Instead of simply reacting to fires, we can now prevent them from happening in the first place."\n\nThe FirePredict AI system has already been installed in several high-profile commercial buildings across the UAE, with plans for residential applications in the coming year. Initial data shows a 78% reduction in false alarms and a significant improvement in early detection rates compared to conventional systems.\n\nIndustry experts have praised the innovation, with the International Fire Safety Association calling it "one of the most significant advancements in fire protection technology in the past decade."',
    author: "Sarah Johnson",
    authorImage: "/placeholder.svg?height=100&width=100",
    comments: 24,
    views: 1256,
  }

  // News articles
  const allArticles = [
    {
      id: 2,
      title: "5 Essential Fire Safety Tips for Office Buildings",
      category: "safety",
      date: "July 28, 2023",
      readTime: "4 min read",
      image: "/placeholder.svg?height=400&width=600",
      excerpt:
        "Ensure your workplace is protected with these critical fire safety measures that every office building should implement.",
      content:
        "Fire safety in office buildings is not just about compliance—it's about protecting lives and assets. Here are five essential tips that every office building should implement:\n\n1. Regular Fire Drill Practice: Schedule fire drills at least quarterly to ensure all employees know evacuation routes and assembly points. Document these drills and address any issues that arise.\n\n2. Proper Fire Extinguisher Placement: Fire extinguishers should be placed every 75 feet in accessible locations. Ensure they're regularly inspected and staff are trained on how to use them correctly.\n\n3. Clear Emergency Exits: All emergency exits must remain unobstructed at all times. Exit signs should be illuminated and visible from all areas.\n\n4. Updated Fire Detection Systems: Modern fire detection systems can detect smoke, heat, and carbon monoxide. Ensure your system is regularly maintained and tested.\n\n5. Designated Fire Wardens: Appoint and train fire wardens for each area of your building who can lead evacuation efforts and perform headcounts at assembly points.\n\nImplementing these measures not only helps comply with regulations but creates a safer environment for everyone in the building.",
      author: "Michael Chen",
      authorImage: "/placeholder.svg?height=100&width=100",
      comments: 18,
      views: 842,
    },
    {
      id: 3,
      title: "Genesis Awarded UAE Safety Excellence Certificate",
      category: "company",
      date: "July 15, 2023",
      readTime: "3 min read",
      image: "/placeholder.svg?height=400&width=600",
      excerpt:
        "Our company has been recognized for outstanding commitment to safety standards and innovative fire protection solutions.",
      content:
        'Genesis is proud to announce that we have been awarded the prestigious UAE Safety Excellence Certificate in recognition of our outstanding commitment to safety standards and innovative fire protection solutions.\n\nThe certificate, presented by the UAE Civil Defense Authority, acknowledges companies that demonstrate exceptional dedication to advancing safety practices and technologies in the region.\n\n"This recognition reflects our team\'s tireless efforts to raise the bar for fire safety in the UAE," said our CEO during the award ceremony. "We\'re committed to not just meeting standards, but exceeding them."\n\nThe evaluation process included rigorous assessment of our training programs, quality of installations, customer satisfaction, and technological innovation. Genesis scored particularly high in the innovation category, thanks to our recent developments in smart fire detection systems.\n\nThis achievement adds to our growing list of accolades and reinforces our position as a leader in the fire safety industry across the UAE and beyond.',
      author: "Ahmed Al-Mansouri",
      authorImage: "/placeholder.svg?height=100&width=100",
      comments: 7,
      views: 523,
    },
    {
      id: 4,
      title: "New Fire Safety Regulations Coming in 2024",
      category: "industry",
      date: "June 30, 2023",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600",
      excerpt:
        "Upcoming changes to UAE fire safety codes will impact building design, materials, and inspection requirements starting next year.",
      content:
        'The UAE Civil Defense Authority has announced significant updates to fire safety regulations that will take effect in January 2024. These changes will impact building design, materials, and inspection requirements across the country.\n\nKey changes include:\n\n• Stricter requirements for facade materials on high-rise buildings\n• Mandatory installation of smart fire detection systems in all new commercial constructions\n• Enhanced sprinkler system specifications for buildings over 15 floors\n• More frequent inspection schedules for buildings in high-density areas\n• New certification requirements for fire safety professionals\n\n"These updated regulations reflect our commitment to implementing the latest advancements in fire safety technology and practices," said Colonel Ibrahim Al Hashmi, Director of the Civil Defense Authority.\n\nBuilding owners will have a 12-month grace period to comply with the new regulations, with full enforcement beginning in January 2025. Penalties for non-compliance will include fines and potential building use restrictions.\n\nGenesis is already preparing to help clients navigate these changes with compliance assessment services and system upgrade solutions that meet the new standards.',
      author: "Fatima Al-Zaabi",
      authorImage: "/placeholder.svg?height=100&width=100",
      comments: 32,
      views: 1876,
    },
    {
      id: 5,
      title: "Genesis to Host Annual Fire Safety Conference",
      category: "events",
      date: "June 15, 2023",
      readTime: "2 min read",
      image: "/placeholder.svg?height=400&width=600",
      excerpt:
        "Join us for the region's premier fire safety event featuring expert speakers, product demonstrations, and networking opportunities.",
      content:
        'Genesis is proud to announce our Annual Fire Safety Conference, scheduled for September 12-14, 2023, at the Grand Hyatt Dubai. This three-day event brings together industry experts, regulatory officials, and safety professionals from across the Middle East.\n\nThis year\'s theme, "Innovation in Fire Protection," will explore cutting-edge technologies and strategies that are shaping the future of fire safety.\n\nHighlights include:\n\n• Keynote address by Dr. James Rodriguez, President of the International Fire Safety Association\n• Panel discussions on AI in fire detection and prevention\n• Hands-on workshops for fire safety professionals\n• Exhibition area featuring the latest products and solutions\n• Networking events including a gala dinner\n\n"Our annual conference has become a must-attend event for anyone serious about advancing fire safety in the region," said our Events Director. "It\'s a unique opportunity to learn from global experts and connect with peers."\n\nEarly bird registration is now open with special rates available until July 31. For more information or to register, visit our conference website or contact our events team.',
      author: "Ravi Patel",
      authorImage: "/placeholder.svg?height=100&width=100",
      comments: 5,
      views: 412,
    },
    {
      id: 6,
      title: "How IoT is Transforming Fire Safety Systems",
      category: "technology",
      date: "May 25, 2023",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600",
      excerpt:
        "Smart, connected fire safety systems are providing unprecedented levels of protection and data-driven insights for building managers.",
      content:
        'The Internet of Things (IoT) is revolutionizing fire safety systems, creating smarter, more responsive protection for buildings of all types. These connected systems are providing unprecedented levels of protection and data-driven insights for building managers.\n\nTraditional fire alarm systems operate in isolation, triggering only when smoke or heat is detected. In contrast, IoT-enabled systems create a network of sensors that continuously monitor environmental conditions and communicate with each other.\n\nKey advantages include:\n\n• Real-time monitoring and alerts accessible from anywhere\n• Predictive maintenance that identifies potential issues before failures occur\n• Integration with building management systems for coordinated emergency responses\n• Data analytics that improve system performance over time\n• Remote testing capabilities that reduce maintenance costs\n\n"The shift from reactive to proactive fire protection is a game-changer," explains our Chief Technology Officer. "We\'re not just detecting fires faster—we\'re helping prevent them altogether."\n\nGenesis has been at the forefront of this technological revolution, implementing IoT fire safety solutions in several landmark projects across the UAE. Our SmartConnect system, which integrates fire detection with building automation, has shown a 40% improvement in response times during emergency situations.\n\nAs costs decrease and technology improves, we expect to see widespread adoption of IoT fire safety systems in both commercial and residential applications over the next five years.',
      author: "David Wilson",
      authorImage: "/placeholder.svg?height=100&width=100",
      comments: 15,
      views: 927,
    },
    {
      id: 7,
      title: "Genesis Completes Major Airport Fire System Upgrade",
      category: "company",
      date: "May 10, 2023",
      readTime: "4 min read",
      image: "/placeholder.svg?height=400&width=600",
      excerpt:
        "Our team has successfully implemented a comprehensive fire safety overhaul at one of the region's busiest international airports.",
      content:
        "Genesis has successfully completed a major fire system upgrade at one of the region's busiest international airports. The project, which spanned 18 months, involved a comprehensive overhaul of the facility's fire detection and suppression systems while maintaining normal airport operations.\n\nThe upgrade included:\n\n• Installation of over 12,000 advanced smoke and heat detectors\n• Implementation of a new central monitoring station with redundant backup systems\n• Upgrade of sprinkler systems throughout terminal buildings and hangars\n• Integration with the airport's emergency response protocols\n• Training for over 200 airport staff members\n\n\"The complexity of this project cannot be overstated,\" said our Project Director. \"Airports present unique challenges due to their size, continuous operation, and the critical nature of their infrastructure.\"\n\nThe new system features zone-specific detection that can pinpoint the exact location of a potential fire, significantly reducing response times. It also includes specialized solutions for sensitive areas such as fuel storage facilities and data centers.\n\nAirport authorities have reported that the upgrade has already prevented two potential incidents through early detection of electrical issues that could have escalated into fire emergencies.\n\nThis successful implementation adds to Genesis's portfolio of high-profile projects and demonstrates our capability to handle complex fire safety challenges in critical infrastructure settings.",
      author: "Lisa Thompson",
      authorImage: "/placeholder.svg?height=100&width=100",
      comments: 9,
      views: 631,
    },
    {
      id: 8,
      title: "Understanding Fire Ratings for Commercial Doors",
      category: "safety",
      date: "April 22, 2023",
      readTime: "5 min read",
      image: "/placeholder.svg?height=400&width=600",
      excerpt:
        "Learn about the different fire rating classifications for commercial doors and why they're crucial for building safety compliance.",
      content:
        'Fire-rated doors are a critical component of any building\'s passive fire protection system, designed to prevent the spread of fire and smoke between compartments. Understanding the different rating classifications is essential for ensuring proper building safety compliance.\n\nFire door ratings indicate how long the door can withstand fire conditions during standardized tests. Common ratings include:\n\n• 20-minute: Typically used for smoke barriers and in corridors\n• 45-minute: Common for stairwells and corridors in commercial buildings\n• 60-minute: Used for enclosures around vertical openings and exit stairwells\n• 90-minute: Required for exit enclosures and openings in 2-hour rated walls\n• 3-hour: Used for openings in fire walls that separate buildings or fire divisions\n\nBeyond the door itself, the entire assembly—including frame, hardware, and glazing—must maintain the same rating. All components must be certified and labeled by an approved testing agency.\n\n"Many building owners don\'t realize that modifying a fire door, even by changing hardware, can void its rating," explains our Fire Safety Consultant. "Regular inspection and maintenance are also required to ensure ongoing compliance."\n\nProper installation is equally important. Even the highest-rated door will fail to perform if gaps exceed allowable tolerances or if self-closing mechanisms aren\'t functioning correctly.\n\nGenesis offers comprehensive fire door inspection services to help building owners maintain compliance with UAE fire safety regulations and ensure these critical safety components will perform as expected during an emergency.',
      author: "Omar Al-Farsi",
      authorImage: "/placeholder.svg?height=100&width=100",
      comments: 11,
      views: 745,
    },
    {
      id: 9,
      title: "Genesis Partners with Local Schools for Fire Safety Education",
      category: "company",
      date: "April 5, 2023",
      readTime: "3 min read",
      image: "/placeholder.svg?height=400&width=600",
      excerpt:
        "Our new community initiative brings interactive fire safety training to elementary schools across Dubai and Abu Dhabi.",
      content:
        'Genesis is proud to announce the launch of our new community initiative that brings interactive fire safety training to elementary schools across Dubai and Abu Dhabi. The program, called "Fire Safety Heroes," aims to educate children about fire prevention and emergency response in an engaging, age-appropriate way.\n\nDeveloped in collaboration with educational experts and fire safety professionals, the program includes:\n\n• Interactive presentations with demonstrations of fire safety equipment\n• Age-appropriate emergency response training\n• Take-home materials for families to create home evacuation plans\n• Fun activities that reinforce key safety concepts\n• Recognition certificates for participating students\n\n"Children who learn fire safety concepts early are more likely to practice safe behaviors throughout their lives," said our Community Outreach Coordinator. "They also become advocates for safety within their families."\n\nThe initiative has already reached over 1,500 students in its first month, with plans to expand to more schools throughout the academic year. Feedback from teachers and parents has been overwhelmingly positive, with many reporting that children are initiating safety discussions at home.\n\nThis program reflects Genesis\'s commitment to giving back to the communities we serve and promoting a culture of safety that extends beyond our professional services. Schools interested in participating can contact our community outreach team for more information.',
      author: "Priya Sharma",
      authorImage: "/placeholder.svg?height=100&width=100",
      comments: 14,
      views: 832,
    },
    {
      id: 10,
      title: "The Evolution of Fire Suppression Technologies",
      category: "technology",
      date: "March 20, 2023",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600",
      excerpt:
        "From water sprinklers to clean agents and water mist systems, fire suppression technology has advanced dramatically in recent decades.",
      content:
        'Fire suppression technology has evolved dramatically over the past few decades, moving from simple water sprinklers to sophisticated systems that can extinguish fires without damaging sensitive equipment or leaving harmful residues.\n\nThe earliest automatic fire suppression systems, developed in the late 19th century, relied exclusively on water. While effective and still widely used today, these systems aren\'t suitable for all environments, particularly those housing electrical equipment, valuable artifacts, or data centers.\n\nSignificant developments include:\n\n• Halon systems (1960s): Highly effective but discontinued due to environmental concerns\n• FM-200 and other clean agents (1990s): Fast-acting gases that leave no residue\n• Water mist systems (2000s): Using fine water droplets that cool and smother fires while using 80% less water\n• Hybrid systems (2010s): Combining water mist with nitrogen or other inert gases\n• Condensed aerosol systems: Delivering potassium-based fire suppression in a compact form\n\n"Each technology has specific applications where it excels," explains our Engineering Director. "The key is matching the right suppression method to the specific fire risks and environmental considerations."\n\nModern systems also feature more sophisticated activation mechanisms, including multi-criteria detection that can differentiate between actual fires and false triggers. This reduces costly and disruptive false discharges.\n\nGenesis specializes in designing customized fire suppression solutions that consider factors such as the value of protected assets, environmental impact, space constraints, and regulatory requirements. Our team stays at the forefront of emerging technologies to offer clients the most effective protection strategies available.',
      author: "Thomas Anderson",
      authorImage: "/placeholder.svg?height=100&width=100",
      comments: 22,
      views: 1103,
    },
  ]

  // Filter articles based on active category and search query
  const filteredArticles = allArticles.filter((article) => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Load more articles
  const loadMoreArticles = () => {
    setVisibleArticles((prev) => Math.min(prev + 3, filteredArticles.length))
  }

  // Toggle expanded article
  const toggleArticleExpand = (id) => {
    setExpandedArticle(expandedArticle === id ? null : id)
  }

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault()
    // In a real application, you would send this to your backend
    alert(`Thank you for subscribing with ${email}!`)
    setEmail("")
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full h-[250px] flex items-center justify-center bg-blue-500 py-6 px-8 shadow-lg">
        <h1 className="text-white text-3xl font-bold text-center">News & Updates</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow">

        {/* Search and Filter Section */}
        <section className="container mx-auto px-8 py-6 max-w-7xl">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={18} />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-lg transition-colors duration-300 ${activeCategory === category.id
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Featured Article */}
        <section className="container mx-auto px-8 py-6 max-w-7xl">
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="relative h-64 lg:h-full">
                <img
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  Featured
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span className="bg-blue-100 text-blue-500 px-2 py-1 rounded-md">
                    {categories.find((c) => c.id === featuredArticle.category)?.name || featuredArticle.category}
                  </span>
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{featuredArticle.title}</h2>
                <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>

                <motion.div
                  className="mb-6"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedArticle === featuredArticle.id ? "auto" : 0,
                    opacity: expandedArticle === featuredArticle.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-gray-700 space-y-4">
                    {featuredArticle.content.split("\n\n").map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center">
                    <img
                      src={featuredArticle.authorImage || "/placeholder.svg"}
                      alt={featuredArticle.author}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-800">{featuredArticle.author}</p>
                      <div className="flex text-sm text-gray-500">
                        <span className="flex items-center mr-4">
                          <Eye size={14} className="mr-1" />
                          {featuredArticle.views}
                        </span>
                        <span className="flex items-center">
                          <MessageCircle size={14} className="mr-1" />
                          {featuredArticle.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="flex justify-between items-center">
                  <motion.button
                    className="text-blue-500 hover:text-blue-700 font-medium flex items-center"
                    onClick={() => toggleArticleExpand(featuredArticle.id)}
                    whileHover={{ x: expandedArticle === featuredArticle.id ? 0 : 5 }}
                  >
                    {expandedArticle === featuredArticle.id ? (
                      <>
                        Read Less <ChevronUp size={18} className="ml-1" />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown size={18} className="ml-1" />
                      </>
                    )}
                  </motion.button>

                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                      <Share2 size={18} className="text-gray-600" />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                      <Bookmark size={18} className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* News Articles Grid */}
        <section className="container mx-auto px-8 py-8 max-w-7xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest News</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredArticles.slice(0, visibleArticles).map((article) => (
              <motion.div
                key={article.id}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="relative h-48">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-blue-100 text-blue-500 px-2 py-1 rounded-md text-xs font-medium">
                    {categories.find((c) => c.id === article.category)?.name || article.category}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {article.date}
                    </span>
                    <span className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{article.excerpt}</p>

                  <motion.div
                    className="mb-4"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedArticle === article.id ? "auto" : 0,
                      opacity: expandedArticle === article.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-gray-700 text-sm space-y-3">
                      {article.content.split("\n\n").map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center">
                      <img
                        src={article.authorImage || "/placeholder.svg"}
                        alt={article.author}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div>
                        <p className="font-medium text-sm text-gray-800">{article.author}</p>
                        <div className="flex text-xs text-gray-500">
                          <span className="flex items-center mr-3">
                            <Eye size={12} className="mr-1" />
                            {article.views}
                          </span>
                          <span className="flex items-center">
                            <MessageCircle size={12} className="mr-1" />
                            {article.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex justify-between items-center mt-auto">
                    <motion.button
                      className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center"
                      onClick={() => toggleArticleExpand(article.id)}
                      whileHover={{ x: expandedArticle === article.id ? 0 : 5 }}
                    >
                      {expandedArticle === article.id ? (
                        <>
                          Read Less <ChevronUp size={16} className="ml-1" />
                        </>
                      ) : (
                        <>
                          Read More <ChevronDown size={16} className="ml-1" />
                        </>
                      )}
                    </motion.button>

                    <div className="flex gap-1">
                      <button className="p-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                        <Share2 size={14} className="text-gray-600" />
                      </button>
                      <button className="p-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                        <Bookmark size={14} className="text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {visibleArticles < filteredArticles.length && (
            <div className="flex justify-center mt-10">
              <motion.button
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors duration-300 flex items-center font-medium shadow-md"
                onClick={loadMoreArticles}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Load More Articles
                <ArrowRight size={18} className="ml-2" />
              </motion.button>
            </div>
          )}

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <p className="text-gray-500 text-lg mb-4">No articles found matching your criteria.</p>
                <button
                  className="text-blue-500 hover:text-blue-700 font-medium"
                  onClick={() => {
                    setActiveCategory("all")
                    setSearchQuery("")
                  }}
                >
                  Clear filters
                </button>
              </motion.div>
            </div>
          )}
        </section>

        {/* Newsletter Subscription */}
        <section className="container mx-auto px-8 py-12 max-w-7xl">
          <motion.div
            className="bg-blue-500 rounded-xl p-8 md:p-12 shadow-xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Genesis</h2>
                <p className="text-blue-100 mb-6">
                  Subscribe to our newsletter to receive the latest news, safety tips, and industry updates directly to
                  your inbox.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <ChevronRight size={18} className="mr-2" />
                    <span>Monthly safety tips and best practices</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={18} className="mr-2" />
                    <span>Exclusive industry insights and trends</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={18} className="mr-2" />
                    <span>Early access to events and webinars</span>
                  </li>
                </ul>
              </div>
              <div>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={18} />
                      <input
                        type="email"
                        id="email"
                        placeholder="your.email@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacy"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="privacy" className="text-blue-100">
                        I agree to receive emails and accept the{" "}
                        <a href="#" className="text-white hover:underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-white text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Subscribe Now
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

export default NewsPage;


