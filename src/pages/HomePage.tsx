import CallToAction from "../components/CallToAction"
import Hero from "../components/Hero"
import HowItWork from "../components/HowItWork"
import OurCoreValue from "../components/OurCoreValue"
import StatsSection from "../components/StatsSection"
import WhatWeDo from "../components/WhatWeDo"
import WhyChooseUs from "../components/WhyChooseUs"


const HomePage = () => {
    return (
        <div className="">
            <Hero />
            <StatsSection />
            <div className="px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-70">
                <WhatWeDo />
                <HowItWork />

                <OurCoreValue />

                <WhyChooseUs />
            </div>
            <CallToAction />
        </div>
    )
}

export default HomePage