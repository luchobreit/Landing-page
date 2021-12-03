import "./sign.css"
import { useState} from "react"
import { AiOutlineEye, AiOutlineRollback} from "react-icons/ai"
import { Card, Button } from "react-bootstrap"
import { auth, google_provider, facebook_provider} from "../Service/GetFirebase"
import { useForm } from "react-hook-form"
import { useUserContext } from "../Context/UserContext"
import Beneficio from "../Beneficio/Beneficio"



 
function Sign() {
    const { register, handleSubmit, reset } = useForm();
    const [registro, setRegistro] = useState(false);
    const [ver, setVer]=useState(false);
    const [emailRegister, seteEmailRegister] = useState(false);
    const {user, setUser}= useUserContext()
    const display =()=>{
        seteEmailRegister(!emailRegister)
    }


    const signInProvider=(provider)=>{
        auth.signInWithPopup(provider)
        .then(r=>{console.log(r.user);
            setUser(auth.currentUser);
            setUser(r.user)
        })
        .catch(r=>console.log(r))
    }
    
    const crearUsuario =data=>{
        auth.createUserWithEmailAndPassword(data.email, data.pass)
        .then(res=>alert("usuario creado con exito"))
        .catch(r=>{
            if (r.code==="auth/weak-password"){
                alert("la contraseña debe tener al menos 6 caracteres")
            }
        })       
    }

    const onSubmit= data =>{
        if (registro) {
            signInEmail(data)
        }else{
            crearUsuario(data)
        }
        reset();
    }

    const signInEmail=data=>{
        auth.signInWithEmailAndPassword(data.email, data.pass)
        .then(r=>{
           alert(`has iniciado sesion con ${r.user.email}`);
           setUser(r.user)
        })
        .catch(err=>{
            if(err.code==="auth/wrong-password"){
                alert("usuario o contraseña incorrecto")
            }else if(err.code==="auth/user-not-found"){
                alert("este mail no esta registrado")
            }
        })
    }

    console.log(user);
    const cambioVer=()=>{
        setVer(!ver)
    }

    const cambio =()=>{
        setRegistro(!registro)
    }

    return (
        
        <div className="sign-container">
                {user === undefined ? 
                    <h1 className="accede">Accede para enterarte de todos los beneficios</h1>
                    :
                    <></>
                }
            {registro && user ===undefined ? 
                <>
                    
                    <div className="sign-form-container">
                        <h1 className="tituloSign">Inicia sesión</h1>
                        <div className={!emailRegister ? "register-form" : "display-none"}>
                            <Card className="card">
                                <button className="ingreso" onClick={() => signInProvider(google_provider)} type="button"><Card.Header><img alt="logo" alt="logo" className="logo2" src="\imagenes\google.png" />Google</Card.Header></button>
                                <button className="ingreso" onClick={() => signInProvider(facebook_provider)} type="button"><Card.Header><img alt="logo" className="logo2 " src="\imagenes\facebook2.png" />Facebook</Card.Header></button>
                                <button className="ingreso" onClick={display} type="button"><Card.Header><img alt="logo" className="logo2 " src="\imagenes\mail.png" />Email</Card.Header></button>
                            </Card>
                        </div>

                        <form className={emailRegister ? "sign-form" : "display-none"} onSubmit={handleSubmit(onSubmit)}>
                            <button className="ver" className="volver" onClick={cambioVer, display}><AiOutlineRollback /></button>
                            <input type="email" placeholder="email" {...register("email", { require: true })} className="sign-input sign-input-email" />
                            <input type={ver ? "text" : "password"} placeholder="contraseña" {...register("pass", { require: true })} className="sign-input sign-input-pass"></input>

                            <Button variant="primary" type="submit" className="sign-submit">Enviar</Button>

                            <button className="ver" type="button" onClick={cambioVer}><AiOutlineEye /></button>
                        </form>
                        <div className="pregunta">
                            <p>no tenes usuario?Crear usuario <label className="usuario-cambio" onClick={cambio}>aca</label></p>
                        </div>
                    </div>
                </>
            : user === undefined ?
                    <div className="sign-form-container" >
                        <h1 className="tituloSign">Creá tu usuario</h1>
                            <div className={!emailRegister ? "register-form" : "display-none" }>
                            <Card className="card">
                                <button className="ingreso" onClick={()=>signInProvider(google_provider)}  type="button"><Card.Header><img alt="logo"  className="logo2" src="\imagenes\google.png"/>Google</Card.Header></button>
                                <button className="ingreso" onClick={()=>signInProvider(facebook_provider)} type="button"><Card.Header><img alt="logo"  className="logo2 " src="\imagenes\facebook2.png"/>Facebook</Card.Header></button>
                                <button className="ingreso" onClick={display} type="button"><Card.Header><img alt="logo"  className="logo2 " src="\imagenes\mail.png"/>Email</Card.Header></button>
                            </Card>
                            </div>

                            <form className={emailRegister ? "sign-form": "display-none"} onSubmit={handleSubmit(onSubmit)}>
                                <button className="ver" className="volver" onClick={cambioVer, display} ><AiOutlineRollback/></button>
                                <input type="email" placeholder="email" {...register("email", {require:true})} className="sign-input sign-input-email"/>
                                <input type="email"  placeholder="confirmar email" {...register("email2", {require:true})}  className="sign-input sign-input-email"/>
                                <input type={ver ? "text" : "password"}  placeholder="contraseña" {...register("pass", {require:true})} className="sign-input sign-input-pass"></input>
                                
                                <Button variant="primary" type="submit" className="sign-submit" >Enviar</Button>
                                
                                <button className="ver" type="button" onClick={cambioVer}><AiOutlineEye/></button>
                                
                            </form>

                                <div className="pregunta">
                                    <p>Ya tenes usuario? Iniciá sesión <label className="usuario-cambio" onClick={cambio}>aca</label></p>
                                </div>
                        </div>
                        :
                        <div id="beneficio" className="beneficios">
                           <Beneficio/>
                        </div>                                                                                                                            
                        
                }
            </div>
    )

}


export default Sign
