import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react"

export default function CaseStudySection() {
  const caseStudies = [
    {
      id: "01",
      title: "Fire Safety for a Power Station",
      description: "Tailored safety solutions compliant with global standards.",
    },
    {
      id: "02",
      title: "Integrated Security for a Govt Embassy",
      description: "Professional setup of fire alarms, CCTV, access control, and more.",
    },
    {
      id: "03",
      title: "Queue Management for a Leading Bank",
      description: "Reliable access to ports and repair services.",
    },
    {
      id: "04",
      title: "Data Center Protection for a Company",
      description: "Ongoing support and maintenance to ensure lasting reliability.",
    },
  ]

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-1">
          Our <span className="text-blue-500">Case Study</span>
        </h2>
        <p className="text-gray-600">Our feature-rich product</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((study) => (
          <div key={study.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-blue-500 mb-2">{study.id}</div>
            <h3 className="text-lg font-semibold mb-2">{study.title}</h3>
            <ul className="mb-4">
              <li className="flex items-start">
                <span className="text-gray-700 mr-2">•</span>
                <span>{study.description}</span>
              </li>
            </ul>
            <Link href="#" className="inline-flex items-center text-blue-500 hover:text-blue-700">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          href="#"
          className="bg-blue-500 text-white px-6 py-2 rounded-md flex items-center hover:bg-blue-600 transition-colors"
        >
          See More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

