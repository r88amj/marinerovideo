import '../../App.css'
import BoatsCards from '../BoatSection/BoatsCards'
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection/HeroSection'
import TourCards from '../TourSection/TourCards'

function Home () {
    return (
        <>
            {/*<HeroSection2 />*/}
            <HeroSection />
            <BoatsCards />
            {/*<CaptainSection />*/}
            <TourCards />
            <Footer />
        </>
    )
}

export default Home