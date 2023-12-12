import '../../App.css'
import BoatsCards from '../BoatSection/BoatsCards'
import Footer2 from '../Footer/Footer2'
import TourCards from '../TourSection/TourCards'
import CaptainSection from '../CaptainSection/CaptainSection'
import News from '../News/News'
import Hero from '../Hero/Hero'

function Home () {
    return (
        <>
            <Hero />
            <BoatsCards />
            <CaptainSection />
            <TourCards />
            <News />
            <Footer2 />
        </>
    )
}

export default Home