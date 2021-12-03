import "./traveler.css"
import {VscDebugStart} from "react-icons/vsc"
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from "react-scroll";
function Traveler() {
    AOS.init()
    return (
        <div className="traveler-container">
            <video src="\videos\video-1.mp4" autoPlay muted loop />
            <div className="traveler2-container">
            <h1 data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500">
                 LA NATURALEZA TE ESPERA</h1>
            <p>Estas preparado para enfrentar lo <label className="tachado">im</label>posible?</p>
            
        
            <Link
            className="boton-div"
            to="cards"
            smooth={true}
            duration={500}
            offset={-55}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500"
            ><VscDebugStart  className="iconstart boton"/> 
            </Link>
            
        

            </div>
        </div>
    )
}

export default Traveler
