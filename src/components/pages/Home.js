import '../../App.css'
import BoatsCards from '../BoatSection/BoatsCards'
import Footer2 from '../Footer/Footer2'
import HeroSection from '../HeroSection/HeroSection'
import TourCards from '../TourSection/TourCards'
import CaptainSection from '../CaptainSection/CaptainSection'

function Home () {
    return (
        <>
            {/*<HeroSection2 />*/}
            <HeroSection />
            <BoatsCards />
            <CaptainSection />
            <TourCards />
            <Footer2 />
        </>
    )
}

export default Home