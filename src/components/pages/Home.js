import '../../App.css'
import BoatsCards from '../BoatSection/BoatsCards'
import Footer2 from '../Footer/Footer2'
import CaptainSection from '../CaptainSection/CaptainSection'
import News from '../News/News'
import Hero from '../Hero/Hero'
import ExperienceCards from '../Experiences/ExperienceCards'
import Blog from '../Blog/Blog'

function Home () {
    return (
        <>
            <Hero />
            <BoatsCards />
            <CaptainSection />
            <ExperienceCards />
            <News />
            <Blog />
            <Footer2 />
        </>
    )
}

export default Home