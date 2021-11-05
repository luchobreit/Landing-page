import Aos from "aos"
import 'aos/dist/aos.css'
import { Link } from "react-router-dom"
import "./viaje.css"

function Viaje() {
    Aos.init()
    return (
        <div className="viaje_container">
            <h1
            className="travesia"
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500">Tu primer tarvesía está a un click</h1>
            <div className="div1">
                <p className="p1" data-aos="fade-right"  data-aos-duration="1000">Viajar es mucho más que hacer turismo, es un ejercicio de aprendizaje constante que nos aleja de nuestra rutina, nos pone a prueba y permite conocernos mejor a nosotros mismos</p>
                <p className="p2" data-aos="fade-left"  data-aos-duration="1500" >También se viaja para conocer gente, para conocerse a una misma, para conocer los propios límites e incluso para desdibujarlos y trazarlos «un poquito más allá». Se viaja por la adrenalina, por amor al viaje, por placer a lo desconocido y por miedo a lo desconocido. Se viaja simplemente porque sí…</p>
                <p className="p3" >No hay fronteras en tu imaginación ni en tus deseos y no debería haberlas en tu realidad. Porque te lo merecés. Porque «más adelante» puede -y suele ser- «nunca». Porque el momento es ahora. Porque a veces tu profesión u oficio no te llena ni satisface tus anhelos más profundos.</p>
            </div>
            <h1 className="travesia2">Entonces, que esperas para viajar?</h1>
            <div className="div2">
                <p 
                className="travesia"
                data-aos="fade-right"
                data-aos-duration="500"
                className="p4">Ademas si sos socio contas con un monton de descuentos y de sorteos para viajes gratis a culquiera de nuestros destinos
            </p>
            <Link className="socio-link">Hace click aqui para ir asociarte</Link>
            </div>
        </div>
        
    )
}

export default Viaje
