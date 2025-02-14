import { useState } from 'react';

const cardsData = [
    {
        title: "Now, now. Perfectly symmetrical violence never solved anything.",
        text: "If we can hit that bullseye, the rest of the dominoes will fall like a house of cards.<br>Checkmate.",
        linkText: "Blame the wizards!",
    },
    {
        title: "No! The cat shelter's on to me.",
        text: "I decline the title of Iron Cook and accept the lesser title of Zinc Saucier, which I just made up.<br>Uhh… also, comes with double prize money.",
        linkText: "Good news everyone!",
    },
    {
        title: "Acting Unit 0.8",
        text: "You've killed me!<br>Oh, you've killed me!<br>File not found.",
        linkText: "Goodbye, cruel lamp",
    },
    {
        title: "Uh, is the puppy mechanical in any way?",
        text: "I'm sorry, guys. I never meant to hurt you. Just to destroy everything you ever believed in.",
        linkText: "Leela's gonna kill me",
        // Add more data as needed...
        // Example:
        // {title:"Dr. Zoidberg...",text:"...",linkText:"..."}

    },
    {
        title: "Acting Unit 0.8",
        text: "You've killed me!<br>Oh, you've killed me!<br>File not found.",
        linkText: "Goodbye, cruel lamp",
    },
    {
        title: "Acting Unit 0.8",
        text: "You've killed me!<br>Oh, you've killed me!<br>File not found.",
        linkText: "Goodbye, cruel lamp",
    },
    {
        title: "Acting Unit 0.8",
        text: "You've killed me!<br>Oh, you've killed me!<br>File not found.",
        linkText: "Goodbye, cruel lamp",
    },
    {
        title: "Dr. Zoidberg doesn't make sense.",
        text: "And remember don't do anything that affects anything unless it turns out you were supposed to in which case for love God don't not do it",
        linkText: 'I will destroy You'
    },
];

function Carousel() {

    const [activeIndex, setActiveIndex] = useState(0);
    const size = cardsData.length;

    return (
        <div className="relative mx-auto max-w-full h-[450px]">
            {/* Buttons */}
            <button
                className="absolute top-[50%] left-[10px] bg-transparent border-none cursor-pointer p-[10px]"
                onClick={() => setActiveIndex((prevIndex) => (prevIndex + size - 1) % size)}
            >&lt;</button>

            {/* Inner carousel */}
            <div className='flex justify-center'>
                {cardsData.map((card, i) => {
                    let angleOffset = 360 * size; // To avoid negative angles when rotating back.
                    let currentAngle = (i - activeIndex) * 360 / size + angleOffset;

                    return (
                        // Each card rotates around its center point relative to its parent.
                        // Adjust styles as needed for better appearance.
                        <div key={i} style={{
                            position: 'absolute',
                            width: '220px',
                            height: '300px',
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            boxShadow: '5px black',
                            transform: `translateX(-50%) rotateY(${currentAngle}deg)`
                        }}>
                            {/* Card content */}
                            {(activeIndex === i) ? (
                                <>
                                    {/* Highlighted front card styles */}
                                    <h4 className="text-lg font-bold">{card.title}</h4>
                                    <p dangerouslySetInnerHTML={{ __html: card.text }} />
                                    <a href="#" onClick={(e) => e.preventDefault()}>{card.linkText}</a>
                                </>
                            ) : (
                                <>
                                    {/* Other card styles */}
                                    <h4 className="text-lg font-bold opacity-50">{card.title}</h4>
                                    <p dangerouslySetInnerHTML={{ __html: card.text }} className="opacity-50" />
                                </>

                            )}
                        </div>
                    )
                })}

            </div>

            {/* Button Right*/}
            <button
                className="absolute top-[50%] right-[10px] bg-transparent border-none cursor-pointer p-[10px]"
                onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % size)}
            >&gt;</button>

        </div>

    );
}

export default Carousel;
