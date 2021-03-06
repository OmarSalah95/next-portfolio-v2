import { useState, useEffect } from "react";


const FogBanner = () => {
    const [ blockGreeting, setBlockGreeting ] = useState({ display: false, delay: 1200 });
    

    // Fog delay and transition styling
    const [ fogScrollSettings ] = useState({ fadeIn: 3333, delay: 600 })
    const foggyLettersClear = {
        opacity: 0,
        transition: `${fogScrollSettings.fadeIn}ms ease opacity 0ms`,
    };
    const foggyLettersOpaque = {
        opacity: 1,
        transition: `${fogScrollSettings.fadeIn}ms ease opacity 0ms`,
    };
    const [ fogScrollStyle, setFogScrollStyle ] = useState({ ...foggyLettersClear });
    const fogScrollerClasses = [ "scroller-top", "scroller-middle", "scroller-bottom", ];

    // loading trigger to turn fog on
    useEffect(() => {
        const timer = setTimeout(() => {
            setFogScrollStyle({ ...foggyLettersOpaque })
        }, fogScrollSettings.delay );
        return () => clearTimeout(timer);
    }, []);
    
    // loading trigger to display block greeting
    useEffect(() => {
        const timer = setTimeout(() => {
            setBlockGreeting({ ...blockGreeting, display: true })
        }, blockGreeting.delay);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="section__foggy-container">
            <section className="section__foggy" style={{ backgroundImage: `url(/static/matthew-ronder-seid-xYd99V3S5aI-unsplash-medium.jpg)` }} >
                <div className="block__greeting"  >
                    {blockGreeting.display ? (
                        <strong>
                            <span>le&nbsp;</span>tanque
                        </strong>
                    ) : null}
                </div>
            </section>

            {fogScrollerClasses.map((position, index) => (
                <section className={`section__scroller-container ${position}`} key={index}  style={fogScrollStyle}  >
                    <div className="block__scroller">
                        <strong>frank le tanque portfolio</strong>
                    </div>
                </section>
            ))}
        </section>
    )
};


export default FogBanner;

