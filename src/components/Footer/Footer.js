import "./Footer.css"
import {GiPlanetConquest, GiCampingTent, GiWorld} from "react-icons/gi"
import {AiOutlineFacebook, AiOutlineInstagram,AiOutlineUser, AiOutlineWhatsApp, AiOutlineLike, AiOutlineCheckSquare,AiOutlineQuestionCircle, AiOutlineLogin} from "react-icons/ai"
import {FiTwitter} from "react-icons/fi"
import {FaMountain, FaSkiing} from "react-icons/fa"
import {Link} from "react-router-dom"
function Footer() {
    return (
        <div className="footer-container">
            <img className="logo-footer" alt="log" src="https://cutt.ly/yRgl1Y0"></img>
            <ul className="viajes">
                <Link to="viaje" className="link-viajes"><h2> <GiPlanetConquest className="planet"/>VIAJES</h2></Link>
                <Link className="link" to ="/"><li className="li-viaje"><GiCampingTent/>El Bolson</li></Link>
                <Link className="link" to ="/"><li className="li-viaje"><FaMountain/>Bariloche</li></Link>
                <Link className="link" to ="/"><li className="li-viaje"><FaSkiing/>Las Leñas</li></Link>
                <Link className="link" to ="/"><li className="li-viaje"><GiWorld/>Otros</li></Link>
            </ul>
            <ul className="redes">
                 <Link to="contacto" className="link-viajes"><h2><AiOutlineLike className="planet"/>REDES</h2></Link>
                <Link className="link" to ="/"><li className="li-redes"><AiOutlineFacebook/>Facebook</li></Link>
                <Link className="link" to ="/"><li className="li-redes"><AiOutlineInstagram/>Instagram</li></Link>
                <Link className="link" to ="/"><li className="li-redes"><FiTwitter/> Twitter</li></Link>
                <Link className="link" to ="/"><li className="li-redes"><AiOutlineWhatsApp/>  WhatsApp</li></Link>
            </ul>
            <ul className="usuarios">
                <h2><AiOutlineUser className="planet"/>USERS</h2>
                <Link className="link" to ="/"><li className="li-Usuarios"><AiOutlineCheckSquare/> Beneficios</li></Link>
                <Link className="link" to ="/"><li className="li-Usuarios"><AiOutlineLogin/> Asociate</li></Link>
                <Link className="link" to ="/"><li className="li-Usuarios"><AiOutlineQuestionCircle/> Preguntas</li></Link>
            </ul>
        </div>
    )
}

export default Footer
