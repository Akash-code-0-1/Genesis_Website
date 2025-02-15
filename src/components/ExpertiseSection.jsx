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
                src="https://s3-alpha-sig.figma.com/img/52c5/796b/77e750a0a1ddd2ca298d9c01499a5dda?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=S~2YI5HZ5LHY9Kkw9gLpi84I7ZhgyfHfL7xTMF9B9v--VP0MZwxoiSDXimczRmecT~Mku1blouev-0Aj0fspU6SFjAElTrQ-qdCLdHtJls-BK7hzQb~ztfK3pLCP1Pi8EhCWTYNQdA0UIIVHOFEyvWlIS1hTNZrlYByA~GyY67RiXH~7vc46TR6uqWmWKiWRrUjjqD6r~Nu8Annw3qMWOXOB~GBuYsuuD0ezLL62JsfnGPZLtOZJHQxED9OBIS7ffe8jJVSvAfMhiIF4j6nVrbEnUQdM2EYKqJdslXQjQsKJa2kC-AUw8A5H6XCTQ2OX2E~mi-~GOYkZvs4lYJCOIg__"
                alt="Fire safety equipment"
                className="rounded-lg h-full w-full object-cover border-[#DADADA] border-3 "
              />
              <div className="absolute bottom-10 left-7 md:left-1 xl:bottom-40 lg:left-30 xl:left-50 2xl:left-60 lg:right-[-15%]  bg-sky-400 text-black font-sm text-2xl px-15  py-5 rounded-2xl flex items-center gap-2 border-white border-2">
                <img src="https://s3-alpha-sig.figma.com/img/8469/2889/de13a1f5cc80356d464d915c62c4bda8?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sSIZ~IerBqiAum-nwWVP8DMIpt08-IEwtgwPr~vS6Kk9LF2IGjk5hr0op3shuPzUVm56m0FSgDgBLWlWfedZ0~Dc0Ce5SCX9uyx2H~lFIBtH4lNsD5MUsBEEmiw3Um2Hu5J~pJLpDAbLNouSNEdY-IlwbqofDEZXZSxCKAIMrqpqDSAA~3ElU9HaGNNzl6TJHf2Ah5HIqrX4z7euHaXVZ3e157sPBZVNu0uUi9lgC6DN0QHzi-iPWBrFgzc4xIrC7eJL5y0Hiu9lgsM1b~b9ahttzEwVCLJCVrB1R474tkjwCj~Al41CvNNJBOQ7qcPPWHoCsJzLWdOYaVXs3XmI0w__" alt="" className="size-8" />
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
                    <span className="text-sky-400 mt-1"><img src="https://s3-alpha-sig.figma.com/img/4d5d/94c6/5e3677c9d95fcccc099a50a3ca71775a?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OkETxGtbVCieJmVLYqS9Y2CNEOd-AtTJxFrK609ZL92LcfOUN8LEATWX3AZf91tgGbHw05JCRE3AYrRdd79A9pG0~c~285bwyJ3O7poraKDKZ~lp-qECikbFR6EALxHyAJ5d6LXKNoZx9TaVzN5xAVI1ChsCPAElKt2ssgAFB8VOJndIMJh5jAM7wZRs9U7hCM4Rdh3OqGD-hssDpmCEKjDPPXP4phd0a13Xi-SdXLP7a-cyt7x260jx9G2fn~fB5qyPXWDIgIIoVSBeNiXnnaJOQ91-e-SgPdvIgeb3XCzwy-~XYYJP7HtPGTf3RM750Jq4eHf8lSJOQJhInz75iw__" alt="" className="size-5"/></span>
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
  
  