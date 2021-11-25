import "./Contacto.css"
import {useState} from "react"
import { getFirestore } from "../Service/GetFirebase"
import firebase from "firebase";
import 'firebase/firestore'




function Contacto() {
    const [formulario, setFormulario] = useState({
        email:"",
        nombre:"",
        texto:""
    })
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

    const formularioChange =e=>{
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
        console.log(formulario);
    }
    const handlerFormulario =e=>{
        e.preventDefault();
        const newContacto={
            email:formulario.email,
            nombre:formulario.nombre,
            consulta: formulario.texto,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
        }

        const db= getFirestore()
        const contacto=db.collection(`conatacto`)
        
        contacto.add(newContacto)
        .then(
            r=>{
                alert(`formulario enviado id ${r.id}`)
            }
        )
        .catch(
            r=>{
                alert("hubo un error intente mas tarde")
            }
        )
        .finally(r=>{
            setFormulario({
                email:"",
                nombre:"",
                texto:"",
                resuelto:false
            })
        })
    }

    



    return (
        <div className="form-container">
            <form className="form1" onSubmit={handlerFormulario}>
                <h1>Formulario de contacto</h1>

                <input className="input mail" name ="email" type="email" placeholder="email" onChange={formularioChange}/>

                <input className="input name" name ="nombre" type="text" placeholder="nombre" onChange={formularioChange}/>

                <textarea className="input textarea" name="texto" maxLength="360" placeholder="consulta" onChange={formularioChange}/>

                <input className="contacto-submit" type="submit" value="Enviar"/>
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
