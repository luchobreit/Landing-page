import "./Footer.css"
import {GiPlanetConquest, GiCampingTent, GiWorld} from "react-icons/gi"
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineLike} from "react-icons/ai"
import {FiTwitter} from "react-icons/fi"
import {FaMountain, FaSkiing} from "react-icons/fa"
function Footer() {
    return (
        <div className="footer-container">
            <img className="logo-footer" alt="log" src="https://cutt.ly/yRgl1Y0"></img>
            <ul className="viajes">
                <h2> <GiPlanetConquest className="planet"/>VIAJES</h2>
                <li className="li-viaje"><GiCampingTent/>  El Bolson</li>
                <li className="li-viaje"><FaMountain/>Bariloche</li>
                <li className="li-viaje"><FaSkiing/>Las Leñas</li>
                <li className="li-viaje"><GiWorld/>Otros</li>
            </ul>
            <ul className="redes">
                <h2><AiOutlineLike className="planet"/>REDES</h2>
                <li className="li-redes"><AiOutlineFacebook/>Facebook</li>
                <li className="li-redes"><AiOutlineInstagram/> Instagram</li>
                <li className="li-redes"><FiTwitter/> Twitter</li>
                <li className="li-redes"><AiOutlineWhatsApp/>  WhatsApp</li>
            </ul>
            <ul className="contacto">
                <li className="li-contacto">a</li>
                <li className="li-contacto">b</li>
                <li className="li-contacto">c</li>
                <li className="li-contacto">d</li>
            </ul>
        </div>
    )
}

export default Footer
