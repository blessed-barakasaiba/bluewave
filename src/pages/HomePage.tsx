import Hero from "../components/Hero"
import StatsSection from "../components/StatsSection"


const HomePage = () => {
    return (
        <div>
            <Hero />
            <StatsSection />
            <div className="px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24">
            </div>
        </div>
    )
}

export default HomePage