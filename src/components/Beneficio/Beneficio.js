import "./beneficio.css"
import { Link } from "react-scroll"
import Aos from "aos"

function Beneficio() {
    Aos.init()
    return (
        <div className="beneficios-container">
            <Link
            className="titulo-b" 
            to="beneficio1"
            duration={1000}
            offset={-55}
            >
                <h1>Gracias por suscribirte ahora contas con los siguientes beneficios</h1>
           </Link>
            <div className="beneficio-container" id="beneficio1">
                <h1 data-aos="fade-left"  data-aos-duration="700" className="beneficio beneficio1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque quasi aliquam aspernatur fugiat numquam quod tenetur</h1>
                <h1 data-aos="fade-right" data-aos-duration="1000" className="beneficio beneficio2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque quasi aliquam aspernatur fugiat numquam quod tenetur</h1>
                <h1 data-aos="fade-left"  data-aos-duration="700" className="beneficio beneficio3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque quasi aliquam aspernatur fugiat numquam quod tenetur</h1>
                <h1 data-aos="fade-right" data-aos-duration="700" className="beneficio beneficio4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque quasi aliquam aspernatur fugiat numquam quod tenetur</h1>
            </div>
        </div>
    )
}

export default Beneficio
