import expo_icon from "../assets/images/exp_icon.png";
import bullet_icon from "../assets/images/bullet.png"

export default function ExpertiseSection() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Our <span className="text-sky-400">Expertise</span>
          </h2>
          <p className="text-muted-foreground mt-2">Explore our expertise to identify your need</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 xl:flex xl:gap-40 items-center justify-center">
          <div className="relative h-[500px] lg:w-[400px]  xl:w-[500px] xl:h-[600px] rounded-lg">
            <img
              src="https://images.pexels.com/photos/30827533/pexels-photo-30827533/free-photo-of-brave-firefighter-confronts-intense-flames.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Fire safety equipment"
              className="rounded-lg h-full w-full object-cover border-[#DADADA] border-3 "
            />
            <div className="absolute bottom-10 left-7 md:left-1 xl:bottom-40 lg:left-30 xl:left-50 2xl:left-60 lg:right-[-15%]  bg-sky-400 text-black font-sm text-2xl px-15  py-5 rounded-2xl flex items-center gap-2 border-white border-2">
              <img src={expo_icon} alt="" className="size-8" />
              Our Groundings
            </div>
          </div>





          <div className="space-y-6">
            <h3 className="text-3xl font-bold ">
              Genesis Grounding
              <div className="h-1 w-16 bg-gradient-to-r from-[#06A9EF] to-[#74D5FF] mt-2"></div>
            </h3>

            <ul className="space-y-4 text-xl">

              {[
                "Expertise in fire detection, alarm, and suppression.",
                "Security solutions for critical infrastructure & organizations.",
                "Comprehensive safety systems for accident and prevention.",
                "Customized risk management solutions against threats.",
                "Proven capability in handling large-scale, complex projects.",
                "Commitment to enhancing public safety and quality of life.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1"><img src={bullet_icon} alt="" className="size-5" /></span>
                  <span>{item}</span>
                </li>
              ))}

            </ul>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="inline-flex items-center gap-2 bg-gradient-to-b from-[#06A9EF] to-[#74D5FF] text-white px-6 py-2 rounded-md ">
                Learn More
                <span></span>
              </button>
              <button className="inline-flex items-center gap-2 border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors">
                Explore Us
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

