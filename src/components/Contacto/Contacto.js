import "./Contacto.css"
import {useState} from "react"




function Contacto() {
    const [hoverTw, setHoverTw] = useState(false)
    const [hoverIg, setHoverIg] = useState(false)
    const [hoverFb, setHoverFb] = useState(false)
    const [hoverWp, setHoverWp] = useState(false)
    const hoverVistaTw =()=>{
        setHoverTw(!hoverTw)
    }
    const hoverVistaIg =()=>{
        setHoverIg(!hoverIg)
    }
    const hoverVistaFb =()=>{
        setHoverFb(!hoverFb)
    }
    const hoverVistaWp =()=>{
        setHoverWp(!hoverWp)
    }
    return (
        <div className="form-container">
            <form className="form1">
                <h1>Formulario de contacto</h1>

                <input className="input mail" name ="email"type="email" placeholder="email"/>

                <input className="input mail" name ="email2"type="email" placeholder="confirmar email"/>

                <input className="input name" name ="name" type="text" placeholder="nombre"/>

                <textarea className="input textarea" maxLength="360" placeholder="consulta"/>
            </form>
            <h1 className="form-h1">Mediante redes sociales</h1>
            <div className="button-container">
            
                <a className="log log-tw" href="#" onMouseOver={hoverVistaTw} onMouseOut={hoverVistaTw} target="_blank">
                {
                    hoverTw ?
                    <img  className="logo" src="\imagenes\twitter2.png"/>
                    :
                    <img  className="logo" src="\imagenes\twitter1.png"/>
                }
                <label className="lab-tw">Twitter</label>
                </a>

                <a className="log log-ig" href="#" onMouseOver={hoverVistaIg} onMouseOut={hoverVistaIg} target="_blank">
                {
                    hoverIg ?
                    <img  className="logo" src="\imagenes\instagram2.png"/>
                    :
                    <img  className="logo" src="\imagenes\instagram1.png"/>
                }
                <label className="lab-tw">Instagram</label>
                </a>


                <a className="log log-fb" href="#" onMouseOver={hoverVistaFb} onMouseOut={hoverVistaFb} target="_blank">
                {
                    hoverFb ?
                    <img  className="logo" src="\imagenes\facebook2.png"/>
                    :
                    <img  className="logo" src="\imagenes\facebook1.png"/>
                }
                <label className="lab-tw">Facebook</label>
                </a>


                <a className="log log-wp" href="#" onMouseOver={hoverVistaWp} onMouseOut={hoverVistaWp} target="_blank">
                {
                    hoverWp ?
                    <img  className="logo" src="\imagenes\wpp2.png"/>
                    :
                    <img  className="logo" src="\imagenes\wpp1.png"/>
                }
                <label className="lab-tw">WhatsApp</label>
                </a>


            
            </div>
        </div>
    )
}

export default Contacto
