import Cards from "../Cards/Cards"
import Traveler from "../Traveler/Traveler"
import NavBar from "../NavBar/NavBar.js"
import Footer from "../Footer/Footer"


function Home() {
    return (
        <div>
            <NavBar/>
            <Traveler id="cards"/>
            <Cards/>
            <Footer/>
        </div>
    )
}

export default Home
