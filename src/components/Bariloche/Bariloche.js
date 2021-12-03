import "./bariloche.css"
import { useState } from "react"
import Aos from "aos"
import { Link, animateScroll as scroll} from "react-scroll"
import Refugio from "./Refugio"


function Bariloche({titulo1,titulo2,imagenarg,imgprov1, imgprov2,intro,imgact1,imgact2,imgact3,refugio1,refugio2,refugio3}) {
    const [cambio, setCambio] = useState(false)
    const [vista, setVista] = useState(true)
    const [vistaBrc, setVistaBrc] = useState(false)
    const cambiar =()=>{
        setCambio(!cambio)
    }
    const cambioVista = ()=>{
        setVista(!vista);
    }
    const cambioVistaBrc = ()=>{
        setVistaBrc(!vistaBrc)
    }
    const scrollToTop=()=>{
        scroll.scrollToTop()
    }

    Aos.init()
    return (
        <>
        {vista && !vistaBrc?
        <div data-aos="zoom-in" data-aos-duration="1000" id="top" className="brc-container">
            
            <img src="/imagenes/location.png" alt="location" className="location-img"/>
            <h1 className="titulo-arg">Argentina</h1>
            {cambio ?
            <img onMouseOut={cambiar} onClick={cambioVista} src={imagenarg} alt="imagen" className="arg-img" />
            :
            <img onMouseOver={cambiar}  src="/imagenes/mapaarg1.png" alt="imagen" className="arg-img" />
            }
            
        </div>
        :!vista && !vistaBrc ?
        <div className="brc-container">
            <img src="/imagenes/location.png" alt="location" className="location-img"/>
            <h1 className="titulo-arg">{titulo1}</h1>

            {cambio ?
            <img onMouseOut={cambiar} onClick={cambioVistaBrc} src={imgprov2}intro alt="imagen" className="brc-img" />
            :
            <img onMouseOver={cambiar} src={imgprov1} alt="imagen" className="brc-img" />
            }
        </div>
        : 
        <div data-aos="zoom-in" data-aos-duration="1000" className="brc-container">
            <img src="/imagenes/location.png" alt="location" className="location-img"/>
            <h1 className="titulo-arg">{titulo2}</h1>
            <h1 className="texto-brc">{intro}</h1>
                

            <div className="imgs-brc">
                <Link 
                to="refugio-brc" className="actividades-img link-actividades"
                duration={1000}
                offset={-55}
                smooth={true}
                >
                    <img src={imgact1} alt="alt" className="actividades-img"/>
                    <label  className="label-actividades">Refugios</label>
                </Link>
                <Link className="actividades-img link-actividades"
                to="lago-brc"
                duration={1000}
                smooth={true}
                offset={-55}
                >
                <img src={imgact2} alt="alt" className="actividades-img" />
                <label  className="label-actividades">Lagos</label>
                </Link>
                
                <Link 
                className="actividades-img link-actividades"
                to="familia-brc"
                duration={1000}
                offset={-55}
                smooth={true}>
                    <img src={imgact3} alt="alt" className="actividades-img" />
                    <label  className="label-actividades">Familias</label>
                </Link>
                
            </div>
            <div className="refugios-container containerbrc" id="refugio-brc">
            
                <h1 className="refugios-brc-t">Refugios en las montañas</h1>
                <Refugio refugio1={refugio1}  refugio2={refugio2}  refugio3={refugio3}/>
            </div>         
        
            <div className="lagos-container containerbrc" id="lago-brc">

                <h1 className="lagos-brc-t">Lagos</h1>
                <Refugio/>
            
            </div>

            <div className="actividades-container containerbrc" id="familia-brc">
            
                <h1 className="actividades-brc-t">Actividades familiares</h1>
                <Refugio/>
                
            </div>
            
        </div>

            }
        </>
    )
}

export default Bariloche
