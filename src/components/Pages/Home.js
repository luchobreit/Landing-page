import Cards from "../Cards/Cards"
import Traveler from "../Traveler/Traveler"
import Footer from "../Footer/Footer"


function Home() {
    return (
        <div>
            <Traveler id="cards"/>
            <Cards/>
            <Footer/>
        </div>
    )
}

export default Home
