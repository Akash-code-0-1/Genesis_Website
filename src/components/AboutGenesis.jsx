
const AboutGenesis = () => {
    return (
        <div className="bg-white bg-[url('https://s3-alpha-sig.figma.com/img/c0d2/2edd/bcf3b50202d93c20fb2a7e5e668545f4?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bT~JclqejsToKu5D2Xy~QlfNNAdhNtofkGHgaP7p4uETqLjKlS7jalMb9pNLVwg9EErB6BpEjb73XUJb12tCgMjz3~f80deupnGZqLw~rvyACG3uyBxUwZ~ZXgiezs6wVA0sHgYH-eol7lCur4tUWxFTDzG9FaW1wpwO8wuK0QrTloVGRYo0zNy3VjRnDj33JVOItFQt3p4RYXMN09k2TLf6-2RHzPdSFB~9iGAipoD9cLb812VTCwigAYLkU8S9lYoFnKJKvuuFxjK~8DVSyVIu0tqnTJ9s2KzbJ-Ydr9l9X-ZyNaeTA7gMotZ~75-6QY9xv-xAp~7Kxk9VIQVnnA__')] bg-bottom bg-no-repeat bg-[length:100%_300px] mb-20 bg-gradient-to-t from-transparent to-[rgba(255, 255, 255, 0.8)]">


            <div className="container mx-auto px-15 py-10">

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
                        <div className="relative flex flex-col items-center">
                            {/* Top - Fire */}
                            <div className="flex flex-col items-center absolute top-[-75%] p-6 bg-gradient-to-b from-[#D9D9D9] to-[#aeaeae] border-[#C6C6C6] shadow-lg rounded-2xl z-100 border-1 ">
                                <img src="https://s3-alpha-sig.figma.com/img/cd69/b446/c2ce29ffa5e9bed13b899af8e519f551?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IODpoJDG6FfeLEedLMNhH8N9He~dLoj8RGbFMOvLjKc2KnBtrYtrif-RJ0Oni7OLV7VhvUSeIa27biw~tBG5jXPbJQW~A7cQ8OtS9aN5vRm13Bm3jyCW~OXG9zJa5o2T9Rq7A1AwTaBOX9neKwMdkUGwUBq0mBzKFLNM3IHUhe7SLW6u832bxyRs29HDSaQ84PcyrbjAUBB6zceDrzbeoSRbNvPLIRomKOJ1fogbONJwc4tEoxSs4zU8WpAOl4~40wM-INvTwpBbUvR8uqxCJ3PXkVmfMDFHJbBlkSpYT1~jIAlbS8SJlTAwJSwmkwnQ7xz3mZiT-uVQGf2xV6EDgg__" alt="" className="size-15 object-cover" />
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
                            <div className="flex gap-40 absolute top-[70%]">
                                {/* Safety */}
                                <div className="flex flex-col items-center p-6 ml-2 bg-gradient-to-b from-[#D9D9D9] to-[#aeaeae] border-[#C6C6C6] shadow-lg rounded-2xl">
                                    <img src="https://s3-alpha-sig.figma.com/img/68be/0d47/4c7c33dbda751a11a938a7bb9bfa0167?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CSM-GxKSZmj5vaAG04rhCOGBPBP7Z4sLPmLk2MSdNTcHCiXtonjtBdIo7M13jVeG~9M-So~nEh1G2Tf8pLJ-a~rt-Y-7GugbVCeBQsut49Tu9PEOri3XE5-d12olqOZM4EUtDAWszFod2gjX85w4HawRUH2UkmCmb~W2UMqPD1ZSVHi6yrTBXcr5u8gAcaz6Q8axPFDwbfk6bNGTPTTQpZ7PyjLiVh6ZQ0jFsjKDZJXEYwi59osOukxWrKad8lBh4hNlcc12JsdQyQ6jGopmdHAdRuCUlz2x9-MTYogvcb7H~32rxlcsSk-NDCYxgNUllq1H96-EjbwJHN2ed7iExw__" alt="" />
                                    <span className="font-semibold mt-2">Safety</span>
                                </div>

                                {/* Security */}
                                <div className="flex flex-col items-center p-6 bg-gradient-to-b from-[#D9D9D9] to-[#aeaeae] border-[#C6C6C6]shadow-lg rounded-2xl">
                                    <img src="https://s3-alpha-sig.figma.com/img/09d9/5df7/0fa4c10ab075959324e588bdb6888802?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hcFZ2hb0yoSpZSGuSHU1tFGpE0f2AHRtAhZSzF3G6GxKn0Q4TiXj-2c5CTDZCun6l-FR0LODMB1jqkgAU3M6lk7BtigEwjKOpMVwFYhS3tDIjriCdjOzsp3TOQi5kbTvR61BW0uI2kKnZGmiFTPXpVRxIQHcSvaCBrHl0RK1ga7m4kTDpCX7lR9Mg2GIzuaZXY6DIc2vOb7o7iHVzgm2F3~vGiL0HHjidNzgYDDExRoCfoQqlBi-Cvy9mzdt2TNn5jbhBCnjfT35UUclgN738MXnVxQzAJrn0S74gUcu3lpn6I2b5Rz~k5zK62Mg1c6mP6IlMAlIxUKC38Pyp-8oqA__" alt="" />
                                    <span className="font-semibold mt-2">Security</span>
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
